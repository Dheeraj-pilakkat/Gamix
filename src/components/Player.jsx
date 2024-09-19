import React from 'react'
import player1 from '../assets/images/player1.jpg'
import player2 from '../assets/images/player2.jpg'
import player3 from '../assets/images/player3.jpg'
import player4 from '../assets/images/player4.jpg'
import Slider from 'react-slick'
import CountUp from 'react-countup'


function Player() {
    var settings = {
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        dots: false,
        arrows: false,
        autoplaySpeed: 2500,
        centerMode:true,
        centerPadding:'0px',
        focusOnSelect:true,
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
    <section id="player">
    <div className="container">
        <div className="row">
            <div className="col-lg-12 heading">
                <h3>Players</h3>
            </div>
        </div>
        <div className=" player-pa">
            <div className="container">
                <Slider className="player-main row" {...settings}>
                    <div className="sli player-middle">
                        <div className="player-item">
                            <div className="player-img">
                                <img src={player4} alt="player-img" className="img-fluid"/>
                                <div className="player-lightbox">
                                    <a href={player4} data-lightbox="roadtrip" data-title="Gallery"><i className="fa fa-plus" aria-hidden="true"></i></a>
                                </div>
                            </div>
                            <div className="player-info">
                                <h3>Shakibul Alam</h3>
                            </div>
                        </div>
                    </div>
                    <div className="sli player-middle">
                        <div className="player-item">
                            <div className="player-img">
                                <img src={player2} alt="player-img" className="img-fluid"/>
                                <div className="player-lightbox">
                                    <a href={player2} data-lightbox="roadtrip" data-title="Gallery"><i className="fa fa-plus" aria-hidden="true"></i></a>
                                </div>
                            </div>
                            <div className="player-info">
                                <h3>Naimur Khan</h3>
                            </div>
                        </div>
                    </div>
                    <div className="sli player-middle">
                        <div className="player-item">
                            <div className="player-img">
                                <img src={player3} alt="player-img" className="img-fluid"/>
                                <div className="player-lightbox">
                                    <a href={player3} data-lightbox="roadtrip" data-title="Gallery"><i className="fa fa-plus" aria-hidden="true"></i></a>
                                </div>
                            </div>
                            <div className="player-info">
                                <h3>Emily Olivia</h3>
                            </div>
                        </div>
                    </div>
                    <div className="sli player-middle">
                        <div className="player-item">
                            <div className="player-img">
                                <img src={player1} alt="player-img" className="img-fluid"/>
                                <div className="player-lightbox">
                                    <a href={player1} data-lightbox="roadtrip" data-title="Gallery"><i className="fa fa-plus" aria-hidden="true"></i></a>
                                </div>
                            </div>
                            <div className="player-info">
                                <h3>Jabbar Shakil</h3>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
        <div className="row player-pa2">
            <div className="col-lg-6 col-sm-12 player-txt">
                <h3>Meet our Weekly top players From Worldwide<b>.</b></h3>
            </div>
            <div className="col-lg-6 col-sm-7 m-sm-auto player-txt">
                <div className="row">
                    <div className="col-lg-6 col-sm-6 text-center">
                        <h4 className="counter" data-counterup-time="2500" data-counterup-delay="30" data-counterup-beginat="50" data-target="150">
                            <CountUp end={150} duration={2} enableScrollSpy={true}/>
                        </h4>
                        <span>M</span>
                        <p>Total Players</p>
                    </div>
                    <div className="col-lg-6 col-sm-6 text-center">
                        <h4 className="counter" data-counterup-time="2500" data-counterup-delay="30" data-counterup-beginat="50" data-target="221"><CountUp end={221} duration={2} enableScrollSpy={true}/></h4>
                        <span>K</span>
                        <p>eSports Teams</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

  )
}

export default Player