import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ContactFloat from '../components/ContactFloat'
import StickyCTA from '../components/StickyCTA'
import useScrollPast from '../hooks/useScrollPast'

export default function MainLayout() {
  const scrolledPast = useScrollPast(500)
  const [dismissed, setDismissed] = useState(false)
  const ctaVisible = scrolledPast && !dismissed

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <ContactFloat raised={ctaVisible} />
      <StickyCTA visible={ctaVisible} onDismiss={() => setDismissed(true)} />
      <Footer />
    </>
  )
}
