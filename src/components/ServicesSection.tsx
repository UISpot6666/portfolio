import './servicesSection11912779.css'

const IMG_PRODUCT = '/figma-assets/services/service-product-design.png'
const IMG_MARKETING = '/figma-assets/services/service-marketing.png'
const IMG_WEBSITE = '/figma-assets/services/service-website.png'
const IMG_BRANDING = '/figma-assets/services/service-branding.png'

/**
 * Fifth section (“Choose your service”) — Figma 1191:2779
 * https://www.figma.com/design/FURG9yTiplhwCAyYqQoIXs/portfolio-website-3.0?node-id=1191-2779&m=dev
 */
export type ServicesSectionProps = {
  id?: string
}

export function ServicesSection({ id }: ServicesSectionProps) {
  return (
    <section
      id={id}
      className="services1191"
      aria-labelledby="services1191-heading"
      data-header-theme="dark"
    >
      <div className="services1191__inner">
        <header className="services1191__intro">
          <p className="services1191__eyebrow">Choose your service </p>
          <h2 id="services1191-heading" className="services1191__headline">
            Discover{' '}
            <span className="services1191__headline-accent">(web)application</span>{' '}
            design,{' '}
            <span className="services1191__headline-muted">website design</span>,{' '}
            <span className="services1191__headline-muted">branding</span>, and
            more
          </h2>
        </header>

        <div className="services1191__rows">
          <div className="services1191-row">
            <article
              className="services1191-card services1191-card--wide"
              aria-labelledby="services1191-product"
            >
              <img
                className="services1191-card__media"
                src={IMG_PRODUCT}
                alt=""
                decoding="async"
                loading="lazy"
              />
              <div className="services1191-card__overlay-wide">
                <ul className="services1191-card__tags" aria-label="Focus areas">
                  <li>
                    <span className="services1191-chip">Usability testing</span>
                  </li>
                  <li>
                    <span className="services1191-chip">Research</span>
                  </li>
                  <li>
                    <span className="services1191-chip">Conversion rate</span>
                  </li>
                </ul>
                <div className="services1191-card__spacer" aria-hidden />
                <h3
                  id="services1191-product"
                  className="services1191-card__title"
                >
                  Product design (Web/Mobile apps)
                </h3>
              </div>
            </article>

            <article
              className="services1191-card services1191-card--narrow"
              aria-labelledby="services1191-marketing"
            >
              <img
                className="services1191-card__media"
                src={IMG_MARKETING}
                alt=""
                decoding="async"
                loading="lazy"
              />
              <div className="services1191-card__overlay-narrow">
                <ul className="services1191-card__tags" aria-label="Focus areas">
                  <li>
                    <span className="services1191-chip">A/B tests</span>
                  </li>
                  <li>
                    <span className="services1191-chip">Appstore Screens</span>
                  </li>
                </ul>
                <h3
                  id="services1191-marketing"
                  className="services1191-card__title"
                >
                  Marketing ad creatives{' '}
                </h3>
              </div>
            </article>
          </div>

          <div className="services1191-row services1191-row--narrow-start">
            <article
              className="services1191-card services1191-card--narrow"
              aria-labelledby="services1191-website"
            >
              <img
                className="services1191-card__media"
                src={IMG_WEBSITE}
                alt=""
                decoding="async"
                loading="lazy"
              />
              <div className="services1191-card__overlay-narrow">
                <ul className="services1191-card__tags" aria-label="Focus areas">
                  <li>
                    <span className="services1191-chip">Onboarding</span>
                  </li>
                  <li>
                    <span className="services1191-chip">Appstore Screens</span>
                  </li>
                </ul>
                <h3
                  id="services1191-website"
                  className="services1191-card__title"
                >
                  Website &amp; pitch decks design
                </h3>
              </div>
            </article>

            <article
              className="services1191-card services1191-card--wide"
              aria-labelledby="services1191-branding"
            >
              <img
                className="services1191-card__media"
                src={IMG_BRANDING}
                alt=""
                decoding="async"
                loading="lazy"
              />
              <div className="services1191-card__overlay-wide">
                <ul className="services1191-card__tags" aria-label="Focus areas">
                  <li>
                    <span className="services1191-chip">Brand DNA</span>
                  </li>
                  <li>
                    <span className="services1191-chip">Unique patterns</span>
                  </li>
                </ul>
                <div className="services1191-card__spacer" aria-hidden />
                <h3
                  id="services1191-branding"
                  className="services1191-card__title"
                >
                  Branding and stand out serviece
                </h3>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
