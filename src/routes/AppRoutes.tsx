import { Route, Routes } from 'react-router-dom'
import MainLayout from '../layout/MainLayout'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Products from '../pages/Products'
import Partners from '../pages/Partners'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="partners" element={<Partners />} />
        <Route path="products" element={<Products />} />
      </Route>
    </Routes>
  )
}
