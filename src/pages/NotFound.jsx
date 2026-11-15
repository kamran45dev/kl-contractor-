import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="section" style={{ paddingTop: 120, textAlign: 'center' }}>
      <div className="container">
        <h1>Page Not Found</h1>
        <p style={{ margin: '16px 0' }}>The page you are looking for does not exist.</p>
        <Link to="/" className="btn btn-primary">Back to Home</Link>
      </div>
    </section>
  )
}
