import ContactForm from '../components/ContactForm'
import { contactInfo } from '../data/services'
import Reveal from '../components/Reveal'
import './Contact.css'

export default function Contact() {
  return (
    <section className="section" style={{ paddingTop: 120 }}>
      <div className="container">
        <div className="contact-layout">
          <Reveal className="contact-info" direction="left">
            <h1 className="section-title" style={{ marginBottom: 12 }}>Contact Us</h1>
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

            <div className="contact-van">
              <img src="/images/service-van.avif" alt="KL Plumber service van" className="contact-van-img" />
              <p className="contact-van-caption">We bring the workshop to you — fully equipped and ready to serve.</p>
            </div>
          </Reveal>

          <Reveal className="contact-form-wrapper" direction="right">
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
