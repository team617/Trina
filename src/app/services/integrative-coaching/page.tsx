import { createMetadata } from '@/lib/metadata'
import { content } from '@/lib/content'
import { getBreadcrumbSchema, getServiceSchema } from '@/lib/structured-data'
import Hero from '@/components/ui/Hero'
import Section from '@/components/ui/Section'
import Button from '@/components/ui/Button'

export const metadata = createMetadata({
  title: content.services.coaching.name,
  description: content.services.coaching.summary,
  path: `/services/${content.services.coaching.slug}`,
})

export default function IntegrativeCoachingPage() {
  const serviceSchema = getServiceSchema({
    name: content.services.coaching.name,
    description: content.services.coaching.summary,
    url: `${content.site.url}/services/${content.services.coaching.slug}`,
  })

  const breadcrumbs = getBreadcrumbSchema([
    { name: 'Home', url: content.site.url },
    { name: 'Services', url: `${content.site.url}/services` },
    { name: content.services.coaching.name, url: `${content.site.url}/services/${content.services.coaching.slug}` },
  ])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />

      <Hero
        title={content.services.coaching.name}
        subtitle={content.services.coaching.summary}
        eyebrow="Service"
        texture="fabric-white-coral"
        centered
      />

      <Section spacing="lg" texture="texture-2" textureOpacity="medium">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="font-rustique text-3xl md:text-4xl text-dark-kakao">
            A holistic coaching journey
          </h2>
          <p className="font-inter text-lg leading-relaxed text-dark-kakao/80">
            Integrative coaching brings together the wisdom of the body with honest conversation and practical
            integration. We explore patterns with care, identify what matters most, and create space for aligned choices
            to emerge.
          </p>
          <p className="font-inter text-lg leading-relaxed text-dark-kakao/80">
            Sessions may include movement, breathwork, reflection practices, and gentle accountability — always paced to
            what feels safe and supportive.
          </p>
        </div>
      </Section>

      <Section spacing="lg" background="warm-sand" texture="fabric-sand">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-rustique text-3xl md:text-4xl text-dark-kakao mb-8">
            This is for you if
          </h2>
          <ul className="space-y-3 font-inter text-dark-kakao/80">
            {content.services.coaching.forYouIf.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>
      </Section>

      <Section spacing="lg" texture="texture-1">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="font-rustique text-3xl md:text-4xl text-dark-kakao">
            Session details
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div>
                <h3 className="font-rustique text-xl text-dark-kakao">Format</h3>
                <p className="font-inter text-dark-kakao/80">{content.services.coaching.details.format}</p>
              </div>
              <div>
                <h3 className="font-rustique text-xl text-dark-kakao">Duration</h3>
                <p className="font-inter text-dark-kakao/80">{content.services.coaching.details.duration}</p>
              </div>
              <div>
                <h3 className="font-rustique text-xl text-dark-kakao">Focus</h3>
                <p className="font-inter text-dark-kakao/80">{content.services.coaching.details.level}</p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="font-rustique text-xl text-dark-kakao">Location</h3>
                <p className="font-inter text-dark-kakao/80">{content.services.coaching.details.locationNote}</p>
              </div>
              <div>
                <h3 className="font-rustique text-xl text-dark-kakao">What to bring</h3>
                <ul className="space-y-2 font-inter text-dark-kakao/80">
                  <li>• A willingness to explore</li>
                  <li>• Curiosity about your patterns</li>
                  <li>• A desire to integrate insights into daily life</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section spacing="lg" background="warm-sand" texture="fabric-clay" centered>
        <h2 className="font-rustique text-3xl md:text-4xl text-dark-kakao mb-6">
          Take the next step
        </h2>
        <p className="font-inter text-lg text-dark-kakao/80 max-w-2xl mx-auto mb-8">
          Book a discovery call to see if integrative coaching is the right fit.
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
