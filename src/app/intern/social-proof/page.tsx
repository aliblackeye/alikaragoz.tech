import { AiFillStar } from "react-icons/ai";

export default function SocialProof() {
  const rateCards = [
    {
      text: "Rated 5 Stars in Reviews",
    },
    {
      text: "Rated 5 Stars in Report Guru",
    },
    {
      text: "Rated 5 Stars in BestTech",
    },
  ];

  const StarEl = () => <AiFillStar color="#ffaf00" />;

  const cards = [
    {
      img: "https://avatars.githubusercontent.com/u/80913896?v=4",
      name: "Ali Karagöz",
      title: "Verified Buyer",
      comment:
        "We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!",
    },
    {
      img: "https://avatars.githubusercontent.com/u/80913896?v=4",
      name: "Ali Karagöz",
      title: "Verified Buyer",
      comment:
        "We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!",
    },
    {
      img: "https://avatars.githubusercontent.com/u/80913896?v=4",
      name: "Ali Karagöz",
      title: "Verified Buyer",
      comment:
        "We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!",
    },
  ];

  return (
    <section className="social-proof">
      <div className="top">
        <div className="top-left">
          <h1 className="top-left-title">
            {`10,000+ of our users love our products.`}
          </h1>
          <p className="top-left-text">
            {`We only provide great products combined with excellent customer
            service. See what our satisfied customers are saying about our
            services.`}
          </p>
        </div>
        <div className="top-right">
          <div className="rate-cards">
            {rateCards.map((rateCard, key) => (
              <div className="rate-card" key={key}>
                <div className="five-stars">
                  <StarEl />
                  <StarEl />
                  <StarEl />
                  <StarEl />
                  <StarEl />
                </div>{" "}
                {`${rateCard.text}`}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="bottom-cards">
          {cards.map((card, key) => (
            <div className="card" key={key}>
              <div className="card-top">
                <div className="avatar">
                  <img src={card.img} alt="avatar" />
                </div>
                <div className="details">
                  <div className="name">{card.name}</div>
                  <div className="title">{card.title}</div>
                </div>
              </div>
              <div className="card-bottom">
                <p className="comment">{`" ${card.comment} "`}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
