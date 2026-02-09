import React from 'react'
import MotionSection from './MotionSection'

const About = () => {
    return (
        <section className="py-32 bg-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-stone-200 to-transparent"></div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <MotionSection>
                    <div className="mb-10">
                        <span className="font-sans text-sm font-bold tracking-widest uppercase text-stone-400">About Trixon</span>
                    </div>

                    <blockquote className="text-3xl md:text-5xl font-serif leading-tight text-stone-900 mb-12">
                        "I’ve worked with multiple startups and seen the same pattern repeat — <span className="italic text-stone-500">great ideas failing due to poor technical foundations.</span> Trixon was created to solve exactly that."
                    </blockquote>

                    <div className="flex flex-col items-center justify-center space-y-2">
                        <div className="h-px w-20 bg-stone-300 mb-4"></div>
                        <div className="text-stone-900 font-bold text-lg tracking-wide uppercase font-sans">
                            — Mohammed Saqib Junaid Khan
                        </div>
                        <div className="text-stone-500 text-sm font-sans tracking-widest uppercase">
                            Founder of Trixon
                        </div>
                    </div>
                </MotionSection>
            </div>
        </section>
    )
}

export default About
