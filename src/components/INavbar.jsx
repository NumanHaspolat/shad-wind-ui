import React, { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const INavbar = ({ componentsLinks }) => {
  const navTo = useNavigate();
  const [activeItem, setActiveItem] = useState("");
  // const [docSearch, setDocSearch] = useState("");
  // const [showModal, setShowModal] = useState(false);
  // const [filteredResults, setFilteredResults] = useState([]);
  const navigateTo = (path) => {
    navTo(path);
    setActiveItem(path);
  };

  const menuItemClass = (path) =>
    `menubar-item p-button transition-2 ${
      activeItem === path
        ? "button-borderless color-light"
        : "button-borderless"
    }`;

  // const handleInput = (e) => {
  //   const searchText = e.target.value.toLowerCase();
  //   setDocSearch(searchText);
  //   const filteredLinks = componentsLinks.filter((component) =>
  //     component.name.toLowerCase().includes(searchText)
  //   );
  //   setShowModal(true);
  //   setFilteredResults(filteredLinks);
  // };

  return (
    <div className="menubars-cnt">
      {/* {showModal && (
        <div className="search-modal">
          {filteredResults.map((link) => (
            <div
              key={link.path}
              onClick={() => {
                navigateTo(`/docs/${link.path}`);
                setShowModal(false);
              }}
            >
              {link.name}
            </div>
          ))}
        </div>
      )} */}
      <div className="menubar menubar-own space-between">
        <div className="let-nav">
          <h4
            className="logo flex items-center gap-2"
            onClick={() => navigateTo("/")}
          >
            <img
              src="https://avatars.githubusercontent.com/u/139895814?s=280&v=4"
              alt=""
              className="avatar"
            />
            shadwind/ui
          </h4>
          <div className="nav-items-div">
            <button
              className={menuItemClass("/docs/introduction")}
              onClick={() => navigateTo("/docs/introduction")}
            >
              Docs
            </button>
            <button
              className={menuItemClass("/examples")}
              onClick={() => navigateTo("/examples")}
            >
              Examples
            </button>
            <button
              className={menuItemClass("/docs/installation")}
              onClick={() => navigateTo("/docs/installation")}
            >
              Get Started
            </button>
          </div>
        </div>

        <div className="right-nav">
          <input
            type="text"
            className="input-outlined input-outlined-own p-input b-radius-4 transition-1"
            placeholder="Search documentation..."
            // onChange={handleInput}
            onClick={() => navTo("/docs/introduction")}
          />
          <a
            style={{
              color: "aliceblue",
              marginTop: ".15rem",
            }}
            target="_blank"
            href="https://github.com/NumanHaspolat"
          >
            <FaGithub fontSize={20} />
          </a>
          <a
            style={{
              color: "aliceblue",
              marginTop: ".15rem",
            }}
            target="_blank"
            href="https://www.linkedin.com/in/numan-haspolat/"
          >
            <FaLinkedin fontSize={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default INavbar;
