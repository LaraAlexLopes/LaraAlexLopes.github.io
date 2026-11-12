import { stack } from '../data.js'

export default function Marquee() {
  const items = [...stack, ...stack]
  return (
    <div className="marquee" aria-label="Tecnologias">
      <div className="marquee-track">
        {items.map((s, i) => (
          <span key={i} className="marquee-item" aria-hidden={i >= stack.length}>
            <span className="marquee-dot" />{s}
          </span>
        ))}
      </div>
    </div>
  )
}
