import { services } from '../data/services'
import ServiceCard from './ServiceCard'
import './ServiceCard.css'

export default function ServicesGrid({ limit }) {
  const display = limit ? services.slice(0, limit) : services

  return (
    <div className="services-grid">
      {display.map(service => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </div>
  )
}
