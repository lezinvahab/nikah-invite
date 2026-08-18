import { useEffect, useState } from 'react'
import { wedding } from '../config/wedding'
import { useCountdown } from '../hooks/useCountdown'

const pad = (n) => String(n).padStart(2, '0')

/**
 * Compact countdown that slides in once the visitor has scrolled past the
 * full countdown section, and hides again when they scroll back to it.
 */
export default function MiniCountdown() {
  const time = useCountdown(wedding.date.iso)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const el = document.getElementById('countdown')
      if (!el) {
        setVisible(false)
        return
      }
      setVisible(el.getBoundingClientRect().bottom < 0)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  if (!time) return null

  const units = [
    { value: time.days, label: 'Days' },
    { value: pad(time.hours), label: 'Hrs' },
    { value: pad(time.minutes), label: 'Min' },
    { value: pad(time.seconds), label: 'Sec' },
  ]

  return (
    <aside className={`mini-countdown ${visible ? 'is-visible' : ''}`} aria-label="Countdown to the Nikah">
      <p className="mini-countdown__title">Nikah in</p>
      <div className="mini-countdown__grid">
        {units.map((unit) => (
          <span className="mini-countdown__unit" key={unit.label}>
            <span className="mini-countdown__num">{unit.value}</span>
            <span className="mini-countdown__label">{unit.label}</span>
          </span>
        ))}
      </div>
    </aside>
  )
}