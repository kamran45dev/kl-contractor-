import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './styles/animations.css'

// Scroll reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible')
    }
  })
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' })

// Wait for DOM to be ready
const initReveal = () => {
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
}

// Watch for route changes
const mutationObserver = new MutationObserver(() => initReveal())
mutationObserver.observe(document.getElementById('root') || document.body, {
  childList: true,
  subtree: true,
})

// Initial scan
document.addEventListener('DOMContentLoaded', initReveal)
setTimeout(initReveal, 500)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
