import React from 'react'
import Hero from '../components/Hero'
import Problem from '../components/Problem'
import WhatWeDo from '../components/WhatWeDo'
import Differentiation from '../components/Differentiation'
import Timeline from '../components/Timeline'
import About from '../components/About'
import Footer from '../components/Footer'

const Home = ({ openContact }) => {
    return (
        <main>
            <Hero openContact={openContact} />
            <Problem />
            <WhatWeDo />
            <Differentiation />
            <Timeline />
            <About />
            <Footer openContact={openContact} />
        </main>
    )
}

export default Home