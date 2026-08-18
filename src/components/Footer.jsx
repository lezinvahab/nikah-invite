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
      <p className="footer__made">Made with love</p>
    </footer>
  )
}