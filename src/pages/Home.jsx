import Hero from '../components/Hero'
import ServicesGrid from '../components/ServicesGrid'
import HowItWorks from '../components/HowItWorks'
import WhyUs from '../components/WhyUs'
import Reviews from '../components/Reviews'
import ServiceAreas from '../components/ServiceAreas'
import CTASection from '../components/CTASection'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      <Hero />

      <div className="reveal"><HowItWorks /></div>

      <section className="section section-alt reveal">
        <div className="container">
          <div className="section-title" style={{ textAlign: 'center' }}>Our Services</div>
          <p className="section-subtitle" style={{ textAlign: 'center', margin: '0 auto 48px' }}>
            We specialize in all types of home and commercial services in Kuala Lumpur.
          </p>
          <ServicesGrid limit={6} />
          <div style={{ textAlign: 'center', marginTop: 32 }}>
            <Link to="/services" className="btn btn-outline">View All Services</Link>
          </div>
        </div>
      </section>

      <div className="reveal"><WhyUs /></div>
      <div className="reveal"><Reviews /></div>
      <div className="reveal"><ServiceAreas /></div>
      <CTASection />
    </>
  )
}
