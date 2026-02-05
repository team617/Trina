import Reveal from '@/components/ui/Reveal'

interface CalloutProps {
  title: string
  body: string
}

export default function Callout({ title, body }: CalloutProps) {
  return (
    <Reveal>
      <div className="rounded-2xl border border-warm-sand/30 bg-white/80 p-6 md:p-8 shadow-sm">
        <h3 className="font-rustique text-2xl text-dark-kakao mb-3">
          {title}
        </h3>
        <p className="font-inter text-dark-kakao/80 leading-relaxed">
          {body}
        </p>
      </div>
    </Reveal>
  )
}
