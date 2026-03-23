import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import Header from './components/Header'
import Hero from './components/Hero'
import Mission from './components/Mission'
import Products from './components/Products'
import HowItWorks from './components/HowItWorks'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
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
