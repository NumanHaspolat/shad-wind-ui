import React from "react";
import PreCode from "./PreCode";
import AccordionItem from "../components/AccItem";

const Accordion = ({ selectedDoc }) => {
  //   const accordionItems = [
  //     {
  //       title: "Is it accessible?",
  //       desc: "Yes. It adheres to the WAI-ARIA design pattern.",
  //     },
  //     {
  //       title: "Is it styled?",
  //       desc: "Yes. It comes with default styles that match the other components' aesthetic.",
  //     },
  //     {
  //       title: "Is it animated?",
  //       desc: "Yes. It's animated by default, but you can disable it if you prefer.",
  //     },
  //   ];

  //   const accordionUsageExample = `
  // <Accordion>
  //   {accordionItems.map(item => (
  //     <AccordionItem key={item.title} title={item.title} desc={item.desc} />
  //   ))}
  // </Accordion>`;

  return (
    <div>
      <span className="par-2">
        Docs {">"} <span className="bold color-light capital">Accordion</span>
      </span>
      <h2 className="head">Accordion</h2>
      <p className="par-3">
        A vertically stacked set of interactive headings that each reveal a
        section of content.
      </p>
    </div>
  );
};

export default Accordion;
