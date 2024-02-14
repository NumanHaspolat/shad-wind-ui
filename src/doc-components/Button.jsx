import React from "react";
import "../App.css";

const Button = ({ selectedDoc }) => {
  return (
    <div>
      <span className="par-2">
        Docs {">"}{" "}
        <span className="bold color-light capital">{selectedDoc}</span>
      </span>
    </div>
  );
};

export default Button;
