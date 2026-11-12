import { profile, metrics, competencies, education } from '../data.js'
import { Reveal, SectionHead, Counter, Icon } from './ui.jsx'

export default function About() {
  return (
    <section id="sobre" className="section">
      <div className="container">
        <SectionHead tag="sobre" title={<>Qualidade que vai <span className="grad-text">além da tela</span></>} />

        <div className="bento">
          <Reveal className="card spot b-summary">
            <p className="card-kicker">// abordagem</p>
            <p className="summary">{profile.summary}</p>
          </Reveal>

          {metrics.map((m, i) => (
            <Reveal key={m.label} className="card spot b-metric" delay={i * 60}>
              <span className="metric-value grad-text"><Counter value={m.value} suffix={m.suffix} /></span>
              <span className="metric-label">{m.label}</span>
              <span className="metric-detail">{m.detail}</span>
            </Reveal>
          ))}

          <Reveal className="card spot b-edu">
            <p className="card-kicker"><Icon name="grad" size={16} /> formação</p>
            <ul className="edu">
              {education.map(e => (
                <li key={e.degree} className={e.current ? 'current' : ''}>
                  <span className={`edu-status ${e.current ? 'live' : ''}`}>{e.current && <i />}{e.period}</span>
                  <strong>{e.degree}</strong>
                  {e.school && <span className="dim">{e.school}</span>}
                </li>
              ))}
            </ul>
          </Reveal>


          {competencies.map((c, i) => (
            <Reveal key={c.title} className="card spot b-comp" delay={i * 60}>
              <span className="icon-box"><Icon name={c.icon} /></span>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
