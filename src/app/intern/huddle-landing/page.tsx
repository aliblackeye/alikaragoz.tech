import React from "react";
import Image from "next/image";

import bgDesktop from "@/assets/images/huddle-bg-desktop.svg";
import mockups from "@/assets/images/huddle-illustration-mockups.svg";
import logo from "@/assets/images/huddle-logo.svg";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function HuddleLanding() {
  return (
    <div className="centered-page">
      <div className="huddle-landing">
      <div className="huddle-landing-content">
        <div className="top">
          <Image src={logo} alt="logo" />
        </div>
        <div className="middle">
          <Image src={mockups} alt="logo" />

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
      <Image src={bgDesktop} alt="logo" className="desktop-bg" />
    </div>
    </div>
  );
}
