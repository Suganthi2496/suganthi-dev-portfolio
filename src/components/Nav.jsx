import { useEffect, useState } from 'react'
import { navItems } from '../data/portfolio'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = document.querySelectorAll('main section[id]')
    if (!sections.length || !('IntersectionObserver' in window)) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive('#' + e.target.id)
        })
      },
      { threshold: 0.55 }
    )
    sections.forEach((s) => io.observe(s))
    return () => io.disconnect()
  }, [])

  const close = () => setOpen(false)

  return (
    <header className={`nav ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="nav__inner">
        <a href="#home" className="nav__brand" onClick={close}>
          <span className="nav__brand-mark">&lt;/&gt;</span>
          <span className="nav__brand-text">Suganthi&nbsp;S</span>
        </a>

        <nav className={`nav__links ${open ? 'is-open' : ''}`}>
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`nav__link ${active === item.href ? 'is-active' : ''}`}
              onClick={close}
            >
              {item.label}
            </a>
          ))}
          <a href="#contact" className="nav__link nav__link--cta" onClick={close}>
            Contact
          </a>
        </nav>

        <button
          className={`nav__toggle ${open ? 'is-open' : ''}`}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>
  )
}
