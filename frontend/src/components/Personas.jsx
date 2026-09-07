"use client";
import React from 'react'
import MotionSection from './MotionSection'
import { useContact } from '../context/ContactContext'

const Personas = () => {
    const { openContact } = useContact()

    const personas = [
        {
            label: "The Operator Drowning in Manual Work",
            pain: "Your team is talented, but they're spending hours every day on repetitive tasks — data entry, follow-ups, scheduling, reporting. It's slowing you down and burning people out.",
            intervention: "We map your workflows, identify the highest-ROI automation targets, and build the systems that eliminate the manual work — without disrupting how your team operates."
        },
        {
            label: "The Startup That Needs AI, Now",
            pain: "You know your product needs AI features — an assistant, a recommendation engine, automated outreach, a calling agent. But your dev team doesn't have the AI expertise, and hiring for it takes months.",
            intervention: "We integrate AI directly into your product or ops stack — voice bots, LLM-powered workflows, intelligent dashboards — in weeks, not months. Fixed scope, clear deliverable."
        },
        {
            label: "The Business Running on Disconnected Tools",
            pain: "Your stack is a patchwork of SaaS tools that don't talk to each other. Your team manually exports from one, imports to another, and spends Friday afternoons building reports that should update themselves.",
            intervention: "We build the automation layer that connects your tools, eliminates the manual bridging, and gives you a real-time dashboard view of your business — without ripping out what you've already built."
        }
    ]

    return (
        <section id="personas" className="py-24 bg-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-stone-200 to-transparent"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <MotionSection className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-serif italic text-stone-900 mb-6 font-light">
                        We've Seen This <span className="font-sans font-bold not-italic">Before.</span>
                    </h2>
                    <p className="mt-4 text-xl text-stone-600 max-w-2xl mx-auto">
                        Three types of businesses come to us. Here's how we solve each one.
                    </p>
                </MotionSection>

                <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
                    {personas.map((persona, i) => (
                        <MotionSection key={i} delay={i * 0.2} className="group p-10 bg-white rounded-3xl shadow-sm border border-stone-100/50 hover:shadow-xl hover:border-stone-200 transition-all duration-300 flex flex-col">
                            <div className="mb-6">
                                <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border border-stone-200 bg-stone-50 text-stone-600">
                                    {persona.label}
                                </span>
                            </div>
                            <div className="mb-6">
                                <h3 className="text-sm font-bold text-stone-400 uppercase tracking-widest mb-3">Your current pain</h3>
                                <p className="text-stone-700 leading-relaxed">{persona.pain}</p>
                            </div>
                            <div className="mb-4">
                                <h3 className="text-sm font-bold text-accent uppercase tracking-widest mb-3">Trixon's intervention</h3>
                                <p className="text-stone-600 leading-relaxed font-medium">{persona.intervention}</p>
                            </div>
                            {/* CTA link */}
                            <div className="mt-auto pt-4 border-t border-stone-100">
                                <button
                                    onClick={openContact}
                                    className="text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors inline-flex items-center group/cta cursor-pointer"
                                >
                                    Does this sound like you? Let's talk
                                    <svg className="ml-1 w-4 h-4 transition-transform group-hover/cta:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </button>
                            </div>
                        </MotionSection>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Personas
