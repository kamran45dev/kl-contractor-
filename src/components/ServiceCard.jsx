import { Link } from 'react-router-dom'
import './ServiceCard.css'

const serviceImages = {
  'emergency-plumbing': '/images/emergency.webp',
  'pipe-repair-replacement': '/images/pipe-repair.avif',
  'toilet-repair-installation': '/images/toilet-repair.jpg',
  'drain-cleaning': '/images/drain-cleaning.jpg',
  'water-pressure': '/images/pipe-repair.avif',
  'water-heater': '/images/water-heater.webp',
  'booster-pump': '/images/booster-pump.webp',
  'waterproofing': '/images/waterproofing.jpg',
  'sink-basin-shower': '/images/sink-shower.jpg',
  'kitchen-renovation': '/images/kitchen-renovation.jpg',
  'house-painting': '/images/house-painting.jpg',
  'flooring-services': '/images/flooring.jpg',
}

export default function ServiceCard({ service }) {
  return (
    <Link to={`/services/${service.slug}`} className="service-card">
      <div
        className="service-card-image"
        style={{ backgroundImage: `url(${serviceImages[service.slug]})` }}
      />
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
