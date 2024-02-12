import React from "react";
import { FaGithub } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navTo = useNavigate();
  return (
    <main className="main">
      <header>From Vision to Reality</header>
      <p className="par">
        Craft with Excellence: Shadcn's Best Meets Full Tailwind class Integration
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

export default Main;
