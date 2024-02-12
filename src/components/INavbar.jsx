import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const INavbar = () => {
  const navTo = useNavigate();
  return (
    <div className="menubar menubar-own space-between">
      <div className="let-nav">
        <h4 className="logo flex items-center gap-2" onClick={() => navTo("/")}>
          <img
            src="https://www.builtatlightspeed.com/icons/custom/shadcn-ui.png"
            alt=""
            className="avatar"
          />
          shadwind/ui
        </h4>
        <button
          className="menubar-item button-outlined p-button transition-2"
          onClick={() => navTo("/docs")}
        >
          Docs
        </button>
        <button
          className="menubar-item button-borderless p-button transition-2"
          onClick={() => navTo("/examples")}
        >
          Examples
        </button>
        <button className="menubar-item button-borderless p-button transition-2">
          Get Started
        </button>
      </div>

      <div className="right-nav">
        <input
          type="text"
          className="input-outlined p-input b-radius-3 italic transition-1"
          placeholder="Search"
        />
        <a
          style={{
            color: "aliceblue",
          }}
          href="https://github.com/NumanHaspolat"
        >
          <FaGithub fontSize={30} />
        </a>
        <a
          style={{
            color: "aliceblue",
          }}
          href="https://github.com/NumanHaspolat"
        >
          <FaLinkedin fontSize={30} />
        </a>
      </div>
    </div>
  );
};

export default INavbar;
