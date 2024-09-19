import React from 'react'
import g1 from "../assets/images/g1.png";
import g2 from "../assets/images/g2.png";
import team1 from "../assets/images/team1.png";
import team2 from "../assets/images/team2.png";
import team3 from "../assets/images/team3.png";
import team4 from "../assets/images/team4.png";
import Slider from "react-slick";

function Matches() {
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
    <section id="match">
    <div className="container">
        <div className="row">
            <div className="col-lg-12 heading">
                <h3>Matches</h3>
            </div>
        </div>
        <div className="container">

                <Slider className="match-main row" {...settings}>
                    <div  className='sli'>
                        <div className="live-match-item">
                            <div className="match-logo">
                                <img src={g1} alt="game-icon"/>
                            </div>
                            <div className="row match-text">
                                <div className="col-8 col-lg-8">
                                    <h3>A1 eSports Team</h3>
                                </div>
                                <div className="col-4 col-lg-4 text-right">
                                    <h3>30</h3>
                                </div>
                            </div>
                            <div className="row match-text">
                                <div className="col-8 col-lg-8 lose">
                                    <h3>Future Station</h3>
                                </div>
                                <div className="col-4 col-lg-4 text-right lose">
                                    <h3>25</h3>
                                </div>
                            </div>
                            <div className="row match-action">
                                <div className="col-lg-12">
                                    <a href="#" className="match-btn">Live <i className="fa fa-circle" aria-hidden="true"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div  className='sli'>
                        <div className="live-match-item">
                            <div className="match-logo">
                                <img src={g2} alt="game-icon"/>
                            </div>
                            <div className="row match-text">
                                <div className="col-8 col-lg-8">
                                    <h3>Four Angry Man</h3>
                                </div>
                                <div className="col-4 col-lg-4 text-right">
                                    <h3>44</h3>
                                </div>
                            </div>
                            <div className="row match-text">
                                <div className="col-8 col-lg-8 lose">
                                    <h3>Ninja Gaming</h3>
                                </div>
                                <div className="col-4 col-lg-4 text-right lose">
                                    <h3>35</h3>
                                </div>
                            </div>
                            <div className="row match-action">
                                <div className="col-lg-12">
                                    <a href="#" className="match-btn">Live <i className="fa fa-circle" aria-hidden="true"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div  className='sli'>
                        <div className="live-match-item">
                            <div className="match-logo">
                                <img src={g1} alt="game-icon"/>
                            </div>
                            <div className="row match-text">
                                <div className="col-8 col-lg-8">
                                    <h3>Alpa Xtreme</h3>
                                </div>
                                <div className="col-4 col-lg-4 text-right">
                                    <h3>25</h3>
                                </div>
                            </div>
                            <div className="row match-text">
                                <div className="col-8 col-lg-8 lose">
                                    <h3>Nova Eleven Max</h3>
                                </div>
                                <div className="col-4 col-lg-4 text-right lose">
                                    <h3>15</h3>
                                </div>
                            </div>
                            <div className="row match-action">
                                <div className="col-lg-12">
                                    <a href="#" className="match-btn">Live <i className="fa fa-circle" aria-hidden="true"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div  className='sli'>
                        <div className="live-match-item">
                            <div className="match-logo">
                                <img src={g2} alt="game-icon"/>
                            </div>
                            <div className="row match-text">
                                <div className="col-8 col-lg-8">
                                    <h3>Universal Gaming</h3>
                                </div>
                                <div className="col-4 col-lg-4 text-right">
                                    <h3>12</h3>
                                </div>
                            </div>
                            <div className="row match-text">
                                <div className="col-8 col-lg-8 lose">
                                    <h3>Future Station</h3>
                                </div>
                                <div className="col-4 col-lg-4 text-right lose">
                                    <h3>0</h3>
                                </div>
                            </div>
                            <div className="row match-action">
                                <div className="col-lg-12">
                                    <a href="#" className="match-btn">Live <i className="fa fa-circle" aria-hidden="true"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
 
        </div>
        <div className="row">
            <div className="col-lg-12 text-center pre-match">
                <h3>Previous Matches</h3>
            </div>
        </div>
        <div className="row match-pa2">
            <div className="col-lg-6">
                <div className="match-item">
                    <div className="row">
                        <div className="col-lg-4 col-sm-4 winner text-center">
                            <img src={team1} alt="team-img"/>
                        </div>
                        <div className="col-lg-4 col-sm-4 text-center vs-txt">
                            <h3>17 : 08</h3>
                        </div>
                        <div className="col-lg-4 col-sm-4 text-center">
                            <img src={team4} alt="team-img"/>
                        </div>
                    </div>
                </div>
                <div className="match-item">
                    <div className="row">
                        <div className="col-lg-4 col-sm-4 winner text-center">
                            <img src={team4} alt="team-img"/>
                        </div>
                        <div className="col-lg-4 col-sm-4 text-center vs-txt">
                            <h3>10 : 02</h3>
                        </div>
                        <div className="col-lg-4 col-sm-4 text-center">
                            <img src={team1} alt="team-img"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="match-item">
                    <div className="row">
                        <div className="col-lg-4 col-sm-4 winner text-center">
                            <img src={team2} alt="team-img"/>
                        </div>
                        <div className="col-lg-4 col-sm-4 text-center vs-txt">
                            <h3>25 : 24</h3>
                        </div>
                        <div className="col-lg-4 col-sm-4 text-center">
                            <img src={team4} alt="team-img"/>
                        </div>
                    </div>
                </div>
                <div className="match-item landscape-hide tablet-hide">
                    <div className="row">
                        <div className="col-lg-4 col-sm-4 text-center">
                            <img src={team4} alt="team-img"/>
                        </div>
                        <div className="col-lg-4 col-sm-4 text-center vs-txt">
                            <h3>00 : 00</h3>
                        </div>
                        <div className="col-lg-4 col-sm-4 text-center">
                            <img src={team3} alt="team-img"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default Matches