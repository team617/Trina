import Reveal from '@/components/ui/Reveal'

interface HeadingBlockProps {
  title: string
  subtitle?: string
  eyebrow?: string
  align?: 'left' | 'center'
}

export default function HeadingBlock({
  title,
  subtitle,
  eyebrow,
  align = 'left',
}: HeadingBlockProps) {
  const alignment = align === 'center' ? 'text-center' : 'text-left'

  return (
    <Reveal>
      <div className={`space-y-4 ${alignment}`}>
        {eyebrow && (
          <p className="font-inter text-xs uppercase tracking-[0.35em] text-soft-clay">
            {eyebrow}
          </p>
        )}
        <h2 className="font-rustique text-3xl md:text-4xl text-dark-kakao">
          {title}
        </h2>
        {subtitle && (
          <p className="font-inter text-lg text-dark-kakao/80 max-w-3xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    </Reveal>
  )
}
