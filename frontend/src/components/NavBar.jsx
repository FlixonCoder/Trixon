import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const NavBar = ({ openContact }) => {
    const [isOpen, setIsOpen] = useState(false)
    const navigate = useNavigate()

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    const scrollToSection = (id) => {
        setIsOpen(false)
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <nav className="fixed w-full z-50 top-0 start-0 border-b border-stone-200/20 bg-white/80 backdrop-blur-md transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-wrap items-center justify-between mx-auto p-4">
                    <button onClick={() => { navigate('/'); window.scrollTo({ top: 0, behavior: 'smooth' }) }} className="flex items-center space-x-3 rtl:space-x-reverse">
                        <span className="self-center text-2xl font-bold whitespace-nowrap text-stone-900 tracking-tight font-sans">Trixon</span>
                    </button>

                    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <button
                            onClick={openContact}
                            type="button"
                            className="text-white bg-stone-900 hover:bg-stone-800 focus:ring-4 focus:outline-none focus:ring-stone-300 font-medium rounded-full text-sm px-6 py-2.5 text-center transition-transform hover:scale-105 hidden md:block shadow-lg"
                        >
                            Let's Talk
                        </button>
                        <button
                            onClick={toggleMenu}
                            type="button"
                            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-stone-500 rounded-lg md:hidden hover:bg-stone-100 focus:outline-none focus:ring-2 focus:ring-stone-200"
                            aria-controls="navbar-sticky"
                            aria-expanded={isOpen}
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>

                    <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isOpen ? 'block' : 'hidden'}`} id="navbar-sticky">
                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-stone-100 rounded-2xl bg-stone-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent">
                            <li>
                                <button onClick={() => { navigate('/'); setTimeout(() => scrollToSection('problem'), 100) }} className="block py-2 px-3 text-stone-600 rounded hover:bg-stone-100 md:hover:bg-transparent md:hover:text-stone-900 md:p-0 transition-colors">The Dilemma</button>
                            </li>
                            <li>
                                <button onClick={() => { navigate('/'); setTimeout(() => scrollToSection('solution'), 100) }} className="block py-2 px-3 text-stone-600 rounded hover:bg-stone-100 md:hover:bg-transparent md:hover:text-stone-900 md:p-0 transition-colors">The Solution</button>
                            </li>
                            <li>
                                <button onClick={() => { navigate('/'); setTimeout(() => scrollToSection('roadmap'), 100) }} className="block py-2 px-3 text-stone-600 rounded hover:bg-stone-100 md:hover:bg-transparent md:hover:text-stone-900 md:p-0 transition-colors">Our Process</button>
                            </li>

                            {/* Mobile Only CTA */}
                            <li className="md:hidden mt-4 pt-4 border-t border-stone-200">
                                <button
                                    onClick={() => { setIsOpen(false); openContact(); }}
                                    className="w-full text-white bg-stone-900 hover:bg-stone-800 focus:ring-4 focus:outline-none focus:ring-stone-300 font-medium rounded-full text-sm px-5 py-3 text-center"
                                >
                                    Let's Talk
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar