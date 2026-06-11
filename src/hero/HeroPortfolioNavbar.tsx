import { FigmaNavbarLetsTalk1174602 } from '../components/FigmaNavbarLetsTalk1174602'

const LINKS = [
  { label: 'Projects', href: '#works' },
  { label: 'About me', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Workflow', href: '#workflow' },
  { label: 'Reviews', href: '#reviews' },
] as const

/**
 * Main nav strip 1174:593 — “Let’s Talk” matches CTA frame 1174:602 —
 * backdrop blur 120px, horizontal padding 84px, height 72px, Archivo 28 / 14.
 */
export function HeroPortfolioNavbar() {
  return (
    <header
      className="relative z-30 flex h-[72px] w-full items-center justify-between gap-3 bg-transparent px-6 md:px-[84px]"
      style={{ backdropFilter: 'blur(120px)', WebkitBackdropFilter: 'blur(120px)' }}
    >
      <div className="flex min-w-[4.75rem] shrink-0 justify-start md:w-[110px]">
        <a
          href="/"
          className="font-['Archivo',sans-serif] text-xl font-semibold leading-none tracking-[-0.02em] text-white no-underline md:text-[28px]"
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
            className="whitespace-nowrap font-['Archivo',sans-serif] text-[13px] font-semibold leading-[132%] text-white no-underline transition-opacity hover:opacity-90 md:text-sm"
          >
            {label}
          </a>
        ))}
      </nav>

      <FigmaNavbarLetsTalk1174602 href="#contact" />
    </header>
  )
}
