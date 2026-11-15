import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { SITE, metaFor } from '../seo'

function setTag(selector, create, attrs) {
  let el = document.head.querySelector(selector)
  if (!el) {
    el = document.createElement(create)
    document.head.appendChild(el)
  }
  Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v))
}

export default function RouteSeo() {
  const { pathname } = useLocation()
  useEffect(() => {
    const m = metaFor(pathname)
    const url = SITE + (m.path === '/' ? '/' : m.path)
    document.title = m.title
    setTag('meta[name="description"]', 'meta', { name: 'description', content: m.description })
    setTag('link[rel="canonical"]', 'link', { rel: 'canonical', href: url })
    setTag('meta[name="robots"]', 'meta', { name: 'robots', content: m.noindex ? 'noindex' : 'index, follow' })
    setTag('meta[property="og:title"]', 'meta', { property: 'og:title', content: m.title })
    setTag('meta[property="og:description"]', 'meta', { property: 'og:description', content: m.description })
    setTag('meta[property="og:url"]', 'meta', { property: 'og:url', content: url })
  }, [pathname])
  return null
}
