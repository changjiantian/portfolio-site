import { useEffect } from 'react'

export default function Lightbox({ image, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  if (!image) return null

  return (
    <div className="lightbox" onClick={onClose} role="dialog" aria-modal="true">
      <img src={image.src} alt="作品大图" onClick={(e) => e.stopPropagation()} />
      <div className="lightbox-cap">
        {image.w} × {image.h} PX
      </div>
      <button className="lightbox-close" onClick={onClose} aria-label="关闭">
        ✕
      </button>
    </div>
  )
}
