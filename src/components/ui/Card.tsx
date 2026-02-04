import { ReactNode } from 'react'
import Link from 'next/link'

interface CardProps {
  children: ReactNode
  href?: string
  padding?: 'sm' | 'md' | 'lg'
  background?: 'white' | 'sand' | 'sea'
  hover?: boolean
}

export default function Card({
  children,
  href,
  padding = 'md',
  background = 'white',
  hover = true,
}: CardProps) {
  const paddingStyles = {
    sm: 'p-4',
    md: 'p-6 md:p-8',
    lg: 'p-8 md:p-12',
  }

  const bgStyles = {
    white: 'bg-white',
    sand: 'bg-warm-sand/20',
    sea: 'bg-soft-sea/10',
  }

  const hoverStyles = hover ? 'hover:shadow-lg hover:-translate-y-1 transition-all duration-200' : ''

  const className = `${paddingStyles[padding]} ${bgStyles[background]} ${hoverStyles} rounded-lg shadow-sm border border-warm-sand/20`

  if (href) {
    return (
      <Link href={href} className={`block ${className}`}>
        {children}
      </Link>
    )
  }

  return <div className={className}>{children}</div>
}
