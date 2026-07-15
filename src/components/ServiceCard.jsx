import { Link } from 'react-router-dom'
import './ServiceCard.css'

const icons = {
  emergency: '🚨',
  pipe: '🔧',
  toilet: '🚽',
  drain: '💧',
  pressure: '📊',
  heater: '🔥',
  pump: '⚡',
  waterproof: '🛡️',
  sink: '🚰',
  renovation: '🏠',
  painting: '🎨',
  flooring: '🏗️',
}

export default function ServiceCard({ service }) {
  return (
    <Link to={`/services/${service.slug}`} className="service-card">
      <div className="service-card-icon">
        <span className="service-emoji">{icons[service.icon] || '🛠️'}</span>
      </div>
      <h3 className="service-card-title">{service.title}</h3>
      <p className="service-card-desc">{service.shortDesc}</p>
      <span className="service-card-link">
        Learn More
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </span>
    </Link>
  )
}
