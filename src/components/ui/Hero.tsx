import { ReactNode } from 'react'

interface HeroProps {
  title: string
  subtitle?: string
  children?: ReactNode
  background?: 'white-coral' | 'warm-sand' | 'soft-sea'
  centered?: boolean
  eyebrow?: string
  texture?: 'texture-1' | 'texture-2' | 'texture-3' | 'fabric-clay' | 'fabric-white-coral' | 'fabric-sand' | 'fabric-kakao'
}

export default function Hero({
  title,
  subtitle,
  children,
  background = 'white-coral',
  centered = true,
  eyebrow,
  texture,
}: HeroProps) {
  const bgColors = {
    'white-coral': 'bg-white-coral',
    'warm-sand': 'bg-warm-sand/20',
    'soft-sea': 'bg-soft-sea/10',
  }

  const textureClasses = {
    'texture-1': 'bg-texture-1',
    'texture-2': 'bg-texture-2',
    'texture-3': 'bg-texture-3',
    'fabric-clay': 'bg-texture-fabric-clay',
    'fabric-white-coral': 'bg-texture-fabric-white-coral',
    'fabric-sand': 'bg-texture-fabric-sand',
    'fabric-kakao': 'bg-texture-fabric-kakao',
  }

  return (
    <section className={`relative overflow-hidden ${bgColors[background]} py-16 md:py-24 lg:py-32`}>
      {texture && (
        <>
          <div className={`absolute inset-0 ${textureClasses[texture]} opacity-50`} aria-hidden />
          <div className="absolute inset-0 bg-white-coral/70" aria-hidden />
        </>
      )}
      <div className={`relative container-custom ${centered ? 'text-center' : ''}`}>
        {eyebrow && (
          <p className="font-inter text-xs uppercase tracking-[0.3em] text-soft-clay mb-4">
            {eyebrow}
          </p>
        )}
        <h1 className="font-rustique text-4xl md:text-5xl lg:text-6xl text-dark-kakao mb-6 text-balance">
          {title}
        </h1>
        {subtitle && (
          <p className="font-inter text-lg md:text-xl text-dark-kakao/80 max-w-3xl mx-auto mb-8 text-balance">
            {subtitle}
          </p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  )
}
