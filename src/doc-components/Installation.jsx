import React from "react";

const Installation = ({ selectedDoc }) => {
  return (
    <div className="color-light">
      <span className="par-2">
        Docs {">"}{" "}
        <span className="bold color-light capital">{selectedDoc}</span>
      </span>
    </div>
  );
};

export default Installation;
