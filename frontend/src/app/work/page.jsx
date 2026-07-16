import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import MotionSection from '../../components/MotionSection';
import Footer from '../../components/Footer';
import { assets } from '../../assets/assets';

export const metadata = {
    title: 'Work & Case Studies | Trixon',
    description: 'Real projects, shipped end-to-end. Case studies from Trixon engagements — Ketpa veterinary platform, Yuvaratna NGO, AI Interrogation Engine, and more.',
    alternates: {
        canonical: '/work',
    },
};

const stackBadge = (tech, i) => (
    <span key={i} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-stone-100 text-stone-600 border border-stone-200">
        {tech}
    </span>
);

const OutcomeCard = ({ metric, label, desc }) => (
    <div className="p-6 bg-stone-50 rounded-2xl border border-stone-100 text-center">
        <div className="text-3xl font-bold text-stone-900 font-sans mb-1">{metric}</div>
        <div className="text-xs font-bold text-accent uppercase tracking-widest mb-2">{label}</div>
        <p className="text-stone-500 text-sm leading-relaxed">{desc}</p>
    </div>
);

export default function WorkPage() {
    return (
        <main className="bg-stone-50 min-h-screen">
            {/* Hero */}
            <section className="relative pt-12 pb-20 lg:pt-28 lg:pb-36 bg-stone-50 overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03] text-stone-900"
                    style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)', backgroundSize: '40px 40px' }}>
                </div>
                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
                    <MotionSection className="inline-flex items-center rounded-full px-4 py-1.5 text-xs font-bold text-accent uppercase tracking-widest ring-1 ring-stone-900/10 bg-white/50 backdrop-blur-sm mb-8 shadow-sm">
                        Proof of Work
                    </MotionSection>
                    <MotionSection>
                        <h1 className="text-4xl font-bold tracking-tight text-stone-900 sm:text-5xl md:text-6xl mb-8 font-sans">
                            Real projects, shipped end-to-end.
                        </h1>
                        <p className="max-w-2xl mx-auto text-xl text-stone-600 leading-relaxed">
                            Here's what building with Trixon actually looks like.
                        </p>
                    </MotionSection>
                </div>
                <div className="absolute top-0 left-1/2 w-full -translate-x-1/2 h-full overflow-hidden -z-10 pointer-events-none opacity-40">
                    <div className="absolute top-[-20%] left-[-10%] w-[50rem] h-[50rem] bg-orange-100/30 rounded-full blur-3xl mix-blend-multiply filter"></div>
                    <div className="absolute top-[10%] right-[-10%] w-[40rem] h-[40rem] bg-indigo-50/30 rounded-full blur-3xl mix-blend-multiply filter"></div>
                </div>
            </section>

            {/* ─── FLAGSHIP: Ketpa ─── */}
            <section id="ketpa" className="py-24 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <MotionSection>
                        <div className="flex flex-wrap items-center gap-3 mb-6">
                            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-accent-light text-accent border border-accent/20">
                                Product & SaaS Development
                            </span>
                            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-stone-100 text-stone-500 border border-stone-200">
                                Client Work
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-stone-900 font-sans mb-4">
                            Ketpa — Veterinary Platform
                        </h2>
                        <p className="text-xl text-stone-600 mb-12 max-w-3xl leading-relaxed">
                            Full-stack MVP with patient, doctor, and admin dashboards. Calendar-integrated appointment booking, automated email verification, and a priority-routed emergency booking pipeline — built for handover from day one.
                        </p>
                    </MotionSection>

                    {/* Gallery */}
                    <MotionSection delay={0.1} className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
                        {[assets.ketpa1, assets.ketpa2, assets.ketpa3].map((img, i) => img && (
                            <div key={i} className="relative h-52 md:h-64 rounded-2xl overflow-hidden border border-stone-100 shadow-sm">
                                <Image src={img} alt={`Ketpa screenshot ${i + 1}`} fill className="object-cover hover:scale-105 transition-transform duration-500" />
                            </div>
                        ))}
                    </MotionSection>

                    <div className="grid md:grid-cols-2 gap-12 mb-12">
                        <MotionSection delay={0.15}>
                            <h3 className="text-sm font-bold uppercase tracking-widest text-stone-400 mb-4">The Challenge</h3>
                            <p className="text-stone-600 leading-relaxed">
                                Veterinary clinics were managing patient records, appointments, and emergency bookings across disconnected spreadsheets and phone calls. Doctors had no centralized view of patient history, and clinic admins lacked oversight into daily operations — leading to missed appointments, duplicated records, and delayed emergency responses.
                            </p>
                        </MotionSection>
                        <MotionSection delay={0.2}>
                            <h3 className="text-sm font-bold uppercase tracking-widest text-stone-400 mb-4">What I Built</h3>
                            <p className="text-stone-600 leading-relaxed">
                                I designed and built a full-stack platform with three role-based dashboards (patient, doctor, admin), an integrated calendar for appointment scheduling, automated email verification flows, and a priority-routed emergency booking pipeline. The system was built for handover-readiness with clean documentation and modular architecture.
                            </p>
                        </MotionSection>
                    </div>

                    {/* Stack */}
                    <MotionSection delay={0.25} className="mb-12">
                        <h3 className="text-sm font-bold uppercase tracking-widest text-stone-400 mb-4">Stack</h3>
                        <div className="flex flex-wrap gap-2">
                            {["React", "Node.js", "MongoDB", "Tailwind CSS", "JWT Auth", "Nodemailer", "Express", "Google Calendar Integration"].map(stackBadge)}
                        </div>
                    </MotionSection>

                    {/* Outcomes */}
                    <MotionSection delay={0.3} className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
                        <OutcomeCard metric="3" label="Role-based dashboards" desc="Patient, doctor, and admin views" />
                        <OutcomeCard metric="MVP" label="Production-ready build" desc="From idea to deployable platform" />
                        <OutcomeCard metric="100%" label="IP transferred" desc="Full ownership to founder" />
                    </MotionSection>

                    {/* Testimonials */}
                    <MotionSection delay={0.35}>
                        <h3 className="text-sm font-bold uppercase tracking-widest text-stone-400 mb-6">What the client said</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                { quote: "Amazing work!! Thank you for helping us bring our vision to life!", name: "Sarah Zia Rasheed", role: "Founder, Ketpa" },
                                { quote: "Great work Junaid! Thank you so much for being a part of our journey.", name: "Krishna Shetty", role: "Demand and Ops, Flent" }
                            ].map((t, i) => (
                                <div key={i} className="p-8 bg-stone-50 rounded-2xl border border-stone-100">
                                    <svg className="w-6 h-6 text-stone-300 mb-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                    </svg>
                                    <p className="text-stone-600 italic leading-relaxed mb-4">"{t.quote}"</p>
                                    <p className="font-bold text-stone-900 text-sm">{t.name}</p>
                                    <p className="text-stone-400 text-sm">{t.role}</p>
                                </div>
                            ))}
                        </div>
                    </MotionSection>
                </div>
            </section>

            {/* ─── FLAGSHIP 2: Yuvaratna ─── */}
            <section id="yuvaratna" className="py-24 bg-stone-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <MotionSection>
                        <div className="flex flex-wrap items-center gap-3 mb-6">
                            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-accent-light text-accent border border-accent/20">
                                Technical Co-Founder (TTCF)
                            </span>
                            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-stone-100 text-stone-500 border border-stone-200">
                                Client Work · 8 months
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-stone-900 font-sans mb-4">
                            Yuvaratna — NGO Technical Co-Founder
                        </h2>
                        <p className="text-xl text-stone-600 mb-12 max-w-3xl leading-relaxed">
                            Served as sole technical lead for a regional NGO for 8 months — designed, built, and maintained their full web presence end-to-end from zero. This engagement represents the TTCF model in practice: one person, full ownership, clean exit.
                        </p>
                    </MotionSection>

                    {/* Gallery */}
                    <MotionSection delay={0.1} className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
                        {[assets.yuvaratna1, assets.yuvaratna2, assets.yuvaratna3].map((img, i) => img && (
                            <div key={i} className="relative h-52 md:h-64 rounded-2xl overflow-hidden border border-stone-100 shadow-sm">
                                <Image src={img} alt={`Yuvaratna screenshot ${i + 1}`} fill className="object-cover hover:scale-105 transition-transform duration-500" />
                            </div>
                        ))}
                    </MotionSection>

                    <div className="grid md:grid-cols-2 gap-12 mb-12">
                        <MotionSection delay={0.15}>
                            <h3 className="text-sm font-bold uppercase tracking-widest text-stone-400 mb-4">The Challenge</h3>
                            <p className="text-stone-600 leading-relaxed">
                                When I joined, the organization had no website, no online presence, and no technical credibility with the communities they were trying to reach. Everything needed to be built from scratch, with no prior technical foundation to build on.
                            </p>
                        </MotionSection>
                        <MotionSection delay={0.2}>
                            <h3 className="text-sm font-bold uppercase tracking-widest text-stone-400 mb-4">What I Built</h3>
                            <p className="text-stone-600 leading-relaxed">
                                I designed, built, and maintained the organization's full website end-to-end as sole technical lead — handling all architecture, development, and ongoing maintenance for the full 8-month tenure. The organization later wound down due to a change in government NGO regulations, unrelated to the technical work.
                            </p>
                        </MotionSection>
                    </div>

                    {/* Stack */}
                    <MotionSection delay={0.25} className="mb-12">
                        <h3 className="text-sm font-bold uppercase tracking-widest text-stone-400 mb-4">Stack</h3>
                        <div className="flex flex-wrap gap-2">
                            {["MongoDB", "Express.js", "React", "Node.js"].map(stackBadge)}
                        </div>
                    </MotionSection>

                    {/* Outcomes */}
                    <MotionSection delay={0.3} className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        <OutcomeCard metric="8mo" label="Sole technical lead" desc="End-to-end ownership of all technical work" />
                        <OutcomeCard metric="0→Live" label="Built from scratch" desc="From no online presence to a production-ready website" />
                        <OutcomeCard metric="Full" label="IP transferred" desc="Complete handover at engagement close" />
                    </MotionSection>
                </div>
            </section>

            {/* ─── Supporting Work ─── */}
            <section className="py-24 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <MotionSection className="mb-16">
                        <h2 className="text-3xl font-bold text-stone-900 font-sans mb-4">More Work</h2>
                        <p className="text-stone-600 text-lg">Smaller in scope, but worth showing — these demonstrate range and speed.</p>
                    </MotionSection>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* AI Interrogation Engine */}
                        <MotionSection delay={0.1} className="group p-10 bg-white rounded-3xl border border-stone-100/70 shadow-sm hover:shadow-xl hover:border-stone-200 transition-all duration-300">
                            <div className="relative h-44 rounded-xl overflow-hidden mb-8 border border-stone-100">
                                {assets.chatbot1 && <Image src={assets.chatbot1} alt="AI Interrogation Engine" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />}
                            </div>
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-accent-light text-accent">AI Solutions</span>
                                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-stone-100 text-stone-500">Live Deployment</span>
                            </div>
                            <h3 className="text-2xl font-bold text-stone-900 font-sans mb-3">AI Interrogation Engine</h3>
                            <p className="text-stone-600 leading-relaxed mb-6 text-sm">
                                Gemini-powered conversational AI with custom personas, session memory, and prompt-level guardrails — built and deployed end-to-end in under 24 hours for a live event.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {["React", "Node.js", "Google Gemini 2.5 Flash", "MongoDB"].map(stackBadge)}
                            </div>
                        </MotionSection>

                        {/* Telegram Lead Pipeline */}
                        <MotionSection delay={0.2} className="group p-10 bg-white rounded-3xl border border-stone-100/70 shadow-sm hover:shadow-xl hover:border-stone-200 transition-all duration-300">
                            <div className="relative h-44 rounded-xl overflow-hidden mb-8 border border-stone-100">
                                {assets.tele1 && <Image src={assets.tele1} alt="Telegram Lead Pipeline" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />}
                            </div>
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-accent-light text-accent">Data & Analytics</span>
                                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-stone-100 text-stone-500">Client Work</span>
                            </div>
                            <h3 className="text-2xl font-bold text-stone-900 font-sans mb-3">Telegram Lead Pipeline + MERN Dashboard</h3>
                            <p className="text-stone-600 leading-relaxed mb-6 text-sm">
                                End-to-end lead pipeline via Telegram bot — messages parsed and stored with Gemini AI, sortable real-time dashboard built in MERN stack.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {["React", "Node.js", "Telegram Bot API", "Google Gemini", "Python"].map(stackBadge)}
                            </div>
                        </MotionSection>
                    </div>
                </div>
            </section>

            {/* ─── Placeholder block ─── */}
            <section className="py-16 bg-stone-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <MotionSection className="p-10 bg-white rounded-3xl border border-dashed border-stone-200 text-center">
                        <p className="text-stone-400 text-sm font-medium uppercase tracking-widest mb-3">More coming</p>
                        <h3 className="text-2xl font-bold text-stone-700 font-sans mb-4">Case studies in progress</h3>
                        <p className="text-stone-500 leading-relaxed max-w-xl mx-auto">
                            More case studies are being added as new engagements complete — including Technical Audits currently underway. This page will grow as the reference library builds.
                        </p>
                    </MotionSection>
                </div>
            </section>

            <Footer />
        </main>
    );
}
