import React from "react";
import "../App.css";
import PreCode from "./PreCode";

const Button = ({ selectedDoc }) => {
  return (
    <div>
      <span className="par-2">
        Docs {">"}{" "}
        <span className="bold color-light capital">{selectedDoc}</span>
      </span>
      <h2 className="head">Button</h2>
      <p className="par-3">
        Displays a button or a component that looks like a button.
      </p>
      <PreCode
        code={`
        <button class="button-filled">
        Preview
      </button>`}
      />
    </div>
  );
};

export default Button;
