interface MarqueeProps {
  items: string[]
}

export default function Marquee({ items }: MarqueeProps) {
  const doubled = [...items, ...items]
  return (
    <div className="marquee" aria-hidden>
      <div className="marquee__track">
        {doubled.map((item, index) => (
          <span key={`${item}-${index}`} className="marquee__item">
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
