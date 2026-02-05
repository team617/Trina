import { createMetadata } from '@/lib/metadata'
import { content } from '@/lib/content'
import { getBreadcrumbSchema } from '@/lib/structured-data'
import PageHeader from '@/components/ui/PageHeader'
import Section from '@/components/ui/Section'
import Pillar from '@/components/ui/Pillar'
import ProcessSteps from '@/components/ui/ProcessSteps'
import Button from '@/components/ui/Button'

export const metadata = createMetadata({
  title: content.seo.pages.approach.title,
  description: content.seo.pages.approach.description,
  path: content.seo.pages.approach.path,
})

export default function ApproachPage() {
  const breadcrumbs = getBreadcrumbSchema([
    { name: 'Home', url: content.site.url },
    { name: 'Approach', url: `${content.site.url}/approach` },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />

      <PageHeader
        title="Your body is a doorway"
        subtitle="Alignment, stability, and stillness are a continuous movement — a spiral that supports body, mind, and heart."
        eyebrow="My Approach"
        texture="water-wash"
      />

      <Section spacing="lg" texture="texture-2" textureOpacity="medium" divider>
        <div className="max-w-3xl mx-auto space-y-6 font-inter text-lg text-dark-kakao/80 leading-relaxed">
          <h2 className="font-rustique text-3xl md:text-4xl text-dark-kakao">
            Alignment, stability, and stillness
          </h2>
          <p>
            These are not separate practices — they are a continuous movement, like a spiral rather than a ladder. Each
            pillar influences the others across physical, mental, and emotional layers.
          </p>
          <p>
            When we realign the body, mind, and heart, we create harmony. When that harmony finds stability, we gain
            trust. And from trust, stillness naturally arises and reveals our truth.
          </p>
          <p className="italic text-deep-reef">
            Stillness is not the absence of movement, but a representation of presence and ease.
          </p>
        </div>
      </Section>

      <Section
        title={content.approach.title}
        subtitle={content.approach.intro}
        spacing="lg"
        background="warm-sand"
        texture="fabric-sand"
        centered={false}
        divider
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {content.brandPillars.map((pillar) => (
            <Pillar key={pillar.name} {...pillar} />
          ))}
        </div>
      </Section>

      <Section spacing="lg" background="warm-sand" texture="fabric-kakao" textureOpacity="none" centered divider>
        <blockquote className="max-w-3xl mx-auto text-center">
          <p className="font-rustique text-3xl md:text-4xl text-white-coral leading-tight">
            “{content.quotes.misalignment}”
          </p>
        </blockquote>
      </Section>

      <Section spacing="lg" texture="texture-1" centered={false} divider>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 font-inter text-lg text-dark-kakao/80 leading-relaxed">
            <p className="font-inter text-xs uppercase tracking-[0.3em] text-soft-clay">The unique approach</p>
            <h2 className="font-rustique text-3xl md:text-4xl text-dark-kakao">
              Supporting heart-led transformation
            </h2>
            <p>
              My approach is rooted in interconnection. When we create alignment and stability on one level, the next
              level naturally begins to open. We can then see where we are out of balance and repeat the process.
            </p>
            <p>
              This journey is not linear. It is fluid and always changing. Through awareness and trust, we learn to move
              with it — living from the body’s intelligence, the mind’s clarity, and the heart’s wisdom.
            </p>
            <p className="text-deep-reef font-medium">
              When alignment, stability, and stillness come together, we experience a sense of coming home — a deep
              feeling of safety, love, and presence within ourselves.
            </p>
          </div>
          <div className="bg-white/70 rounded-2xl p-6 md:p-8 shadow-sm border border-warm-sand/20">
            <p className="font-rustique text-2xl text-dark-kakao mb-4">How it works</p>
            <p className="font-inter text-dark-kakao/80 leading-relaxed">
              We return to the body, listen to the mind, and let the heart lead. Each session is a grounded invitation
              into awareness, supported by consistency and care.
            </p>
          </div>
        </div>
      </Section>

      <Section spacing="lg" centered texture="texture-3" divider>
        <h2 className="font-rustique text-3xl md:text-4xl text-dark-kakao mb-6">
          How I work
        </h2>
        <ProcessSteps steps={content.approach.process} />
        <div className="max-w-3xl mx-auto mt-10 space-y-4 font-inter text-lg text-dark-kakao/80 leading-relaxed">
          <p>
            I start working with my clients wherever they feel safe right now. It’s not my goal to push boundaries or
            decide what the next step should be. I trust that when safety and connection are present, transformation
            begins to unfold in its own perfect timing.
          </p>
          <p>
            You don’t need to know what’s wrong or why something feels off. We explore every layer of being through
            movement, conversation, and awareness so misalignment can reveal itself — even the unconscious aspects.
          </p>
          <p>
            When the body feels safe and capable, the mind softens, and the heart begins to open. Layer by layer,
            awareness deepens and new possibilities appear.
          </p>
        </div>
      </Section>

      <Section spacing="lg" background="warm-sand" texture="fabric-clay" centered divider>
        <h2 className="font-rustique text-3xl md:text-4xl text-dark-kakao mb-6">
          Ready to begin?
        </h2>
        <p className="font-inter text-lg text-dark-kakao/80 max-w-2xl mx-auto mb-8">
          Book a discovery call to explore the most supportive path for you.
        </p>
        <Button href="/work-with-me" variant="primary" size="lg">
          {content.cta.primary}
        </Button>
      </Section>
    </>
  )
}
