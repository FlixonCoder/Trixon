import React from 'react';
import Hero from '../components/Hero';
import Problem from '../components/Problem';
import Personas from '../components/Personas';
import Timeline from '../components/Timeline';
import WhatWeDo from '../components/WhatWeDo';
import BuiltByTrixon from '../components/BuiltByTrixon';
import AboutFounder from '../components/AboutFounder';
import SocialProof from '../components/SocialProof';
import Differentiation from '../components/Differentiation';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Problem />
      <Personas />
      <Timeline />
      <WhatWeDo />
      <BuiltByTrixon />
      <AboutFounder />
      <SocialProof />
      <Differentiation />
      <Footer />
    </main>
  );
}
