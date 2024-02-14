import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const AccordionItem = ({ title, desc }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="acc-item-div">
      <div className="acc-flex-div" onClick={() => setIsOpen(!isOpen)}>
        <button
          style={{
            marginTop: "1.4rem",
          }}
          onClick={() => setIsOpen(!isOpen)}
          className="accordion-trigger"
        >
          {title}
        </button>
        <IoIosArrowDown
          color="#95959E"
          fontSize={14}
          className={isOpen ? "turn-up" : "turn-down"}
          onClick={() => setIsOpen(!isOpen)}
          style={{
            marginTop: "1rem",
          }}
        />
      </div>

      <div className={isOpen ? "height-tr" : "border-bot-2"}></div>
      {isOpen && <div className="accordion-content">{desc}</div>}
      <div className={isOpen && "border-bot-2"}></div>
    </div>
  );
};

export default AccordionItem;
