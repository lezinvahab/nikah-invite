import { wedding } from '../config/wedding'
import { CameraIcon, FolderOpenIcon } from './icons'
import { Divider } from './Ornaments'
import Reveal from './Reveal'

export default function Gallery() {
  const { gallery, galleryPendingTitle, galleryPendingText } = wedding

  return (
    <section id="gallery" className="section section--tint" aria-label="Gallery">
      <div className="container">
        <Reveal>
          <div className="heading-center">
            <p className="eyebrow">Moments to remember</p>
            <h2 className="section-title">The Gallery</h2>
            <Divider />
          </div>
        </Reveal>

        {gallery.length === 0 ? (
          <Reveal delay={150}>
            <div className="gallery__pending">
              <span className="gallery__pending-icon">
                <CameraIcon size={30} />
              </span>
              <h3 className="gallery__pending-title">{galleryPendingTitle}</h3>
              <p className="gallery__pending-text">{galleryPendingText}</p>
            </div>
          </Reveal>
        ) : (
          <Reveal delay={150}>
            <div className="gallery__track">
              {gallery.map((image, i) => {
                if (image.driveLink) {
                  return (
                    <a
                      className={`gallery__item gallery__item--drive`}
                      key={i}
                      href={image.driveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-span={image.span || ''}
                      aria-label={image.alt || 'Open photo album'}
                    >
                      {image.driveLinkPhoto ? (
                        <img src={image.driveLinkPhoto} alt={image.alt || 'Photo album'} loading="lazy" />
                      ) : (
                        <span className="gallery__drive-fallback">
                          <FolderOpenIcon size={30} />
                          <span>Open Album</span>
                        </span>
                      )}
                    </a>
                  )
                }

                return (
                  <figure className="gallery__item" key={i} data-span={image.span || ''}>
                    <img src={image.src} alt={image.alt || `Gallery image ${i + 1}`} loading="lazy" />
                  </figure>
                )
              })}
            </div>
          </Reveal>
        )}
      </div>
    </section>
  )
}