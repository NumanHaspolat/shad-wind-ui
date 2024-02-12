import React, { useState } from "react";
import "../App.css";

const HoverCard = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex jus-center items-center h-100">
      <div className="container">
        <button
          className="trigger-btn"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Hover Over Me!
        </button>
        <div className={`hover-card ${isHovered ? "show" : ""}`}>
          <div className="card-content">
            <div className="avatar">
              <img src="https://github.com/vercel.png" alt="Vercel Logo" />
            </div>
            <div className="info">
              <h4>@nextjs</h4>
              <p>The React Framework – created and maintained by @vercel.</p>
              <div className="joined">
                <span>Joined December 2021</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HoverCard;
