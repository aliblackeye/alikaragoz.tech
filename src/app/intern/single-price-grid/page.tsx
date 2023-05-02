export default function SinglePriceGrid() {
  return (
    <div className="centered-page">
      <div className="single-price-grid">
      <div className="single-price-grid__top">
        <h3 className="single-price-grid__top-title">Join our community</h3>
        <p className="single-price-grid__top-subtitle">
          30-day, hassle-free money back guarantee
        </p>
        <p className="single-price-grid__top-subtitle">
          Gain access to our full library of tutorials along with expert code
          reviews. Perfect for any developers who are serious about honing their
          skills.
        </p>
      </div>
      <div className="single-price-grid__bottom">
        <div className="single-price-grid__bottom-left">
          <h1 className="single-price-grid__bottom-left__title">
            Monthly Subscription
          </h1>
          <div className="single-price-grid__bottom-left__price">
            <span className="single-price-grid__bottom-left__price-dollar">
              $29
            </span>
            <p className="single-price-grid__bottom-left__price-perMonth">
              per month
            </p>
          </div>
          <p className="single-price-grid__bottom-left__price-subtitle">
            Full access for less than $1 a day
          </p>
          <button
            type="button"
            className="single-price-grid__bottom-left__button"
          >
            Sign Up
          </button>
        </div>
        <div className="single-price-grid__bottom-right">
          <h1 className="single-price-grid__bottom-right-title">Why Us</h1>
          <ul className="single-price-grid__bottom-right-list">
            <li>Tutorials by industry experts</li>
            <li>Peer & expert code review</li>
            <li>Coding exercises</li>
            <li>Access to our Github repos</li>
            <li>Community forum</li>
            <li>Flashcard decks</li>
            <li>New videos every week</li>
          </ul>
        </div>
      </div>
    </div>
    </div>
  );
}
