import { contactInfo } from '../data/services'
import CTASection from '../components/CTASection'
import './About.css'

export default function About() {
  return (
    <>
      <section className="section" style={{ paddingTop: 120 }}>
        <div className="container">
          <div className="about-layout">
            <div className="about-content">
              <div className="section-title">About KL Contractor</div>
              <p className="section-subtitle" style={{ marginBottom: 24 }}>
                Your trusted partner for home and commercial services in Kuala Lumpur.
              </p>
              <p>
                At KL Contractor, we started with one simple mission: to provide fast, reliable, and 
                affordable home and commercial services in Kuala Lumpur. Founded by a team of licensed 
                professionals with years of combined experience, we saw a growing need for high-quality 
                contractors who could deliver both expertise and exceptional customer service.
              </p>
              <p style={{ marginTop: 16 }}>
                Today, we are proud to be one of the top-rated service providers in KL, offering a wide 
                range of services including plumbing, renovations, waterproofing, painting, and flooring 
                for homes and businesses throughout the city.
              </p>

              <div className="about-stats">
                <div className="about-stat">
                  <span className="stat-number">157+</span>
                  <span className="stat-label">Google Reviews</span>
                </div>
                <div className="about-stat">
                  <span className="stat-number">4.8</span>
                  <span className="stat-label">Star Rating</span>
                </div>
                <div className="about-stat">
                  <span className="stat-number">6+</span>
                  <span className="stat-label">Years Experience</span>
                </div>
                <div className="about-stat">
                  <span className="stat-number">100%</span>
                  <span className="stat-label">Satisfaction</span>
                </div>
              </div>
            </div>
            <div className="about-image">
              <div className="about-placeholder">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                <span>Your Team Photo Here</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <div className="section-title" style={{ textAlign: 'center' }}>Why Trust Us?</div>
          <div className="trust-grid">
            <div className="trust-item">
              <div className="trust-badge">✓</div>
              <h4>Licensed & Insured</h4>
              <p>Fully licensed and insured for your peace of mind.</p>
            </div>
            <div className="trust-item">
              <div className="trust-badge">✓</div>
              <h4>Transparent Pricing</h4>
              <p>Upfront quotes with no hidden charges ever.</p>
            </div>
            <div className="trust-item">
              <div className="trust-badge">✓</div>
              <h4>Experienced Team</h4>
              <p>Skilled professionals with years of hands-on experience.</p>
            </div>
            <div className="trust-item">
              <div className="trust-badge">✓</div>
              <h4>Guaranteed Work</h4>
              <p>We stand behind every job with our satisfaction guarantee.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="section-title" style={{ textAlign: 'center' }}>Get In Touch</div>
          <p className="section-subtitle" style={{ textAlign: 'center', margin: '0 auto 32px' }}>
            Ready to get started? Contact us today for a free consultation.
          </p>
          <div className="about-contact-methods">
            <div className="about-contact-card">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              <a href={`tel:${contactInfo.phoneRaw}`}>{contactInfo.phone}</a>
            </div>
            <div className="about-contact-card">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
            </div>
            <div className="about-contact-card">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              <span>{contactInfo.address}</span>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
