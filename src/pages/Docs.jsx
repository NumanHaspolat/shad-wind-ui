import React, { useState } from "react";
import Catalogs from "../doc-components/Catalogs";
import Introduction from "../doc-components/Introduction";
import Installation from "../doc-components/Installation";

const Docs = () => {
  const [selectedDoc, setSelectedDoc] = useState("introduction");

  const docComponents = {
    introduction: <Introduction selectedDoc={selectedDoc} />,
    installation: <Installation selectedDoc={selectedDoc} />,
  };

  return (
    <div id="docs" style={{ display: "flex" }}>
      <div style={{ flex: 1 }}>
        <Catalogs setSelectedDoc={setSelectedDoc} selectedDoc={selectedDoc} />
      </div>
      <div style={{ flex: 3 }}>{docComponents[selectedDoc]}</div>
    </div>
  );
};

export default Docs;
