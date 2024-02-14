import React from "react";
import Accordion from "../components/Accordion";

const Introduction = ({ selectedDoc }) => {
  const accordionItems = [
    {
      title: "Why copy/paste and not packaged as a dependency?",
      desc: `The idea behind this is to give you ownership and control over the code, allowing you to decide how the components are built and styled.`,
    },
    {
      title: "Do you plan to publish it as an npm package?",
      desc: "No. I have no plans to publish it as an npm package.",
    },
    {
      title: "Can I use this in my project?",
      desc: `Yes. Free to use for personal and commercial projects. No attribution required.`,
    },
    {
      title: "Why you should use shadwind/ui?",
      desc: `Because shadwind includes all tailwind class names and also brings the perfect shadcn style.
      `,
    },
  ];

  return (
    <div className="intro">
      <span className="par-2">
        Docs {">"}{" "}
        <span className="bold color-light capital">{selectedDoc}</span>
      </span>
      <h2 className="head">Introduction</h2>
      <p className="par-3">
        Craft with Excellence: Shadcn's Best Meets Full Tailwind class
        Integration . Accessible . Easy To Use & Open Source..
      </p>

      <p className="par-4">
        This is <span className="bold">NOT</span> a component library. It's a
        collection of re-usable components that you can copy and paste into your
        apps.
      </p>
      <p className="par-4">
        <span className="bold">
          What do you mean by not a component library?
        </span>
      </p>
      <p className="par-4">
        I mean you do not install it as a dependency. It is not available or
        distributed via npm.
      </p>
      <p className="par-4">
        Pick the components you need. Copy and paste the code into your project
        and customize to your needs. The code is yours.
      </p>
      <p
        className="par-5 italic"
        style={{
          color: "GrayText",
          marginTop: "2rem",
        }}
      >
        Use this as a reference to build your own component libraries.
      </p>

      <Accordion accordionItems={accordionItems} />
    </div>
  );
};

export default Introduction;
