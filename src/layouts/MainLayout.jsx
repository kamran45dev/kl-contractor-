import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ContactFloat from '../components/ContactFloat'

export default function MainLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <ContactFloat />
      <Footer />
    </>
  )
}
