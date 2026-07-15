import ContactForm from '../components/ContactForm'
import { contactInfo } from '../data/services'
import './Contact.css'

export default function Contact() {
  return (
    <section className="section" style={{ paddingTop: 120 }}>
      <div className="container">
        <div className="contact-layout">
          <div className="contact-info">
            <div className="section-title" style={{ marginBottom: 12 }}>Contact Us</div>
            <p className="section-subtitle" style={{ marginBottom: 32 }}>
              We are available 7 days a week for both emergency services and scheduled appointments.
            </p>

            <div className="contact-details">
              <div className="contact-detail-item">
                <div className="detail-icon-box">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </div>
                <div>
                  <h4>Call Us</h4>
                  <a href={`tel:${contactInfo.phoneRaw}`}>{contactInfo.phone}</a>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="detail-icon-box">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </div>
                <div>
                  <h4>Email Us</h4>
                  <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="detail-icon-box">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div>
                  <h4>Location</h4>
                  <p>{contactInfo.address}</p>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="detail-icon-box">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                </div>
                <div>
                  <h4>Hours</h4>
                  <p>{contactInfo.hours}</p>
                </div>
              </div>
            </div>

            <div className="contact-google">
              <a
                href="https://search.google.com/local/reviews?placeid=ChIJS9LlXEBHzDERJaGngNoCUMI"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M21.56 12.22c0-.68-.06-1.36-.18-2.02H12v3.82h5.38a4.56 4.56 0 0 1-1.98 2.99v2.49h3.2c1.88-1.73 2.96-4.28 2.96-7.28z"/><path d="M12 22c2.68 0 4.92-.89 6.56-2.4l-3.2-2.49c-.89.6-2.02.95-3.36.95-2.58 0-4.77-1.74-5.55-4.09H3.1v2.57C4.77 19.76 8.14 22 12 22z"/><path d="M6.45 14.07c-.19-.57-.3-1.18-.3-1.79s.11-1.22.3-1.79V7.92H3.1A9.93 9.93 0 0 0 2 12c0 1.61.39 3.14 1.1 4.5l2.35-1.83z"/><path d="M12 6.14c1.46 0 2.77.5 3.8 1.49l2.85-2.85C16.91 3.1 14.67 2 12 2 8.14 2 4.77 4.24 3.1 7.5l3.35 2.57c.78-2.35 2.97-4.09 5.55-4.09z"/></svg>
                View on Google Maps
              </a>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}
