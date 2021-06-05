import React from 'react';
import Slider from 'react-slick'

const clientsList = () => {

    const options = {
        infinite: true,
        dots: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        // speed: 2000,
        arrows: false,
    }

    return (
        <React.Fragment>
        <h2 className="heading"> Our Clients </h2>
            <div className="container">
                <Slider {...options}>
                    <div>
                        {/* <i className="lab la-facebook-f"></i> */}
                        A
                    </div>
                    <div>
                        {/* <i className="lab la-facebook-f"></i> */}
                        B
                    </div>
                    <div>
                        {/* <i className="lab la-facebook-f"></i> */}
                        c
                    </div>
                    <div>
                        {/* <i className="lab la-facebook-f"></i> */}
                        d

                    </div>
                    <div>
                        {/* <i className="lab la-facebook-f"></i> */}
                        e
                    </div>
                    <div>
                        {/* <i className="lab la-facebook-f"></i> */}
                        f
                    </div>
                    <div>
                        {/* <i className="lab la-facebook-f"></i> */}
                        g
                    </div>
                    <div>
                        {/* <i className="lab la-facebook-f"></i> */}
                        h
                    </div>
                    <div>
                        {/* <i className="lab la-facebook-f"></i> */}
                        i
                    </div>
                    <div>
                        {/* <i className="lab la-facebook-f"></i> */}
                        j
                    </div>
                </Slider>
            </div>
        </React.Fragment>
    )
}

export default clientsList
