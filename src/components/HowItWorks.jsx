import './HowItWorks.css'

const steps = [
  { src: '/images/process/step-1-call-us.jpeg', alt: 'Step 1 - Call Us: customer calling KL Plumber about a leaking pipe' },
  { src: '/images/process/step-2-arrival.jpeg', alt: 'Step 2 - Plumber Arrival: KL Plumber technician greeting customer at the door' },
  { src: '/images/process/step-3-inspection.jpeg', alt: 'Step 3 - Inspection and Quotation: technician reviewing checklist with customer' },
  { src: '/images/process/step-4-repair.jpeg', alt: 'Step 4 - Repair Work: technician repairing pipes under a sink' },
  { src: '/images/process/step-5-satisfaction.jpeg', alt: 'Step 5 - Satisfaction: happy customer and technician giving thumbs up' },
]

export default function HowItWorks() {
  return (
    <section className="section how-it-works">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Our Process</span>
          <h2 className="section-title">How It Works in 5 Simple Steps</h2>
          <p className="section-subtitle">
            From your first call to a job well done — here's exactly what to expect.
          </p>
        </div>

        <div className="how-it-works-grid">
          {steps.map((step, i) => (
            <div key={i} className="how-it-works-card">
              <img src={step.src} alt={step.alt} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
