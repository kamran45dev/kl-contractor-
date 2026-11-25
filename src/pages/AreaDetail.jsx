import { useParams, Link } from 'react-router-dom'
import { areaBySlug } from '../data/areaPages'
import { areaContent } from '../data/areaContent'
import { services, contactInfo } from '../data/services'
import CTASection from '../components/CTASection'
import Reveal from '../components/Reveal'
import NotFound from './NotFound'
import './ServiceDetail.css'

const topServices = ['emergency-plumbing', 'pipe-repair-replacement', 'drain-cleaning', 'toilet-repair-installation', 'water-heater', 'water-pressure']

export default function AreaDetail() {
  const { slug } = useParams()
  const area = areaBySlug[slug]
  if (!area) return <NotFound />

  const list = topServices.map(s => services.find(x => x.slug === s)).filter(Boolean)
  const extra = areaContent[area.slug]

  return (
    <>
      <section
        className="section detail-hero"
        style={{ paddingTop: 120, backgroundImage: 'url(/images/hero-outdoor-pipe.jpg)' }}
      >
        <div className="detail-hero-overlay"></div>
        <div className="container detail-hero-content">
          <Link to="/areas" className="detail-back">&larr; All Service Areas</Link>
          <div className="detail-header">
            <div>
              <h1 className="section-title" style={{ marginBottom: 12 }}>Plumber in {area.name}</h1>
              <p className="section-subtitle" style={{ marginBottom: 0, color: 'rgba(255, 255, 255, 0.9)' }}>
                Plumbing repairs, leaks, blocked drains and installations for homes and businesses in {area.name}.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="detail-content">
            <Reveal className="detail-main" direction="left">
              <h2>Plumbing Help in {area.name}</h2>
              <p>{area.intro}</p>
              <p><strong>Typical properties:</strong> {area.homes}.</p>
              <h2 style={{ marginTop: 28 }}>Common Problems We Fix in {area.name}</h2>
              <ul className="detail-features">
                {area.issues.map(item => (
                  <li key={item}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                    {item}
                  </li>
                ))}
              </ul>
              {extra && (
                <>
                  <h2 style={{ marginTop: 28 }}>Plumbing Tips for {area.name} Homes</h2>
                  <ul style={{ paddingLeft: 22, lineHeight: 1.7 }}>
                    {extra.tips.map(t => <li key={t}>{t}</li>)}
                  </ul>
                </>
              )}
              <h2 style={{ marginTop: 28 }}>Our Services</h2>
              <ul className="detail-features">
                {list.map(s => (
                  <li key={s.slug}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                    <Link to={`/services/${s.slug}`}>{s.title}</Link>
                  </li>
                ))}
              </ul>
              <h2 style={{ marginTop: 28 }}>Nearby Areas</h2>
              <p>
                We also serve{' '}
                {area.nearby.map((n, i) => (
                  <span key={n}>
                    {i > 0 && (i === area.nearby.length - 1 ? ' and ' : ', ')}
                    <Link to={`/areas/${n}`}>{areaBySlug[n].name}</Link>
                  </span>
                ))}
                , across Kuala Lumpur and Selangor.
              </p>
              {extra && (
                <>
                  <h2 style={{ marginTop: 28 }}>Frequently Asked Questions</h2>
                  {extra.faqs.map(f => (
                    <details key={f.q} style={{ margin: '10px 0' }}>
                      <summary style={{ cursor: 'pointer', fontWeight: 600 }}>{f.q}</summary>
                      <p style={{ marginTop: 8 }}>{f.a}</p>
                    </details>
                  ))}
                </>
              )}
            </Reveal>
            <Reveal className="detail-sidebar" direction="right">
              <div className="detail-cta-card">
                <h3>Need a Plumber in {area.name}?</h3>
                <p>Call or WhatsApp us for a free quote.</p>
                <a href={`tel:${contactInfo.phoneRaw}`} className="btn btn-call" style={{ justifyContent: 'center', width: '100%' }}>Call {contactInfo.phone}</a>
                <a href={contactInfo.whatsappLink} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp" style={{ justifyContent: 'center', width: '100%', marginTop: 10 }}>WhatsApp Us</a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
