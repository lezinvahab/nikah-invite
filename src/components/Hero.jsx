import { wedding } from '../config/wedding'
import { Divider, HeroPattern } from './Ornaments'

const BISMILLAH = 'بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ'

export default function Hero() {
  return (
    <section id="home" className="hero" aria-label="Wedding invitation of the couple">
      <div className="hero__pattern" aria-hidden="true">
        <HeroPattern />
      </div>

      <div className="hero__content">
        <p className="hero__bismillah" lang="ar">
          {BISMILLAH}
        </p>

        <p className="hero__families">Together with their families</p>

        <h1 className="hero__names">
          <span className="hero__name">{wedding.groom.name}</span>
          <span className="hero__amp">&</span>
          <span className="hero__name">{wedding.bride.name}</span>
        </h1>

        <p className="hero__request">Request the pleasure of your company at their Nikah</p>

        <Divider />

        <p className="hero__date">{wedding.date.display}</p>
      </div>

      <div className="hero__scroll" aria-hidden="true">
        <span>Scroll</span>
        <span className="hero__scroll-chevron" />
      </div>
    </section>
  )
}