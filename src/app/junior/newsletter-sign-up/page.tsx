"use client";
import Image from "next/image";
import { useState } from "react";

import { FaCheckCircle } from "react-icons/fa";

export default function NewsletterSignUp() {
  const [input, setInput] = useState({
    value: "",
    error: false,
  });

  const [subscribed, setSubscribed] = useState(false);

  const handleInputChange = (e: any) => {
    e.preventDefault();
    const value = e.target.value;
    const error = !value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);

    setInput({ value, error });
  };

  const handleSubscribe = (e: any) => {
    e.preventDefault();

    if (!input.error && input.value.length) {
      setSubscribed(true);
      setInput({ value: "", error: false });
    } else {
      setInput({ ...input, error: true });
    }
  };

  return (
    <section className="newsletter-sign-up-page">
      {subscribed ? (
        <div className="subscribed">
          <div className="item-icon">
            <FaCheckCircle
              size={56}
              color="#ff6456"
            />
          </div>
          <h1>Thank for subscribing!</h1>
          <p className="desc">
            You have successfully subscribed to our email newsletter.{" "}
            <span>Check your inbox</span> for the lastest news.
          </p>

          <button
            className="btn dismiss-btn"
            onClick={() => setSubscribed(false)}
          >
            Dismiss message
          </button>
        </div>
      ) : (
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

            <form>
              <div
                className={`email-input ${input.error ? "input-error" : ""}`}
              >
                <div className="top">
                  <label htmlFor="email">Email address</label>
                  {input.error && (
                    <span className="error">Valid email required</span>
                  )}
                </div>
                <input
                  type="text"
                  value={input.value}
                  onChange={handleInputChange}
                  placeholder="email@company.com"
                />
              </div>

              <button
                className="btn subscribe-btn"
                onClick={handleSubscribe}
              >
                Subscribe to monthly newsletter
              </button>
            </form>
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
      )}
    </section>
  );
}
