import React, { useEffect, useRef, useState } from "react";
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

  const previewButtonRef = useRef(null);
  const codeButtonRef = useRef(null);
  const indicatorRef = useRef(null);

  useEffect(() => {
    const indicator = indicatorRef.current;
    const previewButton = previewButtonRef.current;
    const codeButton = codeButtonRef.current;

    if (view === "preview") {
      indicator.style.width = `${previewButton.offsetWidth}px`;
      indicator.style.transform = `translateX(${previewButton.offsetLeft}px)`;
    } else if (view === "code") {
      indicator.style.width = `${codeButton.offsetWidth}px`;
      indicator.style.transform = `translateX(${codeButton.offsetLeft}px)`;
    }
  }, [view]);

  const buttonStyle = (currentView) => ({
    marginRight: "10px",
    padding: "0.5rem 1rem",
    color: view === currentView ? "white" : "#ccc",
    cursor: "pointer",
    background: "none",
    border: "none",
    outline: "none",
  });

  return (
    <div>
      <div style={{ position: "relative" }}>
        <button
          ref={previewButtonRef}
          onClick={() => setView("preview")}
          style={buttonStyle("preview")}
        >
          Preview
        </button>
        <button
          ref={codeButtonRef}
          onClick={() => setView("code")}
          style={buttonStyle("code")}
        >
          Code
        </button>
        <div ref={indicatorRef} className="indicator"></div>
      </div>
      {view === "code" ? <CodePreview code={code} /> : <Preview code={code} />}
    </div>
  );
};

export default PreviewCodeContainer;
