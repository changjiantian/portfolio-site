import { useEffect, useState } from 'react'
import { Download } from 'lucide-react'
import { profile } from '../data/profile.js'

const links = [
  { href: '#home', label: '首页' },
  { href: '#about', label: '关于' },
  { href: '#projects', label: '项目' },
  { href: '#strengths', label: '优势' },
  { href: '#contact', label: '联系' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // 移动端菜单打开时锁定背景滚动
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const close = () => setOpen(false)

  const handleNavClick = (e) => {
    // 如果在项目详情浮层内点击导航，先关闭浮层再跳转
    if (document.querySelector('.pd-overlay')) {
      window.dispatchEvent(new CustomEvent('portfolio:close-detail'))
    }
    close()
  }

  return (
    <header className={`nav ${scrolled ? 'scrolled' : ''} ${open ? 'nav-open' : ''}`}>
      <div className="nav-inner">
        <a className="nav-logo" href="#home" onClick={handleNavClick}>
          <strong>CJ</strong>
          <em className="accent-dot">.</em>
          <span>PORTFOLIO 2026</span>
        </a>
        <nav className="nav-links">
          {links.slice(0, 4).map((l) => (
            <a key={l.href} href={l.href} onClick={handleNavClick}>
              {l.label}
            </a>
          ))}
          <a className="nav-cta" href="#contact" onClick={handleNavClick}>
            联系我
          </a>
          <a className="nav-download" href="/resume.pdf" download onClick={handleNavClick}>
            <Download size={15} strokeWidth={2} />
            简历
          </a>
        </nav>
        <button
          className="nav-toggle"
          aria-label="菜单"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* 移动端下拉菜单 */}
      <div className="nav-mobile" onClick={close}>
        {links.map((l) => (
          <a key={l.href} href={l.href} onClick={handleNavClick}>
            {l.label}
          </a>
        ))}
        <a href="/resume.pdf" download onClick={handleNavClick}>
          下载简历
        </a>
      </div>
    </header>
  )
}
