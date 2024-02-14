import React from "react";
import { Link } from "react-router-dom";

const Catalogs = ({ setSelectedDoc, selectedDoc }) => {
  const gettingStartedLinks = [
    { name: "Introduction", path: "introduction" },
    { name: "Installation", path: "installation" },
  ];

  const componentsLinks = [
    { name: "Buttons", path: "buttons" },
    { name: "Inputs", path: "inputs" },
    { name: "Checkbox", path: "checkbox" },
    { name: "Menubar", path: "menubar" },
    { name: "Combobox", path: "combobox" },
    { name: "Avatar", path: "avatar" },
    { name: "Login Page", path: "login-page" },
    { name: "Register Page", path: "register-page" },
    { name: "Horizontal", path: "horizontal" },
    { name: "Date Picker", path: "Date Picker" },
  ];
  return (
    <div className="catalogs">
      <div className="get-start-cat flex flex-col gap-2">
        <p className="fs-2">Getting Started</p>
        {gettingStartedLinks.map((link) => (
          <Link
            key={link.path}
            to={`/docs/${link.path}`}
            className={`cat-item ${
              selectedDoc === link.path ? "cat-item-selected" : ""
            }`}
            onClick={() => setSelectedDoc(link.path)}
          >
            {link.name}
          </Link>
        ))}
      </div>

      <div className="comps-cat flex flex-col gap-2">
        <p>Components</p>
        {componentsLinks.map((link) => (
          <Link
            key={link.path}
            to={`/docs/${link.path}`}
            className={`cat-item ${
              selectedDoc === link.path ? "cat-item-selected" : ""
            }`}
            onClick={() => setSelectedDoc(link.path)}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Catalogs;
