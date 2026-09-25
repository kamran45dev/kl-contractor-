import { contactInfo } from '../data/services'
import Reveal from '../components/Reveal'

export default function Terms() {
  return (
    <Reveal as="section" className="section" style={{ paddingTop: 120 }}>
      <div className="container" style={{ maxWidth: 780, margin: '0 auto' }}>
        <div className="section-title">Terms of Service</div>
        <p className="section-subtitle" style={{ marginBottom: 32 }}>Last updated: {new Date().getFullYear()}</p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 24, color: 'var(--text-light)', lineHeight: 1.8 }}>
          <div>
            <h3 style={{ color: 'var(--text)', marginBottom: 8 }}>Services</h3>
            <p>We provide plumbing, renovation, waterproofing, painting, and flooring services across Kuala Lumpur and Selangor. All quotes are provided upfront and no work begins without your approval.</p>
          </div>
          <div>
            <h3 style={{ color: 'var(--text)', marginBottom: 8 }}>Pricing & Payment</h3>
            <p>Pricing is based on the scope of work discussed during our inspection or consultation. Any changes to the scope of work will be communicated and agreed upon before proceeding.</p>
          </div>
          <div>
            <h3 style={{ color: 'var(--text)', marginBottom: 8 }}>Warranty</h3>
            <p>We stand behind our workmanship. If an issue arises directly related to work we performed, contact us and we will address it promptly.</p>
          </div>
          <div>
            <h3 style={{ color: 'var(--text)', marginBottom: 8 }}>Cancellations</h3>
            <p>If you need to reschedule or cancel a booked appointment, please notify us as early as possible so we can accommodate other customers.</p>
          </div>
          <div>
            <h3 style={{ color: 'var(--text)', marginBottom: 8 }}>Contact Us</h3>
            <p>Questions about these terms can be directed to us at {contactInfo.phone} or via WhatsApp.</p>
          </div>
        </div>
      </div>
    </Reveal>
  )
}
