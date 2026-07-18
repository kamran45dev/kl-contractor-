import './GalleryGrid.css'

const galleryImages = [
  { src: '/images/toilet-repair.jpg', alt: 'Bathroom renovation with gold fixtures' },
  { src: '/images/sink-shower.jpg', alt: 'Neutral bathroom with wood and brass' },
  { src: '/images/kitchen-renovation.jpg', alt: 'Midcentury kitchen with warm wood' },
  { src: '/images/kitchen-alt.jpg', alt: 'Modern kitchen with pendant lights' },
  { src: '/images/flooring.jpg', alt: 'Wood plank flooring installation' },
  { src: '/images/house-painting.jpg', alt: 'Interior painting with roller' },
  { src: '/images/gallery-water-heater.jpg', alt: 'Water heater installation' },
  { src: '/images/waterproofing.jpg', alt: 'Waterproofing membrane application' },
  { src: '/images/gallery-booster-pump.webp', alt: 'Booster pump wall installation' },
  { src: '/images/gallery-water-heater2.jpg', alt: 'Water heater and boiler system' },
  { src: '/images/gallery-drain-pump.jpg', alt: 'Drain cleaning equipment' },
  { src: '/images/gallery-water-heater3.jpg', alt: 'Water heater replacement tanks' },
]

export default function GalleryGrid() {
  return (
    <div className="gallery-grid">
      {galleryImages.map((img, i) => (
        <div key={i} className="gallery-item">
          <img src={img.src} alt={img.alt} className="gallery-img" loading="lazy" />
        </div>
      ))}
    </div>
  )
}
