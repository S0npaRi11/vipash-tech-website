import React from 'react';

import avatar from '../static/avatar.jpg'
import Slider from 'react-slick'

const testimonies = () => {

    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        autoPlay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    }

    return (
        <React.Fragment>
            <h2 className="heading"> Testimonies </h2>
            <div className="container">
                <div className="card">
                    <Slider {...settings}>
                        <div className="slide">
                            <div className="numberText"> 1 / 4 </div>
                            <img src={ avatar } alt="avatar" className="avatar" />
                            <div className="review"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, dolorum. <br /> - <span className="client-name"> John Doe </span> <br /> <span className="client-pos"> CEO ABE Ltd </span> </div>
                        </div>

                            <div className="slide">
                            <div className="numberText"> 2 / 4 </div>
                            <img src={ avatar } alt="avatar" className="avatar" />
                            <div className="review"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, dolorum. <br /> - <span className="client-name"> John Doe </span> <br /> <span className="client-pos"> CEO ABE Ltd </span> </div>
                        </div>

                        <div className="slide">
                            <div className="numberText"> 3 / 4 </div>
                            <img src={ avatar } alt="avatar" className="avatar" />
                            <div className="review"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, dolorum. <br /> - <span className="client-name"> John Doe </span> <br /> <span className="client-pos"> CEO ABE Ltd </span> </div>
                        </div>

                        <div className="slide">
                            <div className="numberText"> 4 / 4 </div>
                            <img src={ avatar } alt="avatar" className="avatar" />
                            <div className="review"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, dolorum. <br /> - <span className="client-name"> John Doe </span> <br /> <span className="client-pos"> CEO ABE Ltd </span> </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </React.Fragment>
    )
}

export default testimonies
