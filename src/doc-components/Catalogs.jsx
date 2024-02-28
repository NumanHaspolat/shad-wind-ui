import React from "react";
import { Link } from "react-router-dom";

const Catalogs = ({ setSelectedDoc, selectedDoc }) => {
  const gettingStartedLinks = [
    { name: "Introduction", path: "introduction" },
    { name: "Installation", path: "installation" },
  ];

  const componentsLinks = [
    { name: "Accordion", path: "accordion" },
    { name: "Avatar", path: "avatar" },
    { name: "Button", path: "button" },
    { name: "Checkbox", path: "checkbox" },
    { name: "Combobox", path: "combobox" },
    { name: "Date Picker", path: "date" },
    { name: "Horizontal", path: "horizontal" },
    { name: "Input", path: "input" },
    { name: "Login Page", path: "login" },
    { name: "Register Page", path: "register" },
    { name: "Menubar", path: "menubar" },
  ];
  return (
    <div className="catalogs">
      <div className="get-start-cat flex flex-col gap-3">
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

      <div className="comps-cat flex flex-col gap-3">
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
