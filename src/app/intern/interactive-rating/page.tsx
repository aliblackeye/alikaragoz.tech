"use client";

import { useState } from "react";

// Import Components
import RatingForm from "./_partials/RatingForm";

export type Rating = 0 | 1 | 2 | 3 | 4 | 5;

export default function InteractiveRating() {
  const [rating, setRating] = useState<Rating>(0);

  return (
    <div className="centered-page">
      {rating ? (
        <div className="interactive-rating rated">
          <div className="rating-image">
            <img
              src={"/assets/images/3drating.png"}
              alt="phone-and-credit-illustrate"
            />
          </div>
          <p className="selected-rating">{`You selected ${rating} out of 5`}</p>
          <h1 className="selected-rating-title">Thank you!</h1>
          <p className="rated-description">
            {`We appreciate you taking the time to give a rating. if you ever need more support. Don't hesitate to get in touch!`}
          </p>
        </div>
      ) : (
        <RatingForm setRating={setRating} />
      )}
    </div>
  );
}
