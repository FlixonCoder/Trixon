import React from 'react'
import MotionSection from './MotionSection'

const Personas = () => {
    const personas = [
        {
            label: "The \"Vibe-to-Scale\" Founder",
            pain: "You built a prototype with AI tools, but enterprise clients are asking about security and scalability.",
            intervention: "We architect an \"AI-First\" foundation that meets professional standards."
        },
        {
            label: "The \"Burned\" Repeat Founder",
            pain: "You've had a bad experience with a dev shop and now prioritize owning your IP and building an internal team.",
            intervention: "We act as your internal advocate, building processes that survive our departure."
        },
        {
            label: "The \"Series A Bridge\" Company",
            pain: "You just raised capital, but your technical foundation is a mess and you need a leader while you search for a CTO.",
            intervention: "We provide interim scaling and clean up technical debt to ensure a smooth CTO transition."
        }
    ]

    return (
        <section id="personas" className="py-24 bg-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-stone-200 to-transparent"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <MotionSection className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-serif italic text-stone-900 mb-6 font-light">
                        Does this sound like <span className="font-sans font-bold not-italic">you?</span>
                    </h2>
                    <p className="mt-4 text-xl text-stone-600 max-w-2xl mx-auto">
                        We've seen these patterns before. Here's how we solve them.
                    </p>
                </MotionSection>

                <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
                    {personas.map((persona, i) => (
                        <MotionSection key={i} delay={i * 0.2} className="group p-10 bg-white rounded-3xl shadow-sm border border-stone-100/50 hover:shadow-xl hover:border-stone-200 transition-all duration-300">
                            <div className="mb-6">
                                <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border border-stone-200 bg-stone-50 text-stone-600">
                                    {persona.label}
                                </span>
                            </div>
                            <div className="mb-6">
                                <h3 className="text-sm font-bold text-stone-400 uppercase tracking-widest mb-3">Your current pain</h3>
                                <p className="text-stone-700 leading-relaxed">{persona.pain}</p>
                            </div>
                            <div>
                                <h3 className="text-sm font-bold text-emerald-600 uppercase tracking-widest mb-3">Trixon's intervention</h3>
                                <p className="text-stone-600 leading-relaxed font-medium">{persona.intervention}</p>
                            </div>
                        </MotionSection>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Personas
