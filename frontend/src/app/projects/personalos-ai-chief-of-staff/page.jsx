import React from 'react';
import ProjectPageTemplate from '../../../components/ProjectPageTemplate';
import { projects } from '../../../data/projects';
import { assets } from '../../../assets/assets';

const projectData = projects.find(p => p.slug === 'personalos-ai-chief-of-staff');
const projectWithImages = {
    ...projectData,
    images: [assets.pos1, assets.pos2, assets.pos3]
};

export const metadata = {
    title: 'PersonalOS — AI Chief of Staff | Built by Trixon',
    description: 'A self-hosted AI productivity platform that combines long-term memory, browser automation, Discord interaction, voice processing, scheduling, and intelligent task management into a single personal operating system.',
    alternates: {
        canonical: '/projects/personalos-ai-chief-of-staff',
    },
};

export default function PersonalOSProjectPage() {
    return <ProjectPageTemplate project={projectWithImages} />;
}
