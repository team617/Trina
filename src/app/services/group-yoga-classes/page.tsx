import { createMetadata } from '@/lib/metadata'
import { content } from '@/lib/content'
import { getBreadcrumbSchema, getServiceSchema } from '@/lib/structured-data'
import PageHeader from '@/components/ui/PageHeader'
import Section from '@/components/ui/Section'
import Button from '@/components/ui/Button'

export const metadata = createMetadata({
  title: content.services.groupYoga.name,
  description: content.services.groupYoga.summary,
  path: `/services/${content.services.groupYoga.slug}`,
})

export default function GroupYogaClassesPage() {
  const serviceSchema = getServiceSchema({
    name: content.services.groupYoga.name,
    description: content.services.groupYoga.summary,
    url: `${content.site.url}/services/${content.services.groupYoga.slug}`,
  })

  const breadcrumbs = getBreadcrumbSchema([
    { name: 'Home', url: content.site.url },
    { name: 'Services', url: `${content.site.url}/services` },
    { name: content.services.groupYoga.name, url: `${content.site.url}/services/${content.services.groupYoga.slug}` },
  ])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />

      <PageHeader
        title="Group Yoga Classes"
        subtitle={content.services.groupYoga.summary}
        eyebrow="Service"
      />

      <Section spacing="lg" texture="texture-2" textureOpacity="medium" divider>
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="font-rustique text-3xl md:text-4xl text-dark-kakao">
            A calm, alignment-based practice
          </h2>
          <p className="font-inter text-lg leading-relaxed text-dark-kakao/80">
            These classes are designed to help you move with awareness rather than performance. We focus on alignment,
            breath, and steady attention so you can feel safe in your body and more at ease in your day-to-day life.
          </p>
          <p className="font-inter text-lg leading-relaxed text-dark-kakao/80">
            Each class supports balance in the body, clarity in the mind, and openness in the heart.
          </p>
        </div>
      </Section>

      <Section spacing="lg" background="warm-sand" texture="fabric-sand" divider>
        <div className="max-w-4xl mx-auto">
          <h2 className="font-rustique text-3xl md:text-4xl text-dark-kakao mb-8">
            This is for you if
          </h2>
          <ul className="space-y-3 font-inter text-dark-kakao/80">
            {content.services.groupYoga.forYouIf.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>
      </Section>

      <Section spacing="lg" texture="texture-1" divider>
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="font-rustique text-3xl md:text-4xl text-dark-kakao">
            Class details
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div>
                <h3 className="font-rustique text-xl text-dark-kakao">Format</h3>
                <p className="font-inter text-dark-kakao/80">{content.services.groupYoga.details.format}</p>
              </div>
              <div>
                <h3 className="font-rustique text-xl text-dark-kakao">Duration</h3>
                <p className="font-inter text-dark-kakao/80">{content.services.groupYoga.details.duration}</p>
              </div>
              <div>
                <h3 className="font-rustique text-xl text-dark-kakao">Level</h3>
                <p className="font-inter text-dark-kakao/80">{content.services.groupYoga.details.level}</p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="font-rustique text-xl text-dark-kakao">Location</h3>
                <p className="font-inter text-dark-kakao/80">{content.services.groupYoga.details.locationNote}</p>
              </div>
              <div>
                <h3 className="font-rustique text-xl text-dark-kakao">What to bring</h3>
                <ul className="space-y-2 font-inter text-dark-kakao/80">
                  <li>• Comfortable clothing you can move in</li>
                  <li>• A yoga mat</li>
                  <li>• Water</li>
                  <li>• A willingness to slow down</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section spacing="lg" background="warm-sand" texture="fabric-clay" centered divider>
        <h2 className="font-rustique text-3xl md:text-4xl text-dark-kakao mb-6">
          Ready to explore?
        </h2>
        <p className="font-inter text-lg text-dark-kakao/80 max-w-2xl mx-auto mb-8">
          Reach out to join an upcoming class or book a discovery call to ask questions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/work-with-me" variant="primary" size="lg">
            {content.cta.primary}
          </Button>
          <Button href="/services" variant="outline" size="lg">
            Explore other services
          </Button>
        </div>
      </Section>
    </>
  )
}
