import { createMetadata } from '@/lib/metadata'
import { content } from '@/lib/content'
import Hero from '@/components/ui/Hero'
import Section from '@/components/ui/Section'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import Pillar from '@/components/ui/Pillar'
import FAQ from '@/components/ui/FAQ'
import BenefitGrid from '@/components/ui/BenefitGrid'
import ProcessSteps from '@/components/ui/ProcessSteps'
import Testimonials from '@/components/ui/Testimonials'
import Image from 'next/image'

export const metadata = createMetadata({
  title: content.seo.pages.home.title,
  description: content.seo.pages.home.description,
  path: content.seo.pages.home.path,
})

export default function Home() {
  const benefits = [
    {
      title: 'Grounded in your body',
      description: 'Build a steady relationship with movement, breath, and presence.',
    },
    {
      title: 'Clear in your mind',
      description: 'Create space for clarity, softer self-talk, and meaningful choices.',
    },
    {
      title: 'Led by your heart',
      description: 'Reconnect with what matters and move forward with trust.',
    },
  ]

  return (
    <>
      <Hero
        title={content.coreMessage.primary}
        subtitle={content.coreMessage.secondary}
        eyebrow="Integrative Alignment Guide"
        texture="fabric-white-coral"
        centered
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button href="/work-with-me" variant="primary" size="lg">
            {content.cta.primary}
          </Button>
          <Button href="/services" variant="outline" size="lg">
            {content.cta.secondary}
          </Button>
        </div>
      </Hero>

      <Section spacing="lg" texture="texture-2" textureOpacity="medium">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="font-inter text-lg text-dark-kakao/80 leading-relaxed">
              Many people feel disconnected and out of alignment with themselves, leading to anxiety and a sense of
              unfulfillment. This work begins by listening — to the body, the mind, and the quiet pull of the heart.
            </p>
            <p className="font-inter text-lg text-dark-kakao/80 leading-relaxed">
              When we create alignment on all levels, we build a foundation where ease, clarity, and joy can naturally
              arise. Not through force, but through presence, care, and steady practice.
            </p>
            <div className="flex items-center gap-4">
              <Button href="/approach" variant="outline">
                {content.cta.tertiary}
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-6 -left-6 h-24 w-24 rounded-full bg-soft-sea/40" />
            <div className="relative overflow-hidden rounded-2xl border border-warm-sand/30 bg-white/60 p-6">
              <Image
                src="/textures/fabric-white-coral.jpg"
                alt="Soft fabric texture"
                width={600}
                height={600}
                className="rounded-xl object-cover"
              />
              <p className="font-rustique text-xl text-dark-kakao mt-6">
                {content.quotes.comeAsYouAre}
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section spacing="lg" background="warm-sand" texture="fabric-sand" centered>
        <h2 className="font-rustique text-3xl md:text-4xl text-dark-kakao mb-6">
          What alignment can feel like
        </h2>
        <BenefitGrid items={benefits} />
      </Section>

      <Section
        title="How we work together"
        subtitle="Three entry points to meet you where you are — from gentle exploration to deep transformation."
        spacing="lg"
        texture="texture-1"
        centered={false}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
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
        title="Your body is a doorway"
        subtitle="Alignment, stability, and stillness are a continuous movement — a spiral that supports every level of your being."
        spacing="lg"
        background="warm-sand"
        texture="fabric-white-coral"
        centered={false}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {content.brandPillars.map((pillar) => (
            <Pillar key={pillar.name} {...pillar} />
          ))}
        </div>
      </Section>

      <Section spacing="lg" centered texture="texture-3">
        <h2 className="font-rustique text-3xl md:text-4xl text-dark-kakao mb-6">
          A simple, supportive process
        </h2>
        <ProcessSteps steps={content.approach.process} />
      </Section>

      {content.testimonials.enabled && content.testimonials.items.length > 0 && (
        <Section
          title="What clients are saying"
          spacing="lg"
          background="warm-sand"
          centered={false}
        >
          <Testimonials items={content.testimonials.items} />
        </Section>
      )}

      <Section spacing="lg" background="warm-sand" texture="fabric-clay" centered>
        <div className="max-w-3xl mx-auto space-y-6 text-center">
          <Image
            src="/illustrations/quote-spiral-1.svg"
            alt="Spiral quote illustration"
            width={120}
            height={120}
            className="mx-auto"
          />
          <blockquote className="font-rustique text-3xl md:text-4xl text-soft-clay leading-tight">
            “{content.quotes.misalignment}”
          </blockquote>
        </div>
      </Section>

      <Section title="Questions you might have" spacing="lg" centered={false}>
        <div className="max-w-3xl mx-auto">
          <FAQ items={content.faqs.general} />
        </div>
      </Section>

      <Section spacing="lg" background="warm-sand" centered>
        <h2 className="font-rustique text-3xl md:text-4xl text-dark-kakao mb-6">
          Ready to begin?
        </h2>
        <p className="font-inter text-lg text-dark-kakao/80 max-w-2xl mx-auto mb-8 leading-relaxed">
          Come as you are, with whatever brings you here. Let’s explore where you are and discover the next step.
        </p>
        <Button href="/work-with-me" variant="primary" size="lg">
          {content.cta.primary}
        </Button>
      </Section>
    </>
  )
}
