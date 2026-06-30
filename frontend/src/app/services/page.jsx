import React from 'react';
import Link from 'next/link';
import MotionSection from '../../components/MotionSection';
import Footer from '../../components/Footer';
import { services } from '../../data/services';

export const metadata = {
    title: 'Technical Services for Startups | Build-Operate-Transfer | Trixon',
    description: 'Explore Trixon\'s core services: AI Solutions, SaaS Product Development, Custom Software Engineering, Data Analytics, and DevOps Infrastructure built for scale and transfer.',
    alternates: {
        canonical: '/services',
    },
};

export default function ServicesPage() {
    return (
        <main className="bg-stone-50 min-h-screen">
            {/* Hero Section */}
            <section className="relative pt-12 pb-20 lg:pt-28 lg:pb-36 bg-stone-50 overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03] text-stone-900"
                    style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)', backgroundSize: '40px 40px' }}>
                </div>

                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
                    <MotionSection className="inline-flex items-center rounded-full px-4 py-1.5 text-xs font-bold text-accent uppercase tracking-widest ring-1 ring-stone-900/10 bg-white/50 backdrop-blur-sm mb-8 shadow-sm">
                        What We Build
                    </MotionSection>

                    <MotionSection>
                        <h1 className="text-4xl font-bold tracking-tight text-stone-900 sm:text-5xl md:text-6xl mb-8 font-sans">
                            Technical Leadership & Software Development for Growing Startups
                        </h1>
                        <p className="max-w-2xl mx-auto text-xl text-stone-600 leading-relaxed">
                            We help founders build, scale, and eventually own their technology without becoming dependent on an agency.
                        </p>
                    </MotionSection>
                </div>

                {/* Background shapes */}
                <div className="absolute top-0 left-1/2 w-full -translate-x-1/2 h-full overflow-hidden -z-10 pointer-events-none opacity-40">
                    <div className="absolute top-[-20%] left-[-10%] w-[50rem] h-[50rem] bg-orange-100/30 rounded-full blur-3xl mix-blend-multiply filter"></div>
                    <div className="absolute top-[10%] right-[-10%] w-[40rem] h-[40rem] bg-indigo-50/30 rounded-full blur-3xl mix-blend-multiply filter"></div>
                </div>
            </section>

            {/* Services Overview Grid */}
            <section className="py-24 bg-white relative">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, i) => (
                            <MotionSection 
                                key={i}
                                delay={i * 0.15}
                                className="group p-8 bg-white rounded-3xl border border-stone-100/70 shadow-sm hover:shadow-xl hover:border-stone-200 transition-all duration-300 flex flex-col justify-between"
                            >
                                <div>
                                    <div className="mb-6">
                                        <span className="w-12 h-12 rounded-2xl bg-stone-900 text-white font-mono flex items-center justify-center text-lg font-bold">
                                            0{i + 1}
                                        </span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-stone-900 font-sans mb-4 group-hover:text-accent transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-stone-550 leading-relaxed mb-6 font-light text-sm sm:text-base">
                                        {service.subheadline}
                                    </p>
                                    <ul className="space-y-2.5 mb-8">
                                        {service.capabilities.slice(0, 4).map((cap, j) => (
                                            <li key={j} className="flex items-center gap-2.5 text-xs sm:text-sm text-stone-600">
                                                <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0"></span>
                                                <span>{cap}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="pt-4 border-t border-stone-50">
                                    <Link 
                                        href={`/services/${service.slug}`}
                                        className="text-sm font-semibold text-stone-700 hover:text-stone-950 inline-flex items-center gap-1.5 group/link"
                                    >
                                        Explore Service
                                        <svg className="w-4 h-4 transition-transform group-hover/link:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </Link>
                                </div>
                            </MotionSection>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
