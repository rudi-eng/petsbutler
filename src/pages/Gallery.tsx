import { useState } from 'react'
import { gallery } from '@/data/gallery'
import { Lightbox } from '@/components/Lightbox'

export default function Gallery() {
  const [active, setActive] = useState<number | null>(null)

  const open = (i: number) => setActive(i)
  const close = () => setActive(null)
  const nav = (dir: number) =>
    setActive((cur) =>
      cur === null ? cur : (cur + dir + gallery.length) % gallery.length,
    )

  return (
    <>
      <section className="page-head">
        <div className="container">
          <div className="eyebrow">Gallery</div>
          <h1>Life at the butler's</h1>
          <p>A peek at walks, sleepovers and happy tails we've cared for in Centurion.</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '2rem' }}>
        <div className="container">
          <div className="gallery-grid">
            {gallery.map((item, i) => (
              <button
                key={item.id}
                className="gallery-item"
                onClick={() => open(i)}
                aria-label={`Open photo: ${item.caption}`}
              >
                <img src={item.src} alt={item.caption} />
              </button>
            ))}
          </div>
        </div>
      </section>

      {active !== null && (
        <Lightbox
          index={active}
          total={gallery.length}
          caption={gallery[active].caption}
          src={gallery[active].src}
          onClose={close}
          onNav={nav}
        />
      )}
    </>
  )
}