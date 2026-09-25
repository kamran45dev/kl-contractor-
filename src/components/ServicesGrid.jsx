import { services } from '../data/services'
import ServiceCard from './ServiceCard'
import { staggerDelay, sideFor } from '../utils/reveal'
import './ServiceCard.css'

export default function ServicesGrid({ limit }) {
  const display = limit ? services.slice(0, limit) : services

  return (
    <div className="services-grid">
      {display.map((service, i) => (
        <ServiceCard
          key={service.id}
          service={service}
          revealDirection={sideFor(i)}
          revealDelay={staggerDelay(i)}
        />
      ))}
    </div>
  )
}
