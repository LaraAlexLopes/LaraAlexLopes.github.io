import { useState } from 'react'
import { profile } from '../data.js'
import { Reveal, Icon } from './ui.jsx'

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (e) { /* sem acesso ao clipboard: o link de e-mail continua disponível */ }
  }

  return (
    <section id="contato" className="section">
      <div className="container">
        <Reveal className="cta spot">
          <div className="cta-glow" aria-hidden="true" />
          <span className="avatar avatar-md cta-avatar">
            <img src="lara.jpg" alt={`Foto de ${profile.first}`} width="88" height="88" loading="lazy" />
          </span>
          <span className="sec-tag"><span className="sec-tag-dot" />contato</span>
          <h2>Vamos <span className="grad-text">conversar?</span></h2>
          <p>Disponível para oportunidades em engenharia de qualidade, automação de testes, testes de API e de performance.</p>
          <div className="cta-actions">
            <a href={`mailto:${profile.email}`} className="btn btn-glow"><Icon name="mail" size={17} /> Enviar e-mail</a>
            <button className="btn btn-glass" onClick={copy}>
              <Icon name={copied ? 'check' : 'copy'} size={17} /> {copied ? 'Copiado!' : profile.email}
            </button>
          </div>
          <div className="cta-social">
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer"><Icon name="linkedin" size={18} /> linkedin.com/in/laraalexandralopes</a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer"><Icon name="github" size={18} /> github.com/LaraAlexLopes</a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
