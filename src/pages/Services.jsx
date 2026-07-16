import ServicesGrid from '../components/ServicesGrid'

export default function Services() {
  return (
    <section className="section reveal" style={{ paddingTop: 120 }}>
      <div className="container">
        <div className="section-title">All Services</div>
        <p className="section-subtitle">
          We offer a complete range of home and commercial services in Kuala Lumpur.
        </p>
        <ServicesGrid />
      </div>
    </section>
  )
}
