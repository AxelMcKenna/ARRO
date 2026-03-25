import { useState, useEffect } from 'react'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import Header from './components/Header'
import Hero from './components/Hero'
import Mission from './components/Mission'
import Products from './components/Products'
import HowItWorks from './components/HowItWorks'
import Contact from './components/Contact'
import Footer from './components/Footer'
import PrivacyPolicy from './components/PrivacyPolicy'

export default function App() {
  const [page, setPage] = useState(window.location.hash)

  useEffect(() => {
    const onHashChange = () => setPage(window.location.hash)
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  useEffect(() => {
    if (page === '#privacy') {
      window.scrollTo(0, 0)
    }
  }, [page])

  if (page === '#privacy') {
    return (
      <>
        <PrivacyPolicy />
        <Analytics />
        <SpeedInsights />
      </>
    )
  }

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Mission />
        <Products />
        <HowItWorks />
        <Contact />
      </main>
      <Footer />
      <Analytics />
      <SpeedInsights />
    </>
  )
}
