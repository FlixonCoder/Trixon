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
      "name": "What is a fractional CTO, and do I actually need one?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A fractional CTO gives you C-level technical leadership — architecture decisions, hiring, tech strategy — without a full-time salary or equity. If you're a non-technical founder with a live product, fundraising conversations that keep hitting technical questions, or a prototype that needs to scale, you need this kind of leadership now, not in 100 days."
      }
    },
    {
      "@type": "Question",
      "name": "What is the Build-Operate-Transfer (BOT) model?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "BOT is a three-phase engagement: we Build your technical foundation (Months 1–3), Operate and recruit your permanent team (Months 4–9), then Transfer full ownership — code, credentials, and leadership — to your internal team (Months 10–12). Unlike an agency, we're structured to make ourselves unnecessary."
      }
    },
    {
      "@type": "Question",
      "name": "How is Trixon different from a dev agency or freelance developer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Agencies optimize for retainers, which means your codebase often stays a black box you depend on forever. Trixon is fixed-fee, fixed-scope, and built around a defined exit. You get 100% IP ownership transferred at the end — no lock-in, no ongoing dependency."
      }
    },
    {
      "@type": "Question",
      "name": "How much does a Trixon engagement cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pricing is fixed-fee per engagement, not hourly or retainer-based. The entry point is the Technical Audit and Roadmap, a lower-cost 4-week engagement, before any larger commitment. Book a strategy session for a scoped quote based on your stage."
      }
    },
    {
      "@type": "Question",
      "name": "What is the Technical Audit & Roadmap, and how long does it take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It's a 4-week deep-dive into your existing codebase or product idea, identifying architectural bottlenecks and producing an investor-ready technical roadmap. It's the lowest-risk way to work with us before committing to a full BOT engagement."
      }
    },
    {
      "@type": "Question",
      "name": "I built my MVP with AI tools like Cursor, Replit, or Lovable — can Trixon help me scale it?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, this is one of our most common engagements. We call it the AI Prototype Founder pattern: a working demo that breaks down under real users or enterprise security and scalability questions. We re-architect on an AI-first foundation that meets professional and investor-ready standards, typically within 90 days."
      }
    },
    {
      "@type": "Question",
      "name": "I've been burned by a dev shop before. How do I know Trixon won't do the same thing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "100% IP ownership — code, domains, credentials, accounts — is formally transferred at exit, no exceptions. We also build your internal team during the engagement specifically so you're never dependent on us. Our own success metric is your independence, not your renewal."
      }
    },
    {
      "@type": "Question",
      "name": "We just raised funding — do we need Trixon or a full-time CTO?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Many funded startups need technical leadership while they search for a permanent CTO, since that search alone takes 100+ days. Trixon provides interim scaling and technical debt cleanup so there's a clean, documented foundation ready for whoever you hire."
      }
    },
    {
      "@type": "Question",
      "name": "Does Trixon only work with non-technical founders?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our core focus is non-technical or solo technical founders who need senior leadership they don't have in-house. But we also work with funded teams needing interim leadership, and repeat founders who want to avoid past dev-shop mistakes."
      }
    },
    {
      "@type": "Question",
      "name": "What happens after the engagement ends — are we on our own?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Transfer includes a 60 to 90 day shadowing period for your new internal lead, plus 3 months of post-handover hypercare where we stay on-call to close any knowledge gaps. The goal is a clean, supported exit, not an abrupt one."
      }
    },
    {
      "@type": "Question",
      "name": "Do you hire the engineering team for us, or do we do that?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We run the entire hiring process during the Operate phase, defining role scorecards, conducting all technical interviews, and surfacing only top-tier candidates. You keep every hire; we step back once your team is in place."
      }
    },
    {
      "@type": "Question",
      "name": "Is Trixon a good fit for a very early-stage or pre-seed startup?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, particularly through the Technical Audit, which is designed as a low-commitment way to get expert-level technical judgment before you've raised or hired anyone, so your foundation is right from day one."
      }
    },
    {
      "@type": "Question",
      "name": "Is Trixon a big agency, or is it run by one person?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Trixon is led by founder Mohammed Saqib Junaid Khan, who works alongside a growing team of engineers, designers, and product specialists on every engagement. We're upfront about being an early-stage, founder-led practice rather than a large firm, because founders who've been burned by black-box agencies tend to value that directness. What you get instead of a big-firm name is direct access to the person accountable for your technical foundation, and a fixed, transparent process."
      }
    },
    {
      "@type": "Question",
      "name": "Can Trixon build AI features into my existing product, not just fix my architecture?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Our AI-First Architecture engagement is built specifically for this: integrating agentic AI features into your product while future-proofing the codebase so it doesn't accumulate unmanageable technical debt as you scale."
      }
    },
    {
      "@type": "Question",
      "name": "How do I start working with Trixon?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Book a free 30-minute strategy session. There's no pitch deck required and no upfront commitment, just a direct conversation about where your technical foundation stands and whether an Audit, Hiring Sprint, or full BOT engagement is the right starting point."
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
