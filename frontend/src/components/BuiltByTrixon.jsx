"use client";
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import MotionSection from './MotionSection'
import { assets } from '../assets/assets'

const BuiltByTrixon = () => {
    const projects = [
        {
            name: "Ketpa Veterinary Platform",
            description: "Full-stack MVP with patient, doctor, and admin dashboards. Calendar-integrated appointment booking and emergency pipeline.",
            tag: "Product & SaaS Development",
            href: "/projects/ketpa",
            image: assets.ketpa2
        },
        {
            name: "AI Suspect Interrogation Chatbot",
            description: "A Gemini-powered AI suspect built for a live crime investigation event, enabling participants to interrogate virtual suspects through natural conversations.",
            tag: "AI Solutions",
            href: "/projects/ai-suspect-interrogation-chatbot",
            image: assets.chatbot1
        },
        {
            name: "Telegram Lead Pipeline + MERN Dashboard",
            description: "End-to-end data pipeline: submit leads via Telegram bot, parsed and stored in memory, with a sortable lead dashboard built in MERN stack.",
            tag: "Data & Analytics",
            href: "/projects/telegram-lead-pipeline",
            image: assets.tele1
        },
        {
            name: "Trixon — AI Codebase Intelligence",
            description: "AI-powered GitHub repo analyzer. Generates 7 reports per repo, grades codebase health per commit, and lets you chat with your entire codebase.",
            tag: "Products",
            href: "/projects/trixon",
            image: assets.saas1
        }
    ]

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-stone-200 to-transparent"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <MotionSection className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-serif italic text-stone-900 mb-6 font-light">
                        Built by <span className="font-sans font-bold not-italic">Trixon.</span>
                    </h2>
                    <p className="mt-4 text-xl text-stone-600 max-w-2xl mx-auto">
                        Real projects. Real outcomes. Here's what we've shipped.
                    </p>
                </MotionSection>

                <div className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto">
                    {projects.map((project, i) => (
                        <MotionSection key={i} delay={i * 0.15} className="group bg-white rounded-3xl border border-stone-100/70 shadow-sm hover:shadow-xl hover:border-stone-200 transition-all duration-300 overflow-hidden flex flex-col">
                            {/* Card Image Header */}
                            {project.image ? (
                                <div className="h-48 relative border-b border-stone-100 overflow-hidden">
                                    <Image 
                                        src={project.image} 
                                        alt={project.name}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            ) : (
                                <div className="h-48 bg-stone-100 border-b border-stone-100 flex items-center justify-center" style={{ borderBottom: '2px dashed var(--color-accent)' }}>
                                    <span className="text-stone-400 text-sm font-medium">[ Image coming soon ]</span>
                                </div>
                            )}

                            <div className="p-8 flex-1 flex flex-col">
                                <div className="mb-4">
                                    <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-accent-light text-accent">
                                        {project.tag}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold text-stone-900 font-sans mb-3">{project.name}</h3>
                                <p className="text-stone-600 leading-relaxed text-sm mb-6 flex-1">{project.description}</p>
                                <div className="pt-4 border-t border-stone-50">
                                    <Link
                                        href={project.href}
                                        className="text-sm font-semibold text-stone-700 hover:text-stone-950 inline-flex items-center gap-1.5 group/link"
                                    >
                                        View Project
                                        <svg className="w-4 h-4 transition-transform group-hover/link:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </MotionSection>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default BuiltByTrixon

