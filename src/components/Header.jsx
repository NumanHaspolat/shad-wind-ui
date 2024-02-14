import React, { useEffect, useRef } from "react";
import { FaGithub } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { CiWarning } from "react-icons/ci";
import gsap from "gsap";

const Header = () => {
  const navTo = useNavigate();
  const app = useRef(null);
  const tl = useRef();

  useEffect(() => {
    tl.current = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.current
      .fromTo(
        ".color-light",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1.2 }
      )
      .fromTo(
        ".header-head",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1.3 },
        "-=0.75"
      )
      .fromTo(
        ".par",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1 },
        "-=1.15"
      )
      .fromTo(
        ".header-fill",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1.5 },
        "-=1.1"
      )
      .fromTo(
        ".header-out",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1 },
        "-=1.1"
      );

    return () => {
      tl.current.kill();
    };
  }, []);
  return (
    <main className="main" ref={app}>
      <span className="color-light flex gap-3 warn fs-1 items-center">
        <CiWarning color="white" fontSize={20} />
        Not fully responsive - Demo version
      </span>
      <header className="header-head">From Vision to Reality</header>
      <p className="par">
        Craft with Excellence: Shadcn's Best Meets{" "}
        <span className="text-underline">Full Tailwind class Integration</span>{" "}
        . Accessible . Easy To Use & Open Source..
      </p>
      <div className="flex gap-5">
        <button
          className="button-filled transition-2 fs-1 p-button header-fill"
          onClick={() => navTo("/docs")}
        >
          Get Started
        </button>
        <button className="button-outlined transition-2 fs-1 p-button header-out">
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
