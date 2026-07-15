import { contactInfo } from '../data/services'
import './ContactForm.css'

export default function ContactForm() {
  return (
    <form className="contact-form" onSubmit={e => e.preventDefault()}>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="name">Full Name *</label>
          <input type="text" id="name" required placeholder="Your full name" />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number *</label>
          <input type="tel" id="phone" required placeholder="e.g. 012-345 6789" />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="your@email.com" />
      </div>
      <div className="form-group">
        <label htmlFor="service">Service Needed *</label>
        <select id="service" required>
          <option value="">Select a service...</option>
          <option value="emergency">Emergency Plumbing</option>
          <option value="repairs">Repairs & Installation</option>
          <option value="renovation">Renovation & Painting</option>
          <option value="waterproofing">Waterproofing</option>
          <option value="drainage">Drainage & Water Pressure</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea id="message" rows="4" placeholder="Describe your issue..."></textarea>
      </div>
      <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
        Send Message
      </button>
    </form>
  )
}
