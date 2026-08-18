import { wedding } from '../config/wedding'
import Reveal from './Reveal'

const SWATCHES = ['#F2DDDA', '#C98A8B', '#A7B6A0', '#77806A', '#F6EFE4']

export default function DressCode() {
  const { dressCode } = wedding

  if (!dressCode.enabled) return null

  return (
    <section id="dress-code" className="section section--tint" aria-label="Dress code">
      <div className="container">
        <Reveal>
          <div className="heading-center">
            <p className="eyebrow">{dressCode.heading}</p>
            <div className="dress__palette" role="img" aria-label="Pastel colour palette: blush, rose, sage, olive, ivory">
              {SWATCHES.map((color) => (
                <div className="dress__swatch" key={color}>
                  <span className="dress__color" style={{ background: color }} />
                </div>
              ))}
            </div>
            <h2 className="dress__label">{dressCode.label}</h2>
            {dressCode.note && <p className="dress__note">{dressCode.note}</p>}
          </div>
        </Reveal>
      </div>
    </section>
  )
}