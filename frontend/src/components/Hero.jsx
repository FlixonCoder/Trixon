import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Hero = ({ openContact }) => {
    return (
        <section className="relative pt-20 pb-16 lg:pt-48 lg:pb-40 bg-stone-50 overflow-hidden">
            {/* Subtle Texture/Grain Effect could be added via CSS here, using a clean gradient for now */}
            <div className="absolute inset-0 opacity-[0.03] text-stone-900"
                style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)', backgroundSize: '40px 40px' }}>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
                {/* Social Proof / Trust Badge (Psychology: Authority) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium text-stone-600 ring-1 ring-stone-900/10 bg-white/50 backdrop-blur-sm mb-6 md:mb-10 shadow-sm"
                >
                    <span className="flex h-2 w-2 rounded-full bg-emerald-500 mr-2"></span> Accepting new partners for Q2
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-5xl font-bold tracking-tight text-stone-900 sm:text-6xl md:text-7xl mb-6 md:mb-8 font-sans"
                >
                    <span className="block mb-1">We help startups build the</span>
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-stone-800 to-stone-600">
                        right tech foundation
                    </span>
                    {/* Serif font for contrast and 'human' element (Psychology: Empathy/Natural) */}
                    <span className="block font-serif italic font-light text-stone-500 mt-3 text-4xl sm:text-5xl md:text-6xl">— then step out of the way.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mt-6 md:mt-8 max-w-2xl mx-auto text-xl text-stone-600 leading-relaxed"
                >
                    Trixon is your <span className="font-semibold text-stone-800">initial technical partner</span>, helping you go from idea to a scalable product and an independent tech team.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="mt-8 md:mt-12 flex flex-col sm:flex-row gap-5 justify-center items-center"
                >
                    {/* Primary CTA: High contrast, solid (Psychology: Action) */}
                    <button
                        onClick={openContact}
                        className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-stone-900 rounded-full overflow-hidden transition-all duration-300 shadow-xl shadow-stone-900/20 hover:bg-stone-800 hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-stone-400 focus:ring-offset-2"
                    >
                        Talk to us
                        <svg className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </button>
                </motion.div>
            </div>

            {/* Organic, fluid background shapes for a natural feel */}
            <div className="absolute top-0 left-1/2 w-full -translate-x-1/2 h-full overflow-hidden -z-10 pointer-events-none opacity-50">
                <div className="absolute top-[-20%] left-[-10%] w-[50rem] h-[50rem] bg-orange-100/40 rounded-full blur-3xl mix-blend-multiply filter"></div>
                <div className="absolute top-[10%] right-[-10%] w-[40rem] h-[40rem] bg-indigo-50/40 rounded-full blur-3xl mix-blend-multiply filter"></div>
            </div>
        </section>
    )
}

export default Hero
