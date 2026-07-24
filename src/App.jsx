import { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion'
import './App.css'
import BorderGlow from './BorderGlow'

/* --- Scroll-triggered fade-in --- */
function FadeIn({ children, delay = 0, className = '', y = 40 }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

/* --- Navigation --- */
function Nav() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', h, { passive: true })
    return () => window.removeEventListener('scroll', h)
  }, [])

  return (
    <motion.nav
      className={`nav ${scrolled ? 'nav--scrolled' : ''}`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="nav__inner">
        <a href="#hero" className="nav__logo">
          <span className="nav__logo-mark">CJ</span>
          <span className="nav__logo-dot">.</span>
        </a>
        <div className="nav__links">
          <a href="#about">{'\u5173\u4e8e'}</a>
          <a href="#projects">{'\u9879\u76ee'}</a>
          <a href="#strengths">{'\u4f18\u52bf'}</a>
          <a href="#contact">{'\u8054\u7cfb'}</a>
        </div>
        <a href="#contact" className="nav__cta">{'\u8054\u7cfb\u6211'}</a>
      </div>
    </motion.nav>
  )
}

/* --- Hero Section --- */
function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <section id="hero" ref={ref} className="hero">
      <div className="hero__bg">
        <div className="hero__orb hero__orb--1" />
        <div className="hero__orb hero__orb--2" />
        <div className="hero__orb hero__orb--3" />
        <div className="hero__grid-lines" />
      </div>

      <motion.div className="hero__content" style={{ y, opacity }}>
        <motion.p
          className="hero__label"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          Visual Designer &amp; Creative Director
        </motion.p>

        <motion.h1
          className="hero__title"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="hero__title-line">{'\u5e38\u4f20\u5efa'}</span>
          <span className="hero__title-sub">{'\u89c6\u89c9\u8bbe\u8ba1\u5e08'}</span>
        </motion.h1>

        <motion.p
          className="hero__desc"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.0 }}
        >
          {'15 \u5e74\u6570\u5b57\u4ea7\u54c1\u89c6\u89c9\u8bbe\u8ba1\u7ecf\u9a8c\uff0c\u4e13\u6ce8 UI/UX \u8bbe\u8ba1\u4e0e\u7528\u6237\u4f53\u9a8c\u521b\u65b0'}
        </motion.p>

        <motion.div
          className="hero__actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.2 }}
        >
          <a href="#projects" className="btn btn--primary">{'\u67e5\u770b\u4f5c\u54c1'}</a>
          <a href="#contact" className="btn btn--ghost">{'\u4e86\u89e3\u66f4\u591a'}</a>
        </motion.div>
      </motion.div>

      <motion.div
        className="hero__scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <div className="hero__scroll-line" />
        <span>SCROLL</span>
      </motion.div>
    </section>
  )
}

