import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem('isAuthenticated')
        navigate('/login')
    }

    return (
        <nav className="fixed w-full z-50 top-0 start-0 border-b border-stone-200/20 bg-white/80 backdrop-blur-md transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    <div className="flex items-center gap-3 select-none">
                        <span className="text-2xl font-bold text-stone-900 tracking-tight font-sans">Trixon</span>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-600 bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded-md">
                            Admin
                        </span>
                    </div>
                    <div>
                        <button
                            onClick={handleLogout}
                            className="inline-flex items-center px-5 py-2 border border-stone-200/60 rounded-full text-xs font-semibold text-stone-600 hover:text-stone-900 hover:bg-stone-50 focus:outline-none focus:ring-2 focus:ring-stone-400 focus:ring-offset-2 transition-all cursor-pointer shadow-sm hover:scale-105"
                        >
                            <span className="material-symbols-outlined mr-1.5 text-[18px]">logout</span>
                            Logout
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
