import React from 'react'
import MotionSection from './MotionSection'
import { Link } from 'react-router-dom'

const Differentiation = ({ openContact }) => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <MotionSection className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-serif italic text-stone-900 mb-6 font-light">
                        Don't Just Build an App. Build an <span className="font-sans font-bold not-italic">Institution.</span>
                    </h2>
                    <p className="mt-4 text-xl text-stone-600 max-w-2xl mx-auto">
                        We are the only partner whose primary goal is to fire ourselves.
                    </p>
                </MotionSection>

                <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto mb-16">
                    {[
                        {
                            metric: "60–90",
                            label: "Day shadowing period",
                            desc: "Your new lead learns by doing, not reading."
                        },
                        {
                            metric: "100%",
                            label: "IP transferred",
                            desc: "Every account, domain, and credential — formally."
                        },
                        {
                            metric: "3 Mo.",
                            label: "Post-handover hypercare",
                            desc: "We stay on-call to close any knowledge gaps."
                        }
                    ].map((item, i) => (
                        <MotionSection key={i} delay={i * 0.2} className="group p-10 bg-white rounded-3xl shadow-sm border border-stone-100/50 hover:shadow-xl hover:border-stone-200 transition-all duration-300 text-center">
                            <div className="text-4xl font-bold text-stone-900 mb-2 font-sans">{item.metric}</div>
                            <div className="text-sm font-bold text-emerald-600 uppercase tracking-widest mb-3">{item.label}</div>
                            <p className="text-stone-500 text-sm">{item.desc}</p>
                        </MotionSection>
                    ))}
                </div>

                {/* CTA section */}
                <MotionSection delay={0.3} className="text-center">
                    <button
                        onClick={openContact}
                        className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-stone-900 rounded-full overflow-hidden transition-all duration-300 shadow-xl shadow-stone-900/20 hover:bg-stone-800 hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-stone-400 focus:ring-offset-2"
                    >
                        Secure Your Foundation
                        <svg className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </button>

                    {/* Secondary CTA */}
                    <div className="mt-6">
                        <Link
                            to="/process"
                            className="inline-flex items-center text-base font-medium text-stone-500 hover:text-stone-900 transition-colors border-b border-stone-300 hover:border-stone-900 pb-1"
                        >
                            See exactly how our process works →
                        </Link>
                    </div>
                </MotionSection>
            </div>
        </section>
    )
}

export default Differentiation
