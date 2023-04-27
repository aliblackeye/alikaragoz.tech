import React from "react";

export default function ProfileCard() {
  return (
    <div className="profile-card">
      <div className="top"></div>
      <div className="bottom">
        <div className="avatar">
          <img
            src="https://avatars.githubusercontent.com/u/80913896?v=4"
            alt="avatar"
          />
        </div>
        <h1 className="name">
          Ali Karagöz <span className="age">{2023 - 2001}</span>
        </h1>
        <h4 className="location">Istanbul</h4>
        <div className="divider"></div>
        <div className="stats">
          <div className="stat">
            <div className="value">1K</div>
            <div className="type">Followers</div>
          </div>
          <div className="stat">
            <div className="value">4K</div>
            <div className="type">Likes</div>
          </div>
          <div className="stat">
            <div className="value">6</div>
            <div className="type">Photos</div>
          </div>
        </div>
      </div>
    </div>
  );
}
