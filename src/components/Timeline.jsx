import { wedding } from '../config/wedding'
import { Divider } from './Ornaments'
import Reveal from './Reveal'

export default function Timeline() {
  const { timeline } = wedding

  return (
    <section id="timeline" className="section" aria-label="Event timeline">
      <div className="container">
        <Reveal>
          <div className="heading-center">
            <p className="eyebrow">The evening in store</p>
            <h2 className="section-title">Event Timeline</h2>
            <Divider />
          </div>
        </Reveal>

        <Reveal delay={150}>
          <ol className="timeline">
            {timeline.map((item, i) => (
              <li className="timeline__item" key={i}>
                <span className="timeline__dot" aria-hidden="true" />
                {item.time && <p className="timeline__time">{item.time}</p>}
                <h3 className="timeline__title">{item.title}</h3>
                {item.note && <p className="timeline__note">{item.note}</p>}
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  )
}