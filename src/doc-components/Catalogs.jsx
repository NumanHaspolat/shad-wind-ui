import React from "react";
import { Link } from "react-router-dom";

const Catalogs = ({ setSelectedDoc, selectedDoc, componentsLinks }) => {
  const gettingStartedLinks = [
    { name: "Introduction", path: "introduction" },
    { name: "Installation", path: "installation" },
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
