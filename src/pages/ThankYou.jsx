import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { contactInfo } from '../data/services'
import './ThankYou.css'

export default function ThankYou() {
  useEffect(() => {
    const previousTitle = document.title
    document.title = 'Thank You | KL Plumber'
    const robots = document.createElement('meta')
    robots.name = 'robots'
    robots.content = 'noindex'
    document.head.appendChild(robots)

    // Count the conversion once, and only right after a real form submission.
    let pending = false
    try {
      pending = sessionStorage.getItem('kl_lead_pending') === '1'
      if (pending) sessionStorage.removeItem('kl_lead_pending')
    } catch {
      pending = false
    }
    if (pending && typeof window.klTrackLead === 'function') window.klTrackLead()

    return () => {
      document.title = previousTitle
      robots.remove()
    }
  }, [])

  return (
    <section className="section thankyou" style={{ paddingTop: 120 }}>
      <div className="container thankyou-box">
        <div className="thankyou-icon" aria-hidden="true">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
        </div>
        <h1 className="section-title">Thank You!</h1>
        <p className="section-subtitle">
          We have received your request and will call you back shortly.
          For urgent leaks or burst pipes, please call or WhatsApp us right now.
        </p>
        <div className="thankyou-actions">
          <a href={`tel:${contactInfo.phoneRaw}`} className="btn btn-primary">Call {contactInfo.phone}</a>
          <a href={contactInfo.whatsappLink} className="btn btn-dark" target="_blank" rel="noopener noreferrer">WhatsApp Us</a>
        </div>
        <Link to="/" className="thankyou-home">Back to home</Link>
      </div>
    </section>
  )
}
