import { services } from '../data/services'
import ServiceCard from './ServiceCard'
import './ServiceCard.css'

export default function ServicesGrid({ limit }) {
  const display = limit ? services.slice(0, limit) : services

  return (
    <div className="services-grid">
      {display.map((service, i) => (
        <ServiceCard
          key={service.id}
          service={service}
          revealClass={`reveal ${i % 2 === 0 ? 'reveal-left' : 'reveal-right'}`}
          revealDelay={(i % 3) * 0.12}
        />
      ))}
    </div>
  )
}
