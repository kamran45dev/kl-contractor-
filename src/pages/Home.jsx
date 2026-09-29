import Hero from '../components/Hero'
import ServicesGrid from '../components/ServicesGrid'
import HowItWorks from '../components/HowItWorks'
import WhyUs from '../components/WhyUs'
import Reviews from '../components/Reviews'
import ServiceAreas from '../components/ServiceAreas'
import CTASection from '../components/CTASection'
import Reveal from '../components/Reveal'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      <Hero />

      <HowItWorks />

      <Reveal as="section" className="section section-alt">
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center' }}>Our Services</h2>
          <p className="section-subtitle" style={{ textAlign: 'center', margin: '0 auto 48px' }}>
            We specialize in all types of home and commercial services in Kuala Lumpur.
          </p>
          <ServicesGrid limit={6} />
          <div style={{ textAlign: 'center', marginTop: 32 }}>
            <Link to="/services" className="btn btn-outline">View All Services</Link>
          </div>
        </div>
      </Reveal>

      <WhyUs />
      <Reviews />
      <ServiceAreas />
      <CTASection />
    </>
  )
}
