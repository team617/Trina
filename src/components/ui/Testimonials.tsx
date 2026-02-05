export interface TestimonialItem {
  quote: string
  name: string
  context?: string
}

export default function Testimonials({ items }: { items: ReadonlyArray<TestimonialItem> }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {items.map((item) => (
        <figure key={`${item.name}-${item.quote.slice(0, 10)}`} className="bg-white/70 rounded-2xl p-6 md:p-8 shadow-sm border border-warm-sand/20">
          <blockquote className="font-rustique text-2xl text-dark-kakao leading-snug mb-4">
            “{item.quote}”
          </blockquote>
          <figcaption className="font-inter text-sm text-dark-kakao/70">
            {item.name}{item.context ? ` · ${item.context}` : ''}
          </figcaption>
        </figure>
      ))}
    </div>
  )
}
