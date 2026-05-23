import React from "react";

const Footer = () => {
  return (
    <footer className="footer-slide">
      <div className="footer-slide__inner">
        <div className="footer-slide__main">
          <div className="footer-slide__copy">
            <a href="#home" className="footer-slide__brand">
              <img src="/coder-2.png" alt="Logo" />
              <span>Code With Yash</span>
            </a>

            <h2>Let's build something sharp, fast, and memorable.</h2>

            <p>
              I create modern web experiences with clean interfaces, responsive
              layouts, and practical development decisions that help projects
              move with confidence.
            </p>

            <div className="footer-slide__actions">
              <a href="#contact" className="footer-slide__button footer-slide__button--primary">
                Start a Project
              </a>
              <a
                href="https://drive.google.com/file/d/1BOa0CRBe0aBIQKhOJ4a8BEZA1SMkXkYN/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-slide__button footer-slide__button--ghost"
              >
                View Resume
              </a>
            </div>
          </div>

          <div className="footer-slide__card">
            <h3>Quick Connect</h3>

            <div className="footer-slide__details">
              <p>
                <span>Email</span>
                <a href="mailto:yashdeliwala10@gmail.com">
                  yashdeliwala10@gmail.com
                </a>
              </p>
              <p>
                <span>Location</span>
                <span>Surat, Gujarat</span>
              </p>
              <p>
                <span>Availability</span>
                <span>Open for web development work</span>
              </p>
            </div>

            <div className="footer-slide__socials">
              <a href="https://x.com/YDeliwala94759" target="_blank" rel="noopener noreferrer">
                <i className="ri-twitter-x-line"></i>
              </a>
              <a href="https://www.linkedin.com/in/yash-deliwala" target="_blank" rel="noopener noreferrer">
                <i className="ri-linkedin-fill"></i>
              </a>
              <a href="https://github.com/deliwalayash" target="_blank" rel="noopener noreferrer">
                <i className="ri-github-fill"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-slide__bottom">
          <p>(c) 2025 Yash. All Rights Reserved.</p>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#works">Works</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
