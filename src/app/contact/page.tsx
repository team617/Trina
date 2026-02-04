import { createMetadata } from '@/lib/metadata'
import { content } from '@/lib/content'
import { getBreadcrumbSchema } from '@/lib/structured-data'
import Hero from '@/components/ui/Hero'
import Section from '@/components/ui/Section'
import ContactForm from '@/components/ui/ContactForm'

export const metadata = createMetadata({
  title: content.seo.pages.contact.title,
  description: content.seo.pages.contact.description,
  path: content.seo.pages.contact.path,
})

export default function ContactPage() {
  const breadcrumbs = getBreadcrumbSchema([
    { name: 'Home', url: content.site.url },
    { name: 'Contact', url: `${content.site.url}/contact` },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />

      <Hero
        title="Reach out"
        subtitle="Share a little about what you’re seeking and I’ll be in touch."
        eyebrow="Contact"
        texture="fabric-white-coral"
        centered
      />

      <Section spacing="lg" texture="texture-2" textureOpacity="medium">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h2 className="font-rustique text-3xl md:text-4xl text-dark-kakao">
              A calm place to start
            </h2>
            <p className="font-inter text-lg text-dark-kakao/80 leading-relaxed">
              If you’re unsure where to begin, that’s okay. This form is a simple first step. I’ll respond with next
              steps and any questions to help us find the right fit.
            </p>
            <div className="font-inter text-sm text-dark-kakao/70">
              Prefer email? Reach me at{' '}
              <a href={`mailto:${content.contact.email}`} className="underline">
                {content.contact.email}
              </a>
              .
            </div>
          </div>
          <div className="bg-white/70 rounded-2xl p-6 md:p-8 shadow-sm">
            <ContactForm />
          </div>
        </div>
      </Section>
    </>
  )
}
