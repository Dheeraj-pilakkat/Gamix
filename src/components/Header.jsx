import React from 'react';
import product1 from '../assets/images/product1.png'
import product3 from '../assets/images/product3.png'

function Header() {
    const [loading,setLoading]=React.useState(false)
React.useEffect(()=>{
  setLoading(true);
  setTimeout(()=>{
    setLoading(false)
  },5000)
},[])

    $('.menu-icon').on('click', function () {
        $('.custom-menubar').slideDown(660);
    });
    $('.hide-menu-btn').on('click', function () {
        $('.custom-menubar').slideUp(600);
    });
    $('.abc').on('click', function (event) {
        event.preventDefault();
        $('.search').addClass('open');
        $('.search > form > input[type="search"]').focus();
    });
    $('.menu-link, .abc, .cart').on('click', function () {
        $('.custom-menubar').slideUp(600);
    });
    $('.search, .search button.close').on('click keyup', function (event) {
        if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
            $(this).removeClass('open');
        }
    });
    $('.fix-close').on('click', function () {
        $('.top-search').removeClass('open');
    });
    var html_body = $('html, body');
    $('.navbar a , .backtotop a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name="' + this.hash.slice(1) + '"]');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 65
                }, 1500);
                return false;
            }
        }
    });
    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();
        var stikey = $('.sticky-top');

        if (scrolling >= 100) {

            $(stikey).addClass("nav-bg");

        } else {

            $(stikey).removeClass("nav-bg");
        }
        if (scrolling > 180) {
            $('.backtotop').fadeIn(500);
        } else {
            $('.backtotop').fadeOut(500);
        }
    });
    $('body').scrollspy({
        target: ".navbar",
        offset: 70,
    });
  return (
      
      <div>
      {loading ?(
          <div className="loader_screen preloader" id="preloader">
          <div className="loader loader-box">
              <svg viewBox="0 0 80 80">
                  <rect x="8" y="8" width="64" height="64"></rect>
              </svg>
          </div>
      </div>
       ):(
        <div>

                 <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-hidden="true">
         <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Cart <b>.</b></h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <div className="row cart-item">
                        <div className="col-sm-4 col-lg-4 cart-img">
                        <img src={product1} alt="product" className="img-fluid"/>
                        <a href="#"><i className="fa fa-trash" aria-hidden="true"></i></a>
                        </div>
                        <div className="col-sm-8 col-lg-8">
                            <h3>Ober Headset</h3>
                            <span>1 x $135</span>
                        </div>
                    </div>
                    <div className="row cart-item">
                        <div className="col-sm-4 col-lg-4 cart-img">
                            <img src={product3} alt="product" className="img-fluid"/>
                            <a href="#"><i className="fa fa-trash" aria-hidden="true"></i></a>
                        </div>
                        <div className="col-sm-8 col-lg-8">
                            <h3>Wired Earphone</h3>
                            <span>2 x $99</span>
                        </div>
                    </div>
                </div>
                <div className="modal-footer">
                    <a href="/cart" className="main-btn model-btn">Checkout $320</a>
                </div>
            </div>
        </div>
    </div>
    
    <div className="modal fade" id="contact-model-large" tabIndex="-1" role="dialog" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div className="modal-content" >
                <form>
                    <div className="modal-header">
                        <h5 className="modal-title">Contact <b>.</b></h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                    </div>
                    <div className="modal-body">
                        <div className="row contact-box">
                        <div className="col-lg-6">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Your Full Name"/>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <input type="email" className="form-control" placeholder="Your Email Address"/>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="7" placeholder="Your Message"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="submit" className="main-btn model-btn">Send Message</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    
    <nav className="navbar navbar-expand-lg navbar-light sticky-top" id="navber">
        <div className="container">
            <a className="navbar-brand " href="/" style={{color:"#fff"}}>GAMIX<span>.</span></a>
            <div className="menu-main" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto menu-item">
                    <li className="nav-item">
                        <a className="nav-link nl-m-top abc mobile-content-hide" href='#' ><i className="fa fa-search" aria-hidden="true"></i></a>
                        <div className="search top-search">
                            <button type="button" className="close fix-close">×</button>
                            <form>
                                <input type="search" defaultValue="" placeholder="Search Here" />
                                <button type="submit" className="btn btn-primary">Search</button>
                            </form>
                        </div>
                        </li>
                    <li className="nav-item">
                        <a className="nav-link cart nl-m-top mobile-content-hide" data-toggle="modal" data-target="#exampleModalCenter" href='#'><i className="fa fa-shopping-bag" aria-hidden="true"></i><span>2</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link nl-m-top account-icon" href='/login'><i className="fa fa-user" aria-hidden="true"></i></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link menu-icon" href='#'><i className="fa fa-bars" aria-hidden="true"></i></a>
                    </li>
                </ul>
            </div>
        </div>
        <div className="custom-menubar">
            <ul className="nav-link-block">
                <li>
                    <a href="#banner" className="menu-link">Home</a>
                </li>
                <li>
                    <a href="#about" className="menu-link">About Us</a>
                </li>
                <li>
                    <a href="#match" className="menu-link">Matches</a>
                </li>
                <li>
                    <a className="menu-link" data-toggle="modal" data-target="#contact-model-large">Contact</a>
                </li>
                <li>
                    <a href="#blog" className="menu-link">Blogs</a>
                </li>
            </ul>
            <ul className="responsive-nav">
                <li>
                    <a className="nav-link nl-m-top abc"><i className="fa fa-search" aria-hidden="true"></i></a>
                    <div className="search top-search">
                        <button type="button" className="close fix-close">×</button>
                        <form>
                            <input type="search" defaultValue="" placeholder="Search Here" />
                            <button type="submit" className="btn btn-primary">Search</button>
                        </form>
                    </div>
                </li>
                <li>
                    <a className="nav-link cart nl-m-top" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-shopping-bag" aria-hidden="true"></i><span>2</span></a>
                </li>
                <li>
                    <a className="nav-link nl-m-top" href="login.html"><i className="fa fa-user" aria-hidden="true"></i></a>
                </li>
            </ul>
            <div className="menu-close">
                <a className="hide-menu-btn"><i className="fa fa-times" aria-hidden="true"></i></a>
            </div>
        </div>
    </nav>
    </div>

)}
    </div>
  )
}

export default Header