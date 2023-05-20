import Image from "next/image";

import detective from "@assets/images/detective.png";
import lightbulb from "@assets/images/lightbulb.png";
import team from "@assets/images/team.png";
import calculator from "@assets/images/calculator.png";

export default function FourCards() {
  return (
    <div className="centered-page">
      <div className="four-card">
     <div className="top">
     <h1 className="title light">Reliable, efficient delivery</h1>
      <h1 className="title">Powered by Technology </h1>
      <p className="text">
        {`Our Artificial Intelligence powered tools use millions of project data
        points to ensure that your project is successful`}
      </p>
     </div>
      <div className="cards">
        <div className="left">
          <div className="card blue">
            <h6>Supervisor</h6>
            <p>Monitors activity to identify project roadblocks</p>
            <div className="card-footer">
              <div className="icon">
                <Image src={detective} alt="supervisor" />
              </div>
            </div>
          </div>
        </div>
        <div className="middle">
          <div className="card red">
            <h6>Team Builder</h6>
            <p>Monitors activity to identify project roadblocks</p>
            <div className="card-footer">
              <div className="icon">
                <Image src={team} alt="team builder" />
              </div>
            </div>
          </div>
          <div className="card yellow">
            <h6>Karma</h6>
            <p>Monitors activity to identify project roadblocks</p>
            <div className="card-footer">
              <div className="icon">
                <Image src={lightbulb} alt="karma" />
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="card dark-blue">
            <h6>Calculator</h6>
            <p>Monitors activity to identify project roadblocks</p>
            <div className="card-footer">
              <div className="icon">
                <Image src={calculator} alt="calculator" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
