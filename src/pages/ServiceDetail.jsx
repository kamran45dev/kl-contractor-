import { useParams, Link } from 'react-router-dom'
import { services } from '../data/services'
import CTASection from '../components/CTASection'
import './ServiceDetail.css'

const serviceHeroImages = {
  'emergency-plumbing': '/images/emergency.webp',
  'pipe-repair-replacement': '/images/pipe-repair.avif',
  'toilet-repair-installation': '/images/toilet-repair.jpg',
  'drain-cleaning': '/images/drain-cleaning.jpg',
  'water-pressure': '/images/pipe-repair.avif',
  'water-heater': '/images/water-heater.webp',
  'booster-pump': '/images/booster-pump.webp',
  'waterproofing': '/images/waterproofing.jpg',
  'sink-basin-shower': '/images/sink-shower.jpg',
  'kitchen-renovation': '/images/kitchen-renovation.jpg',
  'house-painting': '/images/house-painting.jpg',
  'flooring-services': '/images/flooring.jpg',
}

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = services.find(s => s.slug === slug)

  if (!service) {
    return (
      <section className="section" style={{ paddingTop: 120, textAlign: 'center' }}>
        <div className="container">
          <h2>Service Not Found</h2>
          <p style={{ margin: '16px 0' }}>The service you are looking for does not exist.</p>
          <Link to="/services" className="btn btn-primary">View All Services</Link>
        </div>
      </section>
    )
  }

  return (
    <>
      <section
        className="section detail-hero"
        style={{
          paddingTop: 120,
          backgroundImage: `url(${serviceHeroImages[service.slug]})`,
        }}
      >
        <div className="detail-hero-overlay"></div>
        <div className="container detail-hero-content">
          <Link to="/services" className="detail-back">&larr; Back to Services</Link>
          <div className="detail-header">
            <div>
              <h1 className="section-title" style={{ marginBottom: 12 }}>{service.title}</h1>
              <p className="section-subtitle" style={{ marginBottom: 0, color: 'rgba(255, 255, 255, 0.9)' }}>{service.shortDesc}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="detail-content">
            <div className="detail-main">
              <h2>About This Service</h2>
              <p>{service.fullDesc}</p>
            </div>
            <div className="detail-sidebar">
              <div className="detail-features-card">
                <h3>What We Cover</h3>
                <ul className="detail-features">
                  {service.features.map((f, i) => (
                    <li key={i}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="detail-cta-card">
                <h3>Need This Service?</h3>
                <p>Contact us for a free consultation and quote.</p>
                <a href="tel:+60166785404" className="btn btn-primary" style={{ justifyContent: 'center', width: '100%' }}>Call Now</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
