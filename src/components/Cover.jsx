import { useEffect, useState } from 'react'
import { wedding } from '../config/wedding'
import { Divider } from './Ornaments'

const BISMILLAH = 'بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ'

export default function Cover() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <div className={`cover ${open ? 'cover--open' : ''}`} role="dialog" aria-modal="true" aria-label="Open invitation">
      <div className="cover__card">
        <p className="cover__arabic" lang="ar">
          {BISMILLAH}
        </p>
        <p className="cover__monogram">
          {wedding.groom.name[0]} · {wedding.bride.name[0]}
        </p>
        <p className="cover__script">Nikah Invitation</p>
        <Divider />
        <button type="button" className="btn btn--primary cover__btn" onClick={() => setOpen(true)}>
          Open Invitation
        </button>
      </div>
    </div>
  )
}