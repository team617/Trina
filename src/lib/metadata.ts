/**
 * SEO Metadata Helper
 * Generates consistent metadata for all pages
 */

import { Metadata } from 'next'
import { content } from './content'

export function createMetadata({
  title,
  description,
  path = '',
  image = '/og-image.jpg',
  noIndex = false,
}: {
  title: string
  description: string
  path?: string
  image?: string
  noIndex?: boolean
}): Metadata {
  const url = `${content.site.url}${path}`
  const fullTitle = title === content.site.title ? title : `${title} | ${content.site.title}`

  return {
    title: fullTitle,
    description,
    ...(noIndex && { robots: { index: false, follow: false } }),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: 'website',
      url,
      title: fullTitle,
      description,
      siteName: content.site.title,
      locale: content.site.locale,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [image],
    },
  }
}
