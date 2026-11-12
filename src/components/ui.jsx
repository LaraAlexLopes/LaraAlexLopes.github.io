import { useEffect, useRef, useState } from 'react'

export function useReveal(threshold = 0.12) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el || !('IntersectionObserver' in window)) { setVisible(true); return }
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); io.disconnect() }
    }, { threshold })
    io.observe(el)
    return () => io.disconnect()
  }, [threshold])
  return [ref, visible]
}

export function Reveal({ as: Tag = 'div', className = '', delay = 0, children, ...rest }) {
  const [ref, visible] = useReveal()
  return (
    <Tag ref={ref} className={`reveal ${visible ? 'in' : ''} ${className}`} style={{ transitionDelay: `${delay}ms` }} {...rest}>
      {children}
    </Tag>
  )
}

export function SectionHead({ tag, title, intro }) {
  return (
    <Reveal className="sec-head">
      <span className="sec-tag"><span className="sec-tag-dot" />{tag}</span>
      <h2 className="sec-title">{title}</h2>
      {intro && <p className="sec-intro">{intro}</p>}
    </Reveal>
  )
}

export function Counter({ value, suffix = '' }) {
  const [ref, visible] = useReveal(0.4)
  const [n, setN] = useState(0)
  useEffect(() => {
    if (!visible) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setN(value); return }
    let raf
    const start = performance.now()
    const tick = now => {
      const p = Math.min((now - start) / 1400, 1)
      setN(Math.round(value * (1 - Math.pow(1 - p, 4))))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [visible, value])
  return <span ref={ref}>{n}{n === value ? suffix : ''}</span>
}

// Brilho que segue o mouse em qualquer elemento com a classe .spot
export function useSpotlight() {
  useEffect(() => {
    const onMove = e => {
      document.querySelectorAll('.spot').forEach(el => {
        const r = el.getBoundingClientRect()
        el.style.setProperty('--mx', `${e.clientX - r.left}px`)
        el.style.setProperty('--my', `${e.clientY - r.top}px`)
      })
    }
    window.addEventListener('pointermove', onMove, { passive: true })
    return () => window.removeEventListener('pointermove', onMove)
  }, [])
}

const paths = {
  mobile: <><rect x="7" y="2" width="10" height="20" rx="2.5" /><path d="M11 18h2" /></>,
  api: <><path d="M8 9l-4 3 4 3M16 9l4 3-4 3M13.5 6l-3 12" /></>,
  flow: <><circle cx="5" cy="6" r="2" /><circle cx="19" cy="6" r="2" /><circle cx="12" cy="18" r="2" /><path d="M7 6h10M6 8l5 8.3M18 8l-5 8.3" /></>,
  search: <><circle cx="11" cy="11" r="6.5" /><path d="M20 20l-4.2-4.2" /></>,
  arrow: <path d="M7 17L17 7M9 7h8v8" />,
  github: <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />,
  linkedin: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></>,
  copy: <><rect x="9" y="9" width="12" height="12" rx="2" /><path d="M5 15V5a2 2 0 0 1 2-2h10" /></>,
  check: <path d="M5 12.5l4.5 4.5L19 7.5" />,
  pin: <><path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z" /><circle cx="12" cy="9.5" r="2.5" /></>,
  grad: <><path d="M2 9l10-5 10 5-10 5-10-5z" /><path d="M6 11v5c3 2.5 9 2.5 12 0v-5" /></>,
  globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.5 3 2.5 15 0 18M12 3c-2.5 3-2.5 15 0 18" /></>,
  bug: <><rect x="7" y="8" width="10" height="12" rx="5" /><path d="M9 8a3 3 0 0 1 6 0M3 13h4M17 13h4M4 7l3 2M20 7l-3 2M4 19l3-2M20 19l-3-2" /></>,
}

export function Icon({ name, size = 20 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name]}
    </svg>
  )
}
