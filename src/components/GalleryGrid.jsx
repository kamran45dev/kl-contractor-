import { useState } from 'react'
import Reveal from './Reveal'
import { staggerDelay, sideFor } from '../utils/reveal'
import './GalleryGrid.css'

const galleryImages = [
  { src: '/images/toilet-repair.jpg', alt: 'Bathroom renovation with gold fixtures', category: 'Renovation' },
  { src: '/images/sink-shower.jpg', alt: 'Neutral bathroom with wood and brass', category: 'Plumbing' },
  { src: '/images/kitchen-renovation.jpg', alt: 'Midcentury kitchen with warm wood', category: 'Renovation' },
  { src: '/images/kitchen-alt.jpg', alt: 'Modern kitchen with pendant lights', category: 'Renovation' },
  { src: '/images/flooring.jpg', alt: 'Wood plank flooring installation', category: 'Flooring' },
  { src: '/images/house-painting.jpg', alt: 'Interior painting with roller', category: 'Painting' },
  { src: '/images/gallery-water-heater.jpg', alt: 'Water heater installation', category: 'Plumbing' },
  { src: '/images/waterproofing.jpg', alt: 'Waterproofing membrane application', category: 'Waterproofing' },
  { src: '/images/gallery-booster-pump.webp', alt: 'Booster pump wall installation', category: 'Plumbing' },
  { src: '/images/gallery-water-heater2.jpg', alt: 'Water heater and boiler system', category: 'Plumbing' },
  { src: '/images/gallery-drain-pump.jpg', alt: 'Drain cleaning equipment', category: 'Plumbing' },
  { src: '/images/gallery-water-heater3.jpg', alt: 'Water heater replacement tanks', category: 'Plumbing' },
]

const categories = ['All', 'Plumbing', 'Renovation', 'Waterproofing', 'Painting', 'Flooring']

export default function GalleryGrid() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All'
    ? galleryImages
    : galleryImages.filter((img) => img.category === active)

  return (
    <div>
      <div className="gallery-filters">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`gallery-filter-btn${active === cat ? ' active' : ''}`}
            onClick={() => setActive(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="gallery-grid">
        {filtered.map((img, i) => (
          <Reveal key={img.src} className="gallery-item" direction={sideFor(i)} delay={staggerDelay(i)}>
            <img src={img.src} alt={img.alt} className="gallery-img" loading="lazy" />
            <span className="gallery-item-tag">{img.category}</span>
          </Reveal>
        ))}
      </div>
    </div>
  )
}
