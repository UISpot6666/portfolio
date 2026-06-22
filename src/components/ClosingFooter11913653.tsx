import './closingFooter11913653.css'

const IMG = '/figma-assets/cta-footer-1191'

/** Same arrow motif as hero CTA — stroke uses `currentColor` (white on primary fill) */
function ClosingCtaArrow() {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="cf1193653-primary__svg"
      aria-hidden
    >
      <g transform="translate(4 4)">
        <path
          d="M5 13L13 5M13 5H7M13 5V11"
          stroke="currentColor"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  )
}

const FOOTER_SOCIAL = '/figma-assets/footer'

export type SocialLinkDef = {
  label: string
  href: string
  icon: string
  /** Figma glyph width in px (1110:15572) */
  iconWidth: number
}

const DEFAULT_SOCIAL: readonly SocialLinkDef[] = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/uispot/',
    icon: `${FOOTER_SOCIAL}/linkedin.svg`,
    iconWidth: 20,
  },
  {
    label: 'X',
    href: 'https://x.com/UI_Spot',
    icon: `${FOOTER_SOCIAL}/twitter-x.svg`,
    iconWidth: 18.18,
  },
  {
    label: 'Behance',
    href: 'https://www.behance.net/angelinsachivk',
    icon: `${FOOTER_SOCIAL}/behance.svg`,
    iconWidth: 20,
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/channel/UC4WoBXeCX3IOH_hMf2ixFfw',
    icon: `${FOOTER_SOCIAL}/youtube.svg`,
    iconWidth: 20,
  },
  {
    label: 'Medium',
    href: 'https://medium.com/@inesteticagency',
    icon: `${FOOTER_SOCIAL}/medium.svg`,
    iconWidth: 22,
  },
]

export type ClosingCtaFooter11913653Props = {
  /** Scroll target for in-page anchors (navbar “Lets talk”) */
  contactSectionId?: string
  email?: string
  startConversationHref?: string
  /** e.g. `https://cal.com/…` — falls back to a mail draft with subject “Book a call”. */
  bookCallHref?: string
  socialLinks?: readonly SocialLinkDef[]
}

export function ClosingFooter11913653({
  contactSectionId = 'contact',
  email = 'asach6666@gmail.com',
  startConversationHref,
  bookCallHref,
  socialLinks = DEFAULT_SOCIAL,
}: ClosingCtaFooter11913653Props) {
  const mailBare = `mailto:${email}`
  const primaryHref = startConversationHref || mailBare

  const bookHref =
    bookCallHref != null && bookCallHref !== ''
      ? bookCallHref
      : `mailto:${email}?subject=Book%20a%20call`

  return (
    <>
      <section
        id={contactSectionId}
        className="cf1193653-contact"
        aria-labelledby="cf1193653-heading"
        data-header-theme="dark"
      >
        <div className="cf1193653-contact__deck" aria-hidden="true">
          <img
            className="cf1193653-deco cf1193653-deco--tl"
            src={`${IMG}/deco-card-top-left.png`}
            alt=""
            decoding="async"
          />
          <img
            className="cf1193653-deco cf1193653-deco--tr"
            src={`${IMG}/deco-top-right.png`}
            alt=""
            decoding="async"
          />
          <img
            className="cf1193653-deco cf1193653-deco--tall"
            src={`${IMG}/deco-tall-right.png`}
            alt=""
            decoding="async"
          />
          <img
            className="cf1193653-deco cf1193653-deco--bl"
            src={`${IMG}/deco-bottom-left.png`}
            alt=""
            decoding="async"
          />
        </div>

        <div className="cf1193653-contact__inner">
          <div className="cf1193653-contact__intro">
            <h2 id="cf1193653-heading" className="cf1193653-contact__title">
              <span className="cf1193653-contact__title-copy cf1193653-contact__title-copy--flow">
                <span className="cf1193653-contact__title-line">Take your</span>{' '}
                <span className="cf1193653-contact__title-line">
                  opportunity to build
                </span>{' '}
                <span className="cf1193653-contact__title-line">
                  something great
                </span>
              </span>
              <span className="cf1193653-contact__title-copy cf1193653-contact__title-copy--tablet">
                <span className="cf1193653-contact__title-line">
                  Take your opportunity to
                </span>
                <span className="cf1193653-contact__title-line">
                  build something great
                </span>
              </span>
            </h2>
            <p className="cf1193653-contact__subtitle">
              You don&apos;t need all the answers before getting started. Reach
              out, share your idea, and let&apos;s figure out the next steps
              together.
            </p>
          </div>

          <div className="cf1193653-contact__cta-row">
            <a href={primaryHref} className="cf1193653-primary">
              <span className="cf1193653-primary__row">
                <span className="cf1193653-primary__label">
                  Start conversation
                </span>
                <span className="cf1193653-primary__icon-wrap">
                  <ClosingCtaArrow />
                </span>
              </span>
            </a>
            <a href={bookHref} className="cf1193653-secondary">
              <span className="cf1193653-secondary__row">
                <span className="cf1193653-secondary__label">Book call</span>
                <span className="cf1193653-secondary__icon-wrap">
                  <img
                    src={`${IMG}/cta-calendar-icon.png`}
                    alt=""
                    className="cf1193653-secondary__cal-img"
                  />
                </span>
              </span>
            </a>
          </div>
        </div>
      </section>

      <footer className="cf1193653-footer" data-header-theme="dark">
        <div className="cf1193653-footer__inner">
          <div className="cf1193653-footer__top">
            <div className="cf1193653-footer__hero">
              <p className="cf1193653-footer__lead">Got a project in mind?</p>
              <p className="cf1193653-footer__lead-alt">Let&apos;s talk :)</p>
            </div>

            <div className="cf1193653-footer__pitch">
              <p className="cf1193653-footer__muted">You got a project ?</p>
              <a className="cf1193653-footer__mail" href={mailBare}>
                {email}
              </a>
            </div>

            <div className="cf1193653-footer__learn">
              <p className="cf1193653-footer__muted cf1193653-footer__learn-caption">
                Learn more :
              </p>
              <ul className="cf1193653-social">
                {socialLinks.map(({ label, href, icon, iconWidth }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="cf1193653-social__hit"
                      aria-label={label}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={icon}
                        alt=""
                        width={iconWidth}
                        height={iconWidth}
                        className="cf1193653-social__icon"
                        decoding="async"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="cf1193653-footer__bottom">
            <p className="cf1193653-footer__meta">© 2026 All rights reserved</p>
            <p className="cf1193653-footer__meta">
              Made with {'\u2764'} to design{' '}
              <span className="cf1193653-footer__meta-muted">in Poland</span>
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
