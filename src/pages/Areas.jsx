import { Link } from 'react-router-dom'
import { areas } from '../data/services'
import { areaPages } from '../data/areaPages'
import Reveal from '../components/Reveal'
import { staggerDelay, sideFor } from '../utils/reveal'

const slugFor = name => areaPages.find(a => a.name === name)?.slug

export default function Areas() {
  return (
    <Reveal as="section" className="section" style={{ paddingTop: 120 }}>
      <div className="container">
        <h1 className="section-title">Areas We Serve</h1>
        <p className="section-subtitle">
          Proudly serving homes and businesses across Kuala Lumpur and surrounding areas.
        </p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: 16,
        }}>
          {areas.map((area, i) => (
            <Reveal
              key={area}
              direction={sideFor(i)}
              delay={staggerDelay(i, 0.06, 4)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                padding: '20px 24px',
                background: 'var(--white)',
                borderRadius: 'var(--radius-sm)',
                boxShadow: 'var(--shadow)',
                fontSize: '1.05rem',
                fontWeight: 600,
                color: 'var(--primary)',
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              {slugFor(area) ? <Link to={`/areas/${slugFor(area)}`} style={{ color: 'inherit' }}>{area}</Link> : area}
            </Reveal>
          ))}
        </div>
        <div style={{ marginTop: 40, maxWidth: 760 }}>
          <h2>Plumbing Help Across KL and Selangor</h2>
          <p style={{ marginTop: 12 }}>
            KL Plumber looks after homes, condominiums, shop lots and offices in Kuala Lumpur and nearby parts of Selangor.
            Select your area above to see the kinds of plumbing problems we usually handle there, from leaking pipes and
            blocked drains to toilets, water heaters and booster pumps.
          </p>
          <p style={{ marginTop: 12 }}>
            Not sure if we cover your street? Call or WhatsApp us on +60 16-678 5404 and tell us where you are. You can also
            browse our <Link to="/services">plumbing services</Link> or read the <Link to="/faq">frequently asked questions</Link>.
          </p>
        </div>
      </div>
    </Reveal>
  )
}
