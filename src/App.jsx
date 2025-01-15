import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import HomePage from './Pages/HomePage'
import AboutUs from './Pages/AboutUs'
import Footer from './components/Footer';
function App() {
  // const [count, setCount] = useState(0)

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
        <Footer />

      </div>
    </Router>
  )
}
export default App
