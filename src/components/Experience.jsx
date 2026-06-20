import { experience } from '../data/portfolio'
import Reveal from './Reveal'

export default function Experience() {
  return (
    <section className="section section--alt" id="experience">
      <div className="container">
        <Reveal className="section__head">
          <span className="section__kicker">02 / Experience</span>
          <h2 className="section__title">Where I've worked</h2>
        </Reveal>

        <div className="timeline">
          {experience.map((job) => (
            <Reveal as="article" className="tl" key={job.role + job.period}>
              <div className="tl__dot"></div>
              <div className="tl__card">
                <div className="tl__top">
                  <h3 className="tl__role">{job.role}</h3>
                  <span className="tl__period">{job.period}</span>
                </div>
                <p className="tl__company">
                  {job.company} {job.note && <span>{job.note}</span>} · {job.place}
                </p>
                <ul className="tl__points">
                  {job.points.map((pt, i) => (
                    <li key={i} dangerouslySetInnerHTML={{ __html: pt }} />
                  ))}
                </ul>
                <div className="tl__tags">
                  {job.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
