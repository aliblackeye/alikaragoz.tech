"use client";
import Image from "next/image";
import { useState } from "react";

import { FaCheckCircle } from "react-icons/fa";

export default function NewsletterSignUp() {
  const [email, setEmail] = useState("");

  return (
    <section className="newsletter-sign-up-page">
      <div className="newsletter-sign-up">
        <div className="left">
          <h1>Stay updated</h1>
          <p className="desc">
            Join 60,000+ product managers receiving monthly updates on:
          </p>

          <div className="features">
            <div className="feature-item">
              <div className="item-icon">
                <FaCheckCircle
                  size={24}
                  color="#ff6456"
                />
              </div>
              <p> Product discovery and building what matters</p>
            </div>

            <div className="feature-item">
              <div className="item-icon">
                <FaCheckCircle
                  size={24}
                  color="#ff6456"
                />
              </div>
              <p>Measuring to ensure updates are a success</p>
            </div>

            <div className="feature-item">
              <div className="item-icon">
                <FaCheckCircle
                  size={24}
                  color="#ff6456"
                />
              </div>
              <p>And much more!</p>
            </div>
          </div>

          <div className="email-input">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="email@company.com"
              
            />
          </div>

          <button className="subscribe-btn">Subscribe to monthly newsletter</button>
        </div>
        <div className="right">
          <Image
            width={2000}
            height={2000}
            src={"/assets/images/dashboard.png"}
            alt="dashboard"
          />
        </div>
      </div>
    </section>
  );
}
