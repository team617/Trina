import { ReactNode } from 'react'
import Container from '@/components/ui/Container'

interface SectionProps {
  children: ReactNode
  title?: string
  subtitle?: string
  background?: 'white-coral' | 'warm-sand' | 'transparent'
  spacing?: 'sm' | 'md' | 'lg'
  centered?: boolean
  id?: string
  texture?: 'texture-1' | 'texture-2' | 'texture-3' | 'fabric-clay' | 'fabric-white-coral' | 'fabric-sand' | 'fabric-kakao'
  textureOpacity?: 'light' | 'medium'
  divider?: boolean
  eyebrow?: string
}

export default function Section({
  children,
  title,
  subtitle,
  background = 'transparent',
  spacing = 'md',
  centered = false,
  id,
  texture,
  textureOpacity = 'light',
  divider = false,
  eyebrow,
}: SectionProps) {
  const bgColors = {
    'white-coral': 'bg-white-coral',
    'warm-sand': 'bg-warm-sand/10',
    'transparent': 'bg-transparent',
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

  const overlayClasses = {
    light: 'bg-white-coral/80',
    medium: 'bg-white-coral/60',
  }

  const spacingStyles = {
    sm: 'py-8 md:py-12',
    md: 'py-12 md:py-16 lg:py-20',
    lg: 'py-16 md:py-24 lg:py-32',
  }

  return (
    <section id={id} className={`relative overflow-hidden ${bgColors[background]} ${spacingStyles[spacing]}`}>
      {texture && (
        <>
          <div className={`absolute inset-0 ${textureClasses[texture]} opacity-40`} aria-hidden />
          <div className={`absolute inset-0 ${overlayClasses[textureOpacity]}`} aria-hidden />
        </>
      )}
      <Container className={centered ? 'text-center' : ''}>
        {divider && (
          <div className="mb-10 flex justify-center">
            <span className="h-px w-16 bg-soft-clay/50" aria-hidden />
          </div>
        )}
        {eyebrow && (
          <p className="font-inter text-xs uppercase tracking-[0.35em] text-soft-clay mb-3">
            {eyebrow}
          </p>
        )}
        {title && (
          <h2 className="font-rustique text-3xl md:text-4xl lg:text-5xl text-dark-kakao mb-4 text-balance">
            {title}
          </h2>
        )}
        {subtitle && (
          <p className="font-inter text-lg text-dark-kakao/70 max-w-3xl mx-auto mb-12 text-balance">
            {subtitle}
          </p>
        )}
        {children}
      </Container>
    </section>
  )
}
