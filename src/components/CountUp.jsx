import { useEffect, useRef, useState } from 'react'

function easeOutExpo(t) {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t)
}

function zeroedValue(value) {
  const match = String(value).match(/[\d.]+/)
  if (!match) return value
  const decimals = match[0].includes('.') ? match[0].split('.')[1].length : 0
  const prefix = String(value).slice(0, match.index)
  const suffix = String(value).slice(match.index + match[0].length)
  return `${prefix}${(0).toFixed(decimals)}${suffix}`
}

export default function CountUp({ value, duration = 1800 }) {
  const [display, setDisplay] = useState(() => zeroedValue(value))
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const match = String(value).match(/[\d.]+/)
    if (!match) {
      setDisplay(value)
      return
    }

    const target = parseFloat(match[0])
    const decimals = match[0].includes('.') ? match[0].split('.')[1].length : 0
    const prefix = String(value).slice(0, match.index)
    const suffix = String(value).slice(match.index + match[0].length)

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) {
      setDisplay(value)
      return
    }

    const node = ref.current
    if (!node) return

    const animate = () => {
      if (started.current) return
      started.current = true

      const start = performance.now()
      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1)
        const eased = easeOutExpo(progress)
        const current = (target * eased).toFixed(decimals)
        setDisplay(`${prefix}${current}${suffix}`)
        if (progress < 1) {
          requestAnimationFrame(tick)
        } else {
          setDisplay(value)
        }
      }
      requestAnimationFrame(tick)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animate()
          observer.disconnect()
        }
      },
      { threshold: 0.4 }
    )
    observer.observe(node)

    return () => observer.disconnect()
  }, [value, duration])

  return <span ref={ref}>{display}</span>
}
