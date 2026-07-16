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
                    <h2 className="text-4xl md:text-5xl font-serif italic font-light tracking-wide mb-6 text-stone-200">The Scale-Up Gap: Where Funded Startups Stall</h2>
                    <p className="text-lg text-stone-400 max-w-2xl mx-auto">
                        Finding a permanent CTO takes 100+ days and $400K/year. Hiring a traditional agency locks you into a black box. There is a better middle ground — fractional technical leadership today, full independence by the end of the engagement.
                    </p>
                </MotionSection>

                <div className="grid gap-8 md:grid-cols-3 text-left">
                    {[
                        { title: "The 100-Day Void", desc: "In 2026, finding a permanent CTO takes an average of 100+ days and costs over $400,000/year. Meanwhile, your product stalls and your runway burns." },
                        { title: "The Black Box Trap", desc: "Your other choice? A traditional agency that treats your codebase like a 'black box,' creating a permanent dependency that scares away investors." },
                        { title: "The Strategic Middle Ground", desc: "You get direct, hands-on technical judgment from day one — not a rotating cast of junior devs, and not a black-box agency retainer. I'm building your technical foundation, personally, so you can move fast without hiring a full-time CTO before you're ready." }
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
