import './TrustBadges.css'

const badges = [
  {
    label: 'SSM Registered Business',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z"/><path d="M9 12l2 2 4-4"/></svg>,
  },
  {
    label: 'Licensed & Insured',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"/><line x1="16" y1="8" x2="2" y2="22"/><line x1="17.5" y1="15" x2="9" y2="15"/></svg>,
  },
  {
    label: '24 Hour Emergency Response',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
  },
  {
    label: 'Free Quote, No Obligation',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5"/></svg>,
  },
]

export default function TrustBadges({ variant = 'default' }) {
  return (
    <ul className={`trust-badges trust-badges-${variant}`}>
      {badges.map((b, i) => (
        <li key={i} className="trust-badges-item">
          <span className="trust-badges-icon">{b.icon}</span>
          {b.label}
        </li>
      ))}
    </ul>
  )
}
