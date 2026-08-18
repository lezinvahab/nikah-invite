import { useEffect, useRef, useState } from 'react'
import { wedding } from '../config/wedding'
import { MusicNoteIcon, PauseIcon } from './icons'

export default function MusicButton() {
  const src = wedding.music
  const [playing, setPlaying] = useState(false)
  const [hidden, setHidden] = useState(!src || typeof Audio === 'undefined')
  const audioRef = useRef(null)

  useEffect(() => {
    if (!src) return

    const audio = new Audio(src)
    audio.loop = true
    audio.preload = 'none'

    const onError = () => setHidden(true)
    audio.addEventListener('error', onError)

    audioRef.current = audio

    return () => {
      audio.removeEventListener('error', onError)
      audio.pause()
      audioRef.current = null
    }
  }, [src])

  if (hidden) return null

  const toggle = () => {
    const audio = audioRef.current
    if (!audio) return

    if (playing) {
      audio.pause()
      setPlaying(false)
    } else {
      audio
        .play()
        .then(() => setPlaying(true))
        .catch(() => setHidden(true))
    }
  }

  return (
    <button
      type="button"
      className={`music ${playing ? 'music--playing' : ''}`}
      onClick={toggle}
      aria-label={playing ? 'Pause background music' : 'Play background music'}
      aria-pressed={playing}
      title={playing ? 'Pause music' : 'Play music'}
    >
      {playing ? <PauseIcon size={18} /> : <MusicNoteIcon size={18} />}
    </button>
  )
}