import { wedding } from '../config/wedding'
import { Divider } from './Ornaments'
import Reveal from './Reveal'

export default function SpecialNote() {
  const { specialNote } = wedding

  if (!specialNote.enabled) return null

  return (
    <section className="section" aria-label="Special note">
      <div className="container">
        <Reveal>
          <div className="note">
            <Divider />
            <p className="note__text">&ldquo;{specialNote.text}&rdquo;</p>
            {specialNote.subtext && <p className="note__subtext">{specialNote.subtext}</p>}
          </div>
        </Reveal>
      </div>
    </section>
  )
}