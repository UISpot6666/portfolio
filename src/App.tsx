import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { AiMarketingCaseStudyPage } from './pages/AiMarketingCaseStudyPage'
import { HrCaseStudyPage } from './pages/HrCaseStudyPage'
import { OnboardingCaseStudyPage } from './pages/OnboardingCaseStudyPage'
import { PortfolioPage } from './pages/PortfolioPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PortfolioPage />} />
        <Route path="/works/hr-solution" element={<HrCaseStudyPage />} />
        <Route path="/works/ai-marketing" element={<AiMarketingCaseStudyPage />} />
        <Route path="/works/onboarding" element={<OnboardingCaseStudyPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
