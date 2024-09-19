import Slider from "react-slick";
import game1 from "../assets/images/game1.jpg";
import game2 from "../assets/images/game2.jpg";
import game3 from "../assets/images/game3.jpg";
import game4 from "../assets/images/game4.jpg";

function Games() {
  var settings = {
    slidesToShow: 3,
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
    <section id="games">
      <div className="container game-line">
        <div className="gl-one gl"></div>
        <div className="gl-two gl"></div>
        <div className="row game-pa">
          <div className="col-lg-4 col-md-11 tab-m-auto">
            <div className="game-box">
              <span>Today's</span>
              <h3>Games Collection</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod,
                dolores.
              </p>
              <a href="#" className="main-btn">
                Browse More
              </a>
            </div>
          </div>
          <div className="col-lg-8">
            <Slider className="game-main" {...settings}>
              <div className="sli game-item text-center">
                <div className="game-img">
                  <img src={game1} alt="game-img" className="img-fluid" />
                  <div className="lightbox-overlay">
                    <a
                      href={game1}
                      data-lightbox="roadtrip"
                      data-title="Gallery"
                    >
                      <i className="fa fa-plus" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
                <a href="#">Battles Zones</a>
                <div className="star">
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                </div>
              </div>
              <div className="sli game-item text-center">
                <div className="game-img">
                  <img src={game2} alt="game-img" className="img-fluid" />
                  <div className="lightbox-overlay">
                    <a
                      href={game2}
                      data-lightbox="roadtrip"
                      data-title="Gallery"
                    >
                      <i className="fa fa-plus" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
                <a href="#">Survival Land</a>
                <div className="star">
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                </div>
              </div>
              <div className="sli game-item text-center">
                <div className="game-img">
                  <img src={game3} alt="game-img" className="img-fluid" />
                  <div className="lightbox-overlay">
                    <a
                      href={game3}
                      data-lightbox="roadtrip"
                      data-title="Gallery"
                    >
                      <i className="fa fa-plus" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
                <a href="#">Zombie World</a>
                <div className="star">
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                </div>
              </div>
              <div className="sli game-item text-center">
                <div className="game-img">
                  <img src={game4} alt="game-img" className="img-fluid" />
                  <div className="lightbox-overlay">
                    <a
                      href={game4}
                      data-lightbox="roadtrip"
                      data-title="Gallery"
                    >
                      <i className="fa fa-plus" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
                <a href="#">Double Dragon</a>
                <div className="star">
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Games;
