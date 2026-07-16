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
        "text": "A fractional CTO gives you senior technical leadership — architecture decisions, hiring judgment, fundraising-readiness — without the cost or commitment of a full-time hire. You likely need one if you're non-technical and about to make expensive, hard-to-reverse technical decisions (choosing a stack, scoping an MVP, prepping for investor technical diligence)."
      }
    },
    {
      "@type": "Question",
      "name": "What is the Build-Operate-Transfer (BOT) model?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "I take ownership of building or fixing your product over a fixed tenure, then transfer full IP and documentation to you at the end — so you're never dependent on me continuing."
      }
    },
    {
      "@type": "Question",
      "name": "How is Trixon different from a dev agency or freelance developer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You work directly with the person doing the work — no account manager, no junior developer executing while someone senior takes the meetings. That also means I'm selective about how many engagements I take on at once, so the work stays hands-on."
      }
    },
    {
      "@type": "Question",
      "name": "How much does a Trixon engagement cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Engagements are typically a monthly retainer, with equity discussed only for longer-term TTCF partnerships — scoped after an initial call and, often, a Technical Audit. I don't have a fixed price sheet because scope varies a lot by codebase and stage."
      }
    },
    {
      "@type": "Question",
      "name": "What is the Technical Audit, and how long does it take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A focused review of your codebase — architecture, scalability, and technical risk — with a prioritized set of recommendations. Usually 1–3 weeks depending on codebase size. It's also the lowest-commitment way to work together before anything bigger."
      }
    },
    {
      "@type": "Question",
      "name": "I built my MVP with AI tools like Cursor, Replit, or Lovable — can Trixon help me scale it?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. AI-assisted prototypes are usually fast to build and fragile to scale — I specialize in taking that first pass and making it production-ready without a full rewrite where avoidable."
      }
    },
    {
      "@type": "Question",
      "name": "I've been burned by a dev shop before. How do I know Trixon won't do the same thing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Documentation happens as I build, not at the end, and full IP transfers to you at exit — every account, credential, and decision record. Because it's just me, there's no incentive structure pushing toward a longer engagement than you actually need."
      }
    },
    {
      "@type": "Question",
      "name": "We just raised funding — do we need Trixon or a full-time CTO?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Often neither, yet. I can stabilize your technical foundation and help define what a full-time CTO hire actually needs to walk into, so you're not making that hire under pressure."
      }
    },
    {
      "@type": "Question",
      "name": "Does Trixon only work with non-technical founders?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No — semi-technical founders who want a second set of senior hands, or who don't have bandwidth to own the technical side alone, are a great fit too."
      }
    },
    {
      "@type": "Question",
      "name": "What happens after the engagement ends — are we on our own?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You get full IP and documentation transfer, and a defined post-handover window where I'm available for questions. After that, the goal is that you don't need me — that's the point of BOT."
      }
    },
    {
      "@type": "Question",
      "name": "Do you hire the engineering team for us, or do we do that?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "I'll help you structure the hiring process — role definitions, interview structure, technical evaluation criteria — but the hiring and final decisions are yours. I don't run a recruiting pipeline."
      }
    },
    {
      "@type": "Question",
      "name": "Is Trixon a good fit for a very early-stage or pre-seed startup?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, especially through a Technical Audit or a scoped MVP build — that's often the right entry point before a larger TTCF or BOT engagement makes sense."
      }
    },
    {
      "@type": "Question",
      "name": "Is Trixon a big agency, or is it run by one person?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It's run by one person — me. That's intentional: you get direct access to the person actually building your product, not a layer of account management."
      }
    },
    {
      "@type": "Question",
      "name": "Can Trixon build AI features into my existing product, not just fix my architecture?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — LLM integration, RAG, agentic workflows, and custom AI features are a core part of what I build, not an add-on."
      }
    },
    {
      "@type": "Question",
      "name": "How do I start working with Trixon?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Book a free strategy session, or start with a Technical Audit if you want a lower-commitment first step."
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
