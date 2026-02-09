import React from 'react'
import MotionSection from './MotionSection'

const Timeline = () => {
    const steps = [
        {
            month: "0-2",
            title: "Direction & Foundation",
            desc: "We align on vision and set the technical groundwork.",
            color: "bg-white text-stone-900 border-stone-200"
        },
        {
            month: "2-5",
            title: "Build & Stabilize",
            desc: "Rapid development with a focus on scalability and core features.",
            color: "bg-white text-stone-900 border-stone-200"
        },
        {
            month: "5-6",
            title: "Transition & Handover",
            desc: "We hire your team and hand over the keys. You are independent.",
            color: "bg-emerald-50/50 text-stone-900 border-emerald-200 ring-1 ring-emerald-100" // Subtle Highlight
        }
    ]

    return (
        <section className="py-24 bg-stone-50 relative" id="roadmap">
            {/* Subtle Texture */}
            <div className="absolute inset-0 opacity-[0.03] text-stone-900"
                style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)', backgroundSize: '40px 40px' }}>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <MotionSection className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-stone-900 sm:text-4xl font-sans">
                        The Roadmap to Independence
                    </h2>
                    <p className="mt-4 text-xl text-stone-600 font-serif italic">From idea to independent tech team in 6 months.</p>
                </MotionSection>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-0 w-full h-px bg-stone-300 -z-10"></div>

                    <div className="grid md:grid-cols-3 gap-12">
                        {steps.map((step, index) => (
                            <MotionSection key={index} delay={index * 0.2} className="relative group">
                                {/* Step Indicator */}
                                <div className={`w-24 h-24 mx-auto mb-8 rounded-full flex items-center justify-center text-3xl font-serif italic border-4 border-stone-50 shadow-sm z-10 bg-stone-900 text-white transition-transform duration-300 group-hover:scale-110`}>
                                    0{index + 1}
                                </div>

                                {/* Content Card */}
                                <div className={`p-8 rounded-3xl h-full transition-all duration-300 border ${step.color} hover:shadow-lg`}>
                                    <div className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-stone-200 bg-white">
                                        Month {step.month}
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4 font-sans">{step.title}</h3>
                                    <p className="text-stone-600 leading-relaxed">{step.desc}</p>
                                </div>
                            </MotionSection>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Timeline
