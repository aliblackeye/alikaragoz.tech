// Import React
import { useState } from "react";

// Import Types
import { Rating } from "@/app/intern/interactive-rating/page";

// Import Components
import { FaStar } from "react-icons/fa";

interface IRatingForm {
  setRating: React.Dispatch<React.SetStateAction<Rating>>;
}

export default function RatingForm({ setRating }: IRatingForm) {
  // Variables
  const ratingValues = [1, 2, 3, 4, 5];

  // States
  const [selectedRating, setSelectedRating] = useState<Rating>(0);

  // Functions
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (selectedRating) {
      setRating(selectedRating);
    }
  };

  return (
    <form className="interactive-rating" onSubmit={(e) => handleSubmit(e)}>
      <div className="star circle">
        <FaStar />
      </div>

      <h1 className="interactive-rating__title">How did we do?</h1>

      <p className="interactive-rating__description">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>

      <div className="interactive-rating__buttons ">
        {ratingValues.map((value, key) => (
          <div
            key={key}
            className="interactive-rating__button circle"
            onClick={(e) => {
              setSelectedRating(value as Rating);

              const buttons = document.querySelectorAll(
                ".interactive-rating__button"
              );

              // sadece 1 puan seçme hakkım var.
              buttons.forEach((button) => {
                button.classList.remove("selected");
              });

              // İstersem seçimimi iptal edebilirim
              if (selectedRating === value) {
                setSelectedRating(0);
                e.currentTarget.classList.remove("selected");
                return;
              }

              e.currentTarget.classList.add("selected");
            }}
          >
            {value}
          </div>
        ))}
      </div>

      <button
        className="btn"
        type="submit"
        disabled={!selectedRating == true && true}
      >
        SUBMIT
      </button>
    </form>
  );
}
