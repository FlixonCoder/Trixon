import React from 'react'
import MotionSection from './MotionSection'

const SocialProof = () => {
    const testimonials = [
        { name: "Siddharth V.", company: "Stealth FinTech", quote: "Trixon didn't just build our MVP; they built the engineering culture we needed to attract our permanent CTO." },
        { name: "Ananya R.", company: "HealthLink AI", quote: "The handover was the smoothest part of our scale-up. We went from zero to a fully-functioning internal team in 4 months." },
        { name: "Mark J.", company: "OpsFlow Software", quote: "Instead of a black-box agency, we got a technical partner who prioritized our independence above their own stickiness." },
    ]

    return (
        <section className="py-24 bg-stone-50 relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.03] text-stone-900"
                style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)', backgroundSize: '40px 40px' }}>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <MotionSection className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-serif italic text-stone-900 mb-6 font-light">
                        Trusted by Founders Building for <span className="font-sans font-bold not-italic">Scale</span>
                    </h2>
                </MotionSection>

                {/* Testimonial cards - Kept for later implementation 
                <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto mb-16">
                    {testimonials.map((item, i) => (
                        <MotionSection key={i} delay={i * 0.2} className="p-8 bg-white rounded-3xl shadow-sm border border-stone-100/50 hover:shadow-xl hover:border-stone-200 transition-all duration-300">
                            <div className="mb-6">
                                <svg className="w-8 h-8 text-stone-200" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                </svg>
                            </div>
                            <p className="text-stone-600 leading-relaxed italic mb-6">{item.quote}</p>
                            <div className="pt-4 border-t border-stone-100">
                                <p className="font-bold text-stone-900 text-sm">{item.name}</p>
                                <p className="text-stone-400 text-sm">{item.company}</p>
                            </div>
                        </MotionSection>
                    ))}
                </div>
                */}

                {/* Logo strip - Kept for later implementation
                <MotionSection delay={0.3} className="text-center">
                    <p className="text-sm font-bold text-stone-400 uppercase tracking-widest mb-8">Backed by experience at:</p>
                    <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
                        {['Logo 1', 'Logo 2', 'Logo 3', 'Logo 4'].map((logo, i) => (
                            <div key={i} className="w-28 h-12 bg-stone-100 rounded-lg flex items-center justify-center text-stone-400 text-xs font-medium border border-stone-200/50 grayscale">
                                [{logo}]
                            </div>
                        ))}
                    </div>
                </MotionSection>
                */}

            </div>
        </section>
    )
}

export default SocialProof
