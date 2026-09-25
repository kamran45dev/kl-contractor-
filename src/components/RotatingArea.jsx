import { useEffect, useState } from 'react'
import { areas } from '../data/services'

const colors = ['#0EA5E9', '#FBBF24', '#F472B6', '#4ADE80', '#A78BFA', '#FB923C', '#22D3EE', '#F87171']
const words = ['KL', ...areas.filter((a) => a !== 'Kuala Lumpur')]

export default function RotatingArea() {
  const [i, setI] = useState(0)

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) return
    const id = setInterval(() => setI((prev) => (prev + 1) % words.length), 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <span className="hero-rotate-wrap">
      <span key={i} className="hero-rotate-word" style={{ color: colors[i % colors.length] }}>
        {words[i]}
      </span>
    </span>
  )
}
