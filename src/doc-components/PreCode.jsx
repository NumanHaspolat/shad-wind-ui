import React, { useState } from "react";
import CodePreview from "./CodePreview";

const Preview = ({ code }) => (
  <div
    style={{
      padding: "1rem",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "#09090B",
      color: "white",
      border: "1px solid #27272A",
      borderRadius: ".3rem",
      margin: ".5rem 0",
    }}
    className="preview-div"
  >
    <div dangerouslySetInnerHTML={{ __html: code }}></div>
  </div>
);

const PreviewCodeContainer = ({ code }) => {
  const [view, setView] = useState("preview");

  const buttonStyle = (currentView) => ({
    marginRight: "10px",
    padding: "0.5rem 1rem",
    color: view === currentView ? "white" : "#ccc",
    borderBottom: view === currentView ? "2px solid white" : "none",
    cursor: "pointer",
    borderRadius: "0",
    transition: ".2s",
  });

  return (
    <div>
      <div>
        <button
          onClick={() => setView("preview")}
          className={`button-borderless code-pre-but ${
            view === "preview" ? "active" : ""
          }`}
          style={buttonStyle("preview")}
        >
          Preview
        </button>
        <button
          className={`button-borderless code-pre-but ${
            view === "code" ? "active" : ""
          }`}
          style={buttonStyle("code")}
          onClick={() => setView("code")}
        >
          Code
        </button>
        {view === "code" ? (
          <CodePreview code={code} />
        ) : (
          <Preview code={code} />
        )}
      </div>
    </div>
  );
};

export default PreviewCodeContainer;
