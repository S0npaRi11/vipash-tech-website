import avatar from '../static/avatar.jpg'

const testimonies = () => {
    return (
        <>
            <h2 className="heading"> Testimonies </h2>
            <div className="container">
                <div className="grid-1 mgrid">
                    <div className="card row-1">
                        <div className="slideshow">

                           <div className="slide fade">
                               <div className="numberText"> 1 / 4 </div>
                               <img src={ avatar } alt="avatar" className="avatar" />
                               <div className="review"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, dolorum. <br /> - <span className="client-name"> John Doe </span> <br /> <span className="client-pos"> CEO ABE Ltd </span> </div>
                           </div>

                           <div className="slide fade">
                                <div className="numberText"> 2 / 4 </div>
                                <img src={ avatar } alt="avatar" className="avatar" />
                                <div className="review"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, dolorum. <br /> - <span className="client-name"> John Doe </span> <br /> <span className="client-pos"> CEO ABE Ltd </span> </div>
                            </div>

                            <div className="slide fade">
                                <div className="numberText"> 3 / 4 </div>
                                <img src={ avatar } alt="avatar" className="avatar" />
                                <div className="review"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, dolorum. <br /> - <span className="client-name"> John Doe </span> <br /> <span className="client-pos"> CEO ABE Ltd </span></div>
                            </div>

                            <div className="slide fade">
                                <div className="numberText"> 4 / 4 </div>
                                <img src={ avatar } alt="avatar" className="avatar" />
                                <div className="review"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, dolorum. <br /> - <span className="client-name"> John Doe </span> <br /> <span className="client-pos"> CEO ABE Ltd </span></div>
                            </div>


                            <a className="prev" onclick="plusSlides(-1)"> <i className="las la-angle-left"></i> </a>
                            <a className="next" onclick="plusSlides(1)"> <i className="las la-angle-right"></i> </a>
                        </div>

                        <br />

                        <div style="text-align:center">
                            <span className="dot" onclick="currentSlide(1)"></span>
                            <span className="dot" onclick="currentSlide(2)"></span>
                            <span className="dot" onclick="currentSlide(3)"></span>
                            <span className="dot" onclick="currentSlide(4)"></span>
                        </div> 
                    </div>
                </div>
            </div>
        </>
    )
}

export default testimonies
