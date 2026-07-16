import { Link } from 'react-router-dom'
import { contactInfo } from '../data/services'
import './Header.css'

export default function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <Link to="/" className="logo">
          <img src="/logo.png" alt="KL Contractor" className="logo-img" />
        </Link>

        <nav className="nav">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/services" className="nav-link">Services</Link>
          <Link to="/gallery" className="nav-link">Gallery</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </nav>

        <div className="header-actions">
          <a href={`tel:${contactInfo.phoneRaw}`} className="header-phone">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            {contactInfo.phone}
          </a>
          <button className="mobile-toggle" id="mobile-toggle" aria-label="Menu">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </header>
  )
}
