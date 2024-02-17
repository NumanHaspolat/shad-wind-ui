import React from "react";

const Accordion = ({ selectedDoc }) => {
  return (
    <div>
      <span className="par-2">
        Docs {">"}{" "}
        <span className="bold color-light capital">{selectedDoc}</span>
      </span>
    </div>
  );
};

export default Accordion;
