import { ReactNode } from 'react'

export interface BenefitItem {
  title: string
  description: string
  icon?: ReactNode
}

export default function BenefitGrid({ items }: { items: BenefitItem[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {items.map((item) => (
        <div
          key={item.title}
          className="bg-white/70 rounded-lg p-6 md:p-8 shadow-sm border border-warm-sand/20"
        >
          {item.icon && <div className="text-3xl mb-4">{item.icon}</div>}
          <h3 className="font-rustique text-2xl text-dark-kakao mb-3">
            {item.title}
          </h3>
          <p className="font-inter text-dark-kakao/80 leading-relaxed">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  )
}
