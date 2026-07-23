import { areas } from '../data/services'
import './ServiceAreas.css'

export default function ServiceAreas() {
  return (
    <section className="section section-alt">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Coverage</span>
          <h2 className="section-title">Areas We Serve</h2>
          <p className="section-subtitle">
            Proudly serving homes and businesses across Kuala Lumpur and surrounding areas.
          </p>
        </div>
        <div className="areas-pills">
          {areas.map((area, i) => (
            <div key={i} className="area-pill">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              {area}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
