import Hero from '@/components/ui/Hero'

interface PageHeaderProps {
  title: string
  subtitle?: string
  eyebrow?: string
}

export default function PageHeader({ title, subtitle, eyebrow }: PageHeaderProps) {
  return (
    <Hero
      title={title}
      subtitle={subtitle}
      eyebrow={eyebrow}
      texture="fabric-white-coral"
      centered
    />
  )
}
