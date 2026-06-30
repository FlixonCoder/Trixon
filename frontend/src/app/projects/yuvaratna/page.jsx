import React from 'react';
import ProjectPageTemplate from '../../../components/ProjectPageTemplate';
import { projects } from '../../../data/projects';

const projectData = projects.find(p => p.slug === 'yuvaratna');

export const metadata = {
    title: 'Yuvaratna — NGO Website | Built by Trixon',
    description: 'Designed and built the public website for Yuvaratna, a regional NGO focused on social work and community development.',
    alternates: {
        canonical: '/projects/yuvaratna',
    },
};

export default function YuvaratnaProjectPage() {
    return <ProjectPageTemplate project={projectData} />;
}
