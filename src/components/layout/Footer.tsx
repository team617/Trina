import Link from 'next/link'
import Image from 'next/image'
import { content } from '@/lib/content'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Approach', href: '/approach' },
    { name: 'Contact', href: '/contact' },
  ]

  const serviceLinks = [
    { name: content.services.groupYoga.name, href: `/services/${content.services.groupYoga.slug}` },
    { name: content.services.privateYoga.name, href: `/services/${content.services.privateYoga.slug}` },
    { name: content.services.coaching.name, href: `/services/${content.services.coaching.slug}` },
  ]

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Imprint', href: '/imprint' },
  ]

  return (
    <footer className="bg-warm-sand/10 border-t border-warm-sand/20 mt-24">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex items-center gap-3 mb-4">
              <Image
                src="/brand/mark.svg"
                alt={`${content.site.title} logo mark`}
                width={32}
                height={32}
              />
              <span className="font-rustique text-2xl text-dark-kakao">
                {content.site.title}
              </span>
            </Link>
            <p className="font-inter text-sm text-dark-kakao/70 leading-relaxed">
              {content.coreMessage.primary}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-rustique text-lg text-dark-kakao mb-4">Navigate</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="font-inter text-sm text-dark-kakao/70 hover:text-soft-clay transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-rustique text-lg text-dark-kakao mb-4">Services</h3>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="font-inter text-sm text-dark-kakao/70 hover:text-soft-clay transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-rustique text-lg text-dark-kakao mb-4">Connect</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href={`mailto:${content.contact.email}`}
                  className="font-inter text-sm text-dark-kakao/70 hover:text-soft-clay transition-colors"
                >
                  {content.contact.email}
                </a>
              </li>
              <li>
                <Link
                  href="/work-with-me"
                  className="font-inter text-sm text-dark-kakao/70 hover:text-soft-clay transition-colors"
                >
                  {content.cta.primary}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-warm-sand/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-inter text-sm text-dark-kakao/60">
            © {currentYear} {content.site.title}. All rights reserved.
          </p>
          <div className="flex gap-6">
            {legalLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="font-inter text-sm text-dark-kakao/60 hover:text-soft-clay transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
