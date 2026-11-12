import { openSourceProjects } from '../data.js'
import { Reveal, SectionHead, Icon } from './ui.jsx'

function ProjectCard({ p, delay }) {
  return (
    <Reveal className={`proj-cell ${p.featured ? 'featured' : ''}`} delay={delay}>
      <article className="card spot proj">
        <div className="proj-top">
          <span className="proj-label mono">{p.label}</span>
        </div>
        <h3>{p.title}</h3>
        <p>{p.text}</p>
        {p.modules && (
          <>
            <p className="modules-title">// {p.modulesTitle ?? 'módulos cobertos'}</p>
            <ul className="modules">{p.modules.map(m => <li key={m}>{m}</li>)}</ul>
          </>
        )}
        {p.results && (
          <dl className="proj-results">
            {p.results.map(r => (
              <div key={r.label}><dt className="grad-text">{r.value}</dt><dd>{r.label}</dd></div>
            ))}
          </dl>
        )}
        <ul className="chips">{p.stack.map(s => <li key={s}>{s}</li>)}</ul>
        <div className="proj-links">
          {p.links.map(link => (
            <a key={link.url} className="proj-link" href={link.url} target="_blank" rel="noopener noreferrer">
              {link.label} <Icon name="arrow" size={14} />
            </a>
          ))}
        </div>
      </article>
    </Reveal>
  )
}

export default function Projects() {
  return (
    <section id="projetos" className="section">
      <div className="container">
        <SectionHead
          tag="projetos"
          title={<>Projetos de <span className="grad-text">qualidade e testes</span></>}
          intro="Projetos abertos, com código, CI e relatórios públicos. Cada um roda no GitHub Actions e confere o resultado também no backend: banco, eventos, fila ou API."
        />
        <div className="proj-grid">
          {openSourceProjects.map((p, i) => <ProjectCard key={p.id} p={p} delay={(i % 3) * 70} />)}
        </div>
      </div>
    </section>
  )
}
