import React from 'react'
import About from '../components/About'
import Contact from '../components/Contact'
import Counts from '../components/Counts'
import Footer from '../components/Footer'
import Portfolio from '../components/Portfolio'
import Services from '../components/Services'
import Team from '../components/Team'
import Testimonials from '../components/Testimonials'

const Home = () => {
    return (
        <main className='home'>
            <section id="hero">
                <div className="hero-container" data-aos="fade-up">
                    <h1>Welcome to Squad</h1>
                    <h2>We are team of talented designers making websites with Bootstrap</h2>
                    <a href="#about" className="btn-get-started scrollto"><i className="bx bx-chevrons-down"></i></a>
                </div>
            </section>
            <About />
            <Services />
            <Counts />
            <Portfolio />
            <Testimonials />
            <Team />
            <Contact />
            <Footer />
        </main >
    )
}

export default Home