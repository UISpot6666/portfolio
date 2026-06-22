import { useCallback, useEffect, useRef, useState } from 'react'

import { FigmaNavbarLetsTalk1174602 } from '../components/FigmaNavbarLetsTalk1174602'
import './heroPortfolioNavbar.css'
import { usePortfolioHeaderState } from './usePortfolioHeaderState'

const LINKS = [
  { label: 'About me', href: '#about' },
  { label: 'Projects', href: '#works' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Services', href: '#services' },
  { label: 'Workflow', href: '#workflow' },
] as const

const MOBILE_NAV_ITEMS = [
  { label: 'About me', href: '#about', icon: '/figma-assets/nav/icon-about.svg' },
  { label: 'Projects', href: '#works', icon: '/figma-assets/nav/icon-projects.svg' },
  { label: 'Reviews', href: '#reviews', icon: '/figma-assets/nav/icon-reviews.svg' },
  { label: 'Services', href: '#services', icon: '/figma-assets/nav/icon-services.svg' },
  { label: 'Workflow', href: '#workflow', icon: '/figma-assets/nav/icon-workflow.svg' },
] as const

function NavbarMenuHamburgerIcon() {
  return (
    <svg
      className="hero-portfolio-navbar__menu-icon hero-portfolio-navbar__menu-icon--open"
      width={26}
      height={26}
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      {/* Figma 1311:113 — 26×26 frame, 60% opacity, 16×9.5 graphic at x=5 */}
      <g opacity={0.6}>
        <g transform="translate(5 9.25)">
          <line x1={0} y1={0.75} x2={16} y2={0.75} stroke="currentColor" strokeWidth={1.5} />
          <line x1={0} y1={4.75} x2={16} y2={4.75} stroke="currentColor" strokeWidth={1.5} />
          <line x1={0} y1={8.75} x2={16} y2={8.75} stroke="currentColor" strokeWidth={1.5} />
        </g>
      </g>
    </svg>
  )
}

function NavbarMenuCloseIcon() {
  return (
    <svg
      className="hero-portfolio-navbar__menu-icon hero-portfolio-navbar__menu-icon--close"
      width={26}
      height={26}
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      {/* Figma 1312:830 — 26×26 close mark */}
      <path
        d="M7 7L19 19M19 7L7 19"
        stroke="currentColor"
        strokeWidth={1.5}
      />
    </svg>
  )
}

/**
 * Main nav strip 1174:593 — “Let’s Talk” matches CTA frame 1174:602 —
 * backdrop blur 120px, horizontal padding 84px, height 72px, Archivo 28 / 14.
 *
 * Auto-hides on scroll down, reappears on scroll up, and switches palette
 * based on the section currently behind the header (`data-header-theme`).
 */
export function HeroPortfolioNavbar() {
  const { isVisible, theme: headerTheme } = usePortfolioHeaderState()
  const [menuOpen, setMenuOpen] = useState(false)
  const headerRef = useRef<HTMLElement>(null)

  const closeMenu = useCallback(() => setMenuOpen(false), [])
  const toggleMenu = useCallback(() => setMenuOpen((open) => !open), [])

  useEffect(() => {
    if (!menuOpen) return

    document.body.style.overflow = 'hidden'

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeMenu()
    }

    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [menuOpen, closeMenu])

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 1280px)')

    const onChange = () => {
      if (mediaQuery.matches) closeMenu()
    }

    onChange()
    mediaQuery.addEventListener('change', onChange)

    return () => mediaQuery.removeEventListener('change', onChange)
  }, [closeMenu])

  useEffect(() => {
    if (!menuOpen) return

    const onPointerDown = (event: PointerEvent) => {
      const target = event.target as Node
      if (headerRef.current?.contains(target)) return
      closeMenu()
    }

    document.addEventListener('pointerdown', onPointerDown)

    return () => document.removeEventListener('pointerdown', onPointerDown)
  }, [menuOpen, closeMenu])

  return (
    <header
      ref={headerRef}
      className={`hero-portfolio-navbar hero-portfolio-navbar--${headerTheme}${menuOpen ? ' hero-portfolio-navbar--menu-open' : ''} fixed top-0 left-0 z-50 flex h-[72px] w-full items-center justify-between gap-3 bg-transparent px-6 md:px-[84px]`}
      style={{
        backdropFilter: 'blur(120px)',
        WebkitBackdropFilter: 'blur(120px)',
        transform: isVisible ? 'translateY(0)' : 'translateY(-100%)',
        transition:
          'transform 0.3s ease, color 0.3s ease, border-color 0.3s ease, background-color 0.3s ease',
      }}
    >
      <div className="flex min-w-[4.75rem] shrink-0 justify-start md:w-[110px]">
        <a
          href="/"
          className="hero-portfolio-navbar__logo font-['Archivo',sans-serif] text-xl font-semibold leading-none tracking-[-0.02em] no-underline md:text-[28px]"
        >
          UISpot
        </a>
      </div>

      <nav
        className="hero-portfolio-navbar__desktop-nav flex max-w-[55%] shrink items-center gap-4 overflow-x-auto py-2 md:max-w-none md:justify-center md:gap-10"
        aria-label="Main navigation"
      >
        {LINKS.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            className="hero-portfolio-navbar__link whitespace-nowrap font-['Archivo',sans-serif] text-[13px] font-semibold leading-[132%] no-underline transition-opacity hover:opacity-90 md:text-sm"
          >
            {label}
          </a>
        ))}
      </nav>

      <FigmaNavbarLetsTalk1174602
        href="#contact"
        theme={headerTheme}
        className="hero-portfolio-navbar__desktop-cta"
      />

      <button
        type="button"
        className="hero-portfolio-navbar__menu-toggle font-['Archivo',sans-serif]"
        aria-expanded={menuOpen}
        aria-controls="hero-portfolio-mobile-panel"
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        onClick={toggleMenu}
      >
        <span className="hero-portfolio-navbar__menu-label">Menu</span>
        <span className="hero-portfolio-navbar__menu-icon-wrap" aria-hidden="true">
          <NavbarMenuHamburgerIcon />
          <NavbarMenuCloseIcon />
        </span>
      </button>

      <div
        id="hero-portfolio-mobile-panel"
        className="hero-portfolio-navbar__panel"
        role="dialog"
        aria-modal="true"
        aria-label="Main navigation"
        aria-hidden={!menuOpen}
      >
        <ul className="hero-portfolio-navbar__panel-list">
          {MOBILE_NAV_ITEMS.map(({ label, href, icon }) => (
            <li key={label} className="hero-portfolio-navbar__panel-item">
              <a
                href={href}
                className="hero-portfolio-navbar__panel-link"
                onClick={closeMenu}
              >
                <span className="hero-portfolio-navbar__panel-icon-wrap">
                  <img
                    src={icon}
                    alt=""
                    className="hero-portfolio-navbar__panel-icon"
                    width={24}
                    height={24}
                    decoding="async"
                  />
                </span>
                <span className="hero-portfolio-navbar__panel-label">{label}</span>
                <img
                  src="/figma-assets/nav/icon-chevron.svg"
                  alt=""
                  className="hero-portfolio-navbar__panel-chevron"
                  width={24}
                  height={24}
                  decoding="async"
                  aria-hidden="true"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
