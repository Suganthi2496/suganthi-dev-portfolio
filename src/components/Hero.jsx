import { profile, stats } from '../data/portfolio'
import { useCountUp } from '../hooks/useCountUp'

function Stat({ value, suffix, label }) {
  const [ref, current] = useCountUp(value)
  return (
    <div className="stat">
      <span className="stat__num" ref={ref}>{current}</span>
      {suffix && <span className="stat__plus">{suffix}</span>}
      <span className="stat__label">{label}</span>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__grid"></div>
        <div className="hero__glow hero__glow--1"></div>
        <div className="hero__glow hero__glow--2"></div>
      </div>

      <div className="container hero__inner">
        <p className="hero__eyebrow reveal is-visible">
          <span className="status-dot"></span> Available for backend &amp; full-stack roles
        </p>

        <h1 className="hero__title reveal is-visible">
          Hi, I'm Suganthi&nbsp;S.<br />
          I build <span className="grad-text">scalable backends</span><br className="hero__br" />
          that don't break under load.
        </h1>

        <p className="hero__subtitle reveal is-visible">
          Senior Backend Developer with <strong>7+ years</strong> designing high-performance
          microservices, REST APIs, and real-time systems in <strong>Python (FastAPI)</strong> &amp;{' '}
          <strong>PHP</strong>. I also ship full-stack features with <strong>React.js</strong> &amp;{' '}
          <strong>Next.js</strong>.
        </p>

        <div className="hero__roles reveal is-visible">
          <span className="role-chip role-chip--primary">⚙️ Backend Developer</span>
          <span className="role-chip">🖥️ Full Stack Developer</span>
        </div>

        <div className="hero__cta reveal is-visible">
          <a href="#projects" className="btn btn--primary">View My Work</a>
          <a href={profile.resume} className="btn btn--ghost" download>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download Résumé
          </a>
        </div>

        <div className="hero__stats reveal is-visible">
          {stats.map((s) => (
            <Stat key={s.label} {...s} />
          ))}
        </div>
      </div>

      <a href="#about" className="hero__scroll" aria-label="Scroll down">
        <span className="hero__mouse"></span>
      </a>
    </section>
  )
}
