import { wedding } from '../config/wedding'
import { MapPinIcon } from './icons'
import { Divider } from './Ornaments'
import Reveal from './Reveal'

export default function EventDetails() {
  const { nikah, date } = wedding

  return (
    <section id="details" className="section section--tint" aria-label="Nikah details">
      <div className="container">
        <Reveal>
          <div className="heading-center">
            <p className="eyebrow">Join us for</p>
            <h2 className="section-title">The Nikah</h2>
            <Divider />
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="details__card">
            <div className="details__ornament">
              <MapPinIcon size={22} />
            </div>

            <div className="details__row">
              <p className="details__label">Date</p>
              <p className="details__value">{date.long}</p>
            </div>
            <div className="details__row">
              <p className="details__label">Time</p>
              <p className="details__value">{nikah.time}</p>
            </div>
            <div className="details__row">
              <p className="details__label">Venue</p>
              <p className="details__value">{nikah.venue}</p>
            </div>
            <div className="details__row">
              <p className="details__label">Address</p>
              <p className="details__value">
                {nikah.address}, {nikah.city}
              </p>
            </div>

            <div className="details__cta">
              <a
                className="btn btn--outline"
                href={nikah.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MapPinIcon size={15} />
                View Location
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}