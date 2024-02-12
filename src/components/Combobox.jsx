import React from "react";
import { FaArrowDownShortWide } from "react-icons/fa6";
import "../App.css";

const Combobox = () => {
  return (
    <div className="combobox-container">
      <FaArrowDownShortWide color="white" className="arrowIcon" />
      <select id="framework-select" className="combobox">
        <option value="">Select framework</option>
        <option value="next.js">Next.js</option>
        <option value="sveltekit">SvelteKit</option>
        <option value="nuxt.js">Nuxt.js</option>
        <option value="remix">Remix</option>
        <option value="JavaScript">JavaScript</option>
      </select>
    </div>
  );
};

export default Combobox;
