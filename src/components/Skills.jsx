import { skills } from '../data.js'
import { Reveal, SectionHead } from './ui.jsx'

export default function Skills() {
  return (
    <section id="stack" className="section">
      <div className="container">
        <SectionHead tag="stack" title="Competências técnicas" />
        <div className="skills">
          {skills.map((s, i) => (
            <Reveal key={s.group} className="card spot skill" delay={(i % 4) * 60}>
              <h3 className="mono">{s.group}</h3>
              <ul className="chips">{s.items.map(it => <li key={it}>{it}</li>)}</ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
