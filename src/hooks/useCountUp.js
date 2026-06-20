import { useEffect, useRef, useState } from 'react'

// Count from 0 → target once when scrolled into view.
export function useCountUp(target, duration = 1400) {
  const ref = useRef(null)
  const [value, setValue] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (!('IntersectionObserver' in window)) {
      setValue(target)
      return
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const start = performance.now()
          const tick = (now) => {
            const p = Math.min((now - start) / duration, 1)
            const eased = 1 - Math.pow(1 - p, 3)
            setValue(Math.round(eased * target))
            if (p < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
          io.unobserve(entry.target)
        }
      },
      { threshold: 0.5 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [target, duration])

  return [ref, value]
}
