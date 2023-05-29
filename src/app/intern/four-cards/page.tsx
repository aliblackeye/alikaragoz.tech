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
                  <img
                    src={"assets/images/detective.png"}
                    alt="supervisor"
                  />
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
                  <img
                    src={"assets/images/team.png"}
                    alt="team builder"
                  />
                </div>
              </div>
            </div>
            <div className="card yellow">
              <h6>Karma</h6>
              <p>Monitors activity to identify project roadblocks</p>
              <div className="card-footer">
                <div className="icon">
                  <img
                    src={"assets/images/lightbulb.png"}
                    alt="karma"
                  />
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
                  <img
                    src={"assets/images/calculator.png"}
                    alt="calculator"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
