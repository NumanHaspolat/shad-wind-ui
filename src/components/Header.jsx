import React from "react";
import { FaGithub } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { CiWarning } from "react-icons/ci";

const Header = () => {
  const navTo = useNavigate();
  return (
    <main className="main">
      <span className="color-light flex gap-3 warn fs-1 items-center">
        <CiWarning color="white" fontSize={20} />
        Not fully responsive - Demo version
      </span>
      <header>From Vision to Reality</header>
      <p className="par">
        Craft with Excellence: Shadcn's Best Meets{" "}
        <span className="text-underline">Full Tailwind class Integration</span>{" "}
        . Accessible . Easy To Use & Open Source..
      </p>
      <div className="flex gap-5">
        <button
          className="button-filled transition-2 fs-1 p-button"
          onClick={() => navTo("/get-started")}
        >
          Get Started
        </button>
        <button className="button-outlined transition-2 fs-1 p-button">
          <a
            className="flex gap-2 items-center"
            style={{
              color: "white",
              textDecoration: "none",
            }}
            target="_blank"
            href="https://github.com/NumanHaspolat"
          >
            <FaGithub fontSize={17} />
            GitHub
          </a>
        </button>
      </div>
    </main>
  );
};

export default Header;
