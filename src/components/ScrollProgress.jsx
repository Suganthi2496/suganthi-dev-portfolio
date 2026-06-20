import { useEffect, useState } from 'react'

export default function ScrollProgress() {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || document.documentElement.scrollTop
      const docH = document.documentElement.scrollHeight - window.innerHeight
      setWidth(docH > 0 ? (y / docH) * 100 : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return <div className="scroll-progress" style={{ width: width + '%' }} />
}
