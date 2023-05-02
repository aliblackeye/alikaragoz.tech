import { BsFillCarFrontFill } from "react-icons/bs";
import { RiPoliceCarLine } from "react-icons/ri";
import { IoCarSportOutline } from "react-icons/io5";

export default function ThreeColumnCard() {
  return (
    <div className="centered-page">
      <div className="three-column-card">
      <div className="column">
        <div className="circle">
          <BsFillCarFrontFill size={24} color="#fdd574" />
        </div>
        <h1>SEDANS</h1>
        <p>
          {`Choose a sedan for its affordability, and excellent fuel economy.
          Ideal for cruising in the city or on your next road trip.`}
        </p>
        <button className="btn learn-more-btn">Learn More</button>
      </div>
      <div className="column">
        <div className="circle">
          <RiPoliceCarLine size={24} color="#2db9bf" />
        </div>
        <h1>SUVS</h1>
        <p>
          {`Take an SUV for its spacious
İnterior, power, and
versatility. Perfect for your
next family vacation and
off-road adventures.`}
        </p>
        <button className="btn learn-more-btn">Learn More</button>
      </div>
      <div className="column">
        <div className="circle">
          <IoCarSportOutline size={24} color="#14be9d" />
        </div>
        <h1>LUXURY</h1>
        <p>
          {`
          Cruise in the best car brands
without the bloated prices.
Enjoy the enhanced comfort
of a luxury rental and arrive
in Style.`}
        </p>
        <button className="btn learn-more-btn">Learn More</button>
      </div>
    </div>
    </div>
  );
}
