export default async function handler(req, res) {
  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, organization, inquiryType, message } = req.body;

  // Basic validation
  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required.' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email address.' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'Server configuration error.' });
  }

  const htmlBody = `
    <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px;background:#0a0a0f;color:#e8e4dc;border:1px solid #2a2a35;border-radius:4px;">
      <div style="border-bottom:1px solid #2a2a35;padding-bottom:16px;margin-bottom:24px;">
        <span style="font-size:12px;letter-spacing:3px;text-transform:uppercase;color:rgba(232,228,220,0.5)">New Inquiry</span>
        <h2 style="margin:8px 0 0;font-size:22px;font-weight:400;color:#c4a265;">Digital Forensics .company</h2>
      </div>

      <table style="width:100%;border-collapse:collapse;">
        <tr>
          <td style="padding:10px 0;border-bottom:1px solid #2a2a35;color:rgba(232,228,220,0.5);font-size:12px;text-transform:uppercase;letter-spacing:1px;width:140px;">Name</td>
          <td style="padding:10px 0;border-bottom:1px solid #2a2a35;color:#e8e4dc;font-size:14px;">${name}</td>
        </tr>
        <tr>
          <td style="padding:10px 0;border-bottom:1px solid #2a2a35;color:rgba(232,228,220,0.5);font-size:12px;text-transform:uppercase;letter-spacing:1px;">Email</td>
          <td style="padding:10px 0;border-bottom:1px solid #2a2a35;color:#c4a265;font-size:14px;"><a href="mailto:${email}" style="color:#c4a265;">${email}</a></td>
        </tr>
        ${organization ? `<tr>
          <td style="padding:10px 0;border-bottom:1px solid #2a2a35;color:rgba(232,228,220,0.5);font-size:12px;text-transform:uppercase;letter-spacing:1px;">Organization</td>
          <td style="padding:10px 0;border-bottom:1px solid #2a2a35;color:#e8e4dc;font-size:14px;">${organization}</td>
        </tr>` : ''}
        ${inquiryType ? `<tr>
          <td style="padding:10px 0;border-bottom:1px solid #2a2a35;color:rgba(232,228,220,0.5);font-size:12px;text-transform:uppercase;letter-spacing:1px;">Inquiry Type</td>
          <td style="padding:10px 0;border-bottom:1px solid #2a2a35;color:#e8e4dc;font-size:14px;">${inquiryType}</td>
        </tr>` : ''}
        ${message ? `<tr>
          <td style="padding:10px 0;color:rgba(232,228,220,0.5);font-size:12px;text-transform:uppercase;letter-spacing:1px;vertical-align:top;">Message</td>
          <td style="padding:10px 0;color:#e8e4dc;font-size:14px;line-height:1.7;">${message.replace(/\n/g, '<br>')}</td>
        </tr>` : ''}
      </table>

      <div style="margin-top:32px;padding-top:16px;border-top:1px solid #2a2a35;font-size:11px;color:rgba(232,228,220,0.4);">
        Submitted via digitalforensics.company contact form
      </div>
    </div>
  `;

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Digital Forensics .company <hello@digitalforensics.company>',
        to: ['Jason@founditmarketing.com'],
        reply_to: email,
        subject: `New Inquiry: ${inquiryType || 'General'} — ${name}`,
        html: htmlBody,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('Resend error:', data);
      return res.status(500).json({ error: 'Failed to send email. Please try again.' });
    }

    return res.status(200).json({ success: true, id: data.id });
  } catch (err) {
    console.error('API error:', err);
    return res.status(500).json({ error: 'Server error. Please try again.' });
  }
}
