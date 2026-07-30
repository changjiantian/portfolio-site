import Reveal from './Reveal.jsx'
import SectionFX from './SectionFX.jsx'
import { strengths } from '../data/profile.js'
import { Diamond, Gem, Triangle, Circle, Square, Hexagon } from 'lucide-react'

const icons = { Diamond, Gem, Triangle, Circle, Square, Hexagon }

export default function Strengths() {
  return (
    <section className="section section-soft" id="strengths">
      {/* 优势：紫晶 + 金，高频条纹 + 旋转，结构化动效 */}
      <SectionFX
        opacity={0.82}
        colors={['#b794f6', '#8b5cf6', '#5b2ea6', '#241046']}
        rotation={135}
        autoRotate={6}
        speed={0.12}
        scale={1.2}
        frequency={1.6}
        warpStrength={0.9}
        mouseInfluence={0.4}
        parallax={0.3}
        noise={0.07}
        iterations={2}
        intensity={1.12}
        bandWidth={9}
        transparent
      />
      <div className="container">
        <div className="section-head">
          <Reveal className="section-eyebrow">Strengths</Reveal>
          <Reveal as="h2" className="section-title" delay={100}>
            核心优势
          </Reveal>
        </div>

        <div className="strength-grid">
          {strengths.map((s, i) => {
            const Icon = icons[s.icon] || Diamond
            return (
              <Reveal className="s-card" key={s.title} delay={(i % 3) * 100}>
                <div className="s-icon">
                  <Icon size={34} strokeWidth={1.4} />
                </div>
                <div className="s-title">{s.title}</div>
                <div className="s-desc">{s.desc}</div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
