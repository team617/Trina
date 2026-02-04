import { MetadataRoute } from 'next'
import { content } from '@/lib/content'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = content.site.url

  const routes = [
    '',
    '/about',
    '/services',
    `/services/${content.services.groupYoga.slug}`,
    `/services/${content.services.privateYoga.slug}`,
    `/services/${content.services.coaching.slug}`,
    '/approach',
    '/contact',
    '/work-with-me',
    '/privacy-policy',
    '/imprint',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }))
}
