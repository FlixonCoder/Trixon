"use client";
import React from 'react';
import MotionSection from './MotionSection';
import Link from 'next/link';
import { useContact } from '../context/ContactContext';

const Footer = () => {
    const { openContact } = useContact();

    return (
        <footer className="bg-stone-900 text-stone-50 py-24 border-t border-stone-850" id="contact">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Top Section: CTA Grid */}
                <MotionSection className="text-center max-w-4xl mx-auto mb-20">
                    <h2 className="text-4xl md:text-5xl font-serif italic mb-6 text-stone-150 leading-tight">
                        Don't just build an app. Build an institution.
                    </h2>
                    <p className="text-lg md:text-xl text-stone-400 font-sans mb-10 max-w-2xl mx-auto font-light">
                        Book your free 30-minute strategy session. No pitch deck required — just a direct conversation about your technical foundation.
                    </p>
                    <button
                        onClick={openContact}
                        className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-stone-900 bg-white rounded-full transition-all duration-300 shadow-xl hover:scale-105 hover:bg-stone-50 cursor-pointer"
                        suppressHydrationWarning
                    >
                        Secure Your Foundation
                        <svg className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </button>
                </MotionSection>

                {/* Middle Section: Multi-Column Sitemap */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 py-16 border-t border-stone-800/60">
                    {/* Brand column */}
                    <div className="col-span-2 md:col-span-1 space-y-6">
                        <div className="flex items-center space-x-2.5">
                            <img src="/light-logo.png" alt="Trixon Logo" className="h-8 w-8 object-contain" />
                            <span className="text-xl font-bold text-white font-sans tracking-tight">Trixon</span>
                        </div>
                        <p className="text-sm text-stone-400 leading-relaxed font-light">
                            Technical Co-Founder leadership and software engineering maturity for growing startups.
                        </p>
                        <div className="flex gap-4">
                            <a href="https://www.linkedin.com/company/trixon-cloud/" target="_blank" rel="noopener noreferrer" className="text-stone-500 hover:text-white transition-colors" aria-label="LinkedIn">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Services Column */}
                    <div className="space-y-4">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-stone-300">Services</h4>
                        <ul className="space-y-2.5 text-sm">
                            <li>
                                <Link href="/services/ai-solutions" className="text-stone-400 hover:text-white transition-colors">AI Solutions</Link>
                            </li>
                            <li>
                                <Link href="/services/product-saas-development" className="text-stone-400 hover:text-white transition-colors">Product & SaaS Development</Link>
                            </li>
                            <li>
                                <Link href="/services/custom-software-engineering" className="text-stone-400 hover:text-white transition-colors">Custom Software Engineering</Link>
                            </li>
                            <li>
                                <Link href="/services/data-analytics" className="text-stone-400 hover:text-white transition-colors">Data & Analytics</Link>
                            </li>
                            <li>
                                <Link href="/services/infrastructure-engineering" className="text-stone-400 hover:text-white transition-colors">Infrastructure & Engineering</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Products & Program Column */}
                    <div className="space-y-4">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-stone-300">Platform</h4>
                        <ul className="space-y-2.5 text-sm">
                            <li>
                                <Link href="/products" className="text-stone-400 hover:text-white transition-colors">Supremo</Link>
                            </li>
                            <li>
                                <Link href="/beta-program" className="text-stone-400 hover:text-white transition-colors">Beta Program</Link>
                            </li>
                            <li>
                                <Link href="/how-we-hire" className="text-stone-400 hover:text-white transition-colors">How We Hire</Link>
                            </li>
                        </ul>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-stone-300 pt-4">Projects</h4>
                        <ul className="space-y-2.5 text-sm">
                            <li>
                                <Link href="/projects/ketpa" className="text-stone-400 hover:text-white transition-colors">Ketpa</Link>
                            </li>
                            <li>
                                <Link href="/projects/ai-interrogation-engine" className="text-stone-400 hover:text-white transition-colors">AI Interrogation Engine</Link>
                            </li>
                            <li>
                                <Link href="/projects/telegram-lead-pipeline" className="text-stone-400 hover:text-white transition-colors">Telegram Pipeline</Link>
                            </li>
                            <li>
                                <Link href="/projects/supremo" className="text-stone-400 hover:text-white transition-colors">Supremo</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div className="space-y-4">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-stone-300">Company & Contact</h4>
                        <ul className="space-y-2.5 text-sm text-stone-400">
                            <li>
                                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                            </li>
                            <li>
                                <button onClick={openContact} className="text-stone-400 hover:text-white transition-colors cursor-pointer text-left" suppressHydrationWarning>
                                    Let's Talk
                                </button>
                            </li>
                            <li className="pt-2">
                                <span className="block text-xs text-stone-500 font-bold uppercase tracking-widest">General Enquiries</span>
                                <a href="mailto:office.trixon.co@gmail.com" className="hover:text-white transition-colors break-all">
                                    office.trixon.co@gmail.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Section: Copyright */}
                <div className="mt-8 pt-8 border-t border-stone-800/50 text-stone-600 text-xs flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p>&copy; {new Date().getFullYear()} Trixon. All rights reserved.</p>
                    <p className="text-stone-600 font-light">Worldwide remote operations.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
