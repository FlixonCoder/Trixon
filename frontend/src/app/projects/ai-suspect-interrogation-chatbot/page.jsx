import React from 'react';
import ProjectPageTemplate from '../../../components/ProjectPageTemplate';
import { projects } from '../../../data/projects';
import { assets } from '../../../assets/assets';

const projectData = projects.find(p => p.slug === 'ai-suspect-interrogation-chatbot');
const projectWithImages = {
    ...projectData,
    images: [assets.chatbot1, assets.chatbot2]
};

export const metadata = {
    title: 'AI Suspect Interrogation Chatbot | Built by Trixon',
    description: 'A Gemini-powered AI suspect built for a live crime investigation event, enabling participants to interrogate virtual suspects.',
    alternates: {
        canonical: '/projects/ai-suspect-interrogation-chatbot',
    },
};

export default function AISuspectInterrogationProjectPage() {
    return <ProjectPageTemplate project={projectWithImages} />;
}

