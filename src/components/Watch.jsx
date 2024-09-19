import React from 'react'
import watchbg from "../assets/images/watch-bg.jpg"

function Watch() {
  return (
    <section id="watch">
    <div className="container">
        <div className="row">
            <div className="col-lg-12 watch-item">
                <div className="video-overlay">
                    <a className="venobox" data-autoplay="true" data-vbtype="video" href="https://www.youtube.com/watch?v=ClUFJlGBuME"><i className="fa fa-play" aria-hidden="true"></i></a>
                </div>
                <img src={watchbg} alt="watch-img" className="img-fluid"/>
            </div>
        </div>
    </div>
</section>
  )
}

export default Watch