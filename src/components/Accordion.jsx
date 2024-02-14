import React from "react";
import AccordionItem from "../components/AccItem";

const Accordion = ({ accordionItems }) => {
  return (
    <div className="accordion">
      <p className="faq">FAQ</p>
      {accordionItems.map((item) => (
        <AccordionItem key={item.title} title={item.title} desc={item.desc} />
      ))}
    </div>
  );
}; 

export default Accordion;
