import { wedding } from '../config/wedding'
import { Divider } from './Ornaments'

export default function Footer() {
  const { bride, groom, date } = wedding

  return (
    <footer className="footer">
      <Divider />
      <p className="footer__script">With love &amp; gratitude</p>
      <p className="footer__names">
        <span className="footer__names-line">{groom.name}</span>
        <span className="footer__names-amp">&amp;</span>
        <span className="footer__names-line">{bride.name}</span>
      </p>
      <p className="footer__date">{date.long}</p>
      <a className="footer__made footer__made--link" href="https://lezins-portfolio.vercel.app" target="_blank" rel="noopener noreferrer">
        Made with love
      </a>
    </footer>
  )
}