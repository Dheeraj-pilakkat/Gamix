import React from 'react'
import blog1 from '../assets/images/blog1.jpg'
import blog2 from '../assets/images/blog2.jpg'
import blog3 from '../assets/images/blog3.jpg'
import blog4 from '../assets/images/blog4.jpg'
import Slider from 'react-slick'

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div onClick={onclick} className="slide right" style={{position:"absolute",bottom:'-120px',left:'562px'}}>
        <i className="fa fa-angle-right arrow-ar" onClick={onClick}></i>
      </div>
    );
  }
  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div className="slide left" style={{position:'absolute',bottom:'-120px',left:'460px'}}>
        <i className="fa fa-angle-left arrow-al" onClick={onClick}></i>
      </div>
    );
  }
  

function Blog() {
    var settings = {
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        dots: false,
        arrows: true,
       nextArrow:<SampleNextArrow/>,
       prevArrow:<SamplePrevArrow/>,
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
    <section id="blog" style={{height:'125vh'}}>
    <div className="container">
        <div className="row">
            <div className="col-lg-12 heading">
                <h3>Blogs</h3>
            </div>
        </div>
        <div className="row blog-pa">
            <div className="container">
                <Slider className="blog-main row d-flex" {...settings}>
                    <div className="sli blog-item">
                        <img src={blog1} alt="blog-img" className="img-fluid"/>
                        <div className="blog-txt">
                            <span>24 min ago</span>
                            <a href="#">eSports Gaming Industry Growth & Importance</a>
                        </div>
                    </div>
                    <div className="sli blog-item">
                        <img src={blog2} alt="blog-img" className="img-fluid"/>
                        <div className="blog-txt">
                            <span>1 day ago</span>
                            <a href="#">eSports Gaming Industry Growth & Importance</a>
                        </div>
                    </div>
                    <div className="sli blog-item">
                        <img src={blog3} alt="blog-img" className="img-fluid"/>
                        <div className="blog-txt">
                            <span>55 min ago</span>
                            <a href="#">eSports Gaming Industry Growth & Importance</a>
                        </div>
                    </div>
                    <div className="sli blog-item">
                        <img src={blog4} alt="blog-img" className="img-fluid"/>
                        <div className="blog-txt">
                            <span>3 week ago</span>
                            <a href="#">eSports Gaming Industry Growth & Importance</a>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
        
    </div>
</section>
  )
}

export default Blog