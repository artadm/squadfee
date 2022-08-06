import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    const [headerActive, setHeader] = useState(Boolean)

    const headerScrolled = () => {
        if (window.scrollY > 100) {
            setHeader(true)
        } else {
            setHeader(false)
        }
    }


    useEffect(() => {
        window.addEventListener('scroll', headerScrolled)
        return () => {
            window.removeEventListener('scroll', headerScrolled);
        };
    }, [])


    return (
        <header id='header' className={headerActive ? "fixed-top header-transparent header-scrolled" : 'fixed-top header-transparent '}>
            <div className="container d-flex align-items-center justify-content-between">

                <div className="logo">
                    <Link to='/' className="text-light logo-img"><span>Squadfree</span></Link>
                </div>

                <nav id="navbar" className="navbar">
                    <ul>
                        <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
                        <li><a className="nav-link scrollto" href="#about">About Us</a></li>
                        <li><a className="nav-link scrollto" href="#services">Services</a></li>
                        <li><a className="nav-link scrollto" href="#portfolio">Portfolio</a></li>
                        <li><a className="nav-link scrollto" href="#team">Team</a></li>
                        <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
                    </ul>
                    <i className="bi bi-list mobile-nav-toggle"></i>
                </nav>

            </div>
        </header>
    )
}

export default Header