import { createMetadata } from '@/lib/metadata'
import { content } from '@/lib/content'
import { getBreadcrumbSchema } from '@/lib/structured-data'
import PageHeader from '@/components/ui/PageHeader'
import Section from '@/components/ui/Section'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import FAQ from '@/components/ui/FAQ'
import PricingCards from '@/components/ui/PricingCards'

export const metadata = createMetadata({
  title: content.seo.pages.services.title,
  description: content.seo.pages.services.description,
  path: content.seo.pages.services.path,
})

export default function ServicesPage() {
  const breadcrumbs = getBreadcrumbSchema([
    { name: 'Home', url: content.site.url },
    { name: 'Services', url: `${content.site.url}/services` },
  ])

  const packages = [
    {
      title: 'Start with a single session',
      description: 'Begin with one class or session to see how the work feels in your body and life.',
      note: 'No long-term commitment required.',
    },
    {
      title: 'Continue with a short series',
      description: 'A short series builds consistency and helps the work settle more deeply.',
      note: 'Recommended for private sessions and coaching.',
    },
    {
      title: 'Ongoing support',
      description: 'For those who want steady guidance and deeper integration over time.',
      note: 'Custom options available on request.',
    },
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />

      <PageHeader
        title="How we work together"
        subtitle="Come as you are, with whatever brings you here."
        eyebrow="Services"
      />

      <Section spacing="lg" texture="texture-2" textureOpacity="medium" divider>
        <div className="max-w-3xl mx-auto text-center space-y-6 font-inter text-lg text-dark-kakao/80">
          <p>
            I start with my clients wherever they feel safe right now. It’s not my role to push boundaries or decide
            the next step. When safety and connection are present, transformation unfolds in its own timing.
          </p>
          <p>
            You don’t need to know what’s wrong or why something feels off. Through movement, conversation, and
            awareness, misalignment begins to reveal itself — gently and honestly.
          </p>
        </div>
      </Section>

      <Section spacing="lg" texture="texture-1" divider>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card background="white" padding="lg">
            <div className="space-y-4">
              <p className="font-inter text-sm text-soft-clay uppercase tracking-wider">
                {content.services.groupYoga.tagline}
              </p>
              <h3 className="font-rustique text-2xl text-dark-kakao">
                {content.services.groupYoga.name}
              </h3>
              <p className="font-inter text-dark-kakao/80 leading-relaxed">
                {content.services.groupYoga.summary}
              </p>
              <Button href={`/services/${content.services.groupYoga.slug}`} variant="outline" fullWidth>
                Learn more
              </Button>
            </div>
          </Card>

          <Card background="white" padding="lg">
            <div className="space-y-4">
              <p className="font-inter text-sm text-soft-clay uppercase tracking-wider">
                {content.services.privateYoga.tagline}
              </p>
              <h3 className="font-rustique text-2xl text-dark-kakao">
                {content.services.privateYoga.name}
              </h3>
              <p className="font-inter text-dark-kakao/80 leading-relaxed">
                {content.services.privateYoga.summary}
              </p>
              <Button href={`/services/${content.services.privateYoga.slug}`} variant="outline" fullWidth>
                Learn more
              </Button>
            </div>
          </Card>

          <Card background="white" padding="lg">
            <div className="space-y-4">
              <p className="font-inter text-sm text-soft-clay uppercase tracking-wider">
                {content.services.coaching.tagline}
              </p>
              <h3 className="font-rustique text-2xl text-dark-kakao">
                {content.services.coaching.name}
              </h3>
              <p className="font-inter text-dark-kakao/80 leading-relaxed">
                {content.services.coaching.summary}
              </p>
              <Button href={`/services/${content.services.coaching.slug}`} variant="outline" fullWidth>
                Learn more
              </Button>
            </div>
          </Card>
        </div>
      </Section>

      <Section
        title="How the work unfolds"
        subtitle="A gentle structure that honors your pace and readiness."
        spacing="lg"
        background="warm-sand"
        texture="fabric-sand"
        centered={false}
        divider
      >
        <div className="space-y-6 font-inter text-lg text-dark-kakao/80 max-w-3xl">
          <p>
            We begin with what feels most accessible — movement, conversation, or quiet inquiry. Over time, the work
            deepens naturally. The goal is not perfection, but alignment you can live.
          </p>
          <p>
            When the body feels safe and capable, the mind softens, and the heart begins to open. Layer by layer,
            awareness deepens and new possibilities appear.
          </p>
        </div>
      </Section>

      <Section spacing="lg" background="warm-sand" texture="fabric-kakao" textureOpacity="none" centered divider>
        <p className="font-inter text-xs uppercase tracking-[0.3em] text-soft-clay mb-4">Your journey</p>
        <h2 className="font-rustique text-3xl md:text-4xl text-white-coral mb-6">
          Where will you begin?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white-coral/90">
          <div className="border border-white-coral/20 rounded-lg p-6">
            <p className="font-rustique text-2xl mb-2">Body</p>
            <p className="font-inter text-sm">Start with movement and breath.</p>
          </div>
          <div className="border border-white-coral/20 rounded-lg p-6">
            <p className="font-rustique text-2xl mb-2">Mind</p>
            <p className="font-inter text-sm">Cultivate clarity and steadiness.</p>
          </div>
          <div className="border border-white-coral/20 rounded-lg p-6">
            <p className="font-rustique text-2xl mb-2">Heart</p>
            <p className="font-inter text-sm">Open to joy, trust, and connection.</p>
          </div>
        </div>
      </Section>

      <Section title="Packages & pacing" spacing="lg" centered={false} texture="texture-2" divider>
        <PricingCards items={packages} />
      </Section>

      <Section title="Common questions" spacing="lg" background="warm-sand" texture="fabric-clay" centered={false} divider>
        <div className="max-w-3xl mx-auto">
          <FAQ items={content.faqs.services} />
        </div>
      </Section>

      <Section spacing="lg" centered texture="texture-3" divider>
        <h2 className="font-rustique text-3xl md:text-4xl text-dark-kakao mb-6">
          Ready to begin?
        </h2>
        <p className="font-inter text-lg text-dark-kakao/80 max-w-2xl mx-auto mb-8">
          Let’s talk through what you’re seeking and find the most supportive path.
        </p>
        <Button href="/work-with-me" variant="primary" size="lg">
          {content.cta.primary}
        </Button>
      </Section>
    </>
  )
}
