export interface PricingItem {
  title: string
  description: string
  note?: string
}

export default function PricingCards({ items }: { items: PricingItem[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {items.map((item) => (
        <div key={item.title} className="bg-white/70 rounded-lg p-6 md:p-8 shadow-sm border border-warm-sand/20">
          <h3 className="font-rustique text-2xl text-dark-kakao mb-3">
            {item.title}
          </h3>
          <p className="font-inter text-dark-kakao/80 leading-relaxed">
            {item.description}
          </p>
          {item.note && (
            <p className="font-inter text-sm text-dark-kakao/60 mt-4">
              {item.note}
            </p>
          )}
        </div>
      ))}
    </div>
  )
}
