import React from "react";
import "../App.css";
import { HiOutlineMail } from "react-icons/hi";
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
      <h5 className="head-3">With Icon</h5>
      <PreCode
        code={`
        <button class="button-filled transition-1">
        <HiOutlineMail />  Login with Email
</button>`}
      />
    </div>
  );
};

export default Button;
