"use client";

import { FaGithub, FaInstagram, FaLinkedin, FaShare } from "react-icons/fa";

export default function ArticlePreview() {
  return (
    <div className="centered-page">
      <div className="article-preview">
        <div className="left">
          <div className="article-img">
            <img src="assets/images/article.jpg" alt="article" />
          </div>
        </div>
        <div className="right">
          <h1 className="title">
            {`Shift the overall look and feel by adding these wonderful touches to
          furniture in your home`}
          </h1>
          <p className="text">
            {`Ever been in a room and felt like something was missing? Perhaps it
          felt slightly bare and uninviting. I've got some simple tips to help
          you make any room feel complete.`}
          </p>
          <div className="right-footer">
            <div className="right-footer__left">
              <div className="avatar">
                <img
                  src="https://avatars.githubusercontent.com/u/80913896?v=4"
                  alt="avatar"
                />
              </div>
              <div className="details">
                <h3 className="name">Ali Karagöz</h3>
                <h4 className="date">29.04.2023</h4>
              </div>
            </div>
            <div className="right-footer__right">
              <div className={`share-btn`}>
                <FaShare color="#718399" />
              </div>
              <div className="clicked-share">
                <div className="hover-controller">
                  <span className="text">SHARE</span>
                  <div className="socials">
                    <FaInstagram />
                    <FaGithub />
                    <FaLinkedin />
                  </div>
                </div>
                <div className="triangle"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
