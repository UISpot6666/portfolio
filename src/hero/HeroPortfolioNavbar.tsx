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

/**
 * Main nav strip 1174:593 — “Let’s Talk” matches CTA frame 1174:602 —
 * backdrop blur 120px, horizontal padding 84px, height 72px, Archivo 28 / 14.
 *
 * Auto-hides on scroll down, reappears on scroll up, and switches palette
 * based on the section currently behind the header (`data-header-theme`).
 */
export function HeroPortfolioNavbar() {
  const { isVisible, theme: headerTheme } = usePortfolioHeaderState()

  return (
    <header
      className={`hero-portfolio-navbar hero-portfolio-navbar--${headerTheme} fixed top-0 left-0 z-50 flex h-[72px] w-full items-center justify-between gap-3 bg-transparent px-6 md:px-[84px]`}
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
        className="flex max-w-[55%] shrink items-center gap-4 overflow-x-auto py-2 md:max-w-none md:justify-center md:gap-10"
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

      <FigmaNavbarLetsTalk1174602 href="#contact" theme={headerTheme} />
    </header>
  )
}
