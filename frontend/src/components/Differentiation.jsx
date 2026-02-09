import React from 'react'
import MotionSection from './MotionSection'

const Differentiation = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <MotionSection className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-serif italic text-stone-900 mb-6 font-light">
                        Not an Agency. <span className="font-sans font-bold not-italic">A Partner.</span>
                    </h2>
                </MotionSection>

                <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto items-center">
                    {/* The "Old Way" List - Muted, Passive */}
                    <MotionSection delay={0.2} className="p-10 rounded-3xl bg-stone-50 border border-stone-100 opacity-70 hover:opacity-100 transition-opacity">
                        <h3 className="text-lg font-bold text-stone-400 uppercase tracking-widest mb-8">
                            Traditional Agencies
                        </h3>
                        <ul className="space-y-6">
                            {["Focus on billing hours", "Create long-term dependency", "Vague consulting deliverables", "Outsourced junior talent"].map((item, i) => (
                                <li key={i} className="flex items-center text-stone-400 line-through decoration-stone-300">
                                    <span className="w-2 h-2 rounded-full bg-stone-300 mr-4"></span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </MotionSection>

                    {/* The "Trixon Way" List - Bold, Active */}
                    <MotionSection delay={0.4} className="p-10 rounded-3xl bg-stone-900 text-stone-50 shadow-2xl shadow-stone-900/10 transform md:scale-110 relative z-10">
                        <h3 className="text-lg font-bold text-emerald-400 uppercase tracking-widest mb-8">
                            The Trixon Partner
                        </h3>
                        <ul className="space-y-6">
                            {[
                                "Outcome-based leadership",
                                "Clear exit plan from Day 1",
                                "Founder education focused",
                                "Senior technical talent only"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center text-white text-lg font-medium">
                                    <svg className="w-6 h-6 mr-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </MotionSection>
                </div>
            </div>
        </section>
    )
}

export default Differentiation
