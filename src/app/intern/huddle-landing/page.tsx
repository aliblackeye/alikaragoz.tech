import React from "react";

import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function HuddleLanding() {
  return (
    <div className="centered-page">
      <div className="huddle-landing">
      <div className="huddle-landing-content">
        <div className="top">
          <img src={"/assets/images/huddle-logo.svg"} alt="logo" />
        </div>
        <div className="middle">
          <img src={"/assets/images/huddle-illustration-mockups.svg"} alt="logo" />

          <div className="content">
            <h1 className="title">Build The Community Your Fans Will Love</h1>
            <p className="description">
              Huddle re-imagines the way we build communities. You have a voice,
              but so does your audience. Create connections with your users as
              you engage in genuine discussion.
            </p>
            <button className="btn register-btn">Register</button>
          </div>
        </div>

        <div className="bottom">
          <div className="socials">
            <div className="social">
              <FaFacebook />
            </div>
            <div className="social">
              <FaTwitter />
            </div>
            <div className="social">
              <FaInstagram />
            </div>
          </div>
        </div>
      </div>
      <img src={"/assets/images/huddle-bg-desktop.svg"} alt="logo" className="desktop-bg" />
    </div>
    </div>
  );
}
