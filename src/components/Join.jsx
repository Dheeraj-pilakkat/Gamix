import React from 'react'
import joinbg from '../assets/images/join-bg.png'

function Join() {
  return (
    <section id="join">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="join-bg">
                    <div className="row">
                        <div className="col-lg-6 join-txt">
                            <span>Let's Play Together</span>
                            <h3>Join Gamix eSports to Become next pro gamer Today!</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam assumenda fugiat veritatis, mollitia. Nisi, quas.</p>
                            <a href="/login" className="main-btn">Join Community</a>
                        </div>
                        <div className="col-lg-6 join-img">
                            <img src={joinbg} alt="join-img" className=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default Join