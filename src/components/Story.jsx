import { wedding } from '../config/wedding'
import { Divider } from './Ornaments'
import Reveal from './Reveal'

export default function Story() {
  const { story } = wedding

  if (!story.enabled) return null

  return (
    <section id="story" className="section" aria-label="Our story">
      <div className="container">
        <Reveal>
          <div className="heading-center">
            <p className="eyebrow">How it all began</p>
            <h2 className="section-title">{story.heading}</h2>
            <Divider />
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="story__text">
            {story.paragraphs.map((para, i) => (
              <p key={i} className={i === 0 ? 'story__dropcap' : ''}>
                {para}
              </p>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}