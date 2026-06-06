import React from 'react'
import MotionSection from './MotionSection'
import { assets } from '../assets/assets'
import Image from 'next/image'

const AboutFounder = () => {
    return (
        <section id="about" className="py-24 bg-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-stone-200 to-transparent"></div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <MotionSection>
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
                        {/* Left: Founder photo */}
                        <div className="shrink-0">
                            <div className="w-[140px] h-[140px] rounded-full bg-stone-100 border-4 border-white shadow-xl flex items-center justify-center overflow-hidden">
                                {assets.founder_img ? (
                                    <Image 
                                        src={assets.founder_img} 
                                        alt="Mohammed Saqib Junaid Khan" 
                                        width={140}
                                        height={140}
                                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                                    />
                                ) : (
                                    <div className="text-stone-300">
                                        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                                        </svg>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Right: Bio text */}
                        <div className="flex-1 text-center md:text-left">
                            <h3 className="text-2xl font-bold text-stone-900 font-sans mb-1">Mohammed Saqib Junaid Khan</h3>
                            <p className="text-sm font-bold text-emerald-600 uppercase tracking-widest mb-6">Founder, Trixon</p>

                            <div className="space-y-4 text-lg text-stone-600 leading-relaxed mb-8">
                                <p>
                                    Mohammed has spent his career at the intersection of engineering leadership and startup growth. He founded Trixon after seeing the same pattern repeat: strong ideas, sharp founders, and technical infrastructure that couldn't keep up.
                                </p>
                                <p className="italic font-serif border-l-2 border-stone-200 pl-6 py-1">
                                    "We don't claim to be the best in the world. We claim to be your technical foundation — based on the proven <span className="text-stone-900 font-semibold not-italic">Build-Operate-Transfer</span> model used by global R&D centers, adapted for the pace of startups."
                                </p>
                                <p>
                                    Every Trixon engagement is built on one core principle — the best technical partner is the one who makes themselves unnecessary by giving you full independence.
                                </p>
                             </div>

                            {/* LinkedIn link */}
                            <div className="flex items-center gap-3 mb-4 justify-center md:justify-start">
                                <a href="https://www.linkedin.com/in/saqib-junaid/" target="_blank" rel="noopener noreferrer" className="text-stone-500 hover:text-stone-900 transition-colors" aria-label="LinkedIn">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                                    </svg>
                                </a>
                                <span className="text-sm text-stone-400">Saqib Junaid</span>
                            </div>

                            <p className="text-sm text-stone-400 italic">Working with founders globally</p>
                        </div>
                    </div>
                </MotionSection>
            </div>
        </section>
    )
}

export default AboutFounder
