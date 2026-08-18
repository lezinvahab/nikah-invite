import { useEffect, useState } from 'react'

/**
 * Counts down to a target ISO date/time.
 * Returns { days, hours, minutes, seconds } or null once the date has passed.
 */
export function useCountdown(targetIso) {
  const calculate = () => {
    const diff = new Date(targetIso).getTime() - Date.now()
    if (diff <= 0) return null
    return {
      days: Math.floor(diff / 86_400_000),
      hours: Math.floor((diff / 3_600_000) % 24),
      minutes: Math.floor((diff / 60_000) % 60),
      seconds: Math.floor((diff / 1_000) % 60),
    }
  }

  const [value, setValue] = useState(calculate)

  useEffect(() => {
    setValue(calculate())
    const id = setInterval(() => setValue(calculate()), 1000)
    return () => clearInterval(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [targetIso])

  return value
}