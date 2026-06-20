import { education } from '../data/portfolio'
import Reveal from './Reveal'

export default function Education() {
  return (
    <section className="section" id="education">
      <div className="container">
        <Reveal className="section__head">
          <span className="section__kicker">05 / Education</span>
          <h2 className="section__title">Academic background</h2>
        </Reveal>

        <div className="edu">
          {education.map((e) => (
            <Reveal as="article" className="edu__card" key={e.title}>
              <span className="edu__year">{e.year}</span>
              <h3>{e.title}</h3>
              <p>{e.place}</p>
              <span className="edu__score">{e.score}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
