import { createMetadata } from '@/lib/metadata'
import { content } from '@/lib/content'
import { getBreadcrumbSchema } from '@/lib/structured-data'
import PageHeader from '@/components/ui/PageHeader'
import Section from '@/components/ui/Section'
import Button from '@/components/ui/Button'
import Image from 'next/image'

export const metadata = createMetadata({
  title: content.seo.pages.about.title,
  description: content.seo.pages.about.description,
  path: content.seo.pages.about.path,
})

export default function AboutPage() {
  const breadcrumbs = getBreadcrumbSchema([
    { name: 'Home', url: content.site.url },
    { name: 'About', url: `${content.site.url}/about` },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />

      <PageHeader
        title={content.about.heroTitle}
        subtitle={content.about.heroSubtitle}
        eyebrow="About Trina"
      />

      <Section spacing="lg" texture="texture-2" textureOpacity="medium" divider>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="font-rustique text-3xl md:text-4xl text-dark-kakao">
              I never felt right where I was.
            </h2>
            <p className="font-inter text-lg leading-relaxed text-dark-kakao/80">
              {content.about.bio}
            </p>
            <p className="font-inter text-lg leading-relaxed text-dark-kakao/80">
              <strong>One night,</strong> as we were flying back from Greece, I sat alone in the quiet cabin and looked
              out into a sky full of stars. In that stillness, something inside me became clear.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -top-6 right-6 h-24 w-24 rounded-full bg-soft-sea/40" />
            <div className="relative overflow-hidden rounded-2xl border border-warm-sand/30 bg-white/70 p-6">
              <Image
                src="/textures/fabric-clay.jpg"
                alt="Warm textured fabric"
                width={600}
                height={720}
                className="rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </Section>

      <Section
        title="The turning point"
        spacing="lg"
        background="warm-sand"
        texture="fabric-sand"
        centered={false}
        divider
      >
        <div className="max-w-4xl mx-auto space-y-6 font-inter text-lg text-dark-kakao/80 leading-relaxed">
          <p>
            I realised that I needed to dedicate my life to something bigger, something that truly mattered. Not on the
            outside but on the inside, on the level of the heart. That was what I had been longing for so deeply myself.
          </p>
          <p>
            That night, I decided to take responsibility for my life. I left my job and began training as a yoga teacher.
          </p>
        </div>
      </Section>

      <Section spacing="lg" texture="texture-2" textureOpacity="medium" divider>
        <div className="max-w-4xl mx-auto space-y-6 font-inter text-lg text-dark-kakao/80 leading-relaxed">
          <h2 className="font-rustique text-3xl md:text-4xl text-dark-kakao">
            The journey inward
          </h2>
          <p>
            It was the beginning of a long journey inward. Over the last three decades, I discovered that aligning the
            posture not only influences the body, it shapes the way we live.
          </p>
          <p className="font-semibold text-dark-kakao">
            When we create stability in the body, we find freedom in the mind and openness in the heart.
          </p>
          <p>
            This understanding, together with the beauty of life and the birth of my two children, sparked my curiosity
            to explore different modalities that support the body, mind, and heart — and to help people transform on
            every level.
          </p>
        </div>
      </Section>

      <Section spacing="lg" background="warm-sand" texture="fabric-sand" centered={false} divider>
        <div className="max-w-4xl mx-auto space-y-6 font-inter text-lg text-dark-kakao/80 leading-relaxed">
          <h2 className="font-rustique text-3xl md:text-4xl text-dark-kakao">
            My vision
          </h2>
          <p>
            Many people today feel disconnected and out of alignment with themselves, leading to states of anxiety and
            unfulfillment. When we create alignment on all levels — body, mind, and heart — we can build a strong
            foundation from which ease, joy, and clarity can naturally arise.
          </p>
          <p>
            My vision is to support a global shift, one person at a time, guiding us to become heart-led leaders of our
            own lives.
          </p>
        </div>
      </Section>

      <Section
        title="My values — my compass"
        subtitle="The principles that guide how I hold space and how we move through this work together."
        spacing="lg"
        texture="texture-3"
        centered={false}
        divider
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {content.about.values.map((value) => (
            <div key={value.title} className="space-y-3">
              <h3 className="font-rustique text-2xl text-dark-kakao">
                {value.title}
              </h3>
              <p className="font-inter text-dark-kakao/80 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section spacing="lg" background="warm-sand" texture="fabric-kakao" textureOpacity="none" centered divider>
        <blockquote className="max-w-3xl mx-auto text-center">
          <Image
            src="/illustrations/quote-spiral-2.svg"
            alt="Spiral quote illustration"
            width={200}
            height={200}
            className="mx-auto mb-6"
          />
          <p className="font-rustique text-3xl md:text-4xl text-white-coral leading-tight">
            “{content.quotes.capability}”
          </p>
          <cite className="mt-4 block font-inter text-sm text-white-coral/80">— Trina Requena</cite>
        </blockquote>
      </Section>

      <Section spacing="lg" centered texture="texture-3" divider>
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="font-rustique text-3xl md:text-4xl text-dark-kakao">
            Let’s connect
          </h2>
          <p className="font-inter text-lg text-dark-kakao/80 leading-relaxed">
            I’d love to hear where you are on your journey and explore how we might work together.
          </p>
          <Button href="/contact" variant="primary">
            Book your onboarding call
          </Button>
        </div>
      </Section>
    </>
  )
}
