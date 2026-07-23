import './WhyUs.css'

const stats = [
  { number: '157+', label: '5-Star Reviews' },
  { number: '4.8', label: 'Google Rating' },
  { number: '10+', label: 'Years Experience' },
  { number: '100%', label: 'Satisfaction' },
]

const reasons = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
    ),
    title: 'Fast Response',
    desc: '24/7 emergency service with rapid dispatch. We arrive on time, fully equipped, and ready to solve your problem efficiently.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
    ),
    title: 'Quality Guaranteed',
    desc: 'Licensed, insured professionals using top-grade materials. Every job is backed by our satisfaction guarantee.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
    ),
    title: 'Fair Pricing',
    desc: 'Transparent quotes with no hidden charges. We provide honest assessments and competitive rates for every service.',
  },
]

export default function WhyUs() {
  return (
    <section className="section whyus">
      <div className="container">
        <div className="stats-row">
          {stats.map((s, i) => (
            <div key={i} className="stat-item">
              <span className="stat-number">{s.number}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>
        <div className="section-header">
          <span className="section-tag">Why Choose Us</span>
          <h2 className="section-title">Built on Trust & Quality</h2>
          <p className="section-subtitle">
            We deliver more than just services — we deliver trust, quality, and peace of mind.
          </p>
        </div>
        <div className="whyus-grid">
          {reasons.map((r, i) => (
            <div key={i} className="whyus-card">
              <div className="whyus-icon">{r.icon}</div>
              <h3 className="whyus-title">{r.title}</h3>
              <p className="whyus-desc">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
