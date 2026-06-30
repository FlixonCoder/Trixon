import React from 'react';
import ServicePageTemplate from '../../../components/ServicePageTemplate';
import { services } from '../../../data/services';

const serviceData = services.find(s => s.slug === 'infrastructure-engineering');

export const metadata = {
    title: 'Cloud DevOps Setup & Infrastructure Engineering | Trixon',
    description: 'Optimize cloud costs, set up auto-scaling clusters, design automated CI/CD pipelines, and prepare compliance postures (SOC 2, HIPAA) with Terraform.',
    alternates: {
        canonical: '/services/infrastructure-engineering',
    },
};

export default function InfrastructureEngineeringPage() {
    return <ServicePageTemplate service={serviceData} />;
}
