import { wedding } from '../config/wedding'
import { Divider } from './Ornaments'

export default function Footer() {
  const { bride, groom, date } = wedding

  return (
    <footer className="footer">
      <Divider />
      <p className="footer__script">With love &amp; gratitude</p>
      <p className="footer__names">
        {groom.name} &amp; {bride.name}
      </p>
      <p className="footer__date">{date.long}</p>
      <a className="footer__made footer__made--link" href="https://lezins-portfolio.vercel.app" target="_blank" rel="noopener noreferrer">
        Made with love <span className="footer__made-hint">↗</span>
      </a>
    </footer>
  )
}