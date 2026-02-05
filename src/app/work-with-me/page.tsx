import { createMetadata } from '@/lib/metadata'
import { content } from '@/lib/content'
import { getBreadcrumbSchema } from '@/lib/structured-data'
import PageHeader from '@/components/ui/PageHeader'
import Section from '@/components/ui/Section'
import Button from '@/components/ui/Button'
import ContactForm from '@/components/ui/ContactForm'

export const metadata = createMetadata({
  title: content.seo.pages.workWithMe.title,
  description: content.seo.pages.workWithMe.description,
  path: content.seo.pages.workWithMe.path,
})

export default function WorkWithMePage() {
  const breadcrumbs = getBreadcrumbSchema([
    { name: 'Home', url: content.site.url },
    { name: 'Work With Me', url: `${content.site.url}/work-with-me` },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />

      <PageHeader
        title="Let’s find the right starting point"
        subtitle="Book a discovery call or reach out with a question. We’ll explore what you’re seeking and choose the most supportive path."
        eyebrow="Work With Me"
      />

      <Section spacing="lg" texture="texture-2" textureOpacity="medium" divider>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h2 className="font-rustique text-3xl md:text-4xl text-dark-kakao">
              What happens on a discovery call
            </h2>
            <p className="font-inter text-lg text-dark-kakao/80 leading-relaxed">
              This is a calm, no-pressure conversation. We’ll talk about what you’re experiencing and what kind of
              support feels right. There is no obligation — just clarity.
            </p>
            <ul className="space-y-3 font-inter text-dark-kakao/80">
              <li>• Share what you’re seeking</li>
              <li>• Ask any questions you have</li>
              <li>• Choose a service that fits your rhythm</li>
            </ul>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/services" variant="outline">
                Explore services
              </Button>
              <Button href="/contact" variant="secondary">
                Prefer email instead
              </Button>
            </div>
          </div>

          <div className="bg-white/70 rounded-2xl p-6 md:p-8 shadow-sm">
            <h3 className="font-rustique text-2xl text-dark-kakao mb-4">Request a discovery call</h3>
            <ContactForm />
          </div>
        </div>
      </Section>
    </>
  )
}
