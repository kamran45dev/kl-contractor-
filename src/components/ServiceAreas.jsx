import { areas } from '../data/services'
import './ServiceAreas.css'

export default function ServiceAreas() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-title" style={{ textAlign: 'center' }}>Areas We Serve</div>
        <p className="section-subtitle" style={{ textAlign: 'center', margin: '0 auto 48px' }}>
          Proudly serving homes and businesses across Kuala Lumpur and surrounding areas.
        </p>
        <div className="areas-grid">
          {areas.map((area, i) => (
            <div key={i} className="area-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              {area}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
