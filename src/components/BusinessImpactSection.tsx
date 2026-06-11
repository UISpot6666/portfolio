import './businessImpact11913239.css'

function IconTransferHorizontal({
  width = 24,
  height = 24,
  className = '',
}: {
  width?: number
  height?: number
  className?: string
}) {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M18.5 7.75H10M13.75 11 18.5 7.75 13.75 4.5"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.5 16.25h8M9.75 13 5.5 16.25 9.75 19.5"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function IconTranslate({ className = '' }: { className?: string }) {
  return (
    <svg
      width={16}
      height={16}
      className={className}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <g transform="translate(2, 1.5)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.01894 1.14556H4.58225V0H3.43669V1.14556H0V2.29113H1.15209C1.2259 3.7566 1.92165 5.1242 3.06786 6.04691L1.08402 7.56392L1.77989 8.47396L4.00947 6.76896L5.37985 7.81692L6.07578 6.90694L4.95108 6.04691C6.09732 5.1242 6.79302 3.7566 6.86685 2.29113H8.01894V1.14556ZM4.1539 5.21638L4.00947 5.32681L3.86504 5.21638C2.94209 4.51061 2.37414 3.4422 2.29953 2.29113H5.71939C5.64482 3.4422 5.07685 4.51061 4.1539 5.21638ZM8.36261 5.72781H7.9474L7.81824 6.12246L5.75622 12.4231L6.84497 12.7793L7.38378 11.1329H10.3724L10.9113 12.7793L12 12.4231L9.93799 6.12246L9.80883 5.72781H8.36261ZM9.9975 9.98736H7.75873L8.77782 6.87338H8.97841L9.9975 9.98736Z"
          fill="currentColor"
        />
      </g>
    </svg>
  )
}

function DontClickMiniArrow({ className = '' }: { className?: string }) {
  return (
    <svg
      width={20}
      height={20}
      className={className}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M3.58 10.08h13.85M17.43 10.08l-5.76-5.77M17.43 10.08l-5.76 5.76"
        stroke="currentColor"
        strokeWidth={1.85}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

/**
 * “Improve UX and grow revenue” — Figma 1191:3239
 * https://www.figma.com/design/FURG9yTiplhwCAyYqQoIXs/portfolio-website-3.0?node-id=1191-3239&m=dev
 */
export type BusinessImpactSectionProps = {
  id?: string
  /** Figma raster layer (1193:4538), e.g. `/figma-assets/business-impact/section7-bg.png` when exported locally. */
  backgroundImageSrc?: string
}

export function BusinessImpactSection({
  id,
  backgroundImageSrc,
}: BusinessImpactSectionProps) {
  const titleId = 'bis1191-heading'
  const sectionClass =
    backgroundImageSrc != null && backgroundImageSrc !== ''
      ? 'bis1191 has-bg-sheet'
      : 'bis1191'

  return (
    <section id={id} className={sectionClass} aria-labelledby={titleId}>
      {backgroundImageSrc ? (
        <div className="bis1191__sheet" aria-hidden>
          <img
            className="bis1191__sheet-img"
            src={backgroundImageSrc}
            alt=""
            decoding="async"
          />
        </div>
      ) : null}
      <div className="bis1191__blobs" aria-hidden>
        <div className="bis1191-blob bis1191-blob--b" />
        <div className="bis1191-blob bis1191-blob--a" />
      </div>

      <div className="bis1191__inner">
        <header className="bis1191__header">
          <h2 id={titleId} className="bis1191__title">
            Improve UX and grow revenue
          </h2>
          <p className="bis1191__intro">
            Every design decision is a business decision. Here&apos;s how I
            think about the levers that connect product experience to outcomes
            your stakeholders actually care about.
          </p>
        </header>

        <div className="bis1191-card">
          <div className="bis1191-card__toolbar">
            <div className="bis1191-toolbar__lead">
              <span className="bis1191-toolbar__label">Product design</span>
            </div>
            <div className="bis1191-toolbar__center">
              <IconTransferHorizontal />
            </div>
            <div className="bis1191-toolbar__trail">
              <IconTranslate />
              <span className="bis1191-toolbar__label">Business impact</span>
            </div>
          </div>

          <div className="bis1191-card__body">
            <div className="bis1191-panel bis1191-panel--design">
              <h3 className="bis1191-panel__heading">Better design</h3>
              <div className="bis1191-chip-row">
                {['Better UX', 'Cleaner interface', 'Faster navigation'].map(
                  (label) => (
                    <span key={label} className="bis1191-chip">
                      {label}
                    </span>
                  ),
                )}
              </div>
            </div>

            <div className="bis1191-panel bis1191-panel--impact">
              <div className="bis1191-panel--impact-inner">
                <p className="bis1191-impact__title bis1191-impact__gradient">
                  Higher revenue growth ($$$$$)
                </p>
                <div className="bis1191-impact__row">
                  <p className="bis1191-impact__sub">
                    Direct growth from improved flows
                  </p>
                  <button
                    type="button"
                    className="bis1191-impact__cta"
                    tabIndex={-1}
                    disabled
                  >
                    Don{'\u2019'}t click
                    <DontClickMiniArrow />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
