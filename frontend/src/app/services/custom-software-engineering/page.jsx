import React from 'react';
import ServicePageTemplate from '../../../components/ServicePageTemplate';
import { services } from '../../../data/services';

const serviceData = services.find(s => s.slug === 'custom-software-engineering');

export const metadata = {
    title: 'Custom Software Engineering & APIs | Trixon',
    description: 'We construct secure internal tools, automated operational portals, and custom API layers tailored to run your unique startup business logic.',
    alternates: {
        canonical: '/services/custom-software-engineering',
    },
};

export default function CustomSoftwareEngineeringPage() {
    return <ServicePageTemplate service={serviceData} />;
}
