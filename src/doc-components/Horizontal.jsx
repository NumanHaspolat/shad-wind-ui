import React from "react";
import PreCode from "./PreCode";
import Download from "../components/Download";

const Horizontal = () => {
  return (
    <div>
      {" "}
      <span className="par-2">
        Docs {">"} <span className="bold color-light capital">Horizontal</span>
      </span>
      <h2 className="head">Horizontal</h2>
      <p className="par-3">
        Horizontal, that make a awesome desing illustiration.
      </p>{" "}
      <h2 className="head-2">Before We Start</h2>
      <div className="flex gap-5 jus-center items-center">
        <p className="par-3">If you haven't installed shadwind/ui yet</p>
        <Download />
      </div>
      <h2 className="head-2">Solid HR</h2>
      <PreCode
        code={`
       <p class="par-3 pt-3">If you look at websites with beautiful designs,</p>
        <div class="border-bot-3"></div>
        <p class="par-3 pt-3">They have some common features,</p>
        <div class="border-bot-3"></div>
        <p class="par-3 pt-3">They all use Horizonral, then u should too.</p>`}
      />{" "}
      <h2 className="head-2">Content Bottoms</h2>
      <PreCode
        code={`
        <div class="border-bot p-1">Important Header!</div>
        <p class="par-3 p-5">- And even important par...</p>`}
      />
      <p className="par-4">
        As you can see there is one of options but dont forgot to use tailwind
        classes to more choices.
      </p>
    </div>
  );
};

export default Horizontal;
