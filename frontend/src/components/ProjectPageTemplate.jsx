"use client";
import React from 'react';
import { motion } from 'framer-motion';
import MotionSection from './MotionSection';
import Footer from './Footer';
import Image from 'next/image';
import { useContact } from '../context/ContactContext';

export default function ProjectPageTemplate({ project }) {
    const { title, description, tag, tagSecondary, challenge, solution, stack, outcomes, images } = project;
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
                        className="flex flex-wrap items-center justify-center gap-2 mb-8"
                    >
                        <span className="inline-flex items-center rounded-full px-4 py-1.5 text-xs font-bold text-accent uppercase tracking-widest ring-1 ring-stone-900/10 bg-white/50 backdrop-blur-sm shadow-sm">
                            {tag}
                        </span>
                        {tagSecondary && (
                            <span className="inline-flex items-center rounded-full px-4 py-1.5 text-xs font-bold text-stone-500 uppercase tracking-widest ring-1 ring-stone-900/10 bg-white/50 backdrop-blur-sm shadow-sm">
                                {tagSecondary}
                            </span>
                        )}
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-4xl font-bold tracking-tight text-stone-900 sm:text-5xl md:text-6xl mb-8 font-sans"
                    >
                        {title}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="max-w-2xl mx-auto text-xl text-stone-600 leading-relaxed"
                    >
                        {description}
                    </motion.p>
                </div>

                {/* Background shapes */}
                <div className="absolute top-0 left-1/2 w-full -translate-x-1/2 h-full overflow-hidden -z-10 pointer-events-none opacity-40">
                    <div className="absolute top-[-20%] left-[-10%] w-[50rem] h-[50rem] bg-accent-light/30 rounded-full blur-3xl mix-blend-multiply filter"></div>
                    <div className="absolute top-[10%] right-[-10%] w-[40rem] h-[40rem] bg-indigo-50/30 rounded-full blur-3xl mix-blend-multiply filter"></div>
                </div>
            </section>

            {/* Challenge & Solution */}
            <section className="py-24 bg-white relative">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-16 items-start">
                        {/* The Challenge */}
                        <MotionSection className="space-y-6">
                            <h2 className="text-sm font-bold text-accent uppercase tracking-widest">The Challenge</h2>
                            <h3 className="text-3xl md:text-4xl font-bold text-stone-900 font-sans tracking-tight leading-tight">
                                What needed to be solved
                            </h3>
                            <p className="text-lg text-stone-600 leading-relaxed font-light">
                                {challenge}
                            </p>
                        </MotionSection>

                        {/* What We Built */}
                        <MotionSection className="bg-stone-900 text-stone-50 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
                            <div className="absolute inset-0 opacity-[0.03] text-stone-100"
                                style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)', backgroundSize: '20px 20px' }}>
                            </div>
                            <h3 className="text-2xl font-serif italic text-stone-200 mb-8 relative z-10">What We Built</h3>
                            <p className="text-stone-300 leading-relaxed relative z-10">
                                {solution}
                            </p>
                        </MotionSection>
                    </div>
                </div>
            </section>

            {/* Image Gallery */}
            <section className="py-24 bg-stone-50 relative border-t border-stone-100">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <MotionSection className="text-center mb-16">
                        <h2 className="text-sm font-bold text-accent uppercase tracking-widest mb-3">Gallery</h2>
                        <h3 className="text-3xl md:text-4xl font-bold text-stone-900 font-sans">Project Screenshots</h3>
                    </MotionSection>

                    <div className={`grid gap-6 ${
                        images && images.length === 2 
                            ? 'md:grid-cols-2 max-w-4xl mx-auto' 
                            : 'md:grid-cols-3'
                    }`}>
                        {images && images.length > 0 ? (
                            images.map((img, idx) => (
                                <MotionSection key={idx} delay={(idx + 1) * 0.1}>
                                    <div className="h-56 rounded-2xl overflow-hidden shadow-md border border-stone-100 relative">
                                        <Image
                                            src={img}
                                            alt={`${title} Screenshot ${idx + 1}`}
                                            fill
                                            className="object-cover hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                </MotionSection>
                            ))
                        ) : (
                            [0, 1, 2].map((idx) => (
                                <MotionSection key={idx} delay={(idx + 1) * 0.1}>
                                    <div
                                        className="h-56 bg-stone-100 rounded-2xl flex items-center justify-center"
                                        style={{ border: '2px dashed var(--color-accent)' }}
                                    >
                                        <span className="text-stone-400 text-sm font-medium">[ Image coming soon ]</span>
                                    </div>
                                </MotionSection>
                            ))
                        )}
                    </div>
                </div>
            </section>

            {/* Stack Used */}
            <section className="py-24 bg-white relative">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <MotionSection className="text-center mb-12">
                        <h2 className="text-sm font-bold text-accent uppercase tracking-widest mb-3">Stack Used</h2>
                        <h3 className="text-3xl md:text-4xl font-bold text-stone-900 font-sans">Technologies & Tools</h3>
                    </MotionSection>

                    <MotionSection className="flex flex-wrap justify-center gap-3">
                        {stack.map((tech, i) => (
                            <span key={i} className="text-sm font-semibold text-stone-700 bg-stone-50 border border-stone-200/50 px-4 py-2 rounded-lg">
                                {tech}
                            </span>
                        ))}
                    </MotionSection>
                </div>
            </section>

            {/* Outcomes */}
            <section className="py-24 bg-stone-50 relative border-t border-stone-100">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <MotionSection className="text-center mb-16">
                        <h2 className="text-sm font-bold text-accent uppercase tracking-widest mb-3">Outcomes</h2>
                        <h3 className="text-3xl md:text-4xl font-bold text-stone-900 font-sans">Results & Impact</h3>
                    </MotionSection>

                    <div className="grid gap-8 md:grid-cols-3 max-w-4xl mx-auto">
                        {outcomes.map((item, i) => (
                            <MotionSection key={i} delay={i * 0.2} className="group p-10 bg-white rounded-3xl shadow-sm border border-stone-100/50 hover:shadow-xl hover:border-stone-200 transition-all duration-300 text-center">
                                <div className="text-4xl font-bold text-stone-900 mb-2 font-sans">{item.metric}</div>
                                <div className="text-sm font-bold text-accent uppercase tracking-widest mb-3">{item.label}</div>
                                <p className="text-stone-500 text-sm">{item.desc}</p>
                            </MotionSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-stone-900 text-stone-50 text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03] text-stone-100"
                    style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)', backgroundSize: '30px 30px' }}>
                </div>
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <h2 className="text-4xl md:text-5xl font-serif italic mb-6 text-stone-200">
                        Want something like this?
                    </h2>
                    <p className="text-lg md:text-xl text-stone-400 font-sans max-w-xl mx-auto mb-10">
                        Let's talk about building your next product together.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button
                            onClick={openContact}
                            className="group bg-white text-stone-900 font-semibold py-4 px-8 rounded-full hover:bg-stone-100 transition-all hover:scale-105 w-full sm:w-auto cursor-pointer inline-flex items-center justify-center"
                        >
                            Let's Talk
                            <svg className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </button>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
