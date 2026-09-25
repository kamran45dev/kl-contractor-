import { useEffect, useRef, useState } from 'react'

export default function Reveal({ as: Tag = 'div', direction, delay = 0, className = '', style, children, ...rest }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  const dirClass = direction === 'left' ? 'reveal-left' : direction === 'right' ? 'reveal-right' : ''

  return (
    <Tag
      ref={ref}
      className={`reveal ${dirClass} ${visible ? 'visible' : ''} ${className}`.replace(/\s+/g, ' ').trim()}
      style={{ ...(delay ? { transitionDelay: `${delay}s` } : null), ...style }}
      {...rest}
    >
      {children}
    </Tag>
  )
}
