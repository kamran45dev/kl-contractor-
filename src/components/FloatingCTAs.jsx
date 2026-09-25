import { useState } from 'react'
import ContactFloat from './ContactFloat'
import StickyCTA from './StickyCTA'
import useScrollPast from '../hooks/useScrollPast'

export default function FloatingCTAs() {
  const scrolledPast = useScrollPast(500)
  const [dismissed, setDismissed] = useState(false)
  const ctaVisible = scrolledPast && !dismissed

  return (
    <>
      <ContactFloat raised={ctaVisible} />
      <StickyCTA visible={ctaVisible} onDismiss={() => setDismissed(true)} />
    </>
  )
}
