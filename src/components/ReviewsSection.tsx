/**
 * Reviews / testimonial carousel — Figma node 1191:2615
 * https://www.figma.com/design/FURG9yTiplhwCAyYqQoIXs/portfolio-website-3.0?node-id=1191-2615&m=dev
 */

import { useCallback, useRef, useState } from 'react'

import review01 from '../assets/review 01.png'
import review02 from '../assets/review 02.png'
import review03 from '../assets/review 03.png'
import './reviewsSection11912615.css'

const BG_IMG = '/figma-assets/reviews/reviews-bg.png'

type ReviewSlide = {
  id: string
  src: string
  alt: string
  width: number
  height: number
}

/** Figma order: review 02 → review 01 → review 03 */
const SLIDES: ReviewSlide[] = [
  {
    id: '1',
    src: review02,
    alt: 'Client feedback on sales pitch deck and marketing materials',
    width: 432,
    height: 264,
  },
  {
    id: '2',
    src: review01,
    alt: 'Client feedback on web application MVP',
    width: 672,
    height: 264,
  },
  {
    id: '3',
    src: review03,
    alt: 'Client feedback on mobile fintech application',
    width: 672,
    height: 264,
  },
]

function ArrowIcon({ direction }: { direction: 'prev' | 'next' }) {
  return (
    <svg
      width="11"
      height="17"
      viewBox="0 0 11 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      className={
        direction === 'next'
          ? 'reviews1191-nav__svg reviews1191-nav__svg--next'
          : 'reviews1191-nav__svg'
      }
    >
      <path
        d="M9.5 1.75L2.25 8.875L9.25 15.25"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export type ReviewsSectionProps = {
  id?: string
}

export function ReviewsSection({ id }: ReviewsSectionProps) {
  const slidesRef = useRef<Array<HTMLElement | null>>([])
  const [active, setActive] = useState(0)

  const scrollSlideIntoView = useCallback((index: number) => {
    const el = slidesRef.current[index]
    el?.scrollIntoView({
      inline: 'center',
      behavior: 'smooth',
      block: 'nearest',
    })
  }, [])

  const goPrev = () => {
    if (active <= 0) return
    const next = active - 1
    setActive(next)
    scrollSlideIntoView(next)
  }

  const goNext = () => {
    if (active >= SLIDES.length - 1) return
    const next = active + 1
    setActive(next)
    scrollSlideIntoView(next)
  }

  const jumpTo = (index: number) => {
    setActive(index)
    scrollSlideIntoView(index)
  }

  return (
    <section id={id} className="reviews1191" aria-labelledby="reviews1191-heading" data-header-theme="dark">
      <div className="reviews1191__inner">
        <h2 id="reviews1191-heading" className="reviews1191__title">
          Loved by clients,
          <br />
          users, and designers
        </h2>

        <div
          className="reviews1191__stage"
          role="region"
          aria-roledescription="carousel"
          aria-live="polite"
          aria-label="Client testimonials"
        >
          <div className="reviews1191__gradient" aria-hidden />
          <img
            className="reviews1191__bg"
            src={BG_IMG}
            alt=""
            decoding="async"
            loading="lazy"
          />
          <div className="reviews1191__edge reviews1191__edge--left" aria-hidden />
          <div className="reviews1191__edge reviews1191__edge--right" aria-hidden />

          <div className="reviews1191__viewport">
            <div className="reviews1191__track">
              {SLIDES.map((slide, index) => (
                <article
                  key={slide.id}
                  ref={(el) => {
                    slidesRef.current[index] = el
                  }}
                  aria-label={`Slide ${index + 1} of ${SLIDES.length}`}
                  className="reviews1191-card"
                  data-size={slide.width === 432 ? 'sm' : 'lg'}
                >
                  <img
                    className="reviews1191-card__image"
                    src={slide.src}
                    alt={slide.alt}
                    width={slide.width}
                    height={slide.height}
                    decoding="async"
                    loading="lazy"
                    draggable={false}
                  />
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="reviews1191-controls">
          <button
            type="button"
            className="reviews1191-nav reviews1191-nav--prev"
            onClick={goPrev}
            aria-label="Previous testimonial"
            disabled={active === 0}
          >
            <ArrowIcon direction="prev" />
          </button>

          <ol className="reviews1191-dots">
            {SLIDES.map((s, index) => (
              <li key={s.id}>
                <button
                  type="button"
                  className={
                    active === index
                      ? 'reviews1191-num reviews1191-num--current'
                      : 'reviews1191-num'
                  }
                  aria-label={`Slide ${index + 1}`}
                  aria-current={active === index ? true : undefined}
                  onClick={() => jumpTo(index)}
                >
                  {String(index + 1).padStart(2, '0')}
                </button>
              </li>
            ))}
          </ol>

          <button
            type="button"
            className="reviews1191-nav reviews1191-nav--next"
            onClick={goNext}
            aria-label="Next testimonial"
            disabled={active === SLIDES.length - 1}
          >
            <ArrowIcon direction="next" />
          </button>
        </div>
      </div>
    </section>
  )
}
