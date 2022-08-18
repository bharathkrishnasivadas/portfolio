/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function Banner() {
  return (
    <section className="banner" id="banner">
      <div className="container">
        <div className="banner-wrapper">
          <div className="banner-img">
            {/* <img src="/1.jpg" alt="" /> */}
          </div>
          <div className="banner-content">
            <h6>Hello, I'm Bharath Krishna</h6>
            <h3>Full Stack Developer</h3>
            <p>
            Passionate full-stack engineer with 1+ years of hands-on experience in developing scalable websites/applications using a wide
            ange of front-end and back-end skills like HTML, CSS, JavaScript, etc. Developed 20+ websites from scratch at Scaler.
            Looking to further enhance HTML5, CSS, JS skills as the future full stack developer.
            </p>
            <a className="btn" href="https://phenomenal-crostata-a3081c.netlify.app">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;