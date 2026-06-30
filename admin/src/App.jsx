import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Navbar from './components/Navbar'

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true'
  return isAuthenticated ? children : <Navigate to="/login" />
}

const App = () => {
  const isLoginPage = window.location.pathname === '/login'

  return (
    <div className='bg-stone-50 min-h-screen text-stone-900 font-sans'>
      {!isLoginPage && <Navbar />}
      <div className={!isLoginPage ? 'pt-20' : ''}>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/' element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          } />
        </Routes>
      </div>
    </div>
  )
}

export default App