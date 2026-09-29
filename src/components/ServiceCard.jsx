import { useState } from 'react'
import { Link } from 'react-router-dom'
import Reveal from './Reveal'
import './ServiceCard.css'

const serviceImages = {
  'emergency-plumbing': '/images/service-emergency-plumbing.jpg',
  'pipe-repair-replacement': '/images/service-pipe-repair.jpg',
  'toilet-repair-installation': '/images/service-toilet-repair.jpg',
  'drain-cleaning': '/images/service-drain-cleaning.jpg',
  'water-pressure': '/images/service-water-pressure.jpg',
  'water-heater': '/images/service-water-heater.jpg',
  'booster-pump': '/images/booster-pump.webp',
  'waterproofing': '/images/waterproofing.jpg',
  'sink-basin-shower': '/images/sink-shower.jpg',
  'kitchen-renovation': '/images/kitchen-renovation.jpg',
  'house-painting': '/images/house-painting.jpg',
  'flooring-services': '/images/flooring.jpg',
}

const icons = {
  emergency: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2 3 14h7l-1 8 10-12h-7l1-8z"/></svg>,
  pipe: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 6h9a3 3 0 0 1 3 3v9M4 6v5h9"/><circle cx="16" cy="19" r="2"/></svg>,
  toilet: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v3H7z"/><path d="M6 8h8a2 2 0 0 1 2 2c0 6-3 11-6 11s-6-5-6-11a2 2 0 0 1 2-2z"/></svg>,
  drain: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9"/><path d="M8 9l8 6M16 9l-8 6M12 7v10M7 12h10"/></svg>,
  pressure: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="13" r="7"/><path d="M12 13l3-3M12 3v2M4 6l1.5 1.5M20 6l-1.5 1.5"/></svg>,
  heater: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="6" y="3" width="12" height="18" rx="2"/><path d="M9 8h6M9 12h6M9 16h3"/></svg>,
  pump: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="7" width="10" height="10" rx="2"/><path d="M14 10h3l3-3M14 14h3l3 3M8 7V4M8 17v3"/></svg>,
  waterproof: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 3s7 7.5 7 12.5a7 7 0 0 1-14 0C5 10.5 12 3 12 3z"/></svg>,
  sink: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 12h18M5 12v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6M9 12V7a2 2 0 0 1 4 0M12 4v2"/></svg>,
  renovation: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.8-3.8a5 5 0 0 1-6.8 6.8L4 23l-1-1 10.6-10.6a5 5 0 0 1 6.8-6.8l-3.8 3.8z"/></svg>,
  painting: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 3l3 3-9 9-4 1 1-4 9-9z"/><path d="M5 21c1-4-1-5-1-7a3 3 0 0 1 6 0c0 2-2 3-1 7"/></svg>,
  flooring: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9h18M3 15h18M9 3v18M15 3v18"/></svg>,
}

export default function ServiceCard({ service, revealDirection, revealDelay = 0 }) {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const image = serviceImages[service.slug]

  return (
    <>
      <Reveal className="service-card" direction={revealDirection} delay={revealDelay}>
        <button
          type="button"
          className="service-card-media"
          onClick={() => setLightboxOpen(true)}
          aria-label={`View ${service.title} photo`}
        >
          <div
            className="service-card-image"
            style={{ backgroundImage: `url(${image})` }}
          />
          <div className="service-card-icon">{icons[service.icon]}</div>
          <span className="service-card-zoom">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.35-4.35M11 8v6M8 11h6"/></svg>
          </span>
        </button>
        <div className="service-card-body">
          <h3 className="service-card-title">{service.title}</h3>
          <p className="service-card-desc">{service.shortDesc}</p>
          <Link to={`/services/${service.slug}`} className="service-card-link">
            Learn More
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
        </div>
      </Reveal>

      {lightboxOpen && (
        <div className="image-lightbox" onClick={() => setLightboxOpen(false)}>
          <button
            type="button"
            className="image-lightbox-close"
            onClick={() => setLightboxOpen(false)}
            aria-label="Close"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
          <img src={image} alt={service.title} className="image-lightbox-img" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </>
  )
}
