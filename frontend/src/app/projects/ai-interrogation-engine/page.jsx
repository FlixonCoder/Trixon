import React from 'react';
import ProjectPageTemplate from '../../../components/ProjectPageTemplate';
import { projects } from '../../../data/projects';
import { assets } from '../../../assets/assets';

const projectData = projects.find(p => p.slug === 'ai-interrogation-engine');
const projectWithImages = {
    ...projectData,
    images: [assets.chatbot1, assets.chatbot2]
};

export const metadata = {
    title: 'AI Interrogation Engine — Multi-Persona Conversational System | Built by Trixon',
    description: 'A Gemini-powered conversational AI system with custom personas, session memory, and prompt-level guardrails — built and deployed end-to-end in under 24 hours for a live event.',
    alternates: {
        canonical: '/projects/ai-interrogation-engine',
    },
};

export default function AIInterrogationProjectPage() {
    return <ProjectPageTemplate project={projectWithImages} />;
}

