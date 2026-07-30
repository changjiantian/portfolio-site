import Reveal from './Reveal.jsx'
import SectionFX from './SectionFX.jsx'
import { profile } from '../data/profile.js'

export default function Contact() {
  return (
    <section className="contact" id="contact">
      {/* 联系：青蓝 + 金，强视差 + 鼠标跟随，交互感动效 */}
      <SectionFX
        opacity={0.95}
        colors={['#8fe8f5', '#3fb3d6', '#1f7e9c', '#0a2c38']}
        rotation={60}
        autoRotate={5}
        speed={0.14}
        scale={1.1}
        frequency={1}
        warpStrength={0.85}
        mouseInfluence={0.85}
        parallax={0.6}
        noise={0.07}
        iterations={2}
        intensity={1.25}
        bandWidth={5}
        transparent
      />
      <div className="contact-inner">
        <Reveal className="contact-eyebrow">Contact</Reveal>
        <Reveal as="h2" className="contact-title" delay={120}>
          让我们一起
          <br />
          创造点什么
        </Reveal>
        <Reveal className="contact-desc" delay={220}>
          正在寻找资深体验设计 / UED 管理岗位机会。无论是全职合作还是设计咨询，欢迎随时联系。
        </Reveal>
        <Reveal className="contact-links" delay={320}>
          <div className="contact-link">
            <div className="k">Email</div>
            <a href={`mailto:${profile.email}`}>
              <span className="v">{profile.email}</span>
            </a>
          </div>
          <div className="contact-link">
            <div className="k">Phone</div>
            <a href={`tel:${profile.phone}`}>
              <span className="v">{profile.phone}</span>
            </a>
          </div>
          <div className="contact-link">
            <div className="k">Base</div>
            <span className="v">{profile.city} · 可远程协作</span>
          </div>
        </Reveal>
      </div>

      <div className="footer-bar">
        <span>© 2026 常传建 — 以设计驱动产品价值</span>
      </div>
    </section>
  )
}
