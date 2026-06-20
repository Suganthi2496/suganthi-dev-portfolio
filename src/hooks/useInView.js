import { useEffect, useRef, useState } from 'react'

// Reveal element once when it scrolls into view.
export function useInView(options = {}) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (!('IntersectionObserver' in window)) {
      setInView(true)
      return
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          io.unobserve(entry.target)
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px', ...options }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return [ref, inView]
}
