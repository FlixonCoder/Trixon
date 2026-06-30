import React from 'react';
import ProjectPageTemplate from '../../../components/ProjectPageTemplate';
import { projects } from '../../../data/projects';

const projectData = projects.find(p => p.slug === 'voice-to-rag-memory');

export const metadata = {
    title: 'Local Voice-to-RAG Memory System | Built by Trixon',
    description: 'A local-first system that converts voice recordings into text in real time and caches them into a RAG-based memory store, enabling natural-language Q&A over entire meetings or seminars.',
    alternates: {
        canonical: '/projects/voice-to-rag-memory',
    },
};

export default function VoiceToRAGMemoryProjectPage() {
    return <ProjectPageTemplate project={projectData} />;
}
