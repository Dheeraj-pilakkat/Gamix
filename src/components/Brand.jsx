import React from 'react'
import brand2 from '../assets/images/brand2.png'
import brand3 from '../assets/images/brand3.png'
import brand4 from '../assets/images/brand4.png'
import Slider from 'react-slick'
function Brand() {
    var settings = {
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        dots: false,
        arrows: false,
        autoplaySpeed: 2500,
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
    },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
    },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
    },

  ]
      };
  return (
    <section id="brand">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <Slider className="brand-main" {...settings}>
                    <div className="col-lg-3 text-center">
                        <img src={brand2} alt="brand-img"/>
                    </div>
                    <div className="col-lg-3 text-center">
                        <img src={brand4} alt="brand-img"/>
                    </div>
                    <div className="col-lg-3 text-center">
                        <img src={brand3} alt="brand-img"/>
                    </div>
                    <div className="col-lg-3 text-center">
                        <img src={brand2} alt="brand-img"/>
                    </div>
                    <div className="col-lg-3 text-center">
                        <img src={brand4} alt="brand-img"/>
                    </div>
                    <div className="col-lg-3 text-center">
                        <img src={brand3} alt="brand-img"/>
                    </div>
                    <div className="col-lg-3 text-center">
                        <img src={brand2} alt="brand-img"/>
                    </div>
                    <div className="col-lg-3 text-center">
                        <img src={brand4} alt="brand-img"/>
                    </div>
                    <div className="col-lg-3 text-center">
                        <img src={brand3} alt="brand-img"/>
                    </div>
                    <div className="col-lg-3 text-center">
                        <img src={brand2} alt="brand-img"/>
                    </div>
                    <div className="col-lg-3 text-center">
                        <img src={brand4} alt="brand-img"/>
                    </div>
                    <div className="col-lg-3 text-center">
                        <img src={brand3} alt="brand-img"/>
                    </div>
                </Slider>
            </div>
        </div>
    </div>
</section>
  )
}

export default Brand