import React from 'react'
import about from "../assets/images/about.jpg";
import CountUp from 'react-countup';

function About() {
  return (
    <section id="about">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 heading">
                    <h3>About</h3>
                </div>
            </div>
            <div className="row about-pt">
                <div className="col-lg-5 col-sm-9 m-sm-auto about-img">
                    <div className="about-txt-overlay">
                        <h3 className="counter" data-counterup-time="2000" data-counterup-delay="30" data-counterup-beginat="1">
                            <CountUp
                            end={12}
                            duration={2}
                            delay={2}
                            enableScrollSpy={true}
                            />
                            </h3>
                        <span>Years of Leading</span>
                    </div>
                    <img src={about} alt="about-img" className="img-fluid"/>
                </div>
                <div className="col-lg-7">
                    <div className="about-txt">
                        <span>GAMIX</span>
                        <h3>A PLACE FOR PROFESSIONAL GAMERS FOR eSPORTS TOURNAMENT WORLDWIDE<b>.</b></h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi voluptatem deserunt ipsam culpa, obcaecati unde quo dignissimos cum ut rem? Fuga commodi, cumque voluptate. Cupiditate.</p>
                        <p className="mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet fugit incidunt rem laboriosam, voluptas, eaque.</p>
                        <a href="#" className="main-btn">Explore More</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About