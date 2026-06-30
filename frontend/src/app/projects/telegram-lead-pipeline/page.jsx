import React from 'react';
import ProjectPageTemplate from '../../../components/ProjectPageTemplate';
import { projects } from '../../../data/projects';
import { assets } from '../../../assets/assets';

const projectData = projects.find(p => p.slug === 'ai-powered-lead-manager-chatbot');
const projectWithImages = {
    ...projectData,
    images: [assets.tele1, assets.tele2, assets.tele3]
};

export const metadata = {
    title: 'Telegram Lead Pipeline | Built by Trixon',
    description: 'End-to-end data pipeline: submit leads via Telegram bot, parsed and stored, with a sortable lead dashboard built in MERN stack.',
    alternates: {
        canonical: '/projects/telegram-lead-pipeline',
    },
};

export default function TelegramPipelineProjectPage() {
    return <ProjectPageTemplate project={projectWithImages} />;
}
