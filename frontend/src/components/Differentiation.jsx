import React from 'react'
import MotionSection from './MotionSection'

const Differentiation = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <MotionSection className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-serif italic text-stone-900 mb-6 font-light">
                        The Independence <span className="font-sans font-bold not-italic">Promise.</span>
                    </h2>
                    <p className="mt-4 text-xl text-stone-600 max-w-2xl mx-auto">
                        We are the only partner whose primary goal is to fire ourselves.
                    </p>
                </MotionSection>

                <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
                    {[
                        {
                            title: "Metric of Success",
                            desc: "We are the only partner whose primary goal is to make ourselves redundant. Your independence is the only outcome we optimize for."
                        },
                        {
                            title: "The Documentation Standard",
                            desc: "Every architectural decision is recorded in a way that is readable by your future CTO. No tribal knowledge, no single points of failure."
                        },
                        {
                            title: "AI-Native by Design",
                            desc: "We leverage the 2026 shift toward agentic engineering to lower your operational costs while increasing system resilience."
                        }
                    ].map((item, i) => (
                        <MotionSection key={i} delay={i * 0.2} className="group p-10 bg-white rounded-3xl shadow-sm border border-stone-100/50 hover:shadow-xl hover:border-stone-200 transition-all duration-300">
                            <div className="mb-6">
                                <span className="font-serif italic text-4xl text-stone-300 group-hover:text-stone-900 transition-colors duration-300">
                                    0{i + 1}
                                </span>
                            </div>
                            <h3 className="text-2xl font-bold text-stone-900 mb-4 font-sans">{item.title}</h3>
                            <p className="text-stone-600 leading-relaxed">{item.desc}</p>
                        </MotionSection>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Differentiation
