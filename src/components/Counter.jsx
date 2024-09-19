import React from "react";
import CountUp from "react-countup";

function Counter() {
  return (
    <section id="counter">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-sm-6 text-center">
            <div className="counter-item">
              <h3
                className="counter"
                data-counterup-time="2500"
                data-counterup-delay="30"
                data-counterup-beginat="20"
              >
                <CountUp end={105} duration={3} enableScrollSpy={true}  />
              </h3>
              <span>
                K<b>.</b>
              </span>
              <p>Community Earning</p>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 text-center">
            <div className="counter-item">
              <h3
                className="counter"
                data-counterup-time="2500"
                data-counterup-delay="30"
                data-counterup-beginat="20"
              >
                <CountUp end={100} duration={3} enableScrollSpy={true}/>
              </h3>
              <span>
                M<b>.</b>
              </span>
              <p>Registered Players</p>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 text-center">
            <div className="counter-item">
              <h3
                className="counter"
                data-counterup-time="2500"
                data-counterup-delay="30"
                data-counterup-beginat="20"
              >
                 <CountUp
                        end={221}
                        duration={3}
                        enableScrollSpy={true}/>
              </h3>
              <span>
                K<b>.</b>
              </span>
              <p>Streams Complete</p>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 text-center">
            <div className="counter-item">
              <h3
                className="counter"
                data-counterup-time="2500"
                data-counterup-delay="30"
                data-counterup-beginat="20"
              >
                 <CountUp
                        end={875}
                        duration={3}
                        enableScrollSpy={true}/>
              </h3>
              <span>
                <b>.</b>
              </span>
              <p>Total Sponsers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Counter;
