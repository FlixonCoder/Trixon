import React from 'react'
import Hero from '../components/Hero'
import Problem from '../components/Problem'
import Personas from '../components/Personas'
import Timeline from '../components/Timeline'
import WhatWeDo from '../components/WhatWeDo'
import Differentiation from '../components/Differentiation'
import About from '../components/About'
import Footer from '../components/Footer'

const Home = ({ openContact }) => {
    return (
        <main>
            <Hero openContact={openContact} />
            <Problem />
            <Personas />
            <Timeline />
            <WhatWeDo />
            <Differentiation />
            <About />
            <Footer openContact={openContact} />
        </main>
    )
}

export default Home