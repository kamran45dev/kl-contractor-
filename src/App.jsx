import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import ScrollToTop from './components/ScrollToTop'
import RouteSeo from './components/RouteSeo'
import Home from './pages/Home'
import Services from './pages/Services'
import ServiceDetail from './pages/ServiceDetail'
import Gallery from './pages/Gallery'
import About from './pages/About'
import Contact from './pages/Contact'
import Areas from './pages/Areas'
import AreaDetail from './pages/AreaDetail'
import FAQ from './pages/FAQ'
import Testimonials from './pages/Testimonials'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import NotFound from './pages/NotFound'
import './styles/global.css'

export function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <RouteSeo />
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="services/:slug" element={<ServiceDetail />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="areas" element={<Areas />} />
          <Route path="areas/:slug" element={<AreaDetail />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="reviews" element={<Testimonials />} />
          <Route path="privacy-policy" element={<Privacy />} />
          <Route path="terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}
