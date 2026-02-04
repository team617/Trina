import { createMetadata } from '@/lib/metadata'
import { content } from '@/lib/content'
import Section from '@/components/ui/Section'
import Hero from '@/components/ui/Hero'

export const metadata = createMetadata({
  title: content.seo.pages.privacy.title,
  description: content.seo.pages.privacy.description,
  path: content.seo.pages.privacy.path,
})

export default function PrivacyPolicyPage() {
  return (
    <>
      <Hero title="Privacy Policy" subtitle="A brief overview of how this site handles your information." centered />

      <Section spacing="lg">
        <div className="max-w-3xl mx-auto space-y-6 font-inter text-dark-kakao/80 leading-relaxed">
          <p>
            This is a placeholder privacy policy. It will be updated with the official legal text once provided.
          </p>
          <p>
            When you submit a form on this site, your information is used only to respond to your inquiry. It is not
            sold or shared.
          </p>
          <p>
            For questions about privacy, please contact {content.contact.email}.
          </p>
        </div>
      </Section>
    </>
  )
}
