interface PillarProps {
  name: string
  body: string
  mind: string
  heart: string
  description: string
}

export default function Pillar({ name, body, mind, heart, description }: PillarProps) {
  return (
    <div className="space-y-4">
      <h3 className="font-rustique text-2xl md:text-3xl text-dark-kakao">{name}</h3>

      <div className="space-y-2">
        <div className="flex items-baseline gap-3">
          <span className="font-rustique text-lg text-soft-clay">Body:</span>
          <span className="font-inter italic text-dark-kakao">{body}</span>
        </div>
        <div className="flex items-baseline gap-3">
          <span className="font-rustique text-lg text-soft-clay">Mind:</span>
          <span className="font-inter italic text-dark-kakao">{mind}</span>
        </div>
        <div className="flex items-baseline gap-3">
          <span className="font-rustique text-lg text-soft-clay">Heart:</span>
          <span className="font-inter italic text-dark-kakao">{heart}</span>
        </div>
      </div>

      <p className="font-inter text-dark-kakao/80 leading-relaxed">
        {description}
      </p>
    </div>
  )
}
