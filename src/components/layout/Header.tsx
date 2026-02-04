'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import Button from '@/components/ui/Button'
import { content } from '@/lib/content'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navigation = [
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Approach', href: '/approach' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white-coral/95 backdrop-blur-sm border-b border-warm-sand/20">
      <nav className="container-custom py-4 md:py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-4">
            <Image
              src="/brand/mark.svg"
              alt={`${content.site.title} logo mark`}
              width={48}
              height={48}
              priority
            />
            <div className="flex flex-col items-start text-left">
              <Image
                src="/brand/wordmark-horizontal.svg"
                alt={`${content.site.title} logo`}
                width={220}
                height={52}
                priority
              />
              <span className="font-inter text-xs text-soft-clay tracking-wider uppercase mt-1">
                {content.site.tagline}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="font-inter text-sm text-dark-kakao hover:text-soft-clay transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <Button href="/work-with-me" size="sm">
              {content.cta.primary}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-4 pb-3 space-y-3 border-t border-warm-sand/20 mt-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-2 font-inter text-dark-kakao hover:text-soft-clay transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-2">
              <Button href="/work-with-me" fullWidth size="sm">
                {content.cta.primary}
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
