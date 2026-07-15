import './Reviews.css'

const testimonials = [
  {
    name: 'Iman Mustaqim Mond Effendy',
    text: 'Our toilet was constantly leaking, and they fixed it right away. The plumber arrived on time, diagnosed the issue quickly, and had the parts ready. Everything was done professionally and the price was very reasonable.',
    rating: 5,
  },
  {
    name: 'Ivan Lim Ka Vem',
    text: 'The workers arrived on the date we agreed upon and worked very diligently to finish in a timely manner. The price was exactly what they quoted. I would definitely recommend this company.',
    rating: 5,
  },
  {
    name: 'Kristine N.',
    text: 'Great and fast service! I had clogged WC on a weekend — the plumbers came within 20 minutes of my call. I was kept informed about any changes in the pricing upfront. All got fixed professionally.',
    rating: 5,
  },
  {
    name: 'Prakash Kumar',
    text: 'Great service. Had an urgent issue and they were able to entertain on the same day. Usama and Parves were very quiet and efficient. Got the jobs done quickly.',
    rating: 4,
  },
]

export default function Reviews() {
  return (
    <section className="section section-muted">
      <div className="container">
        <div className="section-title" style={{ textAlign: 'center' }}>What Our Clients Say</div>
        <p className="section-subtitle" style={{ textAlign: 'center', margin: '0 auto 48px' }}>
          Rated 4.8 stars from 157 reviews on Google. Here is what our customers have to say.
        </p>
        <div className="reviews-grid">
          {testimonials.map((t, i) => (
            <div key={i} className="review-card">
              <div className="review-stars">
                {Array.from({ length: 5 }, (_, j) => (
                  <span key={j} className={`star ${j < t.rating ? 'filled' : ''}`}>★</span>
                ))}
              </div>
              <p className="review-text">"{t.text}"</p>
              <p className="review-name">{t.name}</p>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 32 }}>
          <a
            href="https://search.google.com/local/reviews?placeid=ChIJS9LlXEBHzDERJaGngNoCUMI"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            See All Reviews on Google
          </a>
        </div>
      </div>
    </section>
  )
}
