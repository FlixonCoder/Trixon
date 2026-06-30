import React from 'react';
import ServicePageTemplate from '../../../components/ServicePageTemplate';
import { services } from '../../../data/services';

const serviceData = services.find(s => s.slug === 'product-saas-development');

export const metadata = {
    title: 'Product & SaaS Development | Scale Startup MVPs | Trixon',
    description: 'Launch scalable full-stack web products, robust SaaS platforms, and MVPs built with React/Next.js and optimized for smooth team handovers.',
    alternates: {
        canonical: '/services/product-saas-development',
    },
};

export default function ProductSaaSDevelopmentPage() {
    return <ServicePageTemplate service={serviceData} />;
}
