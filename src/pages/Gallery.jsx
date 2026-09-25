import GalleryGrid from '../components/GalleryGrid'
import Reveal from '../components/Reveal'

export default function Gallery() {
  return (
    <Reveal as="section" className="section" style={{ paddingTop: 120 }}>
      <div className="container">
        <div className="section-title">Our Projects</div>
        <p className="section-subtitle">
          Browse our recent work across plumbing, renovation, waterproofing, and more.
        </p>
        <GalleryGrid />
      </div>
    </Reveal>
  )
}
