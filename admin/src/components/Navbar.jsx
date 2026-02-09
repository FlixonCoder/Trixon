import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem('isAuthenticated')
        navigate('/login')
    }

    return (
        <nav className="bg-stone-900 text-stone-50 shadow-lg border-b border-stone-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <div className="flex-shrink-0 flex items-center gap-3">
                        {/* Logo Icon */}
                        <div className="w-8 h-8 bg-stone-50 rounded-lg flex items-center justify-center">
                            <span className="text-stone-900 font-bold text-xl font-serif">T</span>
                        </div>
                        <span className="font-serif font-bold text-xl tracking-tight">Trixon Dashboard</span>
                    </div>
                    <div>
                        <button
                            onClick={handleLogout}
                            className="inline-flex items-center px-4 py-2 border border-stone-700 rounded-lg text-sm font-medium text-stone-300 hover:text-white hover:bg-stone-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-stone-900 focus:ring-stone-500 transition-colors"
                        >
                            <span className="material-symbols-outlined mr-2 text-[20px]">logout</span>
                            Logout
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
