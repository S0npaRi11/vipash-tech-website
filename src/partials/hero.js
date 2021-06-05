import React from 'react';

const hero = () => {
    return (
        <section id="hero" className="grid-12 mgrid">
            <div className="container">
                <div className="hero-text">
                    <div className="container">
                        <h1 data-aos="fade-right" data-aos-duration="1500"> Grow your business <br /> by going online </h1>
                        <button className="hero-action"> Request a Quote </button>
                    </div>
                </div>
            </div>
            <div className="hero-image hideWhenMobile"></div>
        </section>
    )
}

export default hero
