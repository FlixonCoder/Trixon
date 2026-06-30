"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import MotionSection from '../../components/MotionSection';
import Footer from '../../components/Footer';
import { products } from '../../data/products';

const supremo = products[0];

export default function ProductsPage() {

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
                        <span className="flex h-2 w-2 rounded-full bg-accent mr-2"></span>
                        In Beta
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-4xl font-bold tracking-tight text-stone-900 sm:text-5xl md:text-6xl mb-8 font-sans"
                    >
                        Supremo — <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(to right, var(--color-accent), var(--color-accent-dark))' }}>Your Codebase, Understood.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="max-w-2xl mx-auto text-xl text-stone-600 leading-relaxed"
                    >
                        {supremo.description}
                    </motion.p>
                </div>

                {/* Background shapes */}
                <div className="absolute top-0 left-1/2 w-full -translate-x-1/2 h-full overflow-hidden -z-10 pointer-events-none opacity-40">
                    <div className="absolute top-[-20%] left-[-10%] w-[50rem] h-[50rem] bg-accent-light/30 rounded-full blur-3xl mix-blend-multiply filter"></div>
                    <div className="absolute top-[10%] right-[-10%] w-[40rem] h-[40rem] bg-indigo-50/30 rounded-full blur-3xl mix-blend-multiply filter"></div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-24 bg-white relative">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <MotionSection className="text-center mb-16">
                        <h2 className="text-sm font-bold text-accent uppercase tracking-widest mb-3">What You Get</h2>
                        <h3 className="text-3xl md:text-4xl font-bold text-stone-900 font-sans">
                            Everything your codebase needs, in one scan.
                        </h3>
                    </MotionSection>

                    <div className="space-y-6">
                        {supremo.features.map((feature, i) => (
                            <MotionSection
                                key={i}
                                delay={i * 0.1}
                                className="flex items-start gap-5 p-6 bg-stone-50 rounded-2xl border border-stone-100 hover:shadow-md transition-shadow"
                            >
                                <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center shrink-0 mt-0.5">
                                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-bold text-stone-900 font-sans mb-1">{feature.title}</h4>
                                    <p className="text-stone-500 text-sm leading-relaxed">{feature.detail}</p>
                                </div>
                            </MotionSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Beta CTA Section */}
            <section className="py-24 relative overflow-hidden" style={{ backgroundColor: 'var(--color-accent)' }}>
                <div className="absolute inset-0 opacity-[0.08] text-white"
                    style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)', backgroundSize: '30px 30px' }}>
                </div>

                <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <MotionSection>
                        <h2 className="text-3xl md:text-4xl font-bold text-white font-sans mb-4">
                            Join the Supremo Beta
                        </h2>
                        <p className="text-white/80 text-lg mb-10">
                            Limited spots. Early access to the full product before public launch.
                        </p>

                        <div className="max-w-lg mx-auto mb-6">
                            <Link
                                href="/beta-program"
                                className="inline-block px-8 py-4 bg-white text-stone-900 font-semibold rounded-xl hover:bg-stone-50 transition-all hover:scale-105 shadow-lg cursor-pointer text-sm font-sans"
                            >
                                Join Supremo Beta
                            </Link>
                        </div>

                        <p className="text-white/50 text-xs">
                            No spam. No credit card. Just early access.
                        </p>
                    </MotionSection>
                </div>
            </section>

            <Footer />
        </main>
    );
}
