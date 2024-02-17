import React, { useState, useRef, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";

const AccordionItem = ({ title, desc }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      contentRef.current.style.maxHeight = `${contentRef.current.scrollHeight}px`;
      contentRef.current.style.margin = "1rem 0";
    } else {
      contentRef.current.style.maxHeight = "0px";
      contentRef.current.style.margin = "0";
    }
  }, [isOpen]);

  return (
    <div className="acc-item-div">
      <div className="acc-flex-div" onClick={() => setIsOpen(!isOpen)}>
        <button style={{ marginTop: "1.4rem" }} className="accordion-trigger">
          {title}
        </button>
        <IoIosArrowDown
          color="#95959E"
          fontSize={14}
          className={`arrow-icon ${isOpen ? "turn-up" : "turn-down"}`}
          style={{ marginTop: "1rem" }}
        />
      </div>

      <div
        ref={contentRef}
        className={`accordion-content ${isOpen ? "height-tr" : ""}`}
        style={{
          maxHeight: "0px",
          overflow: "hidden",
          transition: "max-height 0.12s, margin 0.5s ease",
          margin: isOpen ? "1rem 0" : "0",
        }}
      >
        {desc}
      </div>
      {<div className="border-bot-2"></div>}
    </div>
  );
};

export default AccordionItem;
