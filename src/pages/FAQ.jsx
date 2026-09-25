import { useState } from 'react'
import CTASection from '../components/CTASection'
import './FAQ.css'

const faqs = [
  {
    q: 'Do you offer 24/7 emergency plumbing service?',
    a: 'Yes. Our emergency plumbing team is available 24 hours a day, 7 days a week across Kuala Lumpur and Selangor for burst pipes, leaks, and blocked drains.',
  },
  {
    q: 'Are your plumbers licensed and insured?',
    a: 'Yes, we are an SSM registered business and all our technicians are licensed and insured, so you can trust the work being done in your home or business.',
  },
  {
    q: 'How fast can you respond to an emergency call?',
    a: 'For most areas in KL and Selangor, our team can be on-site within 30-60 minutes of your call, depending on traffic and location.',
  },
  {
    q: 'Do you provide a free quote before starting work?',
    a: 'Yes, we always provide an upfront, obligation-free quote before any work begins. There are no hidden charges.',
  },
  {
    q: 'What areas do you service?',
    a: 'We cover Kuala Lumpur, Mont Kiara, Damansara, Sentul, Kepong, Petaling Jaya, Subang Jaya, Shah Alam, Puchong, Ampang, and Bukit Jalil.',
  },
  {
    q: 'What services do you offer besides plumbing?',
    a: 'Beyond plumbing, we offer kitchen renovation, house painting, flooring, and waterproofing services for homes and commercial spaces.',
  },
  {
    q: 'Do you offer any warranty on your work?',
    a: 'Yes, every job is backed by our satisfaction guarantee. If an issue related to our work arises, we will make it right.',
  },
]

function FAQItem({ item, isOpen, onClick }) {
  return (
    <div className={`faq-item${isOpen ? ' open' : ''}`}>
      <button className="faq-question" onClick={onClick} aria-expanded={isOpen}>
        {item.q}
        <svg className="faq-chevron" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"/></svg>
      </button>
      {isOpen && <p className="faq-answer">{item.a}</p>}
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <>
      <section className="section" style={{ paddingTop: 120 }}>
        <div className="container">
          <div className="section-title" style={{ textAlign: 'center' }}>Frequently Asked Questions</div>
          <p className="section-subtitle" style={{ textAlign: 'center', margin: '0 auto 48px' }}>
            Answers to the questions we get asked most about our plumbing and home services.
          </p>
          <div className="faq-list">
            {faqs.map((item, i) => (
              <FAQItem
                key={i}
                item={item}
                isOpen={openIndex === i}
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
              />
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  )
}
