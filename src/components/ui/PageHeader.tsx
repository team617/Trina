import Hero from '@/components/ui/Hero'

interface PageHeaderProps {
  title: string
  subtitle?: string
  eyebrow?: string
  texture?: 'texture-1' | 'texture-2' | 'texture-3' | 'fabric-clay' | 'fabric-white-coral' | 'fabric-sand' | 'fabric-kakao' | 'water-wash'
}

export default function PageHeader({ title, subtitle, eyebrow, texture = 'fabric-white-coral' }: PageHeaderProps) {
  return (
    <Hero
      title={title}
      subtitle={subtitle}
      eyebrow={eyebrow}
      texture={texture}
      centered
    />
  )
}
