import React, { useState, useEffect } from 'react'
import Home from './pages/Home'
import HireStart from './pages/HireStart'
import NavBar from './components/NavBar'
import ReachOut from './pages/ReachOut'
import { Routes, Route, useLocation } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react';
import { Helmet, HelmetProvider } from 'react-helmet-async'

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
    <HelmetProvider>
      <div className="bg-gray-50 min-h-screen">
        <ScrollToTop />
        <NavBar openContact={openContact} />
        <div className="pt-20"> {/* Add padding top to account for fixed navbar */}
          <Routes>
            <Route path='/' element={
              <>
                <Helmet>
                  <title>Fractional CTO for Startups | Build-Operate-Transfer | Trixon</title>
                  <meta name="description" content="Trixon gives non-technical founders fractional CTO leadership and a fully-staffed engineering team — then exits cleanly. Fixed fees. Full IP transfer. No long-term dependency." />
                  <meta property="og:title" content="Trixon — Your Technical Foundation, Built to Last Without Us" />
                  <meta property="og:description" content="Trixon gives non-technical founders fractional CTO leadership and a fully-staffed engineering team — then exits cleanly. Fixed fees. Full IP transfer. No long-term dependency." />
                  <link rel="canonical" href="https://trixon.cloud" />
                </Helmet>
                <Home openContact={openContact} />
              </>
            } />
            <Route path='/how-we-hire' element={
              <>
                <Helmet>
                  <title>How We Hire Our Replacement | The 4-Stage Process | Trixon</title>
                  <meta name="description" content="Trixon's 4-stage process: Role Scorecards, elite technical screening, culture integration, and a formal handover — ending with your complete independence." />
                </Helmet>
                <HireStart openContact={openContact} />
              </>
            } />
            <Route path='/process' element={
              <>
                <Helmet>
                  <title>How We Hire Our Replacement | The 4-Stage Process | Trixon</title>
                  <meta name="description" content="Trixon's 4-stage process: Role Scorecards, elite technical screening, culture integration, and a formal handover — ending with your complete independence." />
                </Helmet>
                <HireStart openContact={openContact} />
              </>
            } />
          </Routes>
        </div>
        <ReachOut isOpen={isContactOpen} onClose={closeContact} />
        <Analytics />
      </div>
    </HelmetProvider>
  )
}

export default App
