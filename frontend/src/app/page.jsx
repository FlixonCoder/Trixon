import React from 'react';
import Hero from '../components/Hero';
import Problem from '../components/Problem';
import Personas from '../components/Personas';
import Timeline from '../components/Timeline';
import WhatWeDo from '../components/WhatWeDo';
import BuiltByTrixon from '../components/BuiltByTrixon';
import AboutFounder from '../components/AboutFounder';
import SocialProof from '../components/SocialProof';
import FAQSection from '../components/FAQSection';
import Differentiation from '../components/Differentiation';
import Footer from '../components/Footer';

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What exactly does an AI Automation Agency build?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We build the systems that eliminate manual work in your business — workflow automations that connect your tools, voice bots that handle inbound calls and lead qualification, calling agents that follow up with leads automatically, AI-powered dashboards that update in real time, and data pipelines that keep your records clean without human input."
      }
    },
    {
      "@type": "Question",
      "name": "What's an Automation Audit and why should I start there?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Automation Audit is a one-week engagement where we map your current workflows, identify where you're losing the most time to manual work, and produce a prioritised Automation Roadmap. It's the lowest-risk way to start — you get a clear, actionable plan regardless of whether you hire us to build it."
      }
    },
    {
      "@type": "Question",
      "name": "How is Trixon different from a no-code automation tool like Zapier or Make?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No-code tools are great for simple, two-step automations. Trixon builds what no-code can't handle — multi-step custom workflows, AI-powered decision logic, voice bots with real conversation handling, calling agents that adapt to responses, and dashboards connected to your specific data sources. We build custom, which means it fits your business exactly."
      }
    },
    {
      "@type": "Question",
      "name": "How long does a typical build take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Automation Audit takes one week. An AI Integration Sprint (a single, scoped automation or AI feature) typically takes two to four weeks. A Full Automation Build — a complete automation layer across your ops — runs four to eight weeks depending on complexity. All timelines and scope are agreed upfront."
      }
    },
    {
      "@type": "Question",
      "name": "Do we own the automations you build?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Every system we build is fully yours at handover — code, credentials, documentation, and access. We don't create dependency. If you ever want to modify or extend what we've built, you can do it yourself, hire someone else, or come back to us."
      }
    },
    {
      "@type": "Question",
      "name": "What tools and platforms do you build on?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We build on the tools that give you the most flexibility and ownership — Python and Node.js for custom builds; n8n and Make for workflow orchestration; Retell AI, Vapi, and Twilio for voice and calling agents; OpenAI, Anthropic, and Gemini APIs for LLM integration; and PostgreSQL, MongoDB, and Airtable for data. We use whatever fits your stack, not a fixed template."
      }
    },
    {
      "@type": "Question",
      "name": "Can you integrate with tools we already use?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We build integrations with HubSpot, Salesforce, Notion, Airtable, Google Sheets, Slack, WhatsApp, Telegram, and most tools with an API. If you're already using a tool, we connect to it — we don't ask you to switch."
      }
    },
    {
      "@type": "Question",
      "name": "Do you do ongoing work or just one-off builds?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Both. Most clients start with a fixed-scope build (Automation Audit → Sprint or Full Build). After handover, many choose a monthly retainer to keep expanding the automation layer as the business grows. There's no obligation — the retainer is optional."
      }
    },
    {
      "@type": "Question",
      "name": "How do I start?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Book a free 30-minute Automation Audit call. We'll ask about your current workflows, identify the biggest opportunity for automation, and tell you exactly what we'd build and how long it would take. No pitch deck required — just a direct conversation."
      }
    }
  ]
};

export default function HomePage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Hero />
      <Problem />
      <Personas />
      <Timeline />
      <WhatWeDo />
      <BuiltByTrixon />
      <AboutFounder />
      <SocialProof />
      <FAQSection />
      <Differentiation />
      <Footer />
    </main>
  );
}
