import { useCallback, useEffect } from 'react'
import { Placeholder } from './Placeholder'

interface LightboxProps {
  index: number
  total: number
  caption: string
  onClose: () => void
  onNav: (dir: number) => void
}

export function Lightbox({ index, total, caption, onClose, onNav }: LightboxProps) {
  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onNav(1)
      if (e.key === 'ArrowLeft') onNav(-1)
    },
    [onClose, onNav],
  )

  useEffect(() => {
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [handleKey])

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={caption} onClick={onClose}>
      <button className="lightbox__close" aria-label="Close" onClick={onClose}>✕</button>
      {total > 1 && (
        <>
          <button
            className="lightbox__nav lightbox__nav--prev"
            aria-label="Previous"
            onClick={(e) => { e.stopPropagation(); onNav(-1) }}
          >
            ‹
          </button>
          <button
            className="lightbox__nav lightbox__nav--next"
            aria-label="Next"
            onClick={(e) => { e.stopPropagation(); onNav(1) }}
          >
            ›
          </button>
        </>
      )}
      <div style={{ textAlign: 'center' }} onClick={(e) => e.stopPropagation()}>
        <div style={{ maxWidth: 'min(900px, 100%)', margin: '0 auto' }}>
          <Placeholder label={caption} variant="gallery" seed={index + 1} />
        </div>
        <p style={{ color: 'rgba(255,255,255,0.92)', marginTop: '1rem', marginBottom: 0 }}>
          {caption} · {index + 1} / {total}
        </p>
      </div>
    </div>
  )
}