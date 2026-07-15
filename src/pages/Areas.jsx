import { areas } from '../data/services'

export default function Areas() {
  return (
    <section className="section" style={{ paddingTop: 120 }}>
      <div className="container">
        <div className="section-title">Areas We Serve</div>
        <p className="section-subtitle">
          Proudly serving homes and businesses across Kuala Lumpur and surrounding areas.
        </p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: 16,
        }}>
          {areas.map((area, i) => (
            <div key={i} style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              padding: '20px 24px',
              background: 'var(--white)',
              borderRadius: 'var(--radius-sm)',
              boxShadow: 'var(--shadow)',
              fontSize: '1.05rem',
              fontWeight: 600,
              color: 'var(--primary)',
              transition: 'var(--transition)',
            }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              {area}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
