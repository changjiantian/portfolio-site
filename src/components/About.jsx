import Reveal from './Reveal.jsx'
import SectionFX from './SectionFX.jsx'
import { profile } from '../data/profile.js'

export default function About() {
  return (
    <section className="section section-soft" id="about">
      {/* 关于：墨绿 + 金，舒缓沉淀的动效 */}
      <SectionFX
        opacity={0.95}
        colors={['#7be0b0', '#3fa37a', '#1d6b4f', '#0c2a20']}
        rotation={90}
        autoRotate={4}
        speed={0.14}
        scale={1.1}
        frequency={1}
        warpStrength={0.85}
        mouseInfluence={0.4}
        parallax={0.3}
        noise={0.06}
        iterations={2}
        intensity={1.25}
        bandWidth={5}
        transparent
      />
      <div className="container">
        <div className="section-head">
          <Reveal className="section-eyebrow">About</Reveal>
          <Reveal as="h2" className="section-title" delay={100}>
            关于我
          </Reveal>
        </div>

        <div className="about-grid">
          {/* 身份卡：头像 + 联系方式 */}
          <Reveal className="about-id">
            <div className="about-avatar">
              <img src={`${import.meta.env.BASE_URL}images/avatar.webp`} alt={profile.name} />
            </div>
            <div className="about-name">{profile.name}</div>
            <div className="about-role">{profile.role}</div>
            <div className="about-divider" />
            <div className="about-contact-row">
              <span className="k">电话</span>
              <a className="v" href={`tel:${profile.phone}`}>{profile.phone}</a>
            </div>
            <div className="about-contact-row">
              <span className="k">邮箱</span>
              <a className="v" href={`mailto:${profile.email}`}>{profile.email}</a>
            </div>
            <div className="about-contact-row">
              <span className="k">城市</span>
              <span className="v">{profile.city}</span>
            </div>
            <div className="about-contact-row">
              <span className="k">方向</span>
              <span className="v">B 端 / G 端数字化产品</span>
            </div>
          </Reveal>

          {/* 介绍 + 数据 + 经历 */}
          <div>
            <Reveal className="about-intro" delay={120}>
              <p>
                深耕 UI/UX 设计领域逾 15 年，专注于为业务和产品打造高可行性的视觉与创意设计方案。从中国移动到浙江甲骨文超级码，始终致力于通过设计驱动产品价值与用户体验的持续提升。
              </p>
              <p>
                精通 C 端与 B 端设计规范，对细节的追求近乎苛刻。在农业数字化、家装互联网、健康医疗等多个领域积累了丰富的跨行业设计经验，具备 6 年以上团队管理能力；
              </p>
            </Reveal>

            <Reveal className="about-stats" delay={200}>
              {profile.stats.map((s) => (
                <div className="stat" key={s.label}>
                  <div className="stat-value">
                    {s.value}
                    <em>{s.suffix}</em>
                  </div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </Reveal>

            <div className="about-exp">
              <Reveal className="about-exp-title" delay={80}>
                Experience · 工作经历
              </Reveal>
              {profile.experience.map((e, i) => (
                <Reveal className="exp-item" key={e.company} delay={i * 60}>
                  <div className="exp-period">{e.period}</div>
                  <div>
                    <div className="exp-company">{e.company}</div>
                    <div className="exp-role">{e.role}</div>
                    <ul className="exp-points">
                      {e.points.map((p) => (
                        <li key={p}>{p}</li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
