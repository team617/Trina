/**
 * Structured Data (JSON-LD) Helpers
 * SEO-friendly structured data for search engines
 */

import { content } from './content'

export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: content.site.title,
    url: content.site.url,
    logo: `${content.site.url}/brand/logo-primary.svg`,
    description: content.site.description,
    contactPoint: {
      '@type': 'ContactPoint',
      email: content.contact.email,
      contactType: 'customer service',
    },
  }
}

export function getPersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: content.site.author,
    url: content.site.url,
    jobTitle: content.site.tagline,
    description: content.site.description,
  }
}

export function getWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: content.site.title,
    url: content.site.url,
    description: content.site.description,
  }
}

export function getServiceSchema({
  name,
  description,
  url,
}: {
  name: string
  description: string
  url: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url,
    provider: {
      '@type': 'Person',
      name: content.site.author,
    },
    areaServed: {
      '@type': 'Place',
      name: 'Worldwide',
    },
  }
}

export function getBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}
