import { Link } from 'react-router-dom'
import { contactInfo } from '../data/services'
import './CTASection.css'

export default function CTASection() {
  return (
    <section className="cta-section">
      <div className="cta-shapes">
        <div className="cta-shape cta-shape-1"></div>
        <div className="cta-shape cta-shape-2"></div>
      </div>
      <div className="container cta-content">
        <div className="cta-tag">Available 24/7</div>
        <h2 className="cta-title">Need Help? We're Here</h2>
        <p className="cta-text">
          Whether it's an emergency repair or a scheduled service, our team is ready to help.
        </p>
        <div className="cta-actions">
          <a href={`tel:${contactInfo.phoneRaw}`} className="btn btn-white cta-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            Call {contactInfo.phone}
          </a>
          <Link to="/contact" className="btn btn-dark cta-btn">Book a Service</Link>
        </div>
      </div>
    </section>
  )
}
