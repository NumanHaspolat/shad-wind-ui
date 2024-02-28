import React from "react";
import PreCode from "./PreCode";
import AccordionItem from "../components/AccItem";
import CodePreview from "./CodePreview";
import Download from "../components/Download";

const Accordion = ({ selectedDoc }) => {
  const accordionItems = [
    {
      title: "Is it accessible?",
      desc: "Yes. It adheres to the WAI-ARIA design pattern.",
    },
    {
      title: "Is it styled?",
      desc: "Yes. It comes with default styles that match the other components' aesthetic.",
    },
    {
      title: "Is it animated?",
      desc: "Yes. It's animated by default, but you can disable it if you prefer.",
    },
  ];

  const accordionUsageExample = `
  <Accordion>
    {accordionItems.map(item => (
      <AccordionItem key={item.title} title={item.title} desc={item.desc} />
    ))}
  </Accordion>`;

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
      <h2 className="head-2">Before We Start</h2>
      <div className="flex gap-5 jus-center items-center">
        <p className="par-3">If you haven't installed shadwind/ui yet</p>
        <Download />
      </div>
      <h5 className="head-2 border-bot p-3">Preview</h5>
      {accordionItems.map(({ title, desc }) => (
        <AccordionItem key={title} title={title} desc={desc} />
      ))}
      <h5 className="head-2 border-bot p-3">Code</h5>
      <div>
        <CodePreview
          code={`
          <div className="acc-item-div">
          <div className="acc-flex-div" onClick={() => setIsOpen(!isOpen)}>
            <button style={{ marginTop: "1.4rem" }} className="accordion-trigger">
              {title}
            </button>
            <IoIosArrowDown
              color="#95959E"
              fontSize={14}
              style={{ marginTop: "1rem" }}
            />
        </div>
    
          <div
            ref={contentRef}
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
        `}
        />
      </div>
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
        As you can see there is one thing of option but dont forgot to use
        tailwind classes to more choices.
      </p>
    </div>
  );
};

export default Accordion;
