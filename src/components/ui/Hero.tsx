import { ReactNode } from 'react'
import Image from 'next/image'
import Container from '@/components/ui/Container'

interface HeroProps {
  title: string
  subtitle?: string
  children?: ReactNode
  background?: 'white-coral' | 'warm-sand' | 'soft-sea'
  centered?: boolean
  eyebrow?: string
  texture?: 'texture-1' | 'texture-2' | 'texture-3' | 'fabric-clay' | 'fabric-white-coral' | 'fabric-sand' | 'fabric-kakao' | 'water-wash'
  imageSrc?: string
  imageAlt?: string
}

export default function Hero({
  title,
  subtitle,
  children,
  background = 'white-coral',
  centered = true,
  eyebrow,
  texture,
  imageSrc,
  imageAlt = '',
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
    'water-wash': 'bg-water-wash',
  }

  const overlayClass = imageSrc
    ? 'bg-white-coral/70'
    : texture === 'water-wash'
      ? 'bg-white-coral/35'
      : 'bg-white-coral/60'

  return (
    <section className={`relative overflow-hidden ${bgColors[background]} py-24 md:py-32 lg:py-40`}>
      {imageSrc && (
        <div className="absolute inset-0">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>
      )}
      {texture && (
        <>
          <div className={`absolute inset-0 ${textureClasses[texture]} opacity-50`} aria-hidden />
          <div className={`absolute inset-0 ${overlayClass}`} aria-hidden />
        </>
      )}
      {!texture && imageSrc && (
        <div className={`absolute inset-0 ${overlayClass}`} aria-hidden />
      )}
      <Container className={centered ? 'text-center' : ''}>
        {eyebrow && (
          <p className="font-inter text-xs uppercase tracking-[0.35em] text-soft-clay mb-5">
            {eyebrow}
          </p>
        )}
        <h1 className="font-rustique text-4xl md:text-6xl lg:text-7xl text-dark-kakao mb-6 text-balance">
          {title}
        </h1>
        {subtitle && (
          <p className="font-inter text-lg md:text-xl text-dark-kakao/90 max-w-3xl mx-auto mb-10 text-balance">
            {subtitle}
          </p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </Container>
    </section>
  )
}
