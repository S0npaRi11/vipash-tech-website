import React from 'react';
import Fade from 'react-reveal/Fade'

// import Background from '../static/hero/vipash-tech-hero-background-image.jpg'

const hero = ({ id, title }) => {
    return (
        <section id={id} className="grid-12 mgrid">
            {/* <img src={Background} alt="" className="hero-image"/> */}
            <div className="container">
                <div className="hero-text">
                    <div className="container">
                        {/* <h1> We provide online solutions <br /> that fits your needs </h1> */}
                        <Fade left duration={800}>
                            <h1> { title } </h1>
                        </Fade>
                        <a href="#contact-form" className="hero-action"> Request a Quote </a>
                    </div>
                </div>
            </div>
            <div className="hero-image hideWhenMobile"></div>
        </section>
    )
}

export default hero
