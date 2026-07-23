import { Link } from 'react-router-dom'
import './ServiceCard.css'

const serviceIcons = {
  'emergency-plumbing': (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
  ),
  'pipe-repair-replacement': (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2 16.1A5 5 0 0 1 5.9 20M2 16.1a5 5 0 0 1 11 0V20M2 16.1V20h5.9M5.9 20l5.1-5.1M15 9l3-3m-3 3a2 2 0 0 0-2-2m2 2a2 2 0 0 1 2 2m-4-4l-4 4"/></svg>
  ),
  'toilet-repair-installation': (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 14a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z"/><path d="M4 14l2-8h12l2 8"/><path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg>
  ),
  'drain-cleaning': (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="8" y1="13" x2="16" y2="13"/><line x1="8" y1="17" x2="16" y2="17"/></svg>
  ),
  'water-pressure': (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 20h.01"/><path d="M12 2v4"/><path d="M6 6l2 2"/><path d="M18 6l-2 2"/><path d="M2 12h4"/><path d="M18 12h4"/><path d="M6 18l2-2"/><path d="M18 18l-2-2"/><path d="M8 12a4 4 0 0 1 8 0v4a4 4 0 0 1-8 0v-4z"/></svg>
  ),
  'water-heater': (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="6" y="2" width="12" height="20" rx="2"/><circle cx="12" cy="16" r="2"/><path d="M12 10V6"/><path d="M9 8l3-2 3 2"/></svg>
  ),
  'booster-pump': (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 8v8"/><path d="M8 12h8"/></svg>
  ),
  'waterproofing': (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
  ),
  'sink-basin-shower': (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 14a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-2z"/><path d="M12 2v11"/><path d="M9 7l3-3 3 3"/><path d="M3 18h18v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2z"/></svg>
  ),
  'kitchen-renovation': (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="8" y1="6" x2="8" y2="10"/><line x1="16" y1="6" x2="16" y2="10"/><line x1="4" y1="12" x2="20" y2="12"/></svg>
  ),
  'house-painting': (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 3h18v18H3z"/><path d="M7 7h10"/><path d="M7 12h10"/><path d="M7 17h6"/></svg>
  ),
  'flooring-services': (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/><line x1="9" y1="3" x2="9" y2="21"/></svg>
  ),
}

export default function ServiceCard({ service }) {
  return (
    <Link to={`/services/${service.slug}`} className="service-card">
      <div className="service-card-icon">
        {serviceIcons[service.slug] || serviceIcons['emergency-plumbing']}
      </div>
      <div className="service-card-body">
        <h3 className="service-card-title">{service.title}</h3>
        <p className="service-card-desc">{service.shortDesc}</p>
        <span className="service-card-link">
          Learn More
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </span>
      </div>
    </Link>
  )
}
