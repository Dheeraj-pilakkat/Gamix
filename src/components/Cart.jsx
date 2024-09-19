import React from "react";
import product1 from "../assets/images/product1.png";
import product2 from "../assets/images/product2.png";
import product3 from "../assets/images/product3.png";
import Product from "./Product";
import Subscribe from "./Subscribe";
// import product4 from "../assets/images/product4.png";

function Cart() {
  return (
    <div className="inner-page">
      <section id="inner-banner" >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h3>Cart Page</h3>
              <a href="/">
                <i className="fa fa-home" aria-hidden="true"></i> Home
              </a>
              <span> - Cart page</span>
            </div>
          </div>
        </div>
      </section>
      <section id="cart-view">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="row">
                <div className="col-lg-6 col-sm-6">
                  <div className="cart-items text-center">
                    <h3>$135</h3>
                    <img src={product1} alt="product-img" className="img-fluid" />
                    <h4>Ober Headset</h4>
                    <a href="#">
                      <i className="fa fa-times" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
                <div className="col-lg-6 col-sm-6">
                  <div className="cart-items text-center">
                    <h3>$198</h3>
                    <img src={product3} alt="product-img" className="img-fluid" />
                    <h4>Wired Earphone</h4>
                    <a href="#">
                      <i className="fa fa-times" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-5 contact-box">
              <div className="checkout-box">
                <div className="row">
                  <div className="col-lg-12 checkout-item">
                    <div className="row">
                      <div className="col-8 col-lg-8 col-sm-8">
                        <h3>Subtotal</h3>
                      </div>
                      <div className="col-4 col-lg-4 col-sm-4 text-right">
                        <h4>$320.00</h4>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 checkout-item">
                    <div className="row">
                      <div className="col-8 col-lg-8 col-sm-8">
                        <h3>Discount</h3>
                      </div>
                      <div className="col-4 col-lg-4 col-sm-4 text-right">
                        <h4>10%</h4>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 checkout-item">
                    <div className="row">
                      <div className="col-8 col-lg-8 col-sm-8">
                        <h3>Total</h3>
                      </div>
                      <div className="col-4 col-lg-4 col-sm-4 text-right">
                        <h4>$298.00</h4>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 checkout-button">
                    <a
                      className="main-btn btn-c-white"
                      data-toggle="modal"
                      data-target="#billing-model-large"
                    >
                      Make Payment
                    </a>
                  </div>
                </div>
              </div>
              <form>
                <div className="form-group">
                  <div className="row">
                    <div className="col-lg-8">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Coupon Code"
                      />
                    </div>
                    <div className="col-lg-4">
                      <button type="submit" className="coupon-btn btn btn-primary">
                        Apply
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Product/>
      <Subscribe/>
    </div>
  );
}

export default Cart;
