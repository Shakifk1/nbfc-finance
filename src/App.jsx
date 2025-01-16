import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import HomePage from './Pages/HomePage'
import AboutUs from './Pages/AboutUs'

import Footer from './components/Footer';
import Microfinance from './Pages/Microfinance';
import PropertyLoan from './Pages/PropertyLoan';
import BusinessLoan from './Pages/BusinessLoan';
import Contact from './Pages/Contact';
// import BannerCarousel from './components/BannerCarousel';
function App() {
  // const [count, setCount] = useState(0)

  return (
    <Router>
      <div>
        <Navbar />
        {/* <BannerCarousel /> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services/microfinance" element={<Microfinance />} />
          <Route path="/services/property-loan" element={<PropertyLoan />} />
          <Route path="/services/business-loan" element={<BusinessLoan />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}
export default App
