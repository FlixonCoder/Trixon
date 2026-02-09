import React from 'react'
import MotionSection from './MotionSection'

const Problem = () => {
    return (
        <section id="problem" className="py-24 bg-stone-900 text-stone-50 overflow-hidden relative">
            {/* Subtle Texture */}
            <div className="absolute inset-0 opacity-[0.05] text-stone-100"
                style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)', backgroundSize: '24px 24px' }}>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <MotionSection className="max-w-3xl mx-auto text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-serif italic font-light tracking-wide mb-6 text-stone-200">The Founder's Dilemma</h2>
                    <p className="text-lg text-stone-400 max-w-2xl mx-auto">
                        Great ideas often fail not because of the product, but the foundation.
                    </p>
                </MotionSection>

                <div className="grid gap-8 md:grid-cols-3 text-left">
                    {[
                        { title: "No technical leadership", desc: "Drifting without a clear architectural vision." },
                        { title: "Expensive hiring mistakes", desc: "Hiring the wrong engineers for the wrong stage." },
                        { title: "Poor early decisions", desc: "Tech debt that kills velocity later on." }
                    ].map((item, index) => (
                        <MotionSection key={index} delay={index * 0.2} className="group relative p-8 border-t border-stone-800 hover:border-stone-600 transition-colors duration-500">
                            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-stone-800/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <span className="text-3xl mb-4 block text-stone-700 group-hover:text-stone-500 transition-colors">0{index + 1}</span>
                            <h3 className="text-xl font-bold text-stone-200 mb-3">{item.title}</h3>
                            <p className="text-stone-500 leading-relaxed group-hover:text-stone-400 transition-colors">{item.desc}</p>
                        </MotionSection>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Problem
