import React from "react";
import Download from "../components/Download";
import CodePreview from "./CodePreview";
import PreCode from "./PreCode";
import "../App.css";

const Installation = ({ selectedDoc }) => {
  return (
    <div className="color-light">
      <span className="par-2">
        Docs {">"}{" "}
        <span className="bold color-light capital">{selectedDoc}</span>
      </span>
      <h2 className="head">Installation</h2>
      <p className="par-3">How to install classes and structure your app.</p>
      <h4 className="head-2">Welcome to shadwind/ui!</h4>
      <p
        className="par-1"
        style={{
          margin: "1rem 0",
        }}
      >
        Thank you for choosing shadwind/ui for your web development needs.
      </p>
      <p className="par-3">
        This guide will walk you through the installation process and show you
        how to start using our styles in your projects.
      </p>
      <p className="par-4">
        First of all, you do not need to use any commands to install shadwind
        ui, just download the shadwind-ui.css file below and integrate it into
        your project.
      </p>
      <div
        className="flex items-center gap-4 jus-center"
        style={{
          margin: "2rem",
        }}
      >
        <Download />
        <p> and let me show you how to use it in our project.</p>
      </div>
      <h2 className="head">Lets Get Started</h2>
      <p className="par-3 border-bot">How to use classes.</p>
      <p
        className="par-1"
        style={{
          marginTop: "1rem",
        }}
      >
        For example, if we want to add a button
      </p>
      <div className="border-bot">
        <PreCode
          code={`
          <button class="button-outlined transition-2 fs-1">
          Get Started
  </button>
        `}
        />
      </div>
      <div className="border-bot">
        <p
          className="par-1"
          style={{
            marginTop: "1rem",
          }}
        >
          or a menubar?
        </p>
        <h4 className="head-3">Code</h4>
        <PreCode
          code={`
          <div class="flex jus-center items-center">
      <div class="menubar">
              <h2 class="logo">LOGO</h2>
              <button class="menubar-item button-filled  transition-2">
                Home
              </button>
              <button class="menubar-item button-outlined transition-2">
                About
              </button>
              <button class="menubar-item button-borderless transition-2">
                Contact
              </button>
              <img
                  src="https://static.vecteezy.com/system/resources/previews/020/765/399/non_2x/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg"
                  alt="avatar-img"
                  class="avatar"
              />
        </div>
</div>
          
        `}
        />
      </div>
      <p className="par-4">
        And don't forget, you can use literally all tailwind classes besides
        these.
      </p>
    </div>
  );
};

export default Installation;
