import React from 'react';
import ProjectPageTemplate from '../../../components/ProjectPageTemplate';
import { projects } from '../../../data/projects';
import { assets } from '../../../assets/assets';

const projectData = projects.find(p => p.slug === 'supremo');
const projectWithImages = {
    ...projectData,
    images: [
        assets.saas1,
        assets.saas2,
        assets.saas3,
        assets.saas4,
        assets.saas5,
        assets.saas6,
        assets.saas7,
        assets.saas8
    ]
};

export const metadata = {
    title: 'Supremo — AI Codebase Intelligence | Built by Trixon',
    description: 'AI-powered engineering intelligence platform that analyzes GitHub repositories, generates comprehensive technical reports, enables natural-language codebase conversations, and helps founders understand, improve, and scale their software.',
    alternates: {
        canonical: '/projects/supremo',
    },
};

export default function SupremoProjectPage() {
    return <ProjectPageTemplate project={projectWithImages} />;
}
