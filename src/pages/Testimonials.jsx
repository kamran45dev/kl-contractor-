import Reviews from '../components/Reviews'
import TrustBadges from '../components/TrustBadges'
import CTASection from '../components/CTASection'
import Reveal from '../components/Reveal'

export default function Testimonials() {
  return (
    <>
      <Reveal as="section" className="section" style={{ paddingTop: 120, paddingBottom: 0 }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h1 className="section-title">Customer Reviews</h1>
          <p className="section-subtitle" style={{ margin: '0 auto 32px' }}>
            Rated 4.8 out of 5 from 157+ Google reviews. Here's what real customers say
            about working with us.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 24 }}>
            <TrustBadges />
          </div>
        </div>
      </Reveal>
      <Reviews />
      <CTASection />
    </>
  )
}
