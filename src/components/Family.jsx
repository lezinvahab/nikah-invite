import { wedding } from '../config/wedding'
import { Divider } from './Ornaments'
import Reveal from './Reveal'

export default function Family() {
  const { family } = wedding

  if (!family.enabled) return null

  return (
    <section id="family" className="section" aria-label="Families">
      <div className="container">
        <Reveal>
          <div className="heading-center">
            <p className="eyebrow">{family.heading}</p>
            <Divider />
          </div>
        </Reveal>

        <div className="family__grid">
          <Reveal delay={100} className="family__block">
            <h3 className="family__title">{family.bride.title}</h3>
            <p className="family__names">{family.bride.names}</p>
          </Reveal>

          <Reveal delay={200} className="family__block">
            <h3 className="family__title">{family.groom.title}</h3>
            <p className="family__names">{family.groom.names}</p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}