import { wedding } from '../config/wedding'
import { Divider } from './Ornaments'
import Reveal from './Reveal'

export default function Couple() {
  const { bride, groom, coupleMessage } = wedding

  return (
    <section id="couple" className="section section--tint" aria-label="The couple">
      <div className="container">
        <Reveal>
          <div className="heading-center">
            <p className="eyebrow">The beginning of forever</p>
            <h2 className="section-title">Two hearts, one journey</h2>
            <Divider />
          </div>
        </Reveal>

        <div className="couple__grid">
          <Reveal delay={100} className="couple__person">
            <div className="couple__frame">
              <img src={groom.image} alt={`Portrait of ${groom.fullName}`} width="400" height="500" loading="lazy" />
            </div>
            <h3 className="couple__name">{groom.name}</h3>
            <p className="couple__title">The Groom</p>
            <p className="couple__family">S/o<br />Abdul Latheef K T<br />&amp;<br />Sabira M K</p>
          </Reveal>

          <Reveal delay={220} className="couple__person">
            <div className="couple__frame">
              <img src={bride.image} alt={`Portrait of ${bride.fullName}`} width="400" height="500" loading="lazy" />
            </div>
            <h3 className="couple__name">{bride.name}</h3>
            <p className="couple__title">The Bride</p>
            <p className="couple__family">D/o<br />Noushad V P<br />&amp;<br />Shameena K K</p>
          </Reveal>

          <Reveal delay={300} className="couple__message">
            <p>{coupleMessage}</p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}