import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'

const PLACEHOLDER = '__SITE_URL__'

function removerTagsComUrl(html) {
  return html
    .replace(new RegExp(`\\s*<(link|meta)\\b[^>]*${PLACEHOLDER}[^>]*>`, 'g'), '')
    .replace(/\s*<meta property="og:image:[^"]+"[^>]*>/g, '')
    .replace(/\s*<script type="application\/ld\+json">[\s\S]*?<\/script>/g, '')
}

function seo(siteUrl) {
  const url = siteUrl?.trim().replace(/\/+$/, '')

  return {
    name: 'portfolio-seo',
    transformIndexHtml: {
      order: 'pre',
      handler(html) {
        return url ? html.replaceAll(PLACEHOLDER, url) : removerTagsComUrl(html)
      },
    },
    generateBundle() {
      const robots = ['User-agent: *', 'Allow: /', url && `Sitemap: ${url}/sitemap.xml`]
        .filter(Boolean)
        .join('\n')
      this.emitFile({ type: 'asset', fileName: 'robots.txt', source: `${robots}\n` })

      if (!url) {
        this.warn('SITE_URL não definida: canonical, Open Graph e sitemap.xml foram omitidos.')
        return
      }

      const hoje = new Date().toISOString().slice(0, 10)
      const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${url}/</loc>
    <lastmod>${hoje}</lastmod>
  </url>
</urlset>
`
      this.emitFile({ type: 'asset', fileName: 'sitemap.xml', source: sitemap })
    },
  }
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [react(), seo(env.SITE_URL || env.URL)],
  }
})
