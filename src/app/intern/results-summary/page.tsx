import { AiOutlineThunderbolt,AiOutlineEye } from "react-icons/ai";
import { BiBrain ,BiComment} from "react-icons/bi";

export default function ResultsSummary() {
  return (
    <div>
      <div className="results-summary">
        <div className="left">
          <h4>Your Result</h4>
          <div className="result-circle">
            <h1 className="percent">76</h1>
            <span>of 100</span>
          </div>
          <h3 className="result-status">Great</h3>
          <p className="result-description">
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </div>
        <div className="right">
          <h4>Summary</h4>
          <ul className="score-cards">
            <li>
              <div className="score-card">
                <AiOutlineThunderbolt />
                <div>
                  <span>Reaction</span>
                </div>
                <div className="score">
                  <span>
                    <span className="dark">80</span> / 100
                  </span>
                </div>
              </div>
            </li>
            <li>
              <div className="score-card">
                <BiBrain/>
                <div>
                  <span>Memory</span>
                </div>
                <div className="score">
                  <span>
                    <span className="dark">92</span> / 100
                  </span>
                </div>
              </div>
            </li>
            <li>
              <div className="score-card">
                <BiComment/>
                <div>
                  <span>Verbal</span>
                </div>
                <div className="score">
                  <span>
                    <span className="dark">61</span> / 100
                  </span>
                </div>
              </div>
            </li>
            <li>
              <div className="score-card">
                <AiOutlineEye/>
                <div>
                  <span>Visual</span>
                </div>
                <div className="score">
                  <span>
                    <span className="dark">72</span> / 100
                  </span>
                </div>
              </div>
            </li>
          </ul>
          <button className="continue">Continue</button>
        </div>
      </div>
    </div>
  );
}
