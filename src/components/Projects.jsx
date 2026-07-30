import { useEffect, useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  LayoutDashboard,
  Palette,
  Pause,
  Play,
  Smartphone,
} from 'lucide-react'
import Reveal from './Reveal.jsx'
import SectionFX from './SectionFX.jsx'
import Lightbox from './Lightbox.jsx'
import { projects, projectCategories } from '../data/profile.js'

const EASE = [0.32, 0.72, 0, 1]

const CAT_ICONS = {
  data: LayoutDashboard,
  app: Smartphone,
  brand: Palette,
}

function ProjectStat({ value, label }) {
  return (
    <div className="pc-stat">
      <div className="pc-stat-value">{value}</div>
      <div className="pc-stat-label">{label}</div>
    </div>
  )
}

export default function Projects() {
  const [filter, setFilter] = useState('all')
  const [activeId, setActiveId] = useState(null)
  const [zoom, setZoom] = useState(null)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isHovering, setIsHovering] = useState(false)
  const [notice, setNotice] = useState(null)
  const trackRef = useRef(null)
  // 拖拽滑动相关
  const isDown = useRef(false)
  const startX = useRef(0)
  const startScroll = useRef(0)
  const dragMoved = useRef(false)
  const overlayRef = useRef(null)

  const scrollToTop = () => {
    overlayRef.current?.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const showNotice = (msg) => {
    setNotice(msg)
    const t = setTimeout(() => setNotice(null), 1600)
    return () => clearTimeout(t)
  }

  const list = useMemo(
    () => (filter === 'all' ? projects : projects.filter((p) => p.category === filter)),
    [filter]
  )
  const active = projects.find((p) => p.id === activeId) || null
  const activeIndex = projects.findIndex((p) => p.id === activeId)
  const prevProject = activeIndex >= 0 ? projects[(activeIndex - 1 + projects.length) % projects.length] : null
  const nextProject = activeIndex >= 0 ? projects[(activeIndex + 1) % projects.length] : null

  const goToProject = (p) => {
    if (!p) return
    setActiveId(p.id)
    requestAnimationFrame(() => {
      const el = document.querySelector('.pd-overlay')
      if (el) el.scrollTop = 0
    })
  }

  // 详情打开时锁定背景滚动，并监听导航跳转关闭详情
  useEffect(() => {
    document.body.style.overflow = active ? 'hidden' : ''
    const closeDetail = () => setActiveId(null)
    window.addEventListener('portfolio:close-detail', closeDetail)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('portfolio:close-detail', closeDetail)
    }
  }, [active])

  // Esc 关闭详情
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setActiveId(null)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  // 切换分类时滚动回最左侧
  useEffect(() => {
    if (trackRef.current) trackRef.current.scrollTo({ left: 0, behavior: 'smooth' })
  }, [filter])

  const getScrollStep = () => {
    const track = trackRef.current
    if (!track) return 0
    const card = track.querySelector('.project-card')
    if (!card) return 0
    const gap = parseInt(getComputedStyle(track).gap) || 24
    return card.offsetWidth + gap
  }

  const scrollBy = (dir) => {
    const track = trackRef.current
    if (!track) return
    const step = getScrollStep()
    if (!step) return
    const maxScroll = track.scrollWidth - track.clientWidth
    if (dir === 1 && track.scrollLeft + step >= maxScroll - 2) {
      track.scrollTo({ left: maxScroll, behavior: 'smooth' })
      showNotice('已是最后一张')
      return
    }
    if (dir === -1 && track.scrollLeft - step <= 2) {
      track.scrollTo({ left: 0, behavior: 'smooth' })
      showNotice('已是第一张')
      return
    }
    track.scrollBy({ left: dir * step, behavior: 'smooth' })
  }

  // 鼠标拖拽滑动
  const onTrackDown = (e) => {
    const track = trackRef.current
    if (!track) return
    isDown.current = true
    dragMoved.current = false
    startX.current = e.pageX
    startScroll.current = track.scrollLeft
    track.classList.add('dragging')
  }
  const onTrackMove = (e) => {
    if (!isDown.current) return
    const dx = e.pageX - startX.current
    if (Math.abs(dx) > 4) dragMoved.current = true
    trackRef.current.scrollLeft = startScroll.current - dx
  }
  const onTrackUp = () => {
    if (!isDown.current) return
    isDown.current = false
    trackRef.current?.classList.remove('dragging')
  }
  const onTrackLeave = () => {
    isDown.current = false
    trackRef.current?.classList.remove('dragging')
    setIsHovering(false)
  }

  // 自动播放：每 3.5 秒滚动一张，仅拖拽中/详情打开时暂停，到底后循环回第一张
  useEffect(() => {
    if (!isPlaying || isDown.current || active) return
    const id = setInterval(() => {
      if (isDown.current) return
      const track = trackRef.current
      if (!track) return
      const step = getScrollStep()
      if (!step) return
      const maxScroll = track.scrollWidth - track.clientWidth
      if (track.scrollLeft + step >= maxScroll - 2) {
        track.scrollTo({ left: 0, behavior: 'smooth' })
      } else {
        track.scrollBy({ left: step, behavior: 'smooth' })
      }
    }, 3500)
    return () => clearInterval(id)
  }, [isPlaying, active])

  return (
    <section className="section" id="projects">
      {/* 项目：琥珀金，较强扭曲 + 较快滚动，动感展示 */}
      <SectionFX
        opacity={0.5}
        colors={['#f0b35a', '#e08a3c', '#a85a1e', '#3a230c']}
        rotation={90}
        autoRotate={4}
        speed={0.11}
        scale={1}
        frequency={1.1}
        warpStrength={0.85}
        mouseInfluence={0.5}
        parallax={0.4}
        noise={0.08}
        iterations={2}
        intensity={0.9}
        bandWidth={6}
        transparent
      />
      <div className="container">
        <div className="section-head projects-head">
          <div>
            <Reveal className="section-eyebrow">Projects</Reveal>
            <Reveal as="h2" className="section-title" delay={100}>
              精选案例
            </Reveal>
          </div>
          <Reveal className="filter-bar" delay={200}>
            {projectCategories.map((c) => (
              <button
                key={c.key}
                className={`filter-btn ${filter === c.key ? 'active' : ''}`}
                onClick={() => setFilter(c.key)}
              >
                {c.label}
              </button>
            ))}
          </Reveal>
        </div>
      </div>

      <div className="projects-outer">
        <button
          className="pc-side pc-side-left"
          onClick={() => scrollBy(-1)}
          aria-label="上一个项目"
        >
          <ArrowLeft size={20} strokeWidth={1.8} />
        </button>
        <button
          className="pc-side pc-side-right"
          onClick={() => scrollBy(1)}
          aria-label="下一个项目"
        >
          <ArrowRight size={20} strokeWidth={1.8} />
        </button>

        <div
          className="projects-track"
          ref={trackRef}
          onMouseEnter={() => setIsHovering(true)}
          onMouseDown={onTrackDown}
          onMouseMove={onTrackMove}
          onMouseUp={onTrackUp}
          onMouseLeave={onTrackLeave}
        >
          {list.map((p, i) => {
            const Icon = CAT_ICONS[p.category] || LayoutDashboard
            const cover = p.images[0]?.src
            return (
              <motion.div
                key={p.id}
                className="project-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.035, y: -7 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: EASE }}
                onClick={(e) => {
                  if (dragMoved.current) {
                    e.preventDefault()
                    return
                  }
                  setActiveId(p.id)
                }}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && setActiveId(p.id)}
              >
                  <div className="pc-cover">
                    <img src={cover} alt={`${p.name} 封面`} loading="lazy" />
                    <div className="pc-shade" />
                  </div>

                  <div className="pc-body">
                    <div className="pc-top">
                      <div className="pc-icon">
                        <Icon size={18} strokeWidth={1.8} />
                      </div>
                      <div className="pc-meta">
                        <div className="pc-cat">{p.categoryLabel}</div>
                        <div className="pc-name">{p.name}</div>
                      </div>
                    </div>

                    <div className="pc-sub">{p.subtitle}</div>
                    <p className="pc-desc">{p.desc}</p>

                    <div className="pc-stats">
                      {p.stats.map((s) => (
                        <ProjectStat key={s.label} value={s.value} label={s.label} />
                      ))}
                    </div>

                    <div className="pc-btn">
                      <span>查看详情</span>
                      <ArrowUpRight size={16} strokeWidth={1.8} />
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>

        <div className="pc-controls">
          <button
            className="pc-ctrl"
            onClick={() => scrollBy(-1)}
            aria-label="上一个项目"
          >
            <ArrowLeft size={18} strokeWidth={1.8} />
          </button>
          <button
            className="pc-ctrl"
            onClick={() => scrollBy(1)}
            aria-label="下一个项目"
          >
            <ArrowRight size={18} strokeWidth={1.8} />
          </button>
          <button
            className={`pc-ctrl ${isPlaying ? 'active' : ''}`}
            onClick={() => setIsPlaying((v) => !v)}
            aria-label={isPlaying ? '暂停自动滚动' : '自动滚动'}
          >
            {isPlaying ? <Pause size={18} fill="currentColor" /> : <Play size={18} fill="currentColor" />}
          </button>
        </div>

        <AnimatePresence>
          {notice && (
            <motion.div
              className="pc-notice"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.25 }}
            >
              {notice}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* 项目详情（全屏覆盖层） */}
      <AnimatePresence>
        {active && (
          <motion.div
            ref={overlayRef}
            key={active.id}
            className="pd-overlay"
            initial={{ opacity: 0, y: 56 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 56 }}
            transition={{ duration: 0.45, ease: EASE }}
          >
            <div className="pd-head">
              <span className="pd-idx-head">
                {String(projects.indexOf(active) + 1).padStart(2, '0')} /{' '}
                {String(projects.length).padStart(2, '0')}
              </span>
              <div className="pd-eyebrow">{active.categoryLabel}</div>
              <h3 className="pd-title">{active.name}</h3>
              <div className="pd-sub">{active.subtitle}</div>
              <div className="pd-meta">
                <div className="row">
                  <div className="k">Role</div>
                  <div className="v">{active.role}</div>
                </div>
                <div className="row">
                  <div className="k">Period</div>
                  <div className="v">{active.period}</div>
                </div>
                <div className="row">
                  <div className="k">Output</div>
                  <div className="v">
                    {active.images.length} 张 · {active.sizeLabel}
                  </div>
                </div>
              </div>
              <p className="pd-desc">{active.desc}</p>
              <div className="pd-tags">
                {active.tags.map((t) => (
                  <span className="pd-tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="pd-gallery">
              <div className="pd-count">全部作品 · {active.images.length} 张</div>
              <div className={active.layout === 'masonry' ? 'pd-masonry' : 'pd-stack'}>
                {active.images.map((img, i) => (
                  <div className="g-wrap" key={img.src}>
                    <img
                      className="g-img"
                      src={img.src}
                      alt={`${active.name} 作品图 ${i + 1}`}
                      loading="lazy"
                      onClick={() => setZoom(img)}
                    />
                    <div className="g-cap">
                      {String(i + 1).padStart(2, '0')} — {img.w} × {img.h}
                    </div>
                  </div>
                ))}
              </div>

              <div className="pd-footer">
                <div className="pd-footer-inner">
                  <button className="pd-back-btn" onClick={() => setActiveId(null)}>
                    <ArrowLeft size={16} strokeWidth={2} />
                    返回列表
                  </button>
                  <div className="pd-pager">
                    <button className="pd-pager-btn" onClick={() => goToProject(prevProject)}>
                      <ArrowLeft size={15} strokeWidth={2} />
                      上一个案例
                    </button>
                    <button className="pd-pager-btn" onClick={() => goToProject(nextProject)}>
                      下一个案例
                      <ArrowRight size={15} strokeWidth={2} />
                    </button>
                  </div>
                  <button className="pd-top-btn" onClick={scrollToTop} title="返回顶部">
                    <ArrowUp size={15} strokeWidth={2} />
                    顶部
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {zoom && <Lightbox image={zoom} onClose={() => setZoom(null)} />}
    </section>
  )
}
