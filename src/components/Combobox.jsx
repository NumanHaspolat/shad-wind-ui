import React, { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import "../App.css";

const Combobox = ({ roles, defaultValue, onRoleSelect, noBorder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (role) => {
    setSelected(role);
    setIsOpen(false);
    onRoleSelect && onRoleSelect(role);
  };

  useEffect(() => {
    setSelected(defaultValue);
  }, []);

  return (
    <div className="combobox-container">
      <button
        className="combobox flex items-center space-between"
        onClick={toggleDropdown}
        style={{
          border: noBorder && "none",
        }}
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
