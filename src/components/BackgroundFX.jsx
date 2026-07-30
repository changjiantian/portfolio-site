import ColorBends from './ColorBends.jsx'

// 全站统一的流光背景层：单个 WebGL 实例覆盖整个视口，
// 各板块在其之上滚动，背后都有类似头部 Hero 的动态氛围。
export default function BackgroundFX() {
  return (
    <div className="bg-fx" aria-hidden="true">
      <ColorBends
        colors={['#e3c37e', '#c9a45c', '#7a5e2c', '#2a2113']}
        rotation={90}
        autoRotate={3}
        speed={0.13}
        scale={1.15}
        frequency={1}
        warpStrength={1}
        mouseInfluence={0.5}
        parallax={0.3}
        noise={0.08}
        iterations={2}
        intensity={1.15}
        bandWidth={6}
        transparent
      />
      {/* 暗化叠加：压低流光强度，保证各板块文字/卡片可读 */}
      <div className="bg-fx-overlay" />
      {/* 细微噪点/网格质感 */}
      <div className="bg-fx-grain" />
    </div>
  )
}
