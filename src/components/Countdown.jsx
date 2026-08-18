import { wedding } from '../config/wedding'
import { useCountdown } from '../hooks/useCountdown'
import { Divider } from './Ornaments'
import Reveal from './Reveal'

const pad = (n) => String(n).padStart(2, '0')

export default function Countdown() {
  const time = useCountdown(wedding.date.iso)

  if (time === null) {
    return (
      <section id="countdown" className="section countdown" aria-label="Wedding countdown">
        <div className="container">
          <Reveal>
            <p className="countdown__arrived">Alhamdulillah, the day has arrived.</p>
          </Reveal>
        </div>
      </section>
    )
  }

  const units = [
    { value: time.days, label: 'Days' },
    { value: pad(time.hours), label: 'Hours' },
    { value: pad(time.minutes), label: 'Minutes' },
    { value: pad(time.seconds), label: 'Seconds' },
  ]

  return (
    <section id="countdown" className="section countdown" aria-label="Wedding countdown">
      <div className="container">
        <Reveal>
          <div className="heading-center">
            <p className="eyebrow">Counting the moments</p>
            <h2 className="section-title">Until we say &ldquo;We do&rdquo;</h2>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="countdown__units">
            {units.map((unit) => (
              <div className="countdown__unit" key={unit.label}>
                <span className="countdown__num">{unit.value}</span>
                <span className="countdown__label">{unit.label}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={250}>
          <Divider className="countdown__sep" />
        </Reveal>
      </div>
    </section>
  )
}