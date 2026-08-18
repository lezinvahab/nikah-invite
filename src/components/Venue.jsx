import { wedding } from '../config/wedding'
import { NavigationIcon } from './icons'
import { Divider } from './Ornaments'
import Reveal from './Reveal'

export default function Venue() {
  const { nikah } = wedding
  const hasImage = Boolean(nikah.venueImage)

  return (
    <section id="venue" className="section section--tint" aria-label="Venue">
      <div className="container">
        <Reveal>
          <div className="heading-center">
            <p className="eyebrow">Where we gather</p>
            <h2 className="section-title">The Venue</h2>
            <Divider />
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="venue__card">
            {hasImage && <img className="venue__image" src={nikah.venueImage} alt={nikah.venue} loading="lazy" />}
            <div className="venue__body">
              <h3 className="venue__name">{nikah.venue}</h3>
              <p className="venue__address">
                {nikah.address}
                <br />
                {nikah.city}
              </p>
              <div className="venue__cta">
                <a className="btn btn--gold" href={nikah.mapsUrl} target="_blank" rel="noopener noreferrer">
                  <NavigationIcon size={14} />
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}