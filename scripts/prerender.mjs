// Writes a static HTML file for every public route after `vite build`,
// so crawlers get real content and per-page titles without running JavaScript.
import { readFileSync, writeFileSync, mkdirSync, rmSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { pathToFileURL } from 'node:url'
import { pages, metaFor, schemaFor, SITE } from '../src/seo.js'
import { services } from '../src/data/services.js'
import { areaPages } from '../src/data/areaPages.js'

const dist = resolve('dist')
const serverDir = resolve('dist-server')
const template = readFileSync(join(dist, 'index.html'), 'utf8')
const { render } = await import(pathToFileURL(join(serverDir, 'entry-server.js')).href)

const esc = s => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')

const routes = [...Object.keys(pages), ...services.map(s => `/services/${s.slug}`), ...areaPages.map(a => `/areas/${a.slug}`)]

for (const route of routes) {
  const m = metaFor(route)
  const url = SITE + (route === '/' ? '/' : route)
  let html = render(route)
  let page = template
    .replace(/<title>[^<]*<\/title>/, `<title>${esc(m.title)}</title>`)
    .replace(/<meta name="description" content="[^"]*"\s*\/?>/, `<meta name="description" content="${esc(m.description)}" />`)
    .replace(/<link rel="canonical" href="[^"]*"\s*\/?>/, `<link rel="canonical" href="${url}" />`)
  const ld = schemaFor(route).map(o => `    <script type="application/ld+json" data-route-ld>${JSON.stringify(o).replace(/</g, '\\u003c')}</script>\n`).join('')
  const og = `    <meta property="og:title" content="${esc(m.title)}" />\n    <meta property="og:description" content="${esc(m.description)}" />\n    <meta property="og:url" content="${url}" />\n${ld}  </head>`
  page = page.replace('</head>', og)
  if (!page.includes('<div id="root"></div>')) throw new Error('root placeholder missing in template')
  page = page.replace('<div id="root"></div>', `<div id="root">${html}</div>`)
  const file = route === '/' ? join(dist, 'index.html') : join(dist, route.slice(1) + '.html')
  mkdirSync(dirname(file), { recursive: true })
  writeFileSync(file, page)
  console.log('prerendered', route, `(${html.length} chars)`)
}

rmSync(serverDir, { recursive: true, force: true })
