import React from "react";
import PreCode from "./PreCode";
import Download from "../components/Download";

const Menubar = ({ selectedDoc }) => {
  return (
    <div>
      <span className="par-2">
        Docs {">"} <span className="bold color-light capital">Menubar</span>
      </span>
      <h2 className="head">Menubar</h2>
      <p className="par-3">
        A visually persistent menu common in desktop applications that provides
        quick access to a consistent set of commands.
      </p>
      <h5 className="head-3">Menubar Example</h5>
      <PreCode
        code={`    
      <div class="menubar">
        <h2 class="logo">LOGO</h2>
        <button class="menubar-item button-outlined p-button transition-2">
          Home
        </button>
        <button class="menubar-item button-borderless p-button transition-2">
          About
        </button>
        <button class="menubar-item button-borderless p-button transition-2">
          Contact
        </button>
        <img
          src="https://static.vecteezy.com/system/resources/previews/020/765/399/non_2x/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg"
          alt="avatar-img"
          class="avatar"
        />
      </div>
`}
      />{" "}
      <div className="flex gap-5 jus-center items-center p-5">
        <p className="par-3">
          Copy and paste to your project, that easy as pie...
        </p>
        <Download />
      </div>
      <p className="par-4">
        As you can see there is one of option but dont forgot to use tailwind
        classes and your creativity.
      </p>
    </div>
  );
};

export default Menubar;
