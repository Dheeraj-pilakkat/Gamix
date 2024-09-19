import React from 'react'
import product1 from '../assets/images/product1.png'
import product2 from '../assets/images/product2.png'
import product3 from '../assets/images/product3.png'
import Slider from 'react-slick'

function Product() {
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
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
        ],
      };
  return (
    <section id="product">
    <div className="container">
        <div className="row">
            <div className="col-lg-12 heading">
                <h3>Product</h3>
            </div>
        </div>
        <div className=" product-pa">
            <div className="container">
                <Slider className="product-main row" {...settings}>
                    <div className="sli text-center">
                        <div className="product-item">
                            <h3>$135</h3>
                            <img src={product1} alt="product-img" className="img-fluid"/>
                            <h4>Ober headset</h4>
                            <a href="#" className="product-btn">Add to Cart</a>
                        </div>
                    </div>
                    <div className="sli text-center">
                        <div className="product-item">
                            <h3>$240</h3>
                            <div className="sale">
                                <span>Sale</span>
                            </div>
                            <img src={product2} alt="product-img" className="img-fluid"/>
                            <h4>D-Link Webcam</h4>
                            <a href="#" className="product-btn">Add to Cart</a>
                        </div>
                    </div>
                    <div className="sli text-center">
                        <div className="product-item">
                            <h3>$135</h3>
                            <img src={product3} alt="product-img" className="img-fluid"/>
                            <h4>Ober headset</h4>
                            <a href="#" className="product-btn">Add to Cart</a>
                        </div>
                    </div>
                    <div className="sli text-center">
                        <div className="product-item">
                            <h3>$99</h3>
                            <div className="sale">
                                <span>Sale</span>
                            </div>
                            <img src={product1} alt="product-img" className="img-fluid"/>
                            <h4>Wired Earphone</h4>
                            <a href="#" className="product-btn">Add to Cart</a>
                        </div>
                    </div>
                    <div className="sli text-center">
                        <div className="product-item">
                            <h3>$240</h3>
                            <img src={product2} alt="product-img" className="img-fluid"/>
                            <h4>D-Link Webcam</h4>
                            <a href="#" className="product-btn">Add to Cart</a>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    </div>
</section>
  )
}

export default Product