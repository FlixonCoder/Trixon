import React from 'react';
import ServicePageTemplate from '../../../components/ServicePageTemplate';
import { services } from '../../../data/services';

const serviceData = services.find(s => s.slug === 'data-analytics');

export const metadata = {
    title: 'Data Pipelines & KPI Analytics Dashboards | Trixon',
    description: 'Transform database logs and payment data into actionable growth charts, automated dashboards, and Segment/Mixpanel analytics tracking.',
    alternates: {
        canonical: '/services/data-analytics',
    },
};

export default function DataAnalyticsPage() {
    return <ServicePageTemplate service={serviceData} />;
}
