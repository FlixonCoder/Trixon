"use client";
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import MotionSection from './MotionSection';
import { products } from '../data/products';
import Footer from './Footer';

export default function BetaProgramContent() {
    const searchParams = useSearchParams();
    const initialProduct = searchParams.get('product') || 'Any Future Product';

    const [formStatus, setFormStatus] = useState(null); // null, 'submitting', 'success', 'error', 'conflict'
    const [errorMessage, setErrorMessage] = useState('');
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        linkedin: '',
        company: '',
        role: '',
        industry: '',
        experienceYears: '',
        productInterest: 'Any Future Product',
        categories: [],
        testingExperience: '',
        feedbackStyle: '',
        availability: '',
        motivation: ''
    });

    useEffect(() => {
        if (initialProduct) {
            setFormData(prev => ({ ...prev, productInterest: initialProduct }));
        }
    }, [initialProduct]);

    const handleTextChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
    };

    const handleCategoryChange = (category) => {
        setFormData(prev => {
            const current = [...prev.categories];
            const index = current.indexOf(category);
            if (index > -1) {
                current.splice(index, 1);
            } else {
                current.push(category);
            }
            return { ...prev, categories: current };
        });
    };

    const handleRadioChange = (val) => {
        setFormData(prev => ({ ...prev, testingExperience: val }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Basic Client Validation
        if (!formData.fullName.trim() || !formData.email.trim() || !formData.role.trim() || !formData.industry.trim() || !formData.experienceYears || !formData.testingExperience || !formData.availability) {
            setFormStatus('error');
            setErrorMessage('Please fill in all required fields.');
            return;
        }

        if (formData.categories.length === 0) {
            setFormStatus('error');
            setErrorMessage('Please select at least one product category of interest.');
            return;
        }

        setFormStatus('submitting');
        setErrorMessage('');

        const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:5000';

        try {
            const response = await fetch(`${BACKEND_URL}/api/beta-program`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (response.status === 201) {
                setFormStatus('success');
            } else if (response.status === 409) {
                setFormStatus('conflict');
                setErrorMessage(data.message || 'You have already applied using this email.');
            } else {
                setFormStatus('error');
                setErrorMessage(data.message || 'Something went wrong. Please try again.');
            }
        } catch (error) {
            console.error('Beta program submit error:', error);
            setFormStatus('error');
            setErrorMessage('Unable to connect to the server. Please check your connection and try again.');
        }
    };

    const benefits = [
        {
            title: "Early Access",
            desc: "Use our tools weeks before they launch to the general public."
        },
        {
            title: "Direct Influence",
            desc: "Share feedback directly with the founding engineering team."
        },
        {
            title: "Feature Request Priority",
            desc: "Recommend improvements that fit your specific business requirements."
        },
        {
            title: "Contributorship Credit",
            desc: "Get recognized as an early contributor or case study partner."
        }
    ];

    const categoryOptions = [
        "AI Products",
        "SaaS Platforms",
        "Productivity Tools",
        "Business Automation",
        "Developer Tools",
        "Analytics Products"
    ];

    return (
        <main className="bg-stone-50 min-h-screen">
            {/* Hero Section */}
            <section className="relative pt-12 pb-20 lg:pt-28 lg:pb-36 bg-stone-50 overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03] text-stone-900"
                    style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)', backgroundSize: '40px 40px' }}>
                </div>

                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
                    <span className="inline-flex items-center rounded-full px-4 py-1.5 text-xs font-bold text-accent uppercase tracking-widest ring-1 ring-stone-900/10 bg-white/50 backdrop-blur-sm mb-8 shadow-sm">
                        Co-Create the Future
                    </span>

                    <h1 className="text-4xl font-bold tracking-tight text-stone-900 sm:text-5xl md:text-6xl mb-8 font-sans">
                        Join the Trixon Beta Program
                    </h1>
                    <p className="max-w-2xl mx-auto text-xl text-stone-600 leading-relaxed">
                        Get early access to upcoming products, influence feature development, and help shape the future of Trixon.
                    </p>
                </div>

                {/* Background shapes */}
                <div className="absolute top-0 left-1/2 w-full -translate-x-1/2 h-full overflow-hidden -z-10 pointer-events-none opacity-40">
                    <div className="absolute top-[-20%] left-[-10%] w-[50rem] h-[50rem] bg-accent-light/20 rounded-full blur-3xl mix-blend-multiply filter"></div>
                    <div className="absolute top-[10%] right-[-10%] w-[40rem] h-[40rem] bg-indigo-50/20 rounded-full blur-3xl mix-blend-multiply filter"></div>
                </div>
            </section>

            {/* Benefits & Form section */}
            <section className="py-24 bg-white relative">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    {formStatus === 'success' ? (
                        <div className="max-w-2xl mx-auto text-center py-12">
                            <div className="w-20 h-20 bg-accent-light rounded-full flex items-center justify-center mx-auto mb-8">
                                <svg className="w-10 h-10 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h2 className="text-3xl font-serif italic text-stone-900 mb-4">Application Submitted!</h2>
                            <p className="text-stone-600 text-lg mb-8 max-w-md mx-auto">
                                Thank you for applying to the Trixon Beta Program. We'll review your profile and get in touch at <span className="font-semibold text-stone-900">{formData.email}</span> when a slot becomes available.
                            </p>
                            <Link href="/products" className="bg-stone-900 text-white font-medium px-8 py-3.5 rounded-full hover:bg-stone-800 transition-colors shadow-lg">
                                Back to Products
                            </Link>
                        </div>
                    ) : (
                        <div className="grid lg:grid-cols-5 gap-16 items-start">
                            {/* Left side: Benefits */}
                            <div className="lg:col-span-2 space-y-10">
                                <div>
                                    <h2 className="text-sm font-bold text-accent uppercase tracking-widest mb-3">Benefits</h2>
                                    <h3 className="text-3xl font-bold text-stone-900 font-sans tracking-tight">Why Join the Beta?</h3>
                                    <p className="text-stone-500 mt-4 leading-relaxed font-light">
                                        We are building software to solve real problems for startup operators and engineering teams. As a beta tester, you play a critical role in our development loop.
                                    </p>
                                </div>

                                <div className="space-y-6">
                                    {benefits.map((b, i) => (
                                        <div key={i} className="flex gap-4 p-5 rounded-2xl border border-stone-50 bg-stone-50/50">
                                            <div className="w-6 h-6 rounded-full bg-accent-light flex items-center justify-center shrink-0 mt-0.5">
                                                <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-sans">{b.title}</h4>
                                                <p className="text-stone-500 text-xs sm:text-sm mt-1">{b.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Right side: Form */}
                            <div className="lg:col-span-3 bg-stone-50/50 rounded-3xl border border-stone-100 p-8 sm:p-10 shadow-sm">
                                <h3 className="text-2xl font-bold text-stone-900 font-sans mb-8">Beta Application</h3>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {/* Section 1: Basic info */}
                                    <div className="space-y-4">
                                        <h4 className="text-xs font-bold text-stone-400 uppercase tracking-widest pb-2 border-b border-stone-100">1. Basic Information</h4>
                                        <div className="grid sm:grid-cols-2 gap-4">
                                            <div>
                                                <label htmlFor="fullName" className="block text-xs font-bold text-stone-600 uppercase tracking-wider mb-2">Full Name *</label>
                                                <input 
                                                    type="text" id="fullName" value={formData.fullName} onChange={handleTextChange} required
                                                    className="w-full px-4 py-3 rounded-lg border border-stone-250 bg-white focus:border-stone-500 outline-none text-sm transition-all"
                                                    placeholder="Jane Doe"
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="email" className="block text-xs font-bold text-stone-600 uppercase tracking-wider mb-2">Email Address *</label>
                                                <input 
                                                    type="email" id="email" value={formData.email} onChange={handleTextChange} required
                                                    className="w-full px-4 py-3 rounded-lg border border-stone-250 bg-white focus:border-stone-500 outline-none text-sm transition-all"
                                                    placeholder="jane@example.com"
                                                />
                                            </div>
                                        </div>
                                        <div className="grid sm:grid-cols-2 gap-4">
                                            <div>
                                                <label htmlFor="linkedin" className="block text-xs font-bold text-stone-600 uppercase tracking-wider mb-2">LinkedIn Profile URL</label>
                                                <input 
                                                    type="url" id="linkedin" value={formData.linkedin} onChange={handleTextChange}
                                                    className="w-full px-4 py-3 rounded-lg border border-stone-250 bg-white focus:border-stone-500 outline-none text-sm transition-all"
                                                    placeholder="https://linkedin.com/in/username"
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="company" className="block text-xs font-bold text-stone-600 uppercase tracking-wider mb-2">Company Name</label>
                                                <input 
                                                    type="text" id="company" value={formData.company} onChange={handleTextChange}
                                                    className="w-full px-4 py-3 rounded-lg border border-stone-250 bg-white focus:border-stone-500 outline-none text-sm transition-all"
                                                    placeholder="Acme Corp"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Section 2: Professional info */}
                                    <div className="space-y-4 pt-4">
                                        <h4 className="text-xs font-bold text-stone-400 uppercase tracking-widest pb-2 border-b border-stone-100">2. Professional Background</h4>
                                        <div className="grid sm:grid-cols-3 gap-4">
                                            <div className="sm:col-span-1">
                                                <label htmlFor="experienceYears" className="block text-xs font-bold text-stone-600 uppercase tracking-wider mb-2">Exp (Years) *</label>
                                                <input 
                                                    type="number" id="experienceYears" min="0" value={formData.experienceYears} onChange={handleTextChange} required
                                                    className="w-full px-4 py-3 rounded-lg border border-stone-250 bg-white focus:border-stone-500 outline-none text-sm transition-all"
                                                    placeholder="5"
                                                />
                                            </div>
                                            <div className="sm:col-span-1">
                                                <label htmlFor="role" className="block text-xs font-bold text-stone-600 uppercase tracking-wider mb-2">Role *</label>
                                                <input 
                                                    type="text" id="role" value={formData.role} onChange={handleTextChange} required
                                                    className="w-full px-4 py-3 rounded-lg border border-stone-250 bg-white focus:border-stone-500 outline-none text-sm transition-all"
                                                    placeholder="Product Manager"
                                                />
                                            </div>
                                            <div className="sm:col-span-1">
                                                <label htmlFor="industry" className="block text-xs font-bold text-stone-600 uppercase tracking-wider mb-2">Industry *</label>
                                                <input 
                                                    type="text" id="industry" value={formData.industry} onChange={handleTextChange} required
                                                    className="w-full px-4 py-3 rounded-lg border border-stone-250 bg-white focus:border-stone-500 outline-none text-sm transition-all"
                                                    placeholder="FinTech"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Section 3: Product Interest */}
                                    <div className="space-y-4 pt-4">
                                        <h4 className="text-xs font-bold text-stone-400 uppercase tracking-widest pb-2 border-b border-stone-100">3. Product Selections</h4>
                                        <div>
                                            <label htmlFor="productInterest" className="block text-xs font-bold text-stone-600 uppercase tracking-wider mb-2">Which product would you like to test? *</label>
                                            <select 
                                                id="productInterest" value={formData.productInterest} onChange={handleTextChange} required
                                                className="w-full px-4 py-3 rounded-lg border border-stone-250 bg-white focus:border-stone-500 outline-none text-sm transition-all"
                                            >
                                                <option value="Any Future Product">Any Future Product</option>
                                                {products.filter(p => p.betaAvailable).map((p, i) => (
                                                    <option key={i} value={p.name}>{p.name}</option>
                                                ))}
                                            </select>
                                        </div>

                                        <div>
                                            <label className="block text-xs font-bold text-stone-600 uppercase tracking-wider mb-3">Product Categories of Interest *</label>
                                            <div className="grid sm:grid-cols-2 gap-3">
                                                {categoryOptions.map((cat, i) => {
                                                    const isChecked = formData.categories.includes(cat);
                                                    return (
                                                        <button 
                                                            type="button" key={i} onClick={() => handleCategoryChange(cat)}
                                                            className={`text-left px-4 py-3 rounded-xl border text-xs font-medium transition-all ${
                                                                isChecked 
                                                                ? 'bg-stone-900 text-white border-stone-900' 
                                                                : 'bg-white text-stone-700 border-stone-200 hover:border-stone-400'
                                                            }`}
                                                        >
                                                            {cat}
                                                        </button>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Section 4: Testing experience */}
                                    <div className="space-y-4 pt-4">
                                        <h4 className="text-xs font-bold text-stone-400 uppercase tracking-widest pb-2 border-b border-stone-100">4. Testing & Experience</h4>
                                        <div>
                                            <label className="block text-xs font-bold text-stone-600 uppercase tracking-wider mb-2">Have you tested software products before? *</label>
                                            <div className="flex gap-4">
                                                {["Yes", "No"].map((val, i) => (
                                                    <button 
                                                        type="button" key={i} onClick={() => handleRadioChange(val)}
                                                        className={`px-5 py-2.5 rounded-lg border text-xs font-bold transition-all ${
                                                            formData.testingExperience === val
                                                            ? 'bg-stone-900 text-white border-stone-900'
                                                            : 'bg-white text-stone-700 border-stone-250 hover:border-stone-400'
                                                        }`}
                                                    >
                                                        {val}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="feedbackStyle" className="block text-xs font-bold text-stone-600 uppercase tracking-wider mb-2">Describe how you typically provide feedback</label>
                                            <textarea 
                                                id="feedbackStyle" value={formData.feedbackStyle} onChange={handleTextChange} rows="3"
                                                className="w-full px-4 py-3 rounded-lg border border-stone-250 bg-white focus:border-stone-500 outline-none text-sm transition-all resize-none"
                                                placeholder="Screenshots, screen recordings, detailed error descriptions..."
                                            />
                                        </div>
                                    </div>

                                    {/* Section 5: Availability & Motivation */}
                                    <div className="space-y-4 pt-4">
                                        <h4 className="text-xs font-bold text-stone-400 uppercase tracking-widest pb-2 border-b border-stone-100">5. Commitments</h4>
                                        <div>
                                            <label htmlFor="availability" className="block text-xs font-bold text-stone-600 uppercase tracking-wider mb-2">Availability / Time Commitment *</label>
                                            <select 
                                                id="availability" value={formData.availability} onChange={handleTextChange} required
                                                className="w-full px-4 py-3 rounded-lg border border-stone-250 bg-white focus:border-stone-500 outline-none text-sm transition-all"
                                            >
                                                <option value="" disabled>Select availability...</option>
                                                <option value="Less than 1 hour per week">Less than 1 hour per week</option>
                                                <option value="1–3 hours per week">1–3 hours per week</option>
                                                <option value="3–5 hours per week">3–5 hours per week</option>
                                                <option value="5+ hours per week">5+ hours per week</option>
                                            </select>
                                        </div>

                                        <div>
                                            <label htmlFor="motivation" className="block text-xs font-bold text-stone-600 uppercase tracking-wider mb-2">Why would you like to join the Trixon Beta Program?</label>
                                            <textarea 
                                                id="motivation" value={formData.motivation} onChange={handleTextChange} rows="4"
                                                className="w-full px-4 py-3 rounded-lg border border-stone-250 bg-white focus:border-stone-500 outline-none text-sm transition-all resize-none"
                                                placeholder="Describe your motivation..."
                                            />
                                        </div>
                                    </div>

                                    {/* Error/Conflict messages */}
                                    {(formStatus === 'error' || formStatus === 'conflict') && (
                                        <div className={`p-4 rounded-xl border text-xs leading-relaxed ${
                                            formStatus === 'conflict' 
                                            ? 'bg-blue-50 text-blue-800 border-blue-200' 
                                            : 'bg-red-50 text-red-800 border-red-200'
                                        }`}>
                                            {errorMessage}
                                        </div>
                                    )}

                                    <button 
                                        type="submit" disabled={formStatus === 'submitting'}
                                        className="w-full bg-stone-900 text-white font-medium py-3.5 px-6 rounded-xl hover:bg-stone-800 transition-colors shadow-md flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
                                    >
                                        {formStatus === 'submitting' ? 'Submitting Application...' : 'Submit Beta Application'}
                                    </button>
                                </form>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            <Footer />
        </main>
    );
}
