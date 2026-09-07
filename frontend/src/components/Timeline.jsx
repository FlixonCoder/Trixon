import React from 'react'
import MotionSection from './MotionSection'

const Timeline = () => {
    const steps = [
        {
            month: "Week 1",
            title: "Audit",
            subtitle: "Map the Opportunity",
            desc: "We spend the first week mapping your current workflows, identifying the highest-ROI automation targets, and scoping the build. You get a clear Automation Roadmap — what we'll build, in what order, and why. No fluff.",
            color: "bg-white text-stone-900 border-stone-200"
        },
        {
            month: "Weeks 2–4",
            title: "Build",
            subtitle: "Ship the Automation",
            desc: "We build and deploy the agreed automation — whether that's a voice bot, a workflow integration, a dashboard, or a calling agent. You get weekly updates and a live system by week four.",
            color: "bg-white text-stone-900 border-stone-200"
        },
        {
            month: "Handover",
            title: "Hand Over",
            subtitle: "You Own It Completely",
            desc: "You get full ownership of everything built — code, credentials, documentation. We walk you through how it works, what to monitor, and how to expand it. Then we step back. Ongoing retainers available if you want us to keep building.",
            color: "bg-accent-light text-stone-900 border-accent ring-1 ring-accent/20"
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
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-stone-400 mb-4">How We Work</p>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-stone-900 sm:text-4xl font-sans">
                        From Discovery to Live Automation — in 30 Days.
                    </h2>
                    <p className="mt-4 text-xl text-stone-600 font-serif italic">Every engagement follows the same three-phase process. No guesswork, no scope creep, no surprises.</p>
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
                                    <div className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4 border border-stone-200 bg-white">
                                        {step.month}
                                    </div>
                                    <h3 className="text-2xl font-bold mb-2 font-sans">{step.title}</h3>
                                    <p className="text-sm font-semibold text-stone-500 uppercase tracking-wider mb-4">{step.subtitle}</p>
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
