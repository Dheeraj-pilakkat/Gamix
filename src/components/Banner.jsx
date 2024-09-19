import React from "react";
import banner from "../assets/images/banner.png";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div onClick={onclick} className="slide right" style={{position:"absolute",right:"-50px",bottom:'-70px'}}>
      <i className="fa fa-angle-right arrow-ar" onClick={onClick}></i>
    </div>
  );
}
function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div className="slide left" style={{position:"absolute",right:"50px",bottom:"-70px"}}>
      <i className="fa fa-angle-left arrow-al" onClick={onClick}></i>
    </div>
  );
}

function SimpleSlider() {
  var settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    dots: false,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    autoplaySpeed: 3000,
    Infinite: true,
    speed: 400,
    fade: true,
    cssEase: "linear",
    responsive:[
      {
        breakpoint:768,
        settings:{
          arrows:false,
        }
      }
    ]
  };
  return (
    <div id="banner">
      <div className="backtotop">
        <a href="#banner">
          <i className="fa fa-angle-up" aria-hidden="true"></i>
        </a>
      </div>
      <div className="follow-us">
        <span>Follow us</span>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-twitch"></i>
        </a>
        <a href="#">
          <i className="fa fa-twitter"></i>
        </a>
        <a href="#">
          <i className="fa fa-facebook"></i>
        </a>
        <a href="#">
          <i className="fa fa-youtube-play"></i>
        </a>
      </div>
      <div className="banner-arrow"></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-sm-8 col-md-6 landscape-m-auto tab-m-auto banner-img">
            <img src={banner} alt="banner img" className="img-fluid" />
            <a
              href=""
              className="vid-btn venobox"
              data-vbtype="video"
              data-autoplay="true"
            >
              <i className="fa fa-play" aria-hidden="true"></i>
            </a>
          </div>
          <div className="col-lg-5 m-auto banner-txt">
            <Slider className="banner-main" {...settings}>
              <div className="banner-item">
                <h3>Gamming</h3>
                <h3>Community</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Suscipit, quidem? Officiis, tempore perferendis. Hic alias
                  facere necessitatibus error praesentium, soluta, culpa fugiat
                  quas minima rerum possimus temporibus ab a. Optio.
                </p>
                <a href="/login" className="main-btn">
                  Join Community
                </a>
              </div>
              <div className="banner-item">
                <h3>Gamming</h3>
                <h3>Online Shop</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Suscipit, quidem? Officiis, tempore perferendis. Hic alias
                  facere necessitatibus error praesentium, soluta, culpa fugiat
                  quas minima rerum possimus temporibus ab a. Optio.
                </p>
                <a href="#" className="main-btn">
                  Join Community
                </a>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SimpleSlider;
