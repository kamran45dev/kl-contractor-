import { contactInfo } from '../data/services'
import CTASection from '../components/CTASection'
import CountUp from '../components/CountUp'
import Reveal from '../components/Reveal'
import { staggerDelay, sideFor } from '../utils/reveal'
import './About.css'

const trustItems = [
  { title: 'SSM Registered Business', desc: "Officially registered with SSM Malaysia, so you're dealing with a verified business." },
  { title: 'Licensed & Insured', desc: 'Fully licensed and insured for your peace of mind.' },
  { title: 'Transparent Pricing', desc: 'Upfront quotes with no hidden charges ever.' },
  { title: 'Experienced Team', desc: 'Skilled professionals with years of hands-on experience.' },
  { title: 'Guaranteed Work', desc: 'We stand behind every job with our satisfaction guarantee.' },
]

export default function About() {
  return (
    <>
      <section className="section" style={{ paddingTop: 120 }}>
        <div className="container">
          <div className="about-layout">
            <Reveal className="about-content" direction="left">
              <div className="section-title">About KL Plumber</div>
              <p className="section-subtitle" style={{ marginBottom: 24 }}>
                Your trusted partner for home and commercial services in Kuala Lumpur.
              </p>
              <p>
                At KL Plumber, we started with one simple mission: to provide fast, reliable, and
                affordable home and commercial services in Kuala Lumpur. Founded by a team of licensed
                professionals with years of combined experience, we saw a growing need for high-quality
                contractors who could deliver both expertise and exceptional customer service.
              </p>
              <p style={{ marginTop: 16 }}>
                Today, we are proud to be one of the top-rated service providers in KL, offering a wide
                range of services including plumbing, renovations, waterproofing, painting, and flooring
                for homes and businesses throughout the city.
              </p>

              <div className="about-stats">
                <div className="about-stat">
                  <span className="stat-number"><CountUp value="157+" /></span>
                  <span className="stat-label">Google Reviews</span>
                </div>
                <div className="about-stat">
                  <span className="stat-number"><CountUp value="4.8" /></span>
                  <span className="stat-label">Star Rating</span>
                </div>
                <div className="about-stat">
                  <span className="stat-number"><CountUp value="10+" /></span>
                  <span className="stat-label">Years Experience</span>
                </div>
                <div className="about-stat">
                  <span className="stat-number"><CountUp value="100%" /></span>
                  <span className="stat-label">Satisfaction</span>
                </div>
              </div>
            </Reveal>
            <Reveal className="about-image" direction="right">
              <img src="/images/team-group.jpg" alt="KL Plumber Team" className="about-team-img" />
            </Reveal>
          </div>
        </div>
      </section>

      <Reveal as="section" className="section section-alt">
        <div className="container">
          <div className="section-title" style={{ textAlign: 'center' }}>Why Trust Us?</div>
          <div className="trust-grid">
            {trustItems.map((item, i) => (
              <Reveal key={item.title} className="trust-item" direction={sideFor(i)} delay={staggerDelay(i)}>
                <div className="trust-badge">✓</div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </Reveal>
            ))}
          </div>
          <div className="about-technician">
            <Reveal className="about-technician-image" direction="left">
              <img src="/images/technician.jpg" alt="KL Plumber Technician" />
            </Reveal>
            <Reveal className="about-technician-text" direction="right">
              <h3>Meet Your Technician</h3>
              <p>Every job is handled by a licensed, experienced professional who takes pride in their work. From emergency repairs to full renovations, we send someone you can trust.</p>
              <div className="about-technician-badges">
                <span> Licensed & Certified</span>
                <span> Years of Experience</span>
                <span> Fully Insured</span>
              </div>
            </Reveal>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="section">
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="section-title" style={{ textAlign: 'center' }}>Get In Touch</div>
          <p className="section-subtitle" style={{ textAlign: 'center', margin: '0 auto 32px' }}>
            Ready to get started? Contact us today for a free consultation.
          </p>
          <div className="about-contact-methods">
            <div className="about-contact-card">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              <a href={`tel:${contactInfo.phoneRaw}`}>{contactInfo.phone}</a>
            </div>
            <div className="about-contact-card">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              <span>{contactInfo.address}</span>
            </div>
          </div>
        </div>
      </Reveal>

      <CTASection />
    </>
  )
}
