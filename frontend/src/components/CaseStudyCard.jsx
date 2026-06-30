"use client";
import React from 'react';
import MotionSection from './MotionSection';

export default function CaseStudyCard({ caseStudy, delay = 0 }) {
    const { name, industry, problem, solution, results, technologiesUsed } = caseStudy;

    return (
        <MotionSection 
            delay={delay} 
            className="bg-white rounded-3xl border border-stone-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col p-8 sm:p-10"
        >
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div>
                    <span className="text-xs font-bold text-accent uppercase tracking-widest bg-accent-light px-3 py-1.5 rounded-full">
                        Case Study
                    </span>
                    <h3 className="text-2xl font-bold text-stone-900 font-sans mt-3">{name}</h3>
                </div>
                <span className="text-sm text-stone-400 font-medium">{industry}</span>
            </div>

            <div className="space-y-6 flex-1 mb-8">
                <div>
                    <h4 className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-2">The Problem</h4>
                    <p className="text-stone-600 leading-relaxed">{problem}</p>
                </div>
                <div>
                    <h4 className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-2">Our Solution</h4>
                    <p className="text-stone-700 leading-relaxed font-medium">{solution}</p>
                </div>
                <div className="bg-stone-50 rounded-2xl p-5 border border-stone-100">
                    <h4 className="text-xs font-bold text-accent-dark uppercase tracking-widest mb-1">Results & Value</h4>
                    <p className="text-stone-950 font-serif italic text-lg leading-relaxed">"{results}"</p>
                </div>
            </div>

            <div className="pt-6 border-t border-stone-100">
                <h4 className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                    {technologiesUsed.map((tech, i) => (
                        <span 
                            key={i} 
                            className="text-xs font-medium text-stone-600 bg-stone-100 px-3 py-1.5 rounded-lg border border-stone-200/40"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </MotionSection>
    );
}
