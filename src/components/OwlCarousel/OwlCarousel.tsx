import React from 'react'
import './owlcarousel.scss'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import image01 from '../../assets/images/testimonials/testimonial-image01.jpg'
import image02 from '../../assets/images/testimonials/testimonial-image02.jpg'
import image03 from '../../assets/images/testimonials/testimonial-image03.jpg'
import image04 from '../../assets/images/testimonials/testimonial-image04.jpg'
function OwlCarousel() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
  };
  return (
    <div className='carousel-container'>
        <h3 className='mb-5 text-center'>What People say</h3>
        <Slider className='items-container' {...settings}>
            <div className="item">
                <div className="testimonials-thumb d-flex">
                    <div className="testimonials-image">
                        <img src={image01} className="img-fluid" alt="testimonials image"/>
                    </div>

                    <div className="testimonials-info">
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</p>

                        <h6 className="mb-0">Ben</h6>
                        <span>Art Director</span>
                    </div>
                </div>
            </div>


            
            <div className="item">
                <div className="testimonials-thumb d-flex">
                    <div className="testimonials-image">
                        <img src={image02} className="img-fluid" alt="testimonials image"/>
                    </div>

                    <div className="testimonials-info">
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</p>

                        <h6 className="mb-0">Marie</h6>
                        <span>Marketing Consultant</span>
                    </div>
                </div>
            </div>


            <div className="item">
                <div className="testimonials-thumb d-flex">
                    <div className="testimonials-image">
                        <img src={image03} className="img-fluid" alt="testimonials image"/>
                    </div>

                    <div className="testimonials-info">
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</p>

                        <h6 className="mb-0">Jen</h6>
                        <span>Product Manager</span>
                    </div>
                </div>
            </div>

            <div className="item">
                <div className="testimonials-thumb d-flex">
                    <div className="testimonials-image">
                        <img src={image04} className="img-fluid" alt="testimonials image"/>
                    </div>

                    <div className="testimonials-info">
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</p>

                        <h6 className="mb-0">Wilson</h6>
                        <span>Web Developer</span>
                    </div>
                </div>
            </div>
            
        </Slider>
    </div>
  )
}

export default OwlCarousel