/* --- About Section --- */
function About() {
  const stats = [
    { num: '15+', label: '\u5e74\u8bbe\u8ba1\u7ecf\u9a8c' },
    { num: '6+', label: '\u5e74\u56e2\u961f\u7ba1\u7406' },
    { num: '30+', label: '\u9879\u76ee\u4ea4\u4ed8' },
    { num: '5', label: '\u77e5\u540d\u4f01\u4e1a' },
  ]

  const timeline = [
    { period: '2021 \u2014 \u81f3\u4eca', company: '\u6d59\u6c5f\u7532\u9aa8\u6587\u8d85\u7ea7\u7801\u79d1\u6280', role: 'UED \u8d1f\u8d23\u4eba' },
    { period: '2017 \u2014 2021', company: '\u676d\u5dde\u5ead\u597d\u6570\u5b57\u79d1\u6280', role: 'UED \u8d1f\u8d23\u4eba' },
    { period: '2014 \u2014 2017', company: '\u4e2d\u56fd\u79fb\u52a8\u676d\u5dde\u7814\u7a76\u9662', role: '\u9ad8\u7ea7 UI \u8bbe\u8ba1\u5e08' },
    { period: '2012 \u2014 2014', company: '\u6d59\u6c5f\u4e2d\u6b63\u667a\u80fd\u79d1\u6280', role: 'UI \u8bbe\u8ba1\u5e08' },
    { period: '2011 \u2014 2012', company: '\u6566\u5370\u4e2d\u56fd', role: 'UI \u8bbe\u8ba1\u5e08' },
  ]

  return (
    <section id="about" className="about">
      <div className="container">
        <FadeIn>
          <span className="section-label">ABOUT</span>
          <h2 className="section-title">{'\u5173\u4e8e\u6211'}</h2>
        </FadeIn>

        <div className="about__grid">
          <FadeIn delay={0.1} className="about__left">
            <div className="about__avatar">
              <div className="about__avatar-inner">
                <span className="about__avatar-text">CJ</span>
              </div>
            </div>
            <div className="about__info">
              <h3 className="about__name">{'\u5e38\u4f20\u5efa'}</h3>
              <p className="about__role">{'\u89c6\u89c9\u8bbe\u8ba1\u5e08 / UED \u603b\u76d1'}</p>
              <div className="about__contact-list">
                <div className="about__contact-item">
                  <span className="about__contact-label">{'\u7535\u8bdd'}</span>
                  <span className="about__contact-value">18143451169</span>
                </div>
                <div className="about__contact-item">
                  <span className="about__contact-label">{'\u90ae\u7bb1'}</span>
                  <span className="about__contact-value">changjiantian@163.com</span>
                </div>
                <div className="about__contact-item">
                  <span className="about__contact-label">{'\u6240\u5728\u5730'}</span>
                  <span className="about__contact-value">{'\u676d\u5dde'}</span>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} className="about__right">
            <p className="about__bio">
              {'\u6df1\u8015 UI/UX \u8bbe\u8ba1\u9886\u57df\u903e 15 \u5e74\uff0c\u4e13\u6ce8\u4e8e\u4e3a\u4e1a\u52a1\u548c\u4ea7\u54c1\u6253\u9020\u9ad8\u53ef\u884c\u6027\u7684\u89c6\u89c9\u4e0e\u521b\u610f\u8bbe\u8ba1\u65b9\u6848\u3002\u4ece\u4e2d\u56fd\u79fb\u52a8\u5230\u6d59\u6c5f\u7532\u9aa8\u6587\u8d85\u7ea7\u7801\uff0c\u59cb\u7ec8\u81f4\u529b\u4e8e\u901a\u8fc7\u8bbe\u8ba1\u9a71\u52a8\u4ea7\u54c1\u4ef7\u503c\u4e0e\u7528\u6237\u4f53\u9a8c\u7684\u6301\u7eed\u63d0\u5347\u3002'}
            </p>
            <p className="about__bio">
              {'\u7cbe\u901a C \u7aef\u4e0e B \u7aef\u8bbe\u8ba1\u89c4\u8303\uff0c\u5bf9\u7ec6\u8282\u7684\u8ffd\u6c42\u8fd1\u4e4e\u82db\u523b\u3002\u5728\u519c\u4e1a\u6570\u5b57\u5316\u3001\u5bb6\u88c5\u4e92\u8054\u7f51\u3001\u5065\u5eb7\u533b\u7597\u7b49\u591a\u4e2a\u9886\u57df\u79ef\u7d2f\u4e86\u4e30\u5bcc\u7684\u8de8\u884c\u4e1a\u8bbe\u8ba1\u7ecf\u9a8c\uff0c\u5177\u5907 6 \u5e74\u4ee5\u4e0a\u56e2\u961f\u7ba1\u7406\u80fd\u529b\u3002'}
            </p>

            <div className="about__timeline">
              {timeline.map((item, i) => (
                <FadeIn key={i} delay={0.15 + i * 0.08} className="about__timeline-item">
                  <span className="about__timeline-period">{item.period}</span>
                  <div>
                    <span className="about__timeline-company">{item.company}</span>
                    <span className="about__timeline-role">{item.role}</span>
                  </div>
                </FadeIn>
              ))}
            </div>
          </FadeIn>
        </div>

        <div className="about__stats">
          {stats.map((s, i) => (
            <FadeIn key={i} delay={0.1 + i * 0.1} className="about__stat">
              <span className="about__stat-num">{s.num}</span>
              <span className="about__stat-label">{s.label}</span>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

/* --- Projects Section --- */
function Projects() {
  const projects = [
    {
      title: '\u5168\u519c\u7801',
      tag: '\u56fd\u5bb6\u7ea7\u5e73\u53f0',
      role: '\u8bbe\u8ba1\u8d1f\u8d23\u4eba / \u4e3b\u8bbe\u8ba1\u5e08',
      period: '2022 \u2014 2024',
      desc: '\u56fd\u5bb6\u7ea7\u519c\u4ea7\u54c1\u5168\u4ea7\u4e1a\u94fe\u6570\u5b57\u5316\u7ba1\u7406\u5e73\u53f0\uff0c\u4e3a\u5168\u56fd\u519c\u4ea7\u54c1\u8d4b\u4e88\u7edf\u4e00\u6570\u5b57\u8eab\u4efd\u8bc1\u3002\u7edf\u7b79\u53ef\u89c6\u5316\u5927\u5c4f\u3001H5 \u9875\u9762\u53ca\u540e\u53f0\u7ba1\u7406\u7cfb\u7edf\u7b49\u6838\u5fc3\u6a21\u5757\u8bbe\u8ba1\u3002',
      detail: '\u5168\u519c\u7801\u662f\u519c\u4e1a\u519c\u6751\u90e8\u4e3b\u5bfc\u7684\u56fd\u5bb6\u7ea7\u519c\u4ea7\u54c1\u8d28\u91cf\u5b89\u5168\u8ffd\u6eaf\u5e73\u53f0\uff0c\u65e8\u5728\u4e3a\u5168\u56fd\u519c\u4ea7\u54c1\u8d4b\u4e88\u7edf\u4e00\u7684\u6570\u5b57\u8eab\u4efd\u6807\u8bc6\u3002\u4f5c\u4e3a\u8bbe\u8ba1\u8d1f\u8d23\u4eba\uff0c\u6211\u7edf\u7b79\u4e86\u5e73\u53f0\u6574\u4f53\u89c6\u89c9\u98ce\u683c\u5b9a\u4e49\u4e0e\u8bbe\u8ba1\u7cfb\u7edf\u642d\u5efa\uff0c\u6db5\u76d6\u53ef\u89c6\u5316\u6570\u636e\u5927\u5c4f\u3001\u79fb\u52a8\u7aef H5 \u9875\u9762\u3001\u540e\u53f0\u7ba1\u7406\u7cfb\u7edf\u7b49\u591a\u4e2a\u6838\u5fc3\u6a21\u5757\u3002\u8bbe\u8ba1\u8fc7\u7a0b\u4e2d\u6df1\u5165\u7406\u89e3\u519c\u4e1a\u4ea7\u4e1a\u94fe\u4e1a\u52a1\u903b\u8f91\uff0c\u786e\u4fdd\u8bbe\u8ba1\u65b9\u6848\u65e2\u5177\u5907\u4e13\u4e1a\u6df1\u5ea6\u53c8\u4fdd\u6301\u826f\u597d\u7684\u7528\u6237\u4f53\u9a8c\u3002\u9879\u76ee\u4e0a\u7ebf\u540e\u670d\u52a1\u8986\u76d6\u5168\u56fd\u591a\u4e2a\u7701\u4efd\uff0c\u6210\u4e3a\u519c\u4e1a\u6570\u5b57\u5316\u7684\u6807\u6746\u6848\u4f8b\u3002',
      highlights: [
        '\u4e3b\u5bfc\u5e73\u53f0\u6574\u4f53\u89c6\u89c9\u98ce\u683c\u5b9a\u4e49\u4e0e\u8bbe\u8ba1\u7cfb\u7edf\u642d\u5efa',
        '\u53ef\u89c6\u5316\u6570\u636e\u5927\u5c4f\u8bbe\u8ba1\uff0c\u590d\u6742\u6570\u636e\u7684\u76f4\u89c2\u5448\u73b0',
        '\u79fb\u52a8\u7aef H5 \u4e0e\u540e\u53f0\u7ba1\u7406\u7cfb\u7edf\u7684\u4f53\u9a8c\u4e00\u81f4\u6027\u8bbe\u8ba1',
        '\u670d\u52a1\u8986\u76d6\u5168\u56fd\u591a\u7701\u4efd\uff0c\u6210\u4e3a\u519c\u4e1a\u6570\u5b57\u5316\u6807\u6746',
      ],
      img: '/works/quannongma-cover.jpg',
      color: '#1a3a5c',
      gallery: [
        { src: '/works/quannongma/homepage.jpg', label: '\u5168\u519c\u7801\u7ba1\u7406\u5e73\u53f0\u9996\u9875' },
        { src: '/works/quannongma/data-cockpit.jpg', label: '\u5168\u519c\u7801\u5927\u6570\u636e\u9a7e\u9a76\u8231' },
        { src: '/works/quannongma/map-overview.jpg', label: '\u5168\u56fd\u8d4b\u7801\u5730\u56fe\u6982\u89c8' },
        { src: '/works/quannongma/app-service.jpg', label: '\u5e94\u7528\u670d\u52a1\u76d1\u63a7\u5e73\u53f0' },
        { src: '/works/quannongma/data-resources.jpg', label: '\u6570\u636e\u8d44\u6e90\u4f53\u7cfb' },
        { src: '/works/quannongma/digital-identity.jpg', label: '\u5173\u8054\u5206\u6790\u56fe\u8c31' },
        { src: '/works/quannongma/gender-distribution.jpg', label: '\u4eba\u5458\u57fa\u7840\u5e93\u6027\u522b\u5206\u5e03' },
        { src: '/works/quannongma/data-source-analysis.jpg', label: '\u4eba\u5458\u57fa\u7840\u5e93\u6570\u636e\u6765\u6e90\u5206\u6790' },
        { src: '/works/quannongma/farm-analysis.jpg', label: '\u5bb6\u5ead\u519c\u573a\u4e3b\u5173\u8054\u5206\u6790' },
        { src: '/works/quannongma/data-governance.jpg', label: '\u6570\u636e\u6cbb\u7406\u5e73\u53f0' },
      ],
    },
    {
      title: '\u6d59\u6c5f\u8336\u4ea7\u4e1a\u5927\u8111',
      tag: '\u7701\u7ea7\u5e73\u53f0',
      role: '\u8bbe\u8ba1\u8d1f\u8d23\u4eba / \u4e3b\u8bbe\u8ba1\u5e08',
      period: '2022 \u2014 2023',
      desc: '\u6d59\u6c5f\u7701\u519c\u4e1a\u519c\u6751\u5385\u7275\u5934\u7684\u8336\u4ea7\u4e1a\u6570\u5b57\u5316\u5e73\u53f0\u3002\u6df1\u5165\u53c2\u4e0e\u4ea7\u54c1\u8c03\u7814\u4e0e\u9700\u6c42\u5206\u6790\uff0c\u5e26\u9886\u56e2\u961f\u5b8c\u6210\u4ece\u7b56\u7565\u5230\u6267\u884c\u7684\u5168\u94fe\u8def\u8bbe\u8ba1\u3002',
      detail: '\u6d59\u6c5f\u8336\u4ea7\u4e1a\u5927\u8111\u662f\u6d59\u6c5f\u7701\u519c\u4e1a\u519c\u6751\u5385\u7275\u5934\u6253\u9020\u7684\u8336\u4ea7\u4e1a\u6570\u5b57\u5316\u7efc\u5408\u5e73\u53f0\uff0c\u670d\u52a1\u4e8e\u5168\u7701\u8336\u4ea7\u4e1a\u7684\u6570\u5b57\u5316\u8f6c\u578b\u3002\u6211\u5e26\u9886\u56e2\u961f\u6df1\u5165\u53c2\u4e0e\u4ea7\u54c1\u8c03\u7814\u4e0e\u9700\u6c42\u5206\u6790\uff0c\u4ece\u8bbe\u8ba1\u7b56\u7565\u5230\u89c6\u89c9\u6267\u884c\u5b8c\u6210\u5168\u94fe\u8def\u8bbe\u8ba1\u3002\u9879\u76ee\u6db5\u76d6\u6570\u636e\u53ef\u89c6\u5316\u5927\u5c4f\u3001\u540e\u53f0\u7ba1\u7406\u7cfb\u7edf\u3001\u79fb\u52a8\u7aef\u5e94\u7528\u7b49\u591a\u4e2a\u7ec8\u7aef\uff0c\u5728\u8bbe\u8ba1\u4e0a\u5145\u5206\u8003\u8651\u653f\u52a1\u573a\u666f\u7684\u4e13\u4e1a\u6027\u4e0e\u6570\u636e\u5c55\u793a\u7684\u76f4\u89c2\u6027\uff0c\u5e73\u8861\u4e86\u4fe1\u606f\u5bc6\u5ea6\u4e0e\u89c6\u89c9\u7f8e\u611f\u3002',
      highlights: [
        '\u6df1\u5165\u4ea7\u54c1\u8c03\u7814\uff0c\u7406\u89e3\u8336\u4ea7\u4e1a\u5168\u94fe\u8def\u4e1a\u52a1\u903b\u8f91',
        '\u6570\u636e\u53ef\u89c6\u5316\u5927\u5c4f\u8bbe\u8ba1\uff0c\u5e73\u8861\u4fe1\u606f\u5bc6\u5ea6\u4e0e\u89c6\u89c9\u7f8e\u611f',
        '\u591a\u7ec8\u7aef\u8bbe\u8ba1\u4f53\u9a8c\u4e00\u81f4\u6027\uff0c\u786e\u4fdd\u54c1\u724c\u7edf\u4e00\u6027',
        '\u8bbe\u8ba1\u8d4b\u80fd\u653f\u52a1\u573a\u666f\uff0c\u63d0\u5347\u51b3\u7b56\u6548\u7387\u4e0e\u7528\u6237\u4f53\u9a8c',
      ],
      img: '/works/tea-brain.jpg',
      color: '#1a4a2e',
    },
    {
      title: '\u6d59\u519c\u7801',
      tag: '\u7701\u7ea7\u5e73\u53f0',
      role: '\u8bbe\u8ba1\u8d1f\u8d23\u4eba / \u4e3b\u8bbe\u8ba1\u5e08',
      period: '2021 \u2014 2023',
      desc: '\u6d59\u6c5f\u7701\u6570\u5b57\u519c\u4e1a\u670d\u52a1\u5e73\u53f0\u4e0e\u6570\u5b57\u8eab\u4efd\u6807\u8bc6\u7cfb\u7edf\u3002\u6df1\u5ea6\u53c2\u4e0e\u53ef\u89c6\u5316\u5927\u5c4f\u3001\u540e\u53f0\u7cfb\u7edf\u53ca H5 \u9875\u9762\u8bbe\u8ba1\uff0c\u83b7\u5404\u5927\u5a92\u4f53\u5e7f\u6cdb\u62a5\u9053\u3002',
      detail: '\u6d59\u519c\u7801\u662f\u6d59\u6c5f\u7701\u6570\u5b57\u519c\u4e1a\u7684\u6838\u5fc3\u670d\u52a1\u5e73\u53f0\uff0c\u4e3a\u519c\u4e1a\u751f\u4ea7\u4e3b\u4f53\u63d0\u4f9b\u6570\u5b57\u8eab\u4efd\u6807\u8bc6\u4e0e\u7efc\u5408\u670d\u52a1\u3002\u4f5c\u4e3a\u8bbe\u8ba1\u8d1f\u8d23\u4eba\uff0c\u6211\u4e3b\u5bfc\u4e86\u5e73\u53f0\u7684\u6574\u4f53\u89c6\u89c9\u8bbe\u8ba1\uff0c\u5305\u62ec\u6570\u636e\u53ef\u89c6\u5316\u5927\u5c4f\u3001\u540e\u53f0\u7ba1\u7406\u7cfb\u7edf\u4ee5\u53ca\u9762\u5411\u519c\u6237\u7684\u79fb\u52a8\u7aef H5 \u9875\u9762\u3002\u8bbe\u8ba1\u4e2d\u6df1\u5165\u7406\u89e3\u519c\u4e1a\u6570\u5b57\u5316\u573a\u666f\uff0c\u5728\u4fdd\u8bc1\u4e13\u4e1a\u6027\u7684\u540c\u65f6\u786e\u4fdd\u754c\u9762\u7684\u6613\u7528\u6027\u548c\u7f8e\u89c2\u5ea6\u3002\u9879\u76ee\u4e0a\u7ebf\u540e\u83b7\u5f97\u4eba\u6c11\u65e5\u62a5\u3001\u65b0\u534e\u793e\u7b49\u4e3b\u6d41\u5a92\u4f53\u7684\u5e7f\u6cdb\u62a5\u9053\uff0c\u6210\u4e3a\u519c\u4e1a\u6570\u5b57\u5316\u7684\u7701\u7ea7\u6807\u6746\u3002',
      highlights: [
        '\u4e3b\u5bfc\u5e73\u53f0\u6574\u4f53\u89c6\u89c9\u8bbe\u8ba1\uff0c\u5efa\u7acb\u7edf\u4e00\u8bbe\u8ba1\u8bed\u8a00',
        '\u6570\u636e\u53ef\u89c6\u5316\u5927\u5c4f\u8bbe\u8ba1\uff0c\u590d\u6742\u519c\u4e1a\u6570\u636e\u7684\u6e05\u6670\u5448\u73b0',
        '\u83b7\u4eba\u6c11\u65e5\u62a5\u3001\u65b0\u534e\u793e\u7b49\u4e3b\u6d41\u5a92\u4f53\u5e7f\u6cdb\u62a5\u9053',
        '\u8de8\u90e8\u95e8\u8bbe\u8ba1\u534f\u4f5c\uff0c\u786e\u4fdd\u591a\u7ec8\u7aef\u4f53\u9a8c\u4e00\u81f4\u6027',
      ],
      img: '/works/zhemama.jpg',
      color: '#5c3a1a',
    },
    {
      title: '\u5ead\u597d\u54c1\u724c\u5b98\u7f51',
      tag: '\u4e92\u8054\u7f51\u5e73\u53f0',
      role: 'UED \u8d1f\u8d23\u4eba',
      period: '2017 \u2014 2021',
      desc: '\u4e3b\u5bfc\u5bb6\u88c5\u4e92\u8054\u7f51\u5e73\u53f0\u54c1\u724c\u5b98\u7f51\u5168\u9762\u6539\u7248\uff0c\u91cd\u65b0\u68b3\u7406\u7f51\u7ad9\u7ed3\u6784\u4e0e\u54c1\u724c\u8bbe\u8ba1\u8bed\u8a00\u3002\u6539\u7248\u4e0a\u7ebf\u540e\u4e00\u4e2a\u6708\u516c\u53f8\u6210\u529f\u83b7\u5f97\u98ce\u9669\u6295\u8d44\u3002',
      detail: '\u5ead\u597d\u662f\u4e00\u5bb6\u4e13\u6ce8\u4e8e\u5bb6\u88c5\u4e92\u8054\u7f51\u7684\u521b\u65b0\u5e73\u53f0\uff0c\u4f5c\u4e3a UED \u8d1f\u8d23\u4eba\uff0c\u6211\u4e3b\u5bfc\u4e86\u54c1\u724c\u5b98\u7f51\u7684\u5168\u9762\u6539\u7248\u8bbe\u8ba1\u3002\u4ece\u4fe1\u606f\u67b6\u6784\u548c\u54c1\u724c\u8bbe\u8ba1\u8bed\u8a00\u5165\u624b\uff0c\u91cd\u65b0\u68b3\u7406\u7f51\u7ad9\u7ed3\u6784\u4e0e\u7528\u6237\u52a8\u7ebf\uff0c\u901a\u8fc7\u6df1\u5ea6\u7528\u6237\u8bbf\u8c08\u548c\u7ade\u54c1\u5206\u6790\u786e\u5b9a\u8bbe\u8ba1\u65b9\u5411\u3002\u6539\u7248\u540e\u5b98\u7f51\u7684\u7528\u6237\u505c\u7559\u65f6\u957f\u548c\u8f6c\u5316\u7387\u5747\u6709\u663e\u8457\u63d0\u5347\uff0c\u4e0a\u7ebf\u4e00\u4e2a\u6708\u540e\u516c\u53f8\u6210\u529f\u83b7\u5f97\u98ce\u9669\u6295\u8d44\uff0c\u5145\u5206\u8bc1\u660e\u4e86\u8bbe\u8ba1\u9a71\u52a8\u7684\u5546\u4e1a\u4ef7\u503c\u3002\u6b64\u5916\u8fd8\u4e3b\u5bfc\u4e86\u79fb\u52a8\u7aef\u5e94\u7528\u7684 UI/UX \u8bbe\u8ba1\uff0c\u642d\u5efa\u4e86\u4ece\u96f6\u5230\u4e00\u7684\u8bbe\u8ba1\u4f53\u7cfb\u3002',
      highlights: [
        '\u4e3b\u5bfc\u54c1\u724c\u5b98\u7f51\u5168\u9762\u6539\u7248\uff0c\u91cd\u65b0\u5b9a\u4e49\u54c1\u724c\u89c6\u89c9\u8bed\u8a00',
        '\u642d\u5efa\u79fb\u52a8\u7aef\u5e94\u7528\u8bbe\u8ba1\u4f53\u7cfb\uff0c\u5efa\u7acb\u8bbe\u8ba1\u89c4\u8303\u4e0e\u7ec4\u4ef6\u5e93',
        '\u6539\u7248\u4e0a\u7ebf\u4e00\u4e2a\u6708\u540e\u516c\u53f8\u6210\u529f\u83b7\u5f97\u98ce\u9669\u6295\u8d44',
        '\u7ec4\u5efa UED \u56e2\u961f\uff0c\u63a8\u52a8\u8bbe\u8ba1\u6d41\u7a0b\u6807\u51c6\u5316',
      ],
      img: '/works/tinghao.jpg',
      color: '#3a1a5c',
    },
    {
      title: '\u55e8\u5065\u5eb7 APP',
      tag: '\u79fb\u52a8\u7aef\u4ea7\u54c1',
      role: '\u9ad8\u7ea7 UI \u8bbe\u8ba1\u5e08',
      period: '2014 \u2014 2017',
      desc: '\u4e2d\u56fd\u79fb\u52a8\u6218\u7565\u7ea7\u5065\u5eb7\u5e73\u53f0\u3002\u72ec\u7acb\u5b8c\u6210\u54c1\u724c Logo \u53ca CI \u7cfb\u7edf\u8bbe\u8ba1\uff0c\u4e3b\u5bfc APP \u56db\u6b21\u91cd\u5927\u6539\u7248\u8fed\u4ee3\uff0c\u5efa\u7acb UI \u8bbe\u8ba1\u89c4\u8303\u4f53\u7cfb\u3002',
      detail: '\u55e8\u5065\u5eb7\u662f\u4e2d\u56fd\u79fb\u52a8\u676d\u5dde\u7814\u7a76\u9662\u7684\u6218\u7565\u7ea7\u5065\u5eb7\u7ba1\u7406\u5e73\u53f0\uff0c\u6211\u4f5c\u4e3a\u9ad8\u7ea7 UI \u8bbe\u8ba1\u5e08\u72ec\u7acb\u5b8c\u6210\u4e86\u54c1\u724c Logo \u53ca CI \u7cfb\u7edf\u8bbe\u8ba1\uff0c\u5efa\u7acb\u4e86\u5b8c\u6574\u7684\u54c1\u724c\u89c6\u89c9\u8bc6\u522b\u4f53\u7cfb\u3002\u5728\u4ea7\u54c1\u8bbe\u8ba1\u65b9\u9762\uff0c\u4e3b\u5bfc\u4e86 APP \u7684\u56db\u6b21\u91cd\u5927\u6539\u7248\u8fed\u4ee3\uff0c\u6bcf\u6b21\u6539\u7248\u5747\u57fa\u4e8e\u6df1\u5165\u7684\u7528\u6237\u7814\u7a76\u548c\u6570\u636e\u5206\u6790\uff0c\u6301\u7eed\u4f18\u5316\u5065\u5eb7\u7ba1\u7406\u6d41\u7a0b\u4e2d\u7684\u5173\u952e\u4f53\u9a8c\u8282\u70b9\u3002\u540c\u65f6\u5efa\u7acb\u4e86\u5b8c\u6574\u7684 UI \u8bbe\u8ba1\u89c4\u8303\u4f53\u7cfb\uff0c\u663e\u8457\u63d0\u5347\u4e86\u56e2\u961f\u534f\u4f5c\u6548\u7387\u548c\u4ea7\u54c1\u89c6\u89c9\u4e00\u81f4\u6027\u3002',
      highlights: [
        '\u72ec\u7acb\u5b8c\u6210\u54c1\u724c Logo \u53ca CI \u7cfb\u7edf\u8bbe\u8ba1',
        '\u4e3b\u5bfc APP \u56db\u6b21\u91cd\u5927\u6539\u7248\uff0c\u6301\u7eed\u4f18\u5316\u7528\u6237\u4f53\u9a8c',
        '\u5efa\u7acb\u5b8c\u6574 UI \u8bbe\u8ba1\u89c4\u8303\u4f53\u7cfb\uff0c\u63d0\u5347\u56e2\u961f\u534f\u4f5c\u6548\u7387',
        '\u6df1\u5165\u7528\u6237\u7814\u7a76\u4e0e\u6570\u636e\u5206\u6790\u9a71\u52a8\u8bbe\u8ba1\u51b3\u7b56',
      ],
      img: '/works/health.jpg',
      color: '#5c1a2a',
    },
    {
      title: 'Doin \u7535\u5546\u5e73\u53f0',
      tag: '\u7535\u5546\u8bbe\u8ba1',
      role: 'UI \u8bbe\u8ba1\u5e08',
      period: '2011 \u2014 2012',
      desc: '\u8d1f\u8d23\u7535\u5546\u5e73\u53f0\u7f51\u7ad9\u53ca\u79fb\u52a8\u7aef UI \u8bbe\u8ba1\uff0c\u4e3b\u5bfc\u5927\u578b\u4e3b\u9898\u8bbe\u8ba1\u6d3b\u52a8\uff0c\u53c2\u4e0e\u5b8c\u6210\u5e73\u53f0\u91cd\u5927\u6539\u7248\u3002\u6db5\u76d6\u6d3b\u52a8\u8fd0\u8425\u3001\u5546\u54c1\u5c55\u793a\u7b49\u5168\u94fe\u8def\u8bbe\u8ba1\u3002',
      detail: 'Doin \u662f\u4e00\u5bb6\u4e13\u6ce8\u4e8e\u8de8\u5883\u7535\u5546\u7684\u5e73\u53f0\uff0c\u6211\u8d1f\u8d23\u5e73\u53f0\u7f51\u7ad9\u53ca\u79fb\u52a8\u7aef\u7684 UI \u8bbe\u8ba1\u5de5\u4f5c\u3002\u5728\u804c\u671f\u95f4\u4e3b\u5bfc\u4e86\u591a\u6b21\u5927\u578b\u4e3b\u9898\u8425\u9500\u6d3b\u52a8\u7684\u8bbe\u8ba1\uff0c\u5305\u62ec\u5723\u8bde\u5b63\u3001\u9ed1\u4e94\u7b49\u91cd\u8981\u8282\u70b9\u7684\u89c6\u89c9\u65b9\u6848\u3002\u540c\u65f6\u8d1f\u8d23\u5546\u54c1\u8be6\u60c5\u9875\u3001\u8d2d\u7269\u6d41\u7a0b\u7b49\u6838\u5fc3\u94fe\u8def\u7684\u4f53\u9a8c\u4f18\u5316\u8bbe\u8ba1\uff0c\u901a\u8fc7\u6570\u636e\u9a71\u52a8\u7684\u8bbe\u8ba1\u8fed\u4ee3\u4e0d\u65ad\u63d0\u5347\u8f6c\u5316\u7387\u3002\u53c2\u4e0e\u5e73\u53f0\u91cd\u5927\u6539\u7248\u4e0e\u54c1\u724c\u5efa\u8bbe\u7684\u89c6\u89c9\u65b9\u6848\u5236\u5b9a\uff0c\u786e\u4fdd\u8bbe\u8ba1\u4e0e\u5546\u4e1a\u76ee\u6807\u7684\u9ad8\u5ea6\u4e00\u81f4\u3002',
      highlights: [
        '\u4e3b\u5bfc\u591a\u6b21\u5927\u578b\u4e3b\u9898\u8425\u9500\u6d3b\u52a8\u8bbe\u8ba1',
        '\u5546\u54c1\u8be6\u60c5\u9875\u4e0e\u8d2d\u7269\u6d41\u7a0b\u7684\u4f53\u9a8c\u4f18\u5316\u8bbe\u8ba1',
        '\u6570\u636e\u9a71\u52a8\u7684\u8bbe\u8ba1\u8fed\u4ee3\uff0c\u6301\u7eed\u63d0\u5347\u8f6c\u5316\u7387',
        '\u53c2\u4e0e\u54c1\u724c\u5efa\u8bbe\u89c6\u89c9\u65b9\u6848\u5236\u5b9a',
      ],
      img: '/works/christmas-poster.jpg',
      color: '#2a4a3a',
    },
  ]

  const [selected, setSelected] = useState(null)
  const [hovered, setHovered] = useState(null)
  const [lightbox, setLightbox] = useState(null)

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') {
        if (lightbox !== null) setLightbox(null)
        else if (selected !== null) setSelected(null)
      }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [lightbox, selected])

  useEffect(() => {
    if (selected !== null) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [selected])

  return (
    <section id="projects" className="projects">
      <div className="container">
        <FadeIn>
          <span className="section-label">SELECTED WORK</span>
          <h2 className="section-title">{'\u7cbe\u9009\u9879\u76ee'}</h2>
          <p className="section-desc">{'\u6db5\u76d6\u56fd\u5bb6\u7ea7\u6570\u5b57\u5316\u5e73\u53f0\u3001\u884c\u4e1a\u521b\u65b0\u4ea7\u54c1\u53ca\u7535\u5546\u8bbe\u8ba1\uff0c\u6bcf\u4e00\u4e2a\u9879\u76ee\u90fd\u662f\u5bf9\u8bbe\u8ba1\u4ef7\u503c\u7684\u6df1\u5ea6\u5b9e\u8df5\u3002'}</p>
        </FadeIn>

        <div className="projects__grid">
          {projects.map((p, i) => (
            <FadeIn key={i} delay={i * 0.08} className="project-card-wrap">
              <BorderGlow
                edgeSensitivity={30}
                glowColor="43 55 65"
                backgroundColor={p.color}
                borderRadius={16}
                glowRadius={35}
                glowIntensity={1.2}
                coneSpread={25}
                colors={['#C8A55C', '#d4b468', '#a08040']}
              >
                <div
                  className={`project-card ${hovered === i ? 'project-card--hovered' : ''}`}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  onClick={() => setSelected(i)}
                >
                  <div className="project-card__img" style={{ background: p.color }}>
                    <img src={p.img} alt={p.title} loading="lazy" />
                  </div>
                  <div className="project-card__overlay">
                    <span className="project-card__tag">{p.tag}</span>
                    <h3 className="project-card__title">{p.title}</h3>
                    <span className="project-card__role">{p.role}</span>
                    <p className="project-card__desc">{p.desc}</p>
                  </div>
                </div>
              </BorderGlow>
            </FadeIn>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected !== null && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="modal-content"
              initial={{ opacity: 0, y: 40, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.97 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="modal-close" onClick={() => setSelected(null)}>{'\u2715'}</button>
              <div className="modal-hero">
                <img src={projects[selected].img} alt={projects[selected].title} />
                <div className="modal-hero-overlay">
                  <span className="modal-hero-tag">{projects[selected].tag}</span>
                  <h2 className="modal-hero-title">{projects[selected].title}</h2>
                </div>
              </div>
              <div className="modal-body">
                <div className="modal-meta">
                  <div className="modal-meta-item">
                    <span className="modal-meta-label">{'\u89d2\u8272'}</span>
                    <span className="modal-meta-value">{projects[selected].role}</span>
                  </div>
                  <div className="modal-meta-item">
                    <span className="modal-meta-label">{'\u65f6\u95f4'}</span>
                    <span className="modal-meta-value">{projects[selected].period}</span>
                  </div>
                  <div className="modal-meta-item">
                    <span className="modal-meta-label">{'\u7c7b\u578b'}</span>
                    <span className="modal-meta-value">{projects[selected].tag}</span>
                  </div>
                </div>
                <div className="modal-section">
                  <h3>{'\u9879\u76ee\u6982\u8ff0'}</h3>
                  <p>{projects[selected].detail}</p>
                </div>
                <div className="modal-section">
                  <h3>{'\u8bbe\u8ba1\u4eae\u70b9'}</h3>
                  <div className="modal-highlights">
                    {projects[selected].highlights.map((h, j) => (
                      <div key={j} className="modal-highlight">{h}</div>
                    ))}
                  </div>
                </div>
                {projects[selected].gallery && (
                  <div className="modal-section">
                    <h3>{'\u4f5c\u54c1\u5c55\u793a'}</h3>
                    <div className="modal-gallery">
                      {projects[selected].gallery.map((g, j) => (
                        <div
                          key={j}
                          className="modal-gallery-item"
                          onClick={() => setLightbox(j)}
                        >
                          <img src={g.src} alt={g.label} loading="lazy" />
                          <div className="modal-gallery-label">{g.label}</div>
                          <div className="modal-gallery-zoom">
                            <span>{'\u2922'}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {lightbox !== null && selected !== null && projects[selected].gallery && (
          <motion.div
            className="lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setLightbox(null)}
          >
            <button className="lightbox-close" onClick={() => setLightbox(null)}>{'\u2715'}</button>
            <button
              className="lightbox-nav lightbox-nav--prev"
              onClick={(e) => { e.stopPropagation(); setLightbox((lightbox - 1 + projects[selected].gallery.length) % projects[selected].gallery.length) }}
            >{'\u2039'}</button>
            <div className="lightbox-img-wrap" onClick={(e) => e.stopPropagation()}>
              <motion.img
                key={lightbox}
                src={projects[selected].gallery[lightbox].src}
                alt={projects[selected].gallery[lightbox].label}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
              />
              <div className="lightbox-caption">
                <span className="lightbox-caption-label">{projects[selected].gallery[lightbox].label}</span>
                <span className="lightbox-caption-count">{lightbox + 1} / {projects[selected].gallery.length}</span>
              </div>
            </div>
            <button
              className="lightbox-nav lightbox-nav--next"
              onClick={(e) => { e.stopPropagation(); setLightbox((lightbox + 1) % projects[selected].gallery.length) }}
            >{'\u203a'}</button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

/* --- Strengths Section --- */
function Strengths() {
  const strengths = [
    {
      icon: '\u25c8',
      title: '\u89c6\u89c9\u7cfb\u7edf\u8bbe\u8ba1',
      desc: '\u7cbe\u901a\u8bbe\u8ba1\u7cfb\u7edf\u642d\u5efa\uff0c\u4ece\u8272\u5f69\u3001\u5b57\u4f53\u5230\u7ec4\u4ef6\u89c4\u8303\uff0c\u6784\u5efa\u4e00\u81f4\u6027\u54c1\u724c\u89c6\u89c9\u8bed\u8a00\uff0c\u786e\u4fdd\u4ea7\u54c1\u4f53\u9a8c\u7684\u7edf\u4e00\u4e0e\u53ef\u6269\u5c55\u3002',
    },
    {
      icon: '\u25c7',
      title: '\u7528\u6237\u4f53\u9a8c\u9a71\u52a8',
      desc: '\u5584\u4e8e\u6d1e\u5bdf\u7528\u6237\u9700\u6c42\u4e0e\u884c\u4e3a\u6a21\u5f0f\uff0c\u901a\u8fc7\u6570\u636e\u9a71\u52a8\u7684\u8bbe\u8ba1\u8fed\u4ee3\uff0c\u6301\u7eed\u4f18\u5316\u4ea7\u54c1\u4f53\u9a8c\u4e0e\u8f6c\u5316\u7387\u3002',
    },
    {
      icon: '\u25b3',
      title: '\u8de8\u884c\u4e1a\u8bbe\u8ba1\u7ecf\u9a8c',
      desc: '\u5728\u519c\u4e1a\u6570\u5b57\u5316\u3001\u5bb6\u88c5\u4e92\u8054\u7f51\u3001\u5065\u5eb7\u533b\u7597\u3001\u7535\u5546\u7b49\u591a\u4e2a\u9886\u57df\u79ef\u7d2f\u4e86\u4e30\u5bcc\u7684\u8bbe\u8ba1\u5b9e\u8df5\uff0c\u80fd\u5feb\u901f\u9002\u5e94\u4e0d\u540c\u4e1a\u52a1\u573a\u666f\u3002',
    },
    {
      icon: '\u25cb',
      title: '\u56e2\u961f\u7ba1\u7406\u4e0e\u8d4b\u80fd',
      desc: '6 \u5e74\u4ee5\u4e0a UED \u56e2\u961f\u7ba1\u7406\u7ecf\u9a8c\uff0c\u64c5\u957f\u7ec4\u5efa\u3001\u57f9\u517b\u8bbe\u8ba1\u56e2\u961f\uff0c\u63a8\u52a8\u8bbe\u8ba1\u6d41\u7a0b\u6807\u51c6\u5316\u4e0e\u56e2\u961f\u80fd\u529b\u6210\u957f\u3002',
    },
    {
      icon: '\u25a1',
      title: '\u8bbe\u8ba1\u6218\u7565\u601d\u7ef4',
      desc: '\u80fd\u591f\u5c06\u4e1a\u52a1\u76ee\u6807\u8f6c\u5316\u4e3a\u53ef\u843d\u5730\u7684\u8bbe\u8ba1\u7b56\u7565\uff0c\u5728\u4ea7\u54c1\u89c4\u5212\u9636\u6bb5\u4ecb\u5165\uff0c\u4ee5\u8bbe\u8ba1\u9a71\u52a8\u5546\u4e1a\u4ef7\u503c\u3002',
    },
    {
      icon: '\u2b21',
      title: '\u5168\u94fe\u8def\u8bbe\u8ba1\u80fd\u529b',
      desc: '\u4ece\u54c1\u724c VI\u3001UI \u754c\u9762\u5230\u53ef\u89c6\u5316\u5927\u5c4f\u3001\u8fd0\u8425\u7269\u6599\uff0c\u8986\u76d6\u6570\u5b57\u4ea7\u54c1\u8bbe\u8ba1\u7684\u5b8c\u6574\u94fe\u8def\uff0c\u786e\u4fdd\u7aef\u5230\u7aef\u7684\u8bbe\u8ba1\u54c1\u8d28\u3002',
    },
  ]

  return (
    <section id="strengths" className="strengths">
      <div className="container">
        <FadeIn>
          <span className="section-label">STRENGTHS</span>
          <h2 className="section-title">{'\u6838\u5fc3\u4f18\u52bf'}</h2>
        </FadeIn>

        <div className="strengths__grid">
          {strengths.map((s, i) => (
            <FadeIn key={i} delay={i * 0.08} className="strength-card-wrap">
              <div className="strength-card">
                <span className="strength-card__icon">{s.icon}</span>
                <h3 className="strength-card__title">{s.title}</h3>
                <p className="strength-card__desc">{s.desc}</p>
                <div className="strength-card__line" />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

/* --- Contact / Footer Section --- */
function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact__bg">
        <div className="hero__orb hero__orb--1" style={{ top: '20%', left: '70%' }} />
        <div className="hero__orb hero__orb--2" style={{ top: '60%', left: '20%' }} />
      </div>
      <div className="container contact__inner">
        <FadeIn>
          <span className="section-label">GET IN TOUCH</span>
          <h2 className="contact__title">{'\u8ba9\u6211\u4eec\u4e00\u8d77'}<br />{'\u521b\u9020\u66f4\u597d\u7684\u4ea7\u54c1'}</h2>
        </FadeIn>

        <FadeIn delay={0.15} className="contact__details">
          <div className="contact__info-grid">
            <div className="contact__info-item">
              <span className="contact__info-label">{'\u7535\u8bdd'}</span>
              <span className="contact__info-value">18143451169</span>
            </div>
            <div className="contact__info-item">
              <span className="contact__info-label">{'\u90ae\u7bb1'}</span>
              <a href="mailto:changjiantian@163.com" className="contact__info-value contact__info-link">
                changjiantian@163.com
              </a>
            </div>
            <div className="contact__info-item">
              <span className="contact__info-label">{'\u6240\u5728\u5730'}</span>
              <span className="contact__info-value">{'\u676d\u5dde'}</span>
            </div>
            <div className="contact__info-item">
              <span className="contact__info-label">{'\u5230\u5c97\u65f6\u95f4'}</span>
              <span className="contact__info-value">{'2 \u5468\u5185'}</span>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.25}>
          <a href="mailto:changjiantian@163.com" className="btn btn--primary btn--large">
            {'\u53d1\u9001\u90ae\u4ef6\u8054\u7cfb\u6211'}
          </a>
        </FadeIn>

        <FadeIn delay={0.35} className="contact__footer">
          <p>{'\u00a9 2026 \u5e38\u4f20\u5efa \u2014 \u4ee5\u8bbe\u8ba1\u9a71\u52a8\u4ea7\u54c1\u4ef7\u503c'}</p>
        </FadeIn>
      </div>
    </section>
  )
}

/* --- App --- */
export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Strengths />
      <Contact />
    </>
  )
}
