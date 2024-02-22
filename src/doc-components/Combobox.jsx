import React, { useState } from "react";
import Combobox from "../components/Combobox";
import CodePreview from "./CodePreview";

const Combobox1 = () => {
  const [roles, setRoles] = useState([
    "Turkey",
    "USA",
    "Germany",
    "France",
    "Canada",
    "Japan",
  ]);

  return (
    <div>
      <span className="par-2">
        Docs {">"} <span className="bold color-light capital">Combobox</span>
      </span>
      <h2 className="head">Combobox</h2>
      <p className="par-3">
        Autocomplete input and command palette with a list of suggestions.
      </p>
      <h5 className="head-2 border-bot p-3">Preview</h5>
      <h2 className="head-3">Choose Your Country</h2>
      <Combobox roles={roles} defaultValue={roles[0]} />
      <h5 className="head-2 border-bot p-3">Code</h5>
      <CodePreview
        code={`
        import React, { useEffect, useState } from "react";
        import { IoIosArrowDown } from "react-icons/io";
        import "../App.css";
        
        const Combobox = ({ roles, defaultValue }) => {
          const [isOpen, setIsOpen] = useState(false);
          const [selected, setSelected] = useState(null);
        
          const toggleDropdown = () => setIsOpen(!isOpen);
        
          const handleSelect = (role) => {
            setSelected(role);
            setIsOpen(false);
          };
        
          useEffect(() => {
             setSelected(defaultValue) 
          }, [])
        
          return (
            <div className="combobox-container">
              <button
                className="combobox flex items-center space-between"
                onClick={toggleDropdown}
              >
                {selected || "Select Role"}
                <IoIosArrowDown color="white" />
              </button>
              {isOpen && (
                <div className="dropdown">
                  {roles.map((role, index) => (
                    <div
                      key={index}
                      className="dropdown-item"
                      onClick={() => handleSelect(role)}
                    >
                      {role}
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        };
        
        export default Combobox;

       In other component ... <Combobox roles={roles} defaultValue={roles[0]}/>
        
      `}
      />{" "}
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
        As you can see there is one option but dont forgot to use
        tailwind classes to more choices.
      </p>
    </div>
  );
};

export default Combobox1;
