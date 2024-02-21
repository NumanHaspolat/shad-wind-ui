import React from "react";
import PreCode from "./PreCode";

const Avatar = () => {
  return (
    <div>
      <span className="par-2">
        Docs {">"} <span className="bold color-light capital">Avatar</span>
      </span>
      <h2 className="head">Avatar</h2>
      <p className="par-3">
        An image element with a fallback for representing the user.
      </p>
      <PreCode
        code={`
                   <img
      src="https://github.com/shadcn.png"
      alt="avatar-img"
      class="avatar"
/>
      `}
      />
      <h3 className="head-2">With Menubar</h3>

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
                src="https://github.com/shadcn.png"
                alt="avatar-img"
                class="avatar"
              />
</div>
      `}
      />
      <p className="par-4">
        You can find more options on my repo
        <a
          className="gray"
          target="_blank"
          href="https://github.com/NumanHaspolat/shad-wind-ui"
        >
          GitHub
        </a>
      </p>
      <p className="par-4">
        As you can see there is couple of option but dont forgot to use tailwind
        classes to more choices.
      </p>
    </div>
  );
};

export default Avatar;
