import React from 'react';
import Slider from 'react-slick'

import chipmunkLogo from '../static/logos/chipmunk-store.png'
import mnmLogo from '../static/logos/mnm-exports.jpg'
import paragLogo from '../static/logos/parag-mahale.png'
import manishConstructionLogo from '../static/logos/manish-construction.jpg'

const clientsList = () => {

    const options = {
        infinite: true,
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        // speed: 2000,
        arrows: false,
    }

    return (
        <React.Fragment>
        {/* <h2 className="heading"> Our Clients </h2> */}
            <div className="container p-tb-30">
                <Slider {...options}>
                    <div>
                        <img src={chipmunkLogo} alt="chipmunk-logo" className="client-logo"/>
                    </div>
                    <div>
                        <img src={mnmLogo} alt="MNM-exports-logo" className="client-logo"/>
                    </div>

                    <div>
                        <img src={paragLogo} alt="parag-mahale-portfolio-logo" className="client-logo"/>
                    </div>

                    <div>
                        <img src={manishConstructionLogo} alt="manish-construction-logo" className="client-logo"/>
                    </div>
                </Slider>
            </div>
        </React.Fragment>
    )
}

export default clientsList
