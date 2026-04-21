import './style.css'

// ─── Scroll Progress ───
const sp = document.getElementById('sp')

// ─── Nav scroll behavior ───
const nav = document.getElementById('nav')
const ban = document.getElementById('irBan')
let bH = ban ? ban.offsetHeight : 0

// Set initial nav position dynamically based on actual banner height
if (ban && nav) {
  nav.style.top = bH + 'px'
  nav.classList.add('ban')
}

let tick = false

window.addEventListener('scroll', () => {
  if (ban) {
    if (scrollY > bH) { nav.classList.remove('ban'); nav.classList.add('sc'); nav.style.top = '' }
    else { nav.classList.add('ban'); nav.classList.remove('sc'); nav.style.top = bH + 'px' }
  } else {
    if (scrollY > 10) nav.classList.add('sc')
    else nav.classList.remove('sc')
  }

  if (!tick && sp) {
    tick = true
    requestAnimationFrame(() => {
      sp.style.width = (scrollY / (document.documentElement.scrollHeight - innerHeight) * 100) + '%'
      tick = false
    })
  }
})

if (ban) window.addEventListener('resize', () => { bH = ban.offsetHeight; if (scrollY <= bH) nav.style.top = bH + 'px' })

// ─── Mobile menu ───
const mmOpen = document.querySelector('.mob-t')
const mm = document.getElementById('mm')
const mmClose = document.getElementById('mmC')

if (mmOpen && mm) {
  mmOpen.addEventListener('click', () => mm.classList.add('open'))
  if (mmClose) mmClose.addEventListener('click', () => mm.classList.remove('open'))
  mm.querySelectorAll(':scope > a').forEach(a => a.addEventListener('click', () => mm.classList.remove('open')))
  // Accordion toggles
  mm.querySelectorAll('.mm-dd-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const sub = btn.nextElementSibling
      if (!sub) return
      const isOpen = sub.classList.contains('mm-sub-open')
      // Close all
      mm.querySelectorAll('.mm-dd-sub').forEach(s => s.classList.remove('mm-sub-open'))
      mm.querySelectorAll('.mm-dd-toggle').forEach(b => b.classList.remove('mm-open'))
      // Open clicked (if it was closed)
      if (!isOpen) {
        sub.classList.add('mm-sub-open')
        btn.classList.add('mm-open')
      }
    })
  })
  // Close mobile menu when clicking a sub-link
  mm.querySelectorAll('.mm-dd-sub a').forEach(a => a.addEventListener('click', () => mm.classList.remove('open')))
}

// ─── Contact form ───
// Handled by inline script in contact.html (fetch → /api/contact → Resend)

// ─── Counting Stat Animations ───
function animateValue(el, start, end, suffix, duration) {
  const range = end - start
  const startTime = performance.now()
  
  function update(currentTime) {
    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / duration, 1)
    // Ease out cubic
    const eased = 1 - Math.pow(1 - progress, 3)
    const current = Math.floor(start + range * eased)
    
    el.textContent = current.toLocaleString() + suffix
    
    if (progress < 1) {
      requestAnimationFrame(update)
    }
  }
  requestAnimationFrame(update)
}

function initCounters() {
  const stats = document.querySelectorAll('.h-stat .val')
  if (!stats.length) return

  const counterObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target
        const text = el.textContent.trim()
        
        // Parse "Fortune 50" → animate to 50
        if (text.includes('Fortune')) {
          const em = el.querySelector('em')
          if (em) {
            em.textContent = '0'
            animateValue(em, 0, 50, '', 2000)
          }
        }
        // Parse "26K+" → animate the em (number) to 26, suffix stays
        else if (el.querySelector('.stat-suffix')) {
          const em = el.querySelector('em')
          if (em) {
            const target = parseInt(em.textContent) || 26
            em.textContent = '0'
            setTimeout(() => animateValue(em, 0, target, '', 2200), 200)
          }
        }
        // Parse "24/7" → just pulse effect
        else if (text.includes('/')) {
          el.style.animation = 'statPulse .6s var(--ease)'
        }
        
        counterObs.unobserve(el)
      }
    })
  }, { threshold: 0.3 })

  stats.forEach(s => counterObs.observe(s))
}

initCounters()

