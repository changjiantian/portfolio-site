import { useEffect, useRef, useState } from 'react'
import ColorBends from './ColorBends.jsx'

// 每个板块各自的流光背景：包裹独立 ColorBends 实例，
// 仅在该板块进入视口时渲染（离屏自动暂停，避免多个 WebGL 同时空转）。
export default function SectionFX({ className = '', opacity, ...props }) {
  const ref = useRef(null)
  const [inView, setInView] = useState(true)

  useEffect(() => {
    const el = ref.current
    if (!el || typeof IntersectionObserver === 'undefined') return
    const io = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      // 底部外扩 25% 视口高度：板块临近视口就提前渲染预热，
      // 滚到当前板块时画面已在流动，无需等待
      { threshold: 0.01, rootMargin: '0px 0px 25% 0px' }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div className={`section-fx ${className}`} ref={ref} aria-hidden="true">
      <ColorBends {...props} style={opacity != null ? { opacity } : undefined} paused={!inView} />
      <div className="section-fx-shade" />
    </div>
  )
}
