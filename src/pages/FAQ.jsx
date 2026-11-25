import { useState } from 'react'
import CTASection from '../components/CTASection'
import Reveal from '../components/Reveal'
import { staggerDelay, sideFor } from '../utils/reveal'
import './FAQ.css'

import { faqs } from '../data/faqs'

function FAQItem({ item, isOpen, onClick, direction, delay }) {
  return (
    <Reveal className={`faq-item${isOpen ? ' open' : ''}`} direction={direction} delay={delay}>
      <button className="faq-question" onClick={onClick} aria-expanded={isOpen}>
        {item.q}
        <svg className="faq-chevron" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"/></svg>
      </button>
      {isOpen && <p className="faq-answer">{item.a}</p>}
    </Reveal>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <>
      <Reveal as="section" className="section" style={{ paddingTop: 120 }}>
        <div className="container">
          <h1 className="section-title" style={{ textAlign: 'center' }}>Frequently Asked Questions</h1>
          <p className="section-subtitle" style={{ textAlign: 'center', margin: '0 auto 48px' }}>
            Answers to the questions we get asked most about our plumbing and home services.
          </p>
          <div className="faq-list">
            {faqs.map((item, i) => (
              <FAQItem
                key={item.q}
                item={item}
                isOpen={openIndex === i}
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                direction={sideFor(i)}
                delay={staggerDelay(i, 0.08, 4)}
              />
            ))}
          </div>
        </div>
      </Reveal>
      <CTASection />
    </>
  )
}
