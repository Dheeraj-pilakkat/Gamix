import React from 'react'

function Signup() {
  return (
    <div>
         <div class="login-12">
        <div class="container">
            <div class="col-md-12 pad-0">
                <div class="row login-box-12">
                    <div class="col-lg-7 col-sm-12 col-pad-0 align-self-center">
                        <div class="login-inner-form">
                            <div class="details">
                                <h3>Sign Up</h3>
                                <form autocomplete="off">
                                    <div class="form-group">
                                        <input type="text" name="username" class="input-text" placeholder="Phone number or Email"/>
                                    </div>
                                    <div class="form-group">
                                        <input type="password" name="Password" class="input-text" placeholder="Password"/>
                                    </div>
                                    <div class="form-group">
                                        <input type="password" name="Password" class="input-text" placeholder="Re-type Your Password"/>
                                    </div>
                                    <div class="form-group">
                                        <button type="submit" class="btn-md btn-theme btn-block">Free Signup</button>
                                    </div>
                                </form>
                                <p>Already have an account?<a href="Login.html"> Login Now</a></p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-5 col-md-12 col-sm-12 col-pad-0 bg-img align-self-center none-992">
                        <a href="index.html" class="logoss">
                            GAMIX<span>.</span>
                        </a>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt Lorem Ipsum</p>
                        <ul class="social-list clearfix">
                            <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                            <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                            <li><a href="#"><i class="fa fa-youtube-play"></i></a></li>
                            <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Signup