import React from "react";
import "../App.css";
import PreCode from "./PreCode";
import Download from "../components/Download";

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
      <h2 className="head-2">Before We Start</h2>
      <div className="flex gap-5 jus-center items-center">
        <p className="par-3">If you haven't installed shadwind/ui yet</p>
        <Download />
      </div>

      <h4 className="head-2 border-bot">Examples</h4>
      <h5 className="head-3">Filled</h5>
      <PreCode
        code={`
        <button class="button-filled">
        Preview
</button>`}
      />
      <h5 className="head-3">Outlined</h5>
      <PreCode
        code={`
        <button class="button-outlined">
        Preview
</button>`}
      />
      <h5 className="head-3">Borderless</h5>
      <PreCode
        code={`
        <button class="button-borderless">
        Preview
</button>`}
      />
      <h5 className="head-3">Link</h5>
      <PreCode
        code={`
        <button class="button-borderless-underline transition-1">
        Link
</button>`}
      />
      <p className="par-4">
        As you can see there is couple of options but dont forgot to use
        tailwind classes to more choices.
      </p>
    </div>
  );
};

export default Button;
