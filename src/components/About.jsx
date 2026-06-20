import { about } from '../data/portfolio'
import Reveal from './Reveal'

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <Reveal className="section__head">
          <span className="section__kicker">01 / About</span>
          <h2 className="section__title">Backend-first, full-stack capable</h2>
        </Reveal>

        <div className="about">
          <Reveal className="about__text">
            {about.paragraphs.map((p, i) => (
              <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
            ))}
            <ul className="about__highlights">
              {about.highlights.map((h) => (
                <li key={h.text}>
                  <span>{h.icon}</span> {h.text}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal as="aside" className="about__card">
            {about.facts.map((f, i) => (
              <div
                key={f.k}
                className={`about__card-row ${i === about.facts.length - 1 ? 'about__card-row--last' : ''}`}
              >
                <span>{f.k}</span>
                <strong className={f.accent ? 'avail' : ''}>{f.v}</strong>
              </div>
            ))}
            <a href="#contact" className="btn btn--primary btn--block">Let's talk →</a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
