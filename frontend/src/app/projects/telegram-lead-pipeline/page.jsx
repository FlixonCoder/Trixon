import React from 'react';
import ProjectPageTemplate from '../../../components/ProjectPageTemplate';
import { projects } from '../../../data/projects';
import { assets } from '../../../assets/assets';

const projectData = projects.find(p => p.slug === 'telegram-lead-pipeline');
const projectWithImages = {
    ...projectData,
    images: [assets.tele1, assets.tele2, assets.tele3]
};

export const metadata = {
    title: 'AI Lead Pipeline — Telegram to MERN Dashboard | Built by Trixon',
    description: 'An AI-driven lead management pipeline that captures unstructured leads from Telegram, extracts and validates data with Google Gemini, and surfaces everything in a real-time MERN dashboard.',
    alternates: {
        canonical: '/projects/telegram-lead-pipeline',
    },
};

export default function TelegramPipelineProjectPage() {
    return <ProjectPageTemplate project={projectWithImages} />;
}
