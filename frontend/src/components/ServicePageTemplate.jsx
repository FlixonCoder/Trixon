"use client";
import React from 'react';
import { motion } from 'framer-motion';
import MotionSection from './MotionSection';
import CaseStudyCard from './CaseStudyCard';
import Link from 'next/link';
import { useContact } from '../context/ContactContext';
import Footer from './Footer';

export default function ServicePageTemplate({ service }) {
    const { title, headline, subheadline, overview, problems, capabilities, techStack, caseStudies, linkedProject } = service;
    const { openContact } = useContact();

    return (
        <main className="bg-stone-50 min-h-screen">
            {/* Hero Section */}
            <section className="relative pt-12 pb-20 lg:pt-28 lg:pb-36 bg-stone-50 overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03] text-stone-900"
                    style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)', backgroundSize: '40px 40px' }}>
                </div>

                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="inline-flex items-center rounded-full px-4 py-1.5 text-xs font-bold text-accent uppercase tracking-widest ring-1 ring-stone-900/10 bg-white/50 backdrop-blur-sm mb-8 shadow-sm"
                    >
                        Trixon Service Category
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-4xl font-bold tracking-tight text-stone-900 sm:text-5xl md:text-6xl mb-8 font-sans"
                    >
                        {headline}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="max-w-2xl mx-auto text-xl text-stone-600 leading-relaxed"
                    >
                        {subheadline}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="mt-8 flex justify-center"
                    >
                        <button
                            onClick={openContact}
                            className="bg-stone-900 text-white font-medium py-3 px-8 rounded-full hover:bg-stone-800 transition-all hover:scale-105 shadow-lg shadow-stone-900/15 cursor-pointer"
                        >
                            Discuss Your Project
                        </button>
                    </motion.div>
                </div>

                {/* Background shapes */}
                <div className="absolute top-0 left-1/2 w-full -translate-x-1/2 h-full overflow-hidden -z-10 pointer-events-none opacity-40">
                    <div className="absolute top-[-20%] left-[-10%] w-[50rem] h-[50rem] bg-accent-light/20 rounded-full blur-3xl mix-blend-multiply filter"></div>
                    <div className="absolute top-[10%] right-[-10%] w-[40rem] h-[40rem] bg-indigo-50/20 rounded-full blur-3xl mix-blend-multiply filter"></div>
                </div>
            </section>

            {/* Overview & Problems We Solve */}
            <section className="py-24 bg-white relative">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-16 items-start">
                        {/* Left: Overview */}
                        <MotionSection className="space-y-6">
                            <h2 className="text-sm font-bold text-accent uppercase tracking-widest">Overview</h2>
                            <h3 className="text-3xl md:text-4xl font-bold text-stone-900 font-sans tracking-tight leading-tight">
                                Delivering Technical Velocity Without the Bloat
                            </h3>
                            <p className="text-lg text-stone-600 leading-relaxed font-light">
                                {overview}
                            </p>
                            <div className="pt-4">
                                <h4 className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-3">Technologies We Leverage</h4>
                                <div className="flex flex-wrap gap-2">
                                    {techStack.map((tech, i) => (
                                        <span key={i} className="text-xs font-semibold text-stone-700 bg-stone-50 border border-stone-200/50 px-3 py-1.5 rounded-lg">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </MotionSection>

                        {/* Right: Problems We Solve */}
                        <MotionSection className="bg-stone-900 text-stone-50 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
                            <div className="absolute inset-0 opacity-[0.03] text-stone-100"
                                style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)', backgroundSize: '20px 20px' }}>
                            </div>
                            <h3 className="text-2xl font-serif italic text-stone-200 mb-8 relative z-10">Problems We Solve</h3>
                            <ul className="space-y-6 relative z-10">
                                {problems.map((problem, i) => (
                                    <li key={i} className="flex gap-4">
                                        <span className="w-6 h-6 rounded-full bg-stone-850 flex items-center justify-center shrink-0 border border-stone-800 text-xs font-bold text-accent">
                                            0{i + 1}
                                        </span>
                                        <p className="text-stone-300 leading-relaxed text-sm sm:text-base">{problem}</p>
                                    </li>
                                ))}
                            </ul>
                        </MotionSection>
                    </div>
                </div>
            </section>

            {/* Capabilities Grid */}
            <section className="py-24 bg-stone-50 relative border-t border-stone-100">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <MotionSection className="text-center mb-16">
                        <h2 className="text-sm font-bold text-accent uppercase tracking-widest mb-3">Capabilities</h2>
                        <h3 className="text-3xl md:text-4xl font-bold text-stone-900 font-sans">What We Bring to Your Team</h3>
                    </MotionSection>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {capabilities.map((cap, i) => (
                            <MotionSection 
                                key={i} 
                                delay={i * 0.1}
                                className="bg-white rounded-2xl border border-stone-100 p-6 shadow-sm hover:shadow-md transition-shadow flex items-start gap-4"
                            >
                                <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="font-medium text-stone-800 font-sans text-sm sm:text-base">{cap}</span>
                            </MotionSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Linked Project */}
            <section className="py-24 bg-white relative border-t border-stone-100">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <MotionSection className="text-center mb-12">
                        <h2 className="text-sm font-bold text-accent uppercase tracking-widest mb-3">See It In Action</h2>
                        <h3 className="text-3xl md:text-4xl font-bold text-stone-900 font-sans">Real Project Example</h3>
                    </MotionSection>

                    <MotionSection className="max-w-xl mx-auto">
                        <div className="space-y-4">
                            {linkedProject ? (
                                Array.isArray(linkedProject) ? (
                                    linkedProject.map((project, idx) => (
                                        <Link
                                            key={idx}
                                            href={project.path}
                                            className="group flex items-center justify-between p-8 bg-stone-50 rounded-3xl border border-stone-100 hover:shadow-xl hover:border-stone-200 transition-all duration-300"
                                        >
                                            <div>
                                                <p className="font-bold text-stone-900 font-sans text-lg mb-1">{project.name}</p>
                                                <p className="text-sm text-stone-500">View the full case study</p>
                                            </div>
                                            <svg className="w-5 h-5 text-stone-400 group-hover:text-stone-900 transition-colors group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </Link>
                                    ))
                                ) : (
                                    <Link
                                        href={linkedProject.path}
                                        className="group flex items-center justify-between p-8 bg-stone-50 rounded-3xl border border-stone-100 hover:shadow-xl hover:border-stone-200 transition-all duration-300"
                                    >
                                        <div>
                                            <p className="font-bold text-stone-900 font-sans text-lg mb-1">{linkedProject.name}</p>
                                            <p className="text-sm text-stone-500">View the full case study</p>
                                        </div>
                                        <svg className="w-5 h-5 text-stone-400 group-hover:text-stone-900 transition-colors group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </Link>
                                )
                            ) : (
                                <div className="flex items-center justify-center p-8 bg-stone-50 rounded-3xl border border-stone-100">
                                    <p className="text-stone-400 text-sm font-medium">Project example coming soon</p>
                                </div>
                            )}
                        </div>
                    </MotionSection>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="py-24 bg-stone-900 text-stone-50 text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03] text-stone-100"
                    style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)', backgroundSize: '30px 30px' }}>
                </div>
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <h2 className="text-4xl md:text-5xl font-serif italic mb-6 text-stone-200">
                        Let's build a foundation that lasts.
                    </h2>
                    <p className="text-lg md:text-xl text-stone-400 font-sans max-w-xl mx-auto mb-10">
                        Ready to establish enterprise-ready software and scaling speed? Start with a direct discussion with our technical leadership.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button
                            onClick={openContact}
                            className="bg-white text-stone-900 font-semibold py-4 px-8 rounded-full hover:bg-stone-100 transition-all hover:scale-105 w-full sm:w-auto cursor-pointer"
                        >
                            Book a Discovery Call
                        </button>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
