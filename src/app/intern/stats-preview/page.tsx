import Image from "next/image";

import img from "@/assets/images/stats.png";

export default function StatsPreview() {
  return (
    <div className="stats-preview">
      <div className="stats-preview__left">
        <h1 className="title">
          Get <span className="purple">insights</span> that help your business
          grow.
        </h1>
        <p className="description">
          Discover the benefits of data analytics and make better decisions
          regarding revenue, customer experience, and overall efficiency.
        </p>

        <div className="stats">
          <div className="stats__stat">
            <h2 className="number">10k+</h2>
            <p className="description">companies</p>
          </div>
          <div className="stats__stat">
            <h2 className="number">314</h2>
            <p className="description">templates</p>
          </div>
          <div className="stats__stat">
            <h2 className="number">12M+</h2>
            <p className="description">queries</p>
          </div>
        </div>
      </div>
      <div className="stats-preview__right">
        <Image src={img} alt="stats" />
      </div>
    </div>
  );
}
