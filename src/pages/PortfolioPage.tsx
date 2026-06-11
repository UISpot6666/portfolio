import { useEffect } from 'react'

import { AboutSection } from '../components/AboutSection'
import { BusinessImpactSection } from '../components/BusinessImpactSection'
import { ClosingFooter11913653 } from '../components/ClosingFooter11913653'
import { FaqSection11913360 } from '../components/FaqSection11913360'
import { HeroSection } from '../components/HeroSection'
import { ProcessesSection } from '../components/ProcessesSection'
import { ReviewsSection } from '../components/ReviewsSection'
import { ServicesSection } from '../components/ServicesSection'
import { WorksSection } from '../components/WorksSection'
import '../portfolio.css'

export function PortfolioPage() {
  useEffect(() => {
    const hash = window.location.hash
    if (!hash || hash.length < 2) return
    const targetId = decodeURIComponent(hash.slice(1))
    window.requestAnimationFrame(() => {
      document.getElementById(targetId)?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    })
  }, [])

  return (
    <main className="portfolio-page">
      <HeroSection />
      <AboutSection />
      <WorksSection id="works" />
      <ReviewsSection id="reviews" />
      <ServicesSection id="services" />
      <ProcessesSection id="workflow" />
      <BusinessImpactSection backgroundImageSrc="/figma-assets/business-impact/section7-bg.png" />
      <FaqSection11913360 id="faqs" />
      <ClosingFooter11913653 contactSectionId="contact" />
    </main>
  )
}
