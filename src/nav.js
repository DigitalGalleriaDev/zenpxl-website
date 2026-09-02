export function initMobileNav() {
  const nav = document.querySelector('.nav')
  const toggle = document.querySelector('.nav-toggle')
  const menu = document.querySelector('#site-menu')

  if (!nav || !toggle || !menu) return

  const setOpen = (open) => {
    nav.classList.toggle('is-open', open)
    toggle.setAttribute('aria-expanded', String(open))
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu')
  }

  toggle.addEventListener('click', () => {
    setOpen(!nav.classList.contains('is-open'))
  })

  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      const samePage = link.pathname === window.location.pathname
      if (samePage) setOpen(false)
    })
  })

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') setOpen(false)
  })

  document.addEventListener('click', (event) => {
    if (!nav.contains(event.target)) setOpen(false)
  })

  window.addEventListener('resize', () => {
    if (window.innerWidth > 900) setOpen(false)
  })
}
