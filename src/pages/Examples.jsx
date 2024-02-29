import React, { useEffect, useRef } from "react";
import Main from "../components/Main";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { CiWarning } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Examples = () => {
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
    <div className="pt-5">
      <main className="main" ref={app}>
        <span className="color-light flex gap-3 warn fs-1 items-center">
          <CiWarning color="white" fontSize={20} />
          Not fully responsive - Demo version
        </span>
        <header className="header-head">Build your component library</header>
        <p className="par header-par">
          Beautifully designed components that you can copy and paste into your
          apps. Accessible. Customizable. Open Source. Get Started GitHub
        </p>
        <div className="flex gap-5">
          <button
            className="button-filled transition-2 fs-1 p-button header-fill"
            onClick={() => navTo("/docs/introduction")}
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
      <Main />
    </div>
  );
};

export default Examples;
