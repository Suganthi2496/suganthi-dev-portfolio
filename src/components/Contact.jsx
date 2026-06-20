import { profile } from '../data/portfolio'
import Reveal from './Reveal'

export default function Contact() {
  return (
    <section className="section section--alt" id="contact">
      <div className="container">
        <Reveal className="contact">
          <div className="section__head section__head--center">
            <span className="section__kicker">06 / Contact</span>
            <h2 className="section__title">Let's build something reliable</h2>
            <p className="section__sub">
              Open to backend &amp; full-stack opportunities. I usually respond within a day.
            </p>
          </div>

          <div className="contact__grid">
            <a className="contact__item" href={`mailto:${profile.email}`}>
              <span className="contact__ico">✉️</span>
              <span className="contact__k">Email</span>
              <span className="contact__v">{profile.email}</span>
            </a>
            <a className="contact__item" href={`tel:${profile.phoneHref}`}>
              <span className="contact__ico">📞</span>
              <span className="contact__k">Phone</span>
              <span className="contact__v">{profile.phone}</span>
            </a>
            <a className="contact__item" href={profile.linkedin} target="_blank" rel="noopener">
              <span className="contact__ico">💼</span>
              <span className="contact__k">LinkedIn</span>
              <span className="contact__v">{profile.linkedinLabel}</span>
            </a>
            <div className="contact__item contact__item--static">
              <span className="contact__ico">📍</span>
              <span className="contact__k">Location</span>
              <span className="contact__v">{profile.location}</span>
            </div>
          </div>

          <div className="contact__cta">
            <a href={`mailto:${profile.email}`} className="btn btn--primary btn--lg">
              Send me an email
            </a>
            <a href={profile.resume} className="btn btn--ghost btn--lg" download>
              Download Resume
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
