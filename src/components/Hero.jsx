import { useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Download } from 'lucide-react'
import ColorBends from './ColorBends.jsx'
import { profile } from '../data/profile.js'

const EASE = [0.32, 0.72, 0, 1]

export default function Hero() {
  // 拖拽约束区域（右栏）
  const zoneRef = useRef(null)

  return (
    <section className="hero" id="home">
      {/* 头部独立流光背景：黑金 ColorBends + 径向压暗，比全站背景更突出 */}
      <div className="hero-bends" aria-hidden="true">
        <ColorBends
          colors={['#e3c37e', '#c9a45c', '#3d2f14']}
          rotation={90}
          autoRotate={4}
          speed={0.14}
          scale={1}
          frequency={1}
          warpStrength={1}
          mouseInfluence={0.7}
          parallax={0.4}
          noise={0.08}
          iterations={2}
          intensity={1.1}
          bandWidth={6}
          transparent
        />
      </div>
      <div className="hero-bg-grid" aria-hidden="true" />
      <div className="hero-word" aria-hidden="true">
        DESIGN
      </div>

      <div className="container hero-inner">
        {/* 左栏：文案 */}
        <div className="hero-left">
          <motion.div
            className="hero-label"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <span className="dot" />
            UX/UI DESIGNER
          </motion.div>

          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 48 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.12, ease: EASE }}
          >
            DIGITAL
            <span className="outline">
              EXPERIENCES<span className="accent-dot">.</span>
            </span>
          </motion.h1>

          <motion.p
            className="hero-desc"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.26, ease: EASE }}
          >
            {profile.name}，{profile.role}。15 年互联网设计经验，擅长从 0 到 1
            构建设计体系，主导国家级农业数字化平台与省级产业大脑等重大项目，
            以设计驱动业务增长与数字化转型。
          </motion.p>

          <motion.div
            className="hero-cta"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: EASE }}
          >
            <a className="cta-primary" href="#projects">
              查看作品
              <ArrowUpRight size={17} strokeWidth={2.4} />
            </a>
            <a className="cta-ghost" href="#contact">
              <span className="dot" />
              联系我
            </a>
            <a className="cta-ghost cta-download" href="/resume.pdf" download>
              <Download size={17} strokeWidth={2.2} />
              下载简历
            </a>
          </motion.div>
        </div>

        {/* 右栏：可拖拽 ID 工卡 */}
        <div className="hero-right" ref={zoneRef}>
          <motion.div
            className="id-float"
            animate={{ y: [0, -15, 0], rotateZ: [-1, 1, -1] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          >
            <motion.div
              className="id-card"
              drag
              dragElastic={0.2}
              dragConstraints={zoneRef}
              dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
              whileHover={{ scale: 1.02 }}
              whileDrag={{ scale: 1.04 }}
              initial={{ opacity: 0, y: 64 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.35, ease: EASE }}
            >
              <span className="lanyard" aria-hidden="true" />
              <span className="lanyard-clip" aria-hidden="true" />
              <span className="id-chip">DESIGN LEAD</span>
              <div className="id-photo">
                <img src="/images/avatar.png" alt={profile.name} draggable={false} />
                <div className="id-overlay">
                  <strong>
                    {profile.name}
                    <span className="accent-dot">.</span>
                  </strong>
                  <span>{profile.role}</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
