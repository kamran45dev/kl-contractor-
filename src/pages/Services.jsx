import ServicesGrid from '../components/ServicesGrid'
import Reveal from '../components/Reveal'

export default function Services() {
  return (
    <Reveal as="section" className="section section-alt" style={{ paddingTop: 120 }}>
      <div className="container">
        <div className="section-title">All Services</div>
        <p className="section-subtitle">
          We offer a complete range of home and commercial services in Kuala Lumpur.
        </p>
        <ServicesGrid />
      </div>
    </Reveal>
  )
}
