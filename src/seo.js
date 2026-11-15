import { services, contactInfo } from './data/services.js'
import { areaBySlug } from './data/areaPages.js'

export const SITE = 'https://www.kl-plumber.com'
const BRAND = 'KL Plumber'

export const pages = {
  '/': {
    title: 'KL Plumber | 24/7 Emergency Plumber in Kuala Lumpur',
    description: 'Trusted plumber in Kuala Lumpur & Selangor. Leaks, blocked drains, toilets, water heaters and pumps fixed fast. Call or WhatsApp for a free quote.',
  },
  '/services': {
    title: 'Plumbing Services in Kuala Lumpur | KL Plumber',
    description: 'Emergency plumbing, pipe repair, drain cleaning, toilet and water heater services across Kuala Lumpur & Selangor. Fast, fair-priced, SSM registered.',
  },
  '/gallery': {
    title: 'Plumbing Work Gallery | KL Plumber',
    description: 'See our recent plumbing jobs in Kuala Lumpur and Selangor: water heaters, drain pumps, pipe repairs and installations.',
  },
  '/about': {
    title: 'About KL Plumber | SSM Registered Plumbers in KL',
    description: 'Meet the licensed, SSM-registered plumbing team serving homes and businesses in Kuala Lumpur and Selangor with honest pricing.',
  },
  '/contact': {
    title: 'Call or WhatsApp a Plumber in KL | KL Plumber',
    description: 'Need a plumber now? Call or WhatsApp KL Plumber on +60 16-678 5404 for fast help and a free quote in Kuala Lumpur and Selangor.',
  },
  '/areas': {
    title: 'Plumber Service Areas in KL & Selangor | KL Plumber',
    description: 'We serve Kuala Lumpur and nearby Selangor areas. Check your area and call KL Plumber for fast plumbing help.',
  },
  '/faq': {
    title: 'Plumbing FAQ | KL Plumber',
    description: 'Answers to common plumbing questions in Kuala Lumpur: pricing, response time, emergency service and how to book.',
  },
  '/reviews': {
    title: 'Customer Reviews | KL Plumber',
    description: 'Read what customers in Kuala Lumpur and Selangor say about KL Plumber and our plumbing repairs.',
  },
  '/privacy-policy': { title: 'Privacy Policy | KL Plumber', description: 'How KL Plumber handles your information.' },
  '/terms': { title: 'Terms of Service | KL Plumber', description: 'Terms of service for KL Plumber plumbing and home services.' },
}

function clip(text, max) {
  if (text.length <= max) return text
  return text.slice(0, max - 1).replace(/\s+\S*$/, '') + '…'
}

export function metaFor(pathname) {
  const path = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname
  if (pages[path]) return { ...pages[path], path }
  const m = path.match(/^\/services\/([^/]+)$/)
  if (m) {
    const s = services.find(x => x.slug === m[1])
    if (s) {
      return {
        title: clip(`${s.title} in KL | ${BRAND}`, 60),
        description: clip(`${s.shortDesc} Call ${contactInfo.phone} for a free quote.`, 160),
        path,
      }
    }
  }
  const a = path.match(/^\/areas\/([^/]+)$/)
  if (a && areaBySlug[a[1]]) {
    const area = areaBySlug[a[1]]
    return {
      title: clip(`Plumber in ${area.name} | ${BRAND}`, 60),
      description: clip(`Plumber in ${area.name}: leaks, blocked drains, toilets, water heaters and pumps. Call or WhatsApp ${BRAND} on ${contactInfo.phone} for a free quote.`, 160),
      path,
    }
  }
  return { title: `Page not found | ${BRAND}`, description: 'This page does not exist.', path, noindex: true }
}
