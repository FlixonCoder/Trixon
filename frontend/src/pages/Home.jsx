import React from 'react'
import Hero from '../components/Hero'
import Problem from '../components/Problem'
import Personas from '../components/Personas'
import Timeline from '../components/Timeline'
import WhatWeDo from '../components/WhatWeDo'
import AboutFounder from '../components/AboutFounder'
import Differentiation from '../components/Differentiation'
import Footer from '../components/Footer'

const Home = ({ openContact }) => {
    return (
        <main>
            <Hero openContact={openContact} />
            <Problem />
            <Personas openContact={openContact} />
            <Timeline />
            <WhatWeDo />
            <AboutFounder />
            <Differentiation openContact={openContact} />
            <Footer openContact={openContact} />
        </main>
    )
}

export default Home