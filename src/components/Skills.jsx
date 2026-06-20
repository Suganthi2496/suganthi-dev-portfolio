import { featuredSkills, skillGroups } from '../data/portfolio'
import { useInView } from '../hooks/useInView'
import Reveal from './Reveal'

function SkillBar({ label, level }) {
  const [ref, inView] = useInView({ threshold: 0.4 })
  return (
    <div className="bar" ref={ref}>
      <span className="bar__label">{label}</span>
      <span className="bar__track">
        <i style={{ width: inView ? level + '%' : 0 }} />
      </span>
    </div>
  )
}

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <Reveal className="section__head">
          <span className="section__kicker">03 / Skills</span>
          <h2 className="section__title">Technical toolkit</h2>
          <p className="section__sub">Weighted toward the backend, where I do my best work.</p>
        </Reveal>

        <div className="skills">
          <Reveal className="skillcard skillcard--feature">
            <div className="skillcard__head">
              <span className="skillcard__icon">{featuredSkills.icon}</span>
              <h3>{featuredSkills.title}</h3>
              <span className="skillcard__badge">{featuredSkills.badge}</span>
            </div>
            <div className="bars">
              {featuredSkills.bars.map((b) => (
                <SkillBar key={b.label} {...b} />
              ))}
            </div>
          </Reveal>

          {skillGroups.map((group) => (
            <Reveal className="skillcard" key={group.title}>
              <div className="skillcard__head">
                <span className="skillcard__icon">{group.icon}</span>
                <h3>{group.title}</h3>
              </div>
              <div className="chips">
                {group.chips.map((c) => (
                  <span className="chip" key={c}>{c}</span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
