import { useEffect, useState } from 'react'
import { profile, education } from '../data.js'
import { Icon } from './ui.jsx'

const code = `describe('orders › checkout', () => {
  it('persists what the API confirms', async () => {
    const order = await seed.order({ items: 2 })

    const response = await api.checkout(order.id)
    const event = await kafka.next('order.paid', order.id)
    const record = await db.orders.find(order.id)

    // the test computes the expected value
    expect(record.total).toBe(calc.total(order.items))
    expect(event.status).toBe(response.status)
  })
})`

const KW = /\b(describe|it|async|await|const|expect|toBe)\b/

function highlight(line) {
  const out = []
  const re = /(\/\/.*$)|('[^']*')|(\b[A-Za-z_]\w*\b)|(\s+)|([^\sA-Za-z_']+)/g
  let m, k = 0
  while ((m = re.exec(line))) {
    const [t] = m
    let cls = ''
    if (m[1]) cls = 'tk-com'
    else if (m[2]) cls = 'tk-str'
    else if (m[3]) {
      if (KW.test(t)) cls = 'tk-kw'
      else if (/^[A-Z]/.test(t)) cls = 'tk-cls'
      else if (line[re.lastIndex] === '(') cls = 'tk-fn'
    } else if (m[5]) cls = 'tk-pun'
    out.push(cls ? <span key={k++} className={cls}>{t}</span> : t)
  }
  return out
}

function CodeWindow() {
  const lines = code.split('\n')
  return (
    <div className="code-wrap">
      <div className="code spot">
        <div className="code-bar">
          <span className="dots"><i /><i /><i /></span>
          <span className="code-tab active">checkout.spec.ts</span>
          <span className="code-tab">validations.ts</span>
        </div>
        <pre className="code-body"><code>
          {lines.map((l, i) => (
            <span className="code-line" key={i} style={{ animationDelay: `${300 + i * 70}ms` }}>
              <span className="ln">{i + 1}</span>{highlight(l)}{'\n'}
            </span>
          ))}
        </code></pre>
        <div className="code-status">
          <span><i className="ok-dot" /> 2 passed</span>
          <span className="dim">TypeScript</span>
        </div>
      </div>
      <div className="float-chip fc1"><Icon name="check" size={16} /> API = evento = banco</div>
      <div className="float-chip fc2"><Icon name="flow" size={16} /> Kafka · BullMQ</div>
    </div>
  )
}

function Rotator({ words }) {
  const [i, setI] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setI(v => (v + 1) % words.length), 2600)
    return () => clearInterval(id)
  }, [words.length])
  return (
    <span className="rotator" aria-live="polite">
      <span key={i} className="rotator-word"><span className="grad-text">{words[i]}</span></span>
    </span>
  )
}

export default function Hero() {
  const pos = education.find(e => e.current)
  return (
    <section className="hero" id="topo">
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="hero-id">
            <span className="avatar avatar-lg">
              <img src="lara.jpg" alt={`Foto de ${profile.first}`} width="80" height="80" />
            </span>
            {pos && (
              <a href="#sobre" className="pill-badge">
                <span className="pill-new">Pós</span>
                Engenharia de Qualidade e Teste de Software
                <span className="pill-arrow">→</span>
              </a>
            )}
          </div>
          <h1 className="hero-title">
            <span className="hero-first">{profile.first}</span>
            <span className="grad-text">{profile.last}</span>
          </h1>
          <p className="hero-role">
            {profile.role} especializada em <Rotator words={profile.rotating} />
          </p>
          <p className="hero-lead">{profile.headline}</p>
          <div className="hero-cta">
            <a href="#projetos" className="btn btn-glow">Ver projetos <Icon name="arrow" size={16} /></a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="btn btn-glass"><Icon name="github" size={17} /> GitHub</a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-glass"><Icon name="linkedin" size={17} /> LinkedIn</a>
          </div>
        </div>
        <CodeWindow />
      </div>
    </section>
  )
}
