import { useInView } from '../hooks/useInView'

/**
 * Wrapper that fades/slides its children into view on scroll.
 * variant: '', 'zoom', 'left', 'right'. delay is in milliseconds.
 */
export default function Reveal({ as: Tag = 'div', variant = '', delay = 0, className = '', children, ...rest }) {
  const [ref, inView] = useInView()

  const variantClass =
    variant === 'zoom' ? 'reveal--zoom' : variant === 'left' ? 'reveal--left' : variant === 'right' ? 'reveal--right' : ''

  const classes = ['reveal', variantClass, inView && 'is-visible', className].filter(Boolean).join(' ')

  return (
    <Tag
      ref={ref}
      className={classes}
      style={{ '--reveal-delay': `${delay}ms`, ...(rest.style || {}) }}
      {...rest}
    >
      {children}
    </Tag>
  )
}