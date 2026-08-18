import { useEffect, useState } from 'react'
import { wedding } from '../config/wedding'

export default function Navigation() {
  const { nav } = wedding
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const ids = nav.map((item) => item.href.slice(1))
    if (!ids.includes('home')) ids.unshift('home')

    const onScroll = () => {
      setScrolled(window.scrollY > 12)

      const pos = window.scrollY + 160
      let current = ''
      ids.forEach((id) => {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= pos) current = id
      })
      setActive(current)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [nav])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
        <div className="container nav__inner">
          <a href="#home" className="nav__brand" onClick={closeMenu}>
            {wedding.groom.name} <span style={{ color: 'var(--rose-deep)', fontFamily: 'var(--font-script)', textTransform: 'none' }}>&</span> {wedding.bride.name}
          </a>

          <nav className="nav__links" aria-label="Main navigation">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`nav__link ${active === item.href.slice(1) ? 'is-active' : ''}`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            className="nav__toggle"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <div id="mobile-menu" className={`drawer ${menuOpen ? 'drawer--open' : ''}`} aria-hidden={!menuOpen}>
        <ul className="drawer__list">
          {nav.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="drawer__link" onClick={closeMenu}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}