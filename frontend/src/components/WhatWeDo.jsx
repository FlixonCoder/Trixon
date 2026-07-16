import React from 'react'
import MotionSection from './MotionSection'

const WhatWeDo = () => {
    const items = [
        {
            title: "Technical Audit",
            desc: "An independent, no-obligation look at your codebase — a clear before/after benchmark and a set of prioritized recommendations you can act on immediately, with or without hiring me further. Typical turnaround: 1–3 weeks depending on codebase size.",
            support: "The lowest-risk way to see how I work before committing to anything larger."
        },
        {
            title: "TTCF — Temporary Technical Co-Founder",
            desc: "I join your company under a partnership arrangement, functioning as a hands-on technical lead — MVP development, architecture decisions, and fundraising-readiness — directly and personally. Tenure is flexible and scoped to your actual needs.",
            support: "No account manager. No junior devs executing while someone else takes the calls."
        },
        {
            title: "BOT — Build-Operate-Transfer",
            desc: "I take ownership of building or fixing your product within a fixed tenure, working solo and communicating transparently about pace. The engagement concludes with full IP and documentation transfer — nothing lives only in my head.",
            support: "Documentation happens as I build, not retrofitted at the end."
        }
    ]

    return (
        <section id="solution" className="py-24 bg-stone-50 relative overflow-hidden">
            {/* Subtle Texture */}
            <div className="absolute inset-0 opacity-[0.03] text-stone-900"
                style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)', backgroundSize: '40px 40px' }}>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <MotionSection className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-stone-900 mb-6 font-sans">
                        Three Ways to Engage
                    </h2>
                    <p className="mt-4 text-xl text-stone-600 max-w-2xl mx-auto">
                        Every engagement is scoped to what you actually need — no long-term contracts, no ambiguity.
                    </p>
                </MotionSection>

                <div className="grid gap-8 md:grid-cols-3">
                    {items.map((item, index) => (
                        <MotionSection key={index} delay={index * 0.2} className="group p-10 bg-white rounded-3xl shadow-sm border border-stone-100/50 hover:shadow-xl hover:border-stone-200 transition-all duration-300">
                            <div className="mb-6">
                                <span className="font-serif italic text-4xl text-stone-300 group-hover:text-stone-900 transition-colors duration-300">
                                    0{index + 1}
                                </span>
                            </div>
                            <h3 className="text-2xl font-bold text-stone-900 mb-4 font-sans">{item.title}</h3>
                            <p className="text-stone-600 leading-relaxed mb-4">{item.desc}</p>
                            <p className="text-sm text-stone-400 italic">{item.support}</p>
                        </MotionSection>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default WhatWeDo
