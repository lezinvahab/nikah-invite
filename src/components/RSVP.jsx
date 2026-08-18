import { useState } from 'react'
import { wedding } from '../config/wedding'
import { SendIcon } from './icons'
import { Divider } from './Ornaments'
import Reveal from './Reveal'

const ATTENDANCE_OPTIONS = [
  { value: 'accept', label: 'Joyfully Accept', hint: 'Insha\'Allah, count me in' },
  { value: 'decline', label: 'Regretfully Decline', hint: 'Sadly unable to attend' },
]

export default function RSVP() {
  const [form, setForm] = useState({ name: '', guests: '', attendance: '', message: '' })
  const [errors, setErrors] = useState({})

  const update = (key) => (event) => {
    const value = event.target.value
    setForm((prev) => ({ ...prev, [key]: value }))
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: '' }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const nextErrors = {}
    if (!form.name.trim()) nextErrors.name = 'Please tell us your name.'
    if (!form.guests || Number(form.guests) < 1) nextErrors.guests = 'Please add at least one guest.'
    if (!form.attendance) nextErrors.attendance = 'Please choose an option.'
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) return

    const { bride, groom, whatsapp } = wedding
    const attendance = form.attendance === 'accept' ? 'I would love to attend' : 'I regretfully decline'

    const parts = [
      `Assalamu Alaikum! This is ${form.name.trim()}.`,
      `${attendance} the Nikah of ${bride.fullName} & ${groom.fullName}.`,
      `Number of guests: ${Number(form.guests)}.`,
    ]
    if (form.message.trim()) parts.push(`Message: ${form.message.trim()}`)
    if (whatsapp.footerMessage) parts.push(whatsapp.footerMessage)

    const url = `https://wa.me/${whatsapp.number}?text=${encodeURIComponent(parts.join(' '))}`
    window.open(url, '_blank', 'noopener')
  }

  return (
    <section id="rsvp" className="section" aria-label="RSVP">
      <div className="container">
        <Reveal>
          <div className="heading-center">
            <p className="eyebrow">Will you join us?</p>
            <h2 className="section-title">RSVP</h2>
            <Divider />
          </div>
        </Reveal>

        <Reveal delay={150}>
          <form className="rsvp__card" onSubmit={handleSubmit} noValidate>
            <div className="field">
              <label className="field__label" htmlFor="rsvp-name">Your Name</label>
              <input
                className="field__input"
                id="rsvp-name"
                type="text"
                autoComplete="name"
                placeholder="Full name"
                value={form.name}
                onChange={update('name')}
                aria-invalid={Boolean(errors.name)}
              />
              {errors.name && <span className="field__error" role="alert">{errors.name}</span>}
            </div>

            <div className="field">
              <label className="field__label" htmlFor="rsvp-guests">Number of Guests</label>
              <input
                className="field__input"
                id="rsvp-guests"
                type="number"
                inputMode="numeric"
                min="1"
                max="20"
                placeholder="1"
                value={form.guests}
                onChange={update('guests')}
                aria-invalid={Boolean(errors.guests)}
              />
              {errors.guests && <span className="field__error" role="alert">{errors.guests}</span>}
            </div>

            <fieldset className="field">
              <legend className="field__label">Will you attend?</legend>
              <div className="attendance">
                {ATTENDANCE_OPTIONS.map((option) => (
                  <label className="attendance__option" key={option.value}>
                    <input
                      type="radio"
                      name="attendance"
                      value={option.value}
                      checked={form.attendance === option.value}
                      onChange={update('attendance')}
                    />
                    <span className="attendance__pill">
                      <strong>{option.label}</strong>
                      <small>{option.hint}</small>
                    </span>
                  </label>
                ))}
              </div>
              {errors.attendance && <span className="field__error" role="alert">{errors.attendance}</span>}
            </fieldset>

            <div className="field">
              <label className="field__label" htmlFor="rsvp-message">Message (optional)</label>
              <textarea
                className="field__textarea"
                id="rsvp-message"
                rows="3"
                placeholder="A few words for the couple…"
                value={form.message}
                onChange={update('message')}
              />
            </div>

            <button type="submit" className="btn btn--primary rsvp__submit">
              <SendIcon size={15} />
              Send RSVP
            </button>

            <p className="rsvp__hint">Your RSVP opens WhatsApp with a pre-filled message — press send to confirm.</p>
          </form>
        </Reveal>
      </div>
    </section>
  )
}