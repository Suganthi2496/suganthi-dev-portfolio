import { projects } from '../data/portfolio'
import Reveal from './Reveal'

function ProjectCard({ project }) {
  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--mx', e.clientX - r.left + 'px')
    e.currentTarget.style.setProperty('--my', e.clientY - r.top + 'px')
  }
  return (
    <article className="project" onMouseMove={onMove}>
      <div className="project__icon">{project.icon}</div>
      <h3 className="project__title">{project.title}</h3>
      <p className="project__tagline">{project.tagline}</p>
      <ul className="project__points">
        {project.points.map((pt, i) => (
          <li key={i} dangerouslySetInnerHTML={{ __html: pt }} />
        ))}
      </ul>
      <div className="project__tags">
        {project.tags.map((t) => (
          <span key={t}>{t}</span>
        ))}
      </div>
    </article>
  )
}

export default function Projects() {
  return (
    <section className="section section--alt" id="projects">
      <div className="container">
        <Reveal className="section__head">
          <span className="section__kicker">04 / Projects</span>
          <h2 className="section__title">Selected work</h2>
          <p className="section__sub">Production systems I designed, built, and scaled.</p>
        </Reveal>

        <div className="projects">
          {projects.map((p) => (
            <Reveal key={p.title}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
