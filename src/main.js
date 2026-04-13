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
  mm.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mm.classList.remove('open')))
}

// ─── Contact form ───
const subBtn = document.getElementById('subBtn')
if (subBtn) {
  subBtn.addEventListener('click', () => {
    const form = document.getElementById('contactForm')
    const n = document.getElementById('fn')
    const e = document.getElementById('fe')
    let ok = true

    form.querySelectorAll('.cf-field').forEach(x => x.classList.remove('invalid'))

    if (n && !n.value.trim()) { n.closest('.cf-field').classList.add('invalid'); ok = false }
    if (e && (!e.value.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.value))) {
      e.closest('.cf-field').classList.add('invalid'); ok = false
    }

    if (ok) {
      subBtn.textContent = '✓ Submitted'
      subBtn.classList.add('sent')
    }
  })
}

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
