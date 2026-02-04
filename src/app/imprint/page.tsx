import { createMetadata } from '@/lib/metadata'
import { content } from '@/lib/content'
import Section from '@/components/ui/Section'
import Hero from '@/components/ui/Hero'

export const metadata = createMetadata({
  title: content.seo.pages.imprint.title,
  description: content.seo.pages.imprint.description,
  path: content.seo.pages.imprint.path,
})

export default function ImprintPage() {
  return (
    <>
      <Hero title="Imprint" subtitle="Legal information for this website." centered />

      <Section spacing="lg">
        <div className="max-w-3xl mx-auto space-y-6 font-inter text-dark-kakao/80 leading-relaxed">
          <p>
            This is a placeholder imprint page. It will be updated with official legal details once provided.
          </p>
          <p>
            Contact: {content.contact.email}
          </p>
        </div>
      </Section>
    </>
  )
}
