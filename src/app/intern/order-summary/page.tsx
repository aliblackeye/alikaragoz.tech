import Image from "next/image";
import { BsMusicNoteBeamed } from "react-icons/bs";

import img from "@assets/images/musician.png";

export default function OrderSummary() {
  return (
    <div className="centered-page">
      <div className="order-summary">
      <div className="order-summary__top">
        <Image src={img} alt="order" />
      </div>
      <div className="order-summary__bottom">
        <h1 className="title">Order Summary</h1>
        <p className="order-text">
          {`          You can now listen to millions of songs, audiobooks, and podcasts on
          any device anywhere you like!`}
        </p>
        <div className="selected-plan">
          <div className="music-icon">
            <BsMusicNoteBeamed />
          </div>

          <div className="plan-details">
            <h2>Annual Plan</h2>
            <p>$59.99/year</p>
          </div>

          <div className="change-plan">
            <a href="#">Change</a>
          </div>
        </div>

        <button className="btn payment-btn">Proceed to Payment</button>

        <a href="#" className="cancel-plan">
          Cancel Order
        </a>
      </div>
    </div>
    </div>
  );
}
