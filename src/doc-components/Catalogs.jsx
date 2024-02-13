import React from "react";

const Catalogs = () => {
  return (
    <div className="catalogs">
      <div className="get-start-cat flex flex-col gap-2">
        <p className="fs-2">Getting Started</p>
        <a href="">Introduction</a>
        <a href="">Installation</a>
      </div>

      <div className="comps-cat flex flex-col gap-2">
        <p>Components</p>
        <a href="">Buttons</a>
        <a href="">Inputs</a>
        <a href="">Combobox</a>
        <a href="">Avatar</a>
        <a href="">Checkbox</a>
        <a href="">Menubar</a>
        <a href="">Login Page</a>
        <a href="">Register Page</a>
        <a href="">Horizontal</a>
        <a href="">Date Picked</a>
      </div>
    </div>
  );
};

export default Catalogs;
