import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import Package from './pages/Package'
import About from './pages/About'
import Contact from './pages/Contact'
import Postpartum from './pages/Postpartum'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="package" element={<Package />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="postpartum" element={<Postpartum />} />
      </Route>
    </Routes>
  )
}