import { useEffect, useState } from 'react'

const links = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#experiencia', label: 'Experiência' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#stack', label: 'Stack' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
      const y = window.scrollY + 160
      let cur = ''
      links.forEach(l => {
        const el = document.querySelector(l.href)
        if (el && el.offsetTop <= y) cur = l.href
      })
      setActive(cur)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-pill">
        <a href="#topo" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-name">Lara Lopes</span>
          <span className="brand-role">Quality Engineer</span>
        </a>
        <nav className={`nav ${open ? 'open' : ''}`} aria-label="Principal">
          {links.map(l => (
            <a key={l.href} href={l.href} className={active === l.href ? 'active' : ''} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
        </nav>
        <a href="#contato" className="btn btn-glow btn-sm header-cta">Contato</a>
        <button className="menu-btn" onClick={() => setOpen(o => !o)} aria-expanded={open} aria-label="Menu">
          <span className={open ? 'x' : ''} />
        </button>
      </div>
    </header>
  )
}
