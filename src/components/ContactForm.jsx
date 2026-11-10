import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { contactInfo } from '../data/services'
import { LEADS_ENDPOINT } from '../data/leads'
import './ContactForm.css'

const SERVICES = {
  emergency: 'Emergency Plumbing',
  repairs: 'Repairs & Installation',
  renovation: 'Renovation & Painting',
  waterproofing: 'Waterproofing',
  drainage: 'Drainage & Water Pressure',
  other: 'Other',
}

function readClickId() {
  try {
    return sessionStorage.getItem('kl_gclid') || ''
  } catch {
    return ''
  }
}

export default function ContactForm() {
  const navigate = useNavigate()
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    if (status === 'sending') return
    const form = e.currentTarget
    const data = new FormData(form)

    // Honeypot: real visitors never see or fill this field.
    if (data.get('website')) return

    const phone = String(data.get('phone') || '').trim()
    if (!/^\+?[0-9][0-9\s-]{6,16}$/.test(phone)) {
      setStatus('error')
      setError('Please enter a valid phone number so we can call you back.')
      return
    }
    if (!LEADS_ENDPOINT) {
      setStatus('error')
      setError(`We could not send your request just now. Please call or WhatsApp us on ${contactInfo.phone}.`)
      return
    }

    const body = new URLSearchParams({
      name: String(data.get('name') || '').trim(),
      phone,
      service: SERVICES[data.get('service')] || String(data.get('service') || ''),
      message: String(data.get('message') || '').trim(),
      page: window.location.href,
      clickId: readClickId(),
    })

    setStatus('sending')
    setError('')
    try {
      // Apps Script answers with a redirect, so the response is opaque: no error means it was sent.
      await fetch(LEADS_ENDPOINT, { method: 'POST', mode: 'no-cors', body })
      try {
        sessionStorage.setItem('kl_lead_pending', '1')
      } catch {
        /* storage unavailable: the thank-you page still shows */
      }
      navigate('/thank-you')
    } catch {
      setStatus('error')
      setError(`We could not send your request. Please call or WhatsApp us on ${contactInfo.phone}.`)
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="name">Full Name *</label>
          <input type="text" id="name" name="name" required autoComplete="name" placeholder="Your full name" />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number *</label>
          <input type="tel" id="phone" name="phone" required autoComplete="tel" inputMode="tel" placeholder="e.g. 012-345 6789" />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="service">Service Needed *</label>
        <select id="service" name="service" required defaultValue="">
          <option value="">Select a service...</option>
          {Object.entries(SERVICES).map(([value, label]) => (
            <option key={value} value={value}>{label}</option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows="4" placeholder="Describe your issue..."></textarea>
      </div>
      <div className="form-hp" aria-hidden="true">
        <label htmlFor="website">Leave this field empty</label>
        <input type="text" id="website" name="website" tabIndex="-1" autoComplete="off" />
      </div>
      {status === 'error' && (
        <p className="form-error" role="alert">{error}</p>
      )}
      <button
        type="submit"
        className="btn btn-primary"
        style={{ width: '100%', justifyContent: 'center' }}
        disabled={status === 'sending'}
      >
        {status === 'sending' ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  )
}
