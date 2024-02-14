import React from "react";
import "../App.css";

const Buttons = () => {
  return (
    <div className="flex jus-center items-center gap-4">
      <button className="button-filled transition-2 fs-1">
        Get Started
      </button>
      <button className="button-outlined transition-2 fs-1 p-button">
        Get Started
      </button>
      <button className="button-borderless transition-2 fs-1 p-button">
        Get Started
      </button>
    </div>
  );
};

export default Buttons;
