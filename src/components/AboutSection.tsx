import './aboutSection2111.css'
import { StatItem } from './StatItem'

/**
 * Second section — Figma 1174:2111
 * https://www.figma.com/design/FURG9yTiplhwCAyYqQoIXs/portfolio-website-3.0?node-id=1174-2111&m=dev
 */
const PARTNER_LOGOS = [
  '/figma-assets/logos/logo-portfolio-ventures.png',
  '/figma-assets/logos/logo-1.png',
  '/figma-assets/logos/logo-2.png',
  '/figma-assets/logos/logo-4.png',
  '/figma-assets/logos/logo-7.png',
  '/figma-assets/logos/logo-6.png',
  '/figma-assets/logos/logo-3.png',
] as const

export function AboutSection() {
  const tickerLogos = [...PARTNER_LOGOS, ...PARTNER_LOGOS]

  return (
    <section id="about" className="about2111" aria-labelledby="about-heading" data-header-theme="dark">
      <div className="about2111__logos" aria-label="Partner logos">
        <div className="about2111__logos-viewport">
          <div className="about2111__logos-track">
            {tickerLogos.map((src, index) => (
              <div
                key={`${src}-${index}`}
                className="about2111__logo-slot"
                aria-hidden={index >= PARTNER_LOGOS.length ? true : undefined}
              >
                <img
                  className="about2111__logo"
                  src={src}
                  alt=""
                  decoding="async"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="about2111__inner">
        <div className="about2111__intro">
          <div className="about2111__badge" aria-label="About me">
            <span className="about2111__badge-prefix" aria-hidden="true">
              ??
            </span>
            <span>About me</span>
          </div>

          <h2 id="about-heading" className="about2111__headline">
            <span className="about2111__headline-line about2111__headline-muted">
              From SaaS platforms to mobile
            </span>
            <span className="about2111__headline-line">
              <span className="about2111__headline-muted">apps, </span>
              <span className="about2111__headline-strong">
                I help startups and bigger teams
              </span>
            </span>
            <span className="about2111__headline-line">
              <span className="about2111__headline-strong">increase revenue,</span>
              <span className="about2111__headline-muted"> through better UX</span>
            </span>
          </h2>
        </div>

        <div className="about2111__stats">
          <StatItem
            valueAlign="center"
            value={
              <>
                $100
                <span className="stat-item__value-suffix">k+</span>
              </>
            }
            title="Revenue impact (estimated)"
            description="Designing digital products across AI, SaaS, FinTech, and B2B"
          />
          <StatItem
            valueAlign="left"
            value="15-45%"
            title="Conversion improvements"
            description="Through UX redesigns and flow optimization"
          />
          <StatItem
            valueAlign="center"
            value={
              <>
                ~43<span className="stat-item__value-suffix">+</span>
              </>
            }
            title="Projects"
            description="From early-stage startups to scaling products"
          />
        </div>
      </div>
    </section>
  )
}
