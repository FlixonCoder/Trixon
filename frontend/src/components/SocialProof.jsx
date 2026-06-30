import React from 'react'
import MotionSection from './MotionSection'

const SocialProof = () => {
    const testimonials = [
        {
            quote: "Amazing work!! Thank you for helping us bring our vision to life!",
            name: "Sarah Zia Rasheed",
            role: "Founder",
            project: "Ketpa (Veterinary Platform)"
        },
        {
            quote: "Great work Junaid! Thank you so much for being a part of our journey.",
            name: "Krishna Shetty",
            role: "Demand and Ops, Flent",
            project: "Ketpa (Veterinary Platform)"
        }
    ]

    return (
        <section className="py-24 bg-stone-50 relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.03] text-stone-900"
                style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)', backgroundSize: '40px 40px' }}>
            </div>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
                    {testimonials.map((item, i) => (
                        <MotionSection key={i} delay={i * 0.2} className="p-8 bg-white rounded-3xl shadow-sm border border-stone-100/50 hover:shadow-xl hover:border-stone-200 transition-all duration-300">
                            <div className="mb-6">
                                <svg className="w-8 h-8 text-stone-200" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                </svg>
                            </div>
                            <p className="text-stone-600 leading-relaxed italic mb-6 text-lg">{item.quote}</p>
                            <div className="pt-4 border-t border-stone-100">
                                <p className="font-bold text-stone-900 text-sm">{item.name}</p>
                                <p className="text-stone-400 text-sm">{item.role}</p>
                                <p className="text-accent text-xs font-medium mt-1">{item.project}</p>
                            </div>
                        </MotionSection>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default SocialProof
