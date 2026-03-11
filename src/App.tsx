import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'

import Home from './pages/Home'
import Contact from "./pages/Contact"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Services from "./pages/Services"
import About from "./pages/About"
import GetStarted from "./pages/Getstarted"
import ScrollToTop from "./components/ScrollToTop"
import PrivacyPolicy from "./pages/PrivacyPolicy"
import TermsConditions from "./pages/TermsConditions"
import Sitemap from "./pages/Sitemap"



function App() {
  return (
    <BrowserRouter>

      <Navbar />
      
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} /> 
        <Route path="/getstarted" element={<GetStarted />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="/sitemap" element={<Sitemap />} />
      </Routes>
        <Footer />
    </BrowserRouter>
  )
}

export default App