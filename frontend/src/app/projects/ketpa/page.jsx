import React from 'react';
import ProjectPageTemplate from '../../../components/ProjectPageTemplate';
import { projects } from '../../../data/projects';
import { assets } from '../../../assets/assets';

const projectData = projects.find(p => p.slug === 'ketpa');
const projectWithImages = {
    ...projectData,
    images: [assets.ketpa1, assets.ketpa2, assets.ketpa3]
};

export const metadata = {
    title: 'Ketpa — Veterinary Platform | Built by Trixon',
    description: 'Full-stack MVP with patient, doctor, and admin dashboards. Calendar-integrated appointment booking, email verification, and emergency booking pipeline.',
    alternates: {
        canonical: '/projects/ketpa',
    },
};

export default function KetpaProjectPage() {
    return <ProjectPageTemplate project={projectWithImages} />;
}

