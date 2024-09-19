import React from 'react'

function Footer() {
  return (
    <div>
        <section id="footer">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 footer-logo">
                    <a href="index.html">GAMIX<b>.</b></a>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam vero officiis rem consectetur sunt cupiditate eius obcaecati, culpa, aspernatur aperiam id.</p>
                    <div className="footer-social">
                        <a href="#"><i className="fa fa-twitch" aria-hidden="true"></i></a>
                        <a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                        <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                        <a href="#"><i className="fa fa-youtube-play" aria-hidden="true"></i></a>
                    </div>
                </div>
                <div className="col-lg-2 col-sm-4 footer-menu">
                    <h3>Site Menu</h3>
                    <a href="#">Home</a>
                    <a href="#">Tournaments</a>
                    <a href="#">About Us</a>
                    <a href="#">Reviews</a>
                </div>
                <div className="col-lg-2 col-sm-4 footer-menu">
                    <h3>Useful Links</h3>
                    <a href="#">Create Account</a>
                    <a href="#">Subscription</a>
                    <a href="#">Affiliate</a>
                    <a href="#">Site Condition</a>
                </div>
                <div className="col-lg-2 col-sm-4 footer-menu">
                    <h3>Information</h3>
                    <a href="#">FAQ</a>
                    <a href="#">Site Maps</a>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Contact Us</a>
                </div>
            </div>
        </div>
    </section>
    <section id="copy_right">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="row">
                        <div className="col-lg-6 col-sm-7 copy-right-txt">
                            <p><i className="fa fa-copyright" aria-hidden="true"></i> 2024 - cloned by <a href="#">Dheeraj-p</a></p>
                        </div>
                        <div className="col-lg-6 col-sm-5 text-right copy-right-txt">
                            <p>All Rights Reserved by creator.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Footer