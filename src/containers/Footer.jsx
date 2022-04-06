import React from "react";

const Footer = () => {
  return (
    <footer id="site-footer" className="site-footer footer-v1">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6 col-12">
            <div className="widget-footer">
              <h5 className="text-white">Services</h5>
              <ul className="list-items">
                <li className="list-item">
                  <a href="#">Web Development</a>
                </li>
                <li className="list-item">
                  <a href="#">Web Development</a>
                </li>
                <li className="list-item">
                  <a href="#">Web Development</a>
                </li>
                <li className="list-item">
                  <a href="#">Web Development</a>
                </li>
                <li className="list-item">
                  <a href="#">Web Development</a>
                </li>
                <li className="list-item">
                  <a href="#">Web Development</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-12">
            <div className="widget-footer">
              <h5 className="text-white">Learn</h5>
              <ul className="list-items">
                <li className="list-item">
                  <a href="#">Web Development</a>
                </li>
                <li className="list-item">
                  <a href="#">Web Development</a>
                </li>
                <li className="list-item">
                  <a href="#">Web Development</a>
                </li>
                <li className="list-item">
                  <a href="#">Web Development</a>
                </li>
                <li className="list-item">
                  <a href="#">Web Development</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-12">
            <div className="widget-footer">
              <h5 className="text-white">Company</h5>
              <ul className="list-items">
                <li className="list-item">
                  <a href="about-us.html">About Company</a>
                </li>
                <li className="list-item">
                  <a href="about-us.html">About Company</a>
                </li>
                <li className="list-item">
                  <a href="about-us.html">About Company</a>
                </li>
                <li className="list-item">
                  <a href="about-us.html">About Company</a>
                </li>
                <li className="list-item">
                  <a href="about-us.html">About Company</a>
                </li>
                <li className="list-item">
                  <a href="about-us.html">About Company</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-12">
            <div className="widget-footer">
              <h5 className="text-white">Subscribe</h5>
              <p>Follow our newsletter to stay updated with us.</p>
              <form
                id="mc4wp-form-1"
                className="mc4wp-form mc4wp-form-1343"
                method="post"
              >
                <div className="mc4wp-form-fields">
                  <div className="subscribe-inner-form">
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      required=""
                    />
                    <button type="submit" className="subscribe-btn-icon">
                      <i className="flaticon-telegram"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="row mt-65">
          <div className="col-md-6 mb-4 mb-md-0">
            <h1 style={{color: '#fff'}}>Logo</h1>
          </div>
          <div className="col-md-6 text-left text-md-right align-self-center">
            <p className="copyright-text">Copyright © 2020. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;