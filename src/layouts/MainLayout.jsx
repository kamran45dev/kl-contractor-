import { Outlet, useLocation } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import FloatingCTAs from '../components/FloatingCTAs'

export default function MainLayout() {
  const location = useLocation()

  return (
    <>
      <Header />
      <main>
        <div key={location.pathname} className="page-transition">
          <Outlet />
        </div>
      </main>
      <FloatingCTAs />
      <Footer />
    </>
  )
}
