import React, { useState } from 'react'
import Home from './pages/Home'
import NavBar from './components/NavBar'
import ReachOut from './pages/ReachOut'
import { Routes, Route } from 'react-router-dom'
import { SpeedInsights } from "@vercel/speed-insights/react"

const App = () => {
  const [isContactOpen, setIsContactOpen] = useState(false)

  const openContact = () => setIsContactOpen(true)
  const closeContact = () => setIsContactOpen(false)

  return (
    <div className="bg-gray-50 min-h-screen">
      <NavBar openContact={openContact} />
      <div className="pt-20"> {/* Add padding top to account for fixed navbar */}
        <Routes>
          <Route path='/' element={<Home openContact={openContact} />} />
        </Routes>
      </div>
      <ReachOut isOpen={isContactOpen} onClose={closeContact} />
    </div>
  )
}

export default App