// ─── Cinematic Particle Network Hero ───
function initParticleHero() {
  const heroBg = document.querySelector('.hero-bg')
  if (!heroBg) return

  const canvas = document.createElement('canvas')
  canvas.id = 'heroCanvas'
  canvas.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;pointer-events:none;opacity:0;transition:opacity 1.5s ease'
  heroBg.appendChild(canvas)

  const ctx = canvas.getContext('2d')
  let w, h, particles = [], mouse = { x: -1000, y: -1000 }
  const PARTICLE_COUNT = 80
  const CONNECTION_DIST = 160
  const MOUSE_RADIUS = 200

  function resize() {
    const rect = heroBg.getBoundingClientRect()
    w = canvas.width = rect.width * devicePixelRatio
    h = canvas.height = rect.height * devicePixelRatio
    canvas.style.width = rect.width + 'px'
    canvas.style.height = rect.height + 'px'
    ctx.scale(devicePixelRatio, devicePixelRatio)
  }

  class Particle {
    constructor() {
      this.reset()
    }
    reset() {
      const rect = heroBg.getBoundingClientRect()
      this.x = Math.random() * rect.width
      this.y = Math.random() * rect.height
      this.vx = (Math.random() - 0.5) * 0.4
      this.vy = (Math.random() - 0.5) * 0.4
      this.size = Math.random() * 1.5 + 0.5
      this.opacity = Math.random() * 0.4 + 0.1
    }
    update() {
      const rect = heroBg.getBoundingClientRect()
      this.x += this.vx
      this.y += this.vy

      // Mouse repel
      const dx = this.x - mouse.x
      const dy = this.y - mouse.y
      const dist = Math.sqrt(dx * dx + dy * dy)
      if (dist < MOUSE_RADIUS && dist > 0) {
        const force = (MOUSE_RADIUS - dist) / MOUSE_RADIUS * 0.02
        this.vx += (dx / dist) * force
        this.vy += (dy / dist) * force
      }

      // Friction
      this.vx *= 0.999
      this.vy *= 0.999

      if (this.x < -20) this.x = rect.width + 20
      if (this.x > rect.width + 20) this.x = -20
      if (this.y < -20) this.y = rect.height + 20
      if (this.y > rect.height + 20) this.y = -20
    }
    draw() {
      ctx.beginPath()
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(196, 162, 101, ${this.opacity})`
      ctx.fill()
    }
  }

  function init() {
    resize()
    particles = []
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push(new Particle())
    }
    // Fade in
    requestAnimationFrame(() => canvas.style.opacity = '1')
  }

  function drawConnections() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x
        const dy = particles[i].y - particles[j].y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < CONNECTION_DIST) {
          const alpha = (1 - dist / CONNECTION_DIST) * 0.08
          ctx.beginPath()
          ctx.moveTo(particles[i].x, particles[i].y)
          ctx.lineTo(particles[j].x, particles[j].y)
          ctx.strokeStyle = `rgba(196, 162, 101, ${alpha})`
          ctx.lineWidth = 0.5
          ctx.stroke()
        }
      }
    }
  }

  function animate() {
    const rect = heroBg.getBoundingClientRect()
    ctx.clearRect(0, 0, rect.width, rect.height)
    
    particles.forEach(p => {
      p.update()
      p.draw()
    })
    drawConnections()

    requestAnimationFrame(animate)
  }

  // Track mouse over hero
  const heroSection = document.querySelector('.hero')
  if (heroSection) {
    heroSection.addEventListener('mousemove', e => {
      const rect = heroSection.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
    })
    heroSection.addEventListener('mouseleave', () => {
      mouse.x = -1000
      mouse.y = -1000
    })
  }

  window.addEventListener('resize', resize)
  init()
  animate()
}

initParticleHero()

// ─── Smooth Anchor Scrolling ───
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'))
    if (target) {
      e.preventDefault()
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  })
})

// ─── Reveal observer ───
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('vis'); obs.unobserve(e.target) }
  })
}, { threshold: 0.01, rootMargin: '0px 0px -40px 0px' })

document.querySelectorAll('.rv').forEach(el => obs.observe(el))
setTimeout(() => {
  document.querySelectorAll('.rv:not(.vis)').forEach(el => el.classList.add('vis'))
}, 3000)

