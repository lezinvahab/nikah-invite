/* Decorative SVG ornaments — subtle Islamic-inspired details. */

export function Divider({ className = '' }) {
  return (
    <span className={`divider ${className}`} aria-hidden="true">
      <span className="divider__line" />
      <span className="divider__dot" />
      <span className="divider__diamond" />
      <span className="divider__dot" />
      <span className="divider__line divider__line--right" />
    </span>
  )
}

export function HeroPattern() {
  return (
    <svg viewBox="0 0 700 700" fill="none" aria-hidden="true">
      <g stroke="currentColor" strokeWidth="0.9" opacity="0.55">
        <circle cx="350" cy="350" r="330" />
        <circle cx="350" cy="350" r="318" opacity="0.6" />
        <circle cx="350" cy="350" r="146" opacity="0.7" />

        {Array.from({ length: 16 }).map((_, i) => (
          <ellipse
            key={i}
            cx="350"
            cy="174"
            rx="26"
            ry="52"
            transform={`rotate(${i * 22.5} 350 350)`}
            opacity="0.7"
          />
        ))}

        {Array.from({ length: 32 }).map((_, i) => (
          <circle key={`d${i}`} cx="350" cy="32" r="2.4" transform={`rotate(${i * 11.25} 350 350)`} />
        ))}

        <path d="M350 250 v-96 M350 154 c-20 -14 -26 -34 -22 -54 M350 154 c20 -14 26 -34 22 -54" />
      </g>
    </svg>
  )
}