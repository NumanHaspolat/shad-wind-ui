import React from "react";

const Introduction = ({ selectedDoc }) => {
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
      <p className="par-5 italic">
        Use this as a reference to build your own component libraries.
      </p>
    </div>
  );
};

export default Introduction;
