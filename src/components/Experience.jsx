import { experience } from '../data.js'
import { Reveal, SectionHead } from './ui.jsx'

export default function Experience() {
  return (
    <section id="experiencia" className="section">
      <div className="container">
        <SectionHead tag="experiência" title="Experiência profissional" intro="Principais entregas em cada empresa. O currículo completo está disponível mediante contato." />
        <ol className="timeline">
          {experience.map((job, i) => (
            <Reveal as="li" key={job.company} className={`tl-item ${job.current ? 'current' : ''}`} delay={i * 80}>
              <div className="tl-meta">
                <span className="tl-period mono">{job.period}</span>
                <span className="tl-loc dim">{job.location}</span>
              </div>
              <span className="tl-node" aria-hidden="true" />
              <div className="card spot tl-card">
                <div className="tl-head">
                  <h3>{job.company}</h3>
                  {job.current && <span className="live-badge"><i /> atual</span>}
                </div>
                <p className="tl-role">{job.role}</p>
                <ul className="tl-list">
                  {job.highlights.map((h, k) => <li key={k}>{h}</li>)}
                </ul>
                <ul className="chips">{job.stack.map(s => <li key={s}>{s}</li>)}</ul>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
