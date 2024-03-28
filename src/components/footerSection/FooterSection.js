import React from "react";
import "./FooterSection.css";
import { Input } from "antd";
import { faArrowUp, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faCodeBranch } from "@fortawesome/free-solid-svg-icons";
import { faBehance } from "@fortawesome/free-brands-svg-icons";

const FooterSection = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="footer_section">
      <div className="footer_top">
        <div className="footer_top_left">
          <h1>Weekly Newsletter</h1>
          <h6>
            There are many vaiations of passages of lorem ipsum available.
          </h6>
        </div>

        <div className="footer_top_right">
          <Input placeholder="Enter Your Mail" className="custom_input" />
          <button className="subcribe_button">SUBSCRIBE</button>
        </div>
      </div>
      <div className="footer_middle">
        <div class="column">
          <h6>About Us</h6>
          <div className="column_content">
            <p>Lorem Ipsum is simply dummy text of the .</p>
            <div className="phone">
              <FontAwesomeIcon icon={faPhone} />
              <p>(+94)11 434 7575</p>
            </div>

            <div className="location">
              <FontAwesomeIcon icon={faLocationDot} />
              <p>42 Lily Ave,Colombo 00600</p>
            </div>
          </div>
        </div>
        <div class="column">
          <h6>Latest News</h6>
          <div className="column_content">
            <div>
              <p>Lorem Ipsum is simply dummy text of the .</p>
              <p>Lorem Ipsum is simply dummy text of the .</p>
            </div>
          </div>
        </div>
        <div class="column">
          <h6>Customer Service</h6>
          <div className="column_content">
            <ol>
              <li>
                <Link to="/support-forum">Support Forum</Link>
              </li>
              <li>
                <Link to="/communication">Communication</Link>
              </li>
              <li>
                <Link to="/faqs">FAQs</Link>
              </li>
              <li>
                <Link to="/privacy-policy">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/rules-conditions">Rules & Conditions</Link>
              </li>
              <li>
                <Link to="/contact-us">Contact Us</Link>
              </li>
            </ol>
          </div>
        </div>
        <div class="column">
          <h6>Customer Service</h6>
          <div className="column_content">
            <div className="footer_images">
              <img src="/assets/news1.PNG" alt="news1" />
              <img src="/assets/news2.PNG" alt="news2" />
              <img src="/assets/news3.PNG" alt="news3" />
              <img src="/assets/news4.PNG" alt="news4" />
              <img src="/assets/right.PNG" alt="right" />
              <img src="/assets/left.PNG" alt="left" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <button className="scroll-to-top" onClick={scrollToTop}>
          <FontAwesomeIcon icon={faArrowUp} />
        </button>
      </div>
      <div className="footer_bottom">
        <div className="copyright">
          <p>Copyright @ 2021 All Rights Reserved. Site By Xiteb.</p>
        </div>
        <div className="social_media">
          <button id="social_button">
            <FontAwesomeIcon icon={faFacebookF} />
          </button>
          <button id="social_button">
            <FontAwesomeIcon icon={faCodeBranch} />
          </button>
          <button id="social_button">
            <FontAwesomeIcon icon={faTwitter} />
          </button>
          <button id="social_button">
            <FontAwesomeIcon icon={faBehance} />
          </button>
          <button id="social_button">
            <FontAwesomeIcon icon={faFacebookF} />
          </button>
        </div>
      </div>

      {/* For mobile view */}
      <div className="footer_bottom_mobi">
        <div className="social_media">
          <button id="social_button">
            <FontAwesomeIcon icon={faFacebookF} />
          </button>
          <button id="social_button">
            <FontAwesomeIcon icon={faCodeBranch} />
          </button>
          <button id="social_button">
            <FontAwesomeIcon icon={faTwitter} />
          </button>
          <button id="social_button">
            <FontAwesomeIcon icon={faBehance} />
          </button>
          <button id="social_button">
            <FontAwesomeIcon icon={faFacebookF} />
          </button>
        </div>
        <div>
          <button className="scroll-to-top" onClick={scrollToTop}>
            <FontAwesomeIcon icon={faArrowUp} />
          </button>
        </div>
        <div className="copyright">
          <p>Copyright @ 2021 All Rights Reserved. Site By Xiteb.</p>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
