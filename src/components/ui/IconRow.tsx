import Reveal from '@/components/ui/Reveal'

interface IconRowItem {
  title: string
  description: string
}

export default function IconRow({ items }: { items: IconRowItem[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {items.map((item) => (
        <Reveal key={item.title}>
          <div className="rounded-2xl border border-warm-sand/20 bg-white/70 p-6 md:p-8 shadow-sm">
            <div className="mb-4 h-10 w-10 rounded-full bg-soft-sea/40" aria-hidden />
            <h3 className="font-rustique text-2xl text-dark-kakao mb-2">
              {item.title}
            </h3>
            <p className="font-inter text-dark-kakao/80 leading-relaxed">
              {item.description}
            </p>
          </div>
        </Reveal>
      ))}
    </div>
  )
}
