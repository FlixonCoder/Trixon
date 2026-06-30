import React from 'react';
import ServicePageTemplate from '../../../components/ServicePageTemplate';
import { services } from '../../../data/services';

const serviceData = services.find(s => s.slug === 'ai-solutions');

export const metadata = {
    title: 'Enterprise AI & Automation Solutions | Trixon',
    description: 'Build secure, scalable AI solutions, multi-agent frameworks, vision-based parsing pipelines, and RAG architectures tailored for startup workflows.',
    alternates: {
        canonical: '/services/ai-solutions',
    },
};

export default function AISolutionsPage() {
    return <ServicePageTemplate service={serviceData} />;
}
