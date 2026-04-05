import React, { useState, useEffect } from 'react'
import Home from './pages/Home'
import HireStart from './pages/HireStart'
import NavBar from './components/NavBar'
import ReachOut from './pages/ReachOut'
import { Routes, Route, useLocation } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react';

const ScrollToTop = () => {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

const App = () => {
  const [isContactOpen, setIsContactOpen] = useState(false)

  const openContact = () => setIsContactOpen(true)
  const closeContact = () => setIsContactOpen(false)

  return (
    <div className="bg-gray-50 min-h-screen">
      <ScrollToTop />
      <NavBar openContact={openContact} />
      <div className="pt-20"> {/* Add padding top to account for fixed navbar */}
        <Routes>
          <Route path='/' element={<Home openContact={openContact} />} />
          <Route path='/how-we-hire' element={<HireStart openContact={openContact} />} />
        </Routes>
      </div>
      <ReachOut isOpen={isContactOpen} onClose={closeContact} />
      <Analytics />
    </div>
  )
}

export default App

