"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useContact } from '../context/ContactContext';

const NavBar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeMobileDropdown, setActiveMobileDropdown] = useState(null); // null, 'services', 'products'
    const [activeDesktopDropdown, setActiveDesktopDropdown] = useState(null); // null, 'services', 'products'
    const router = useRouter();
    const { openContact } = useContact();

    const handleNavigation = (path) => {
        setIsMobileMenuOpen(false);
        setActiveMobileDropdown(null);
        setActiveDesktopDropdown(null);
        router.push(path);
    };

    const toggleMobileDropdown = (name) => {
        setActiveMobileDropdown(prev => (prev === name ? null : name));
    };

    return (
        <nav className="fixed w-full z-50 top-0 start-0 border-b border-stone-250/20 bg-white/85 backdrop-blur-md transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Brand Logo */}
                    <button 
                        onClick={() => handleNavigation('/')} 
                        className="flex items-center space-x-2.5 cursor-pointer select-none"
                        suppressHydrationWarning
                    >
                        <img src="/dark-logo.png" alt="Trixon Logo" className="h-8 w-8 object-contain" />
                        <span className="text-xl font-bold whitespace-nowrap text-stone-900 tracking-tight font-sans">Trixon</span>
                    </button>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {/* Home Link */}
                        <button onClick={() => handleNavigation('/')} className="text-stone-600 hover:text-stone-900 text-sm font-medium transition-colors cursor-pointer" suppressHydrationWarning>
                            Home
                        </button>

                        {/* Services Dropdown */}
                        <div 
                            className="relative"
                            onMouseEnter={() => setActiveDesktopDropdown('services')}
                            onMouseLeave={() => setActiveDesktopDropdown(null)}
                        >
                            <button 
                                className={`text-stone-600 hover:text-stone-900 text-sm font-medium transition-colors flex items-center gap-1 cursor-pointer py-4 ${
                                    activeDesktopDropdown === 'services' ? 'text-stone-900' : ''
                                }`}
                                suppressHydrationWarning
                            >
                                Services
                                <svg className={`w-4 h-4 transition-transform duration-200 ${
                                    activeDesktopDropdown === 'services' ? 'rotate-180' : ''
                                }`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            {/* Dropdown Menu */}
                            {activeDesktopDropdown === 'services' && (
                                <div className="absolute left-0 mt-0 w-64 bg-white border border-stone-100 rounded-2xl shadow-xl py-3 z-50 animate-fade-in">
                                    {[
                                        { name: "AI Solutions", path: "/services/ai-solutions" },
                                        { name: "Product & SaaS Development", path: "/services/product-saas-development" },
                                        { name: "Custom Software Engineering", path: "/services/custom-software-engineering" },
                                        { name: "Data & Analytics", path: "/services/data-analytics" },
                                        { name: "Infrastructure & Engineering", path: "/services/infrastructure-engineering" }
                                    ].map((item, i) => (
                                        <button
                                            key={i}
                                            onClick={() => handleNavigation(item.path)}
                                            className="w-full text-left px-5 py-2.5 text-stone-600 hover:text-stone-900 hover:bg-stone-50 text-sm font-medium transition-all cursor-pointer"
                                            suppressHydrationWarning
                                        >
                                            {item.name}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Products Dropdown */}
                        <div 
                            className="relative"
                            onMouseEnter={() => setActiveDesktopDropdown('products')}
                            onMouseLeave={() => setActiveDesktopDropdown(null)}
                        >
                            <button 
                                className={`text-stone-600 hover:text-stone-900 text-sm font-medium transition-colors flex items-center gap-1 cursor-pointer py-4 ${
                                    activeDesktopDropdown === 'products' ? 'text-stone-900' : ''
                                }`}
                                suppressHydrationWarning
                            >
                                Products
                                <svg className={`w-4 h-4 transition-transform duration-200 ${
                                    activeDesktopDropdown === 'products' ? 'rotate-180' : ''
                                }`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            {/* Dropdown Menu */}
                            {activeDesktopDropdown === 'products' && (
                                <div className="absolute left-0 mt-0 w-56 bg-white border border-stone-100 rounded-2xl shadow-xl py-3 z-50 animate-fade-in">
                                    <button
                                        onClick={() => handleNavigation('/products')}
                                        className="w-full text-left px-5 py-2.5 text-stone-600 hover:text-stone-900 hover:bg-stone-50 text-sm font-medium transition-all cursor-pointer"
                                        suppressHydrationWarning
                                    >
                                        Supremo
                                    </button>
                                    <div className="mx-4 my-2 border-t border-stone-100"></div>
                                    <p className="px-5 py-1 text-xs font-bold text-stone-400 uppercase tracking-widest">Projects</p>
                                    {[
                                        { name: "Ketpa", path: "/projects/ketpa" },
                                        { name: "AI Interrogation Engine", path: "/projects/ai-interrogation-engine" },
                                        { name: "Telegram Pipeline", path: "/projects/telegram-lead-pipeline" },
                                        { name: "Supremo", path: "/projects/supremo" }
                                    ].map((item, i) => (
                                        <button
                                            key={i}
                                            onClick={() => handleNavigation(item.path)}
                                            className="w-full text-left px-5 py-2.5 text-stone-550 hover:text-stone-900 hover:bg-stone-50 text-sm transition-all cursor-pointer"
                                            suppressHydrationWarning
                                        >
                                            {item.name}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Beta Program */}
                        <button onClick={() => handleNavigation('/beta-program')} className="text-stone-600 hover:text-stone-900 text-sm font-medium transition-colors cursor-pointer" suppressHydrationWarning>
                            Beta Program
                        </button>

                        {/* How We Hire */}
                        <button onClick={() => handleNavigation('/how-we-hire')} className="text-stone-600 hover:text-stone-900 text-sm font-medium transition-colors cursor-pointer" suppressHydrationWarning>
                            How We Hire
                        </button>
                    </div>

                    {/* Let's Talk CTA & Hamburger Menu */}
                    <div className="flex items-center space-x-4">
                        <button
                            onClick={openContact}
                            type="button"
                            className="text-white bg-stone-900 hover:bg-stone-800 font-medium rounded-full text-sm px-6 py-2.5 text-center transition-transform hover:scale-105 hidden md:block shadow-lg cursor-pointer"
                            suppressHydrationWarning
                        >
                            Let's Talk
                        </button>

                        {/* Hamburger menu trigger */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            type="button"
                            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-stone-500 rounded-lg md:hidden hover:bg-stone-50 cursor-pointer"
                            aria-controls="navbar-sticky"
                            aria-expanded={isMobileMenuOpen}
                            suppressHydrationWarning
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Menu Drawer */}
            {isMobileMenuOpen && (
                <div className="md:hidden border-t border-stone-100 bg-white/95 backdrop-blur-md py-4 px-6 animate-fade-in absolute w-full left-0 top-20 shadow-lg">
                    <ul className="flex flex-col space-y-4 font-medium">
                        <li>
                            <button onClick={() => handleNavigation('/')} className="w-full text-left py-2 text-stone-700 border-b border-stone-50" suppressHydrationWarning>
                                Home
                            </button>
                        </li>

                        {/* Mobile Services Dropdown */}
                        <li>
                            <button 
                                onClick={() => toggleMobileDropdown('services')}
                                className="w-full text-left py-2 text-stone-700 flex items-center justify-between border-b border-stone-50"
                                suppressHydrationWarning
                            >
                                Services
                                <svg className={`w-4 h-4 transition-transform duration-200 ${activeMobileDropdown === 'services' ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            {activeMobileDropdown === 'services' && (
                                <ul className="pl-4 mt-2 space-y-3 bg-stone-55 rounded-xl p-3">
                                    {[
                                        { name: "AI Solutions", path: "/services/ai-solutions" },
                                        { name: "Product & SaaS Development", path: "/services/product-saas-development" },
                                        { name: "Custom Software Engineering", path: "/services/custom-software-engineering" },
                                        { name: "Data & Analytics", path: "/services/data-analytics" },
                                        { name: "Infrastructure & Engineering", path: "/services/infrastructure-engineering" }
                                    ].map((item, i) => (
                                        <li key={i}>
                                            <button 
                                                onClick={() => handleNavigation(item.path)}
                                                className="w-full text-left py-1.5 text-stone-500 text-sm hover:text-stone-900"
                                                suppressHydrationWarning
                                            >
                                                {item.name}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>

                        {/* Mobile Products Dropdown */}
                        <li>
                            <button 
                                onClick={() => toggleMobileDropdown('products')}
                                className="w-full text-left py-2 text-stone-700 flex items-center justify-between border-b border-stone-50"
                                suppressHydrationWarning
                            >
                                Products
                                <svg className={`w-4 h-4 transition-transform duration-200 ${activeMobileDropdown === 'products' ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            {activeMobileDropdown === 'products' && (
                                <ul className="pl-4 mt-2 space-y-3 bg-stone-55 rounded-xl p-3">
                                    <li>
                                        <button 
                                            onClick={() => handleNavigation('/products')}
                                            className="w-full text-left py-1.5 text-stone-500 text-sm hover:text-stone-900 font-medium"
                                            suppressHydrationWarning
                                        >
                                            Supremo
                                        </button>
                                    </li>
                                    <li className="border-t border-stone-100 pt-2">
                                        <p className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-2">Projects</p>
                                    </li>
                                    {[
                                        { name: "Ketpa", path: "/projects/ketpa" },
                                        { name: "AI Interrogation Engine", path: "/projects/ai-interrogation-engine" },
                                        { name: "Telegram Pipeline", path: "/projects/telegram-lead-pipeline" },
                                        { name: "Supremo", path: "/projects/supremo" }
                                    ].map((item, i) => (
                                        <li key={i}>
                                            <button 
                                                onClick={() => handleNavigation(item.path)}
                                                className="w-full text-left py-1.5 text-stone-500 text-sm hover:text-stone-900"
                                                suppressHydrationWarning
                                            >
                                                {item.name}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>

                        <li>
                            <button onClick={() => handleNavigation('/beta-program')} className="w-full text-left py-2 text-stone-700 border-b border-stone-50" suppressHydrationWarning>
                                Beta Program
                            </button>
                        </li>

                        <li>
                            <button onClick={() => handleNavigation('/how-we-hire')} className="w-full text-left py-2 text-stone-700 border-b border-stone-50" suppressHydrationWarning>
                                How We Hire
                            </button>
                        </li>

                        {/* Mobile Let's Talk CTA */}
                        <li className="pt-4">
                            <button
                                onClick={() => { setIsMobileMenuOpen(false); openContact(); }}
                                className="w-full text-white bg-stone-900 hover:bg-stone-800 font-medium rounded-full text-sm py-3 text-center"
                                suppressHydrationWarning
                            >
                                Let's Talk
                            </button>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default NavBar;