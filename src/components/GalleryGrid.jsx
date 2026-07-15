import './GalleryGrid.css'

export default function GalleryGrid() {
  const items = Array.from({ length: 6 }, (_, i) => i + 1)

  return (
    <div className="gallery-grid">
      {items.map(i => (
        <div key={i} className="gallery-item">
          <div className="gallery-placeholder">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
            <span>Project Photo {i}</span>
          </div>
        </div>
      ))}
    </div>
  )
}
