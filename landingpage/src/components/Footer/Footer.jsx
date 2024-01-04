import React from "react";
import "./Footer.css";
var insta = require("../../images/icons8-insta-48.png");
var tiktok = require("../../images/icons8-tiktok-50.png");
var linkedIn = require("../../images/icons8-linkedin-48.png");
var twitter = require("../../images/icons8-twitter-48.png");
const Footer = () => {
  return (
    <div className="Footer">
      <div className="socials">
        <a target="__blank" href="https://www.instagram.com/nupiumtech/">
          <img src={insta} alt="insta" />
        </a>
        <a target="__blank" href="https://twitter.com/NupiumTech">
          <img src={twitter} alt="twitter" />
        </a>
        <a target="__blank" href="https://www.linkedin.com/company/nupium/">
          <img src={linkedIn} alt="linkedIn" />
        </a>
        <a
          target="__blank"
          href="https://www.tiktok.com/@nupium?is_from_webapp=1&sender_device=pc"
        >
          <img src={tiktok} alt="tiktok" />
        </a>
      </div>
      <div className="copyright">
        <p>COPYRIGHT © 2023 NUPIUM - ALL RIGHTS RESERVED.</p>
      </div>
    </div>
  );
};
export default Footer;
