"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { useContact } from '../context/ContactContext';
import darkLogo from '../../public/dark-logo.png';

const NavBar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const router = useRouter();
    const { openContact } = useContact();

    const handleNavigation = (path) => {
        setIsMobileMenuOpen(false);
        router.push(path);
    };

    const navLinks = [
        { label: 'Home', path: '/' },
        { label: 'Services', path: '/services' },
        { label: 'Work', path: '/work' },
        { label: 'FAQ', path: '/#faqs' },
    ];

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
                        <Image src={darkLogo} alt="Trixon Logo" className="h-8 w-8 object-contain" />
                        <span className="text-xl font-bold whitespace-nowrap text-stone-900 tracking-tight font-sans">Trixon</span>
                    </button>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <button
                                key={link.label}
                                onClick={() => handleNavigation(link.path)}
                                className="text-stone-600 hover:text-stone-900 text-sm font-medium transition-colors cursor-pointer"
                                suppressHydrationWarning
                            >
                                {link.label}
                            </button>
                        ))}
                    </div>

                    {/* Let's Talk CTA & Hamburger */}
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
                            {isMobileMenuOpen ? (
                                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1l15 12M1 13L16 1" />
                                </svg>
                            ) : (
                                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Menu Drawer */}
            {isMobileMenuOpen && (
                <div className="md:hidden border-t border-stone-100 bg-white/95 backdrop-blur-md py-4 px-6 animate-fade-in absolute w-full left-0 top-20 shadow-lg">
                    <ul className="flex flex-col space-y-4 font-medium">
                        {navLinks.map((link) => (
                            <li key={link.label}>
                                <button
                                    onClick={() => handleNavigation(link.path)}
                                    className="w-full text-left py-2 text-stone-700 border-b border-stone-50"
                                    suppressHydrationWarning
                                >
                                    {link.label}
                                </button>
                            </li>
                        ))}

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