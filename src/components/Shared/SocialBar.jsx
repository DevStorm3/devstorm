import React from "react";

const SocialBar = () => {
  return (
    <div className="social_bar">
      <ul>
        <li>
          <a href="http://twitter.com/" target="_self">
            <i className="fab fa-twitter"></i>
          </a>
        </li>
        <li>
          <a href="http://facebook.com/" target="_self">
            <i className="fab fa-facebook-f"></i>
          </a>
        </li>
        <li>
          <a href="http://linkedin.com/" target="_self">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </li>
        <li>
          <a href="http://instagram/" target="_self">
            <i className="fab fa-instagram"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialBar;
