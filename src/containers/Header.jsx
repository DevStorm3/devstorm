import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header id="site-header" className="site-header sticky-header header-static">
      <div className="header-topbar style-2">
        <div className="octf-area-wrap">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <ul className="social-list">
                  <li>
                    <Link to="http://twitter.com/" target="_self">
                      <i className="fab fa-twitter"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="http://facebook.com/" target="_self">
                      <i className="fab fa-facebook-f"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="http://linkedin.com/" target="_self">
                      <i className="fab fa-linkedin-in"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="http://instagram/" target="_self">
                      <i className="fab fa-instagram"></i>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-8">
                <ul className="topbar-info align-self-end clearfix">
                  <li>
                    <Link to="tel:+1-800-456-478-23">
                      <i className="fas fa-phone-alt"></i> +8801777777777
                    </Link>
                  </li>
                  <li>
                    <Link to="mailto:email@mail.com">
                      <i className="fas fa-envelope"></i> email@gmail.com
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="octf-main-header">
        <div className="octf-area-wrap">
          <div className="container octf-mainbar-container">
            <div className="octf-mainbar">
              <div className="octf-mainbar-row octf-row">
                <div className="octf-col logo-col">
                  <div id="site-logo" className="site-logo">
                    <Link to="/">
                      <img alt="" src="/assets/img/logo.png" style={{height:"35px", width:"180px"}}/>
                    </Link>
                  </div>
                </div>
                <div className="octf-col menu-col">
                  <nav id="site-navigation" className="main-navigation">
                    <ul className="menu">
                      <li>
                        <Link to="/index.html">Home</Link>
                      </li>
                      <li>
                        <Link to="/portfolio.html">Our Portfolio</Link>
                      </li>
                      <li>
                        <Link to="/about.html">About Us</Link>
                      </li>
                      <li>
                        <Link to="/service.html">Services</Link>
                      </li>
                      <li>
                        <Link to="/contact.html">Contact Us</Link>
                      </li>
                      <li>
                        <Link to="/quote.html">Quote Request</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header_mobile">
        <div className="container">
          <div className="mlogo_wrapper clearfix">
            <div className="mobile_logo">
              <Link to="/">
                <img src="images/logo.svg" alt="Engitech" />
              </Link>
            </div>
            <div id="mmenu_toggle">
              <button></button>
            </div>
          </div>
          <div className="mmenu_wrapper">
            <div className="mobile_nav collapse">
              <ul id="menu-main-menu" className="mobile_mainmenu">
                <li
                  className="
                  menu-item-has-children
                  current-menu-item current-menu-ancestor
                "
                >
                  <Link to="">Home</Link>
                  <ul className="sub-menu">
                    <li className="current-menu-item">
                      <Link to="">Home 1</Link>
                    </li>
                    <li>
                      <Link to="">Home 2</Link>
                    </li>
                  </ul>
                </li>
                <li className="menu-item-has-children">
                  <Link to="#">Company</Link>
                  <ul className="sub-menu">
                    <li>
                      <Link to="">About us</Link>
                    </li>
                  </ul>
                </li>
                <li className="menu-item-has-children">
                  <Link to="#">Services</Link>
                  <ul className="sub-menu">
                    <li>
                      <Link to="">It Services</Link>
                    </li>
                  </ul>
                </li>
                <li className="menu-item-has-children">
                  <Link to="/">Projects</Link>
                  <ul className="sub-menu">
                    <li>
                      <Link to="/">Portfolio Masonry</Link>
                    </li>
                  </ul>
                </li>
                <li className="menu-item-has-children">
                  <Link to="/">Blog</Link>
                  <ul className="sub-menu">
                    <li>
                      <Link to="/">Blog Listing</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/">Contacts</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
