import { contactInfo } from '../data/services'
import Reveal from '../components/Reveal'

export default function Privacy() {
  return (
    <Reveal as="section" className="section" style={{ paddingTop: 120 }}>
      <div className="container" style={{ maxWidth: 780, margin: '0 auto' }}>
        <h1 className="section-title">Privacy Policy</h1>
        <p className="section-subtitle" style={{ marginBottom: 32 }}>Last updated: {new Date().getFullYear()}</p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 24, color: 'var(--text-light)', lineHeight: 1.8 }}>
          <div>
            <h3 style={{ color: 'var(--text)', marginBottom: 8 }}>Information We Collect</h3>
            <p>When you contact us via phone, WhatsApp, or our contact form, we collect your name, phone number, email address, and service address in order to schedule and provide services.</p>
          </div>
          <div>
            <h3 style={{ color: 'var(--text)', marginBottom: 8 }}>How We Use Your Information</h3>
            <p>We use the information you provide solely to respond to service requests, schedule appointments, provide quotes, and follow up on completed jobs. We do not sell or share your personal information with third parties for marketing purposes.</p>
          </div>
          <div>
            <h3 style={{ color: 'var(--text)', marginBottom: 8 }}>Data Security</h3>
            <p>We take reasonable measures to protect your personal information from unauthorized access, alteration, or disclosure.</p>
          </div>
          <div>
            <h3 style={{ color: 'var(--text)', marginBottom: 8 }}>Contact Us</h3>
            <p>If you have any questions about this Privacy Policy, please contact us at {contactInfo.phone} or via WhatsApp.</p>
          </div>
        </div>
      </div>
    </Reveal>
  )
}
