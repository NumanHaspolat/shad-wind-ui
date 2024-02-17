import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { IoCopyOutline } from "react-icons/io5";
import { FaCheck } from "react-icons/fa";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const CodePreview = ({ code }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setIsCopied(true);

      setTimeout(() => setIsCopied(false), 3000);
    } catch (err) {
      console.error("Copy failed:", err);
    }
  };

  const customStyle = {
    ...atomOneDark,
    tag: { color: "#8b8b8b" },
    keyword: { color: "#95a3a5" },
    string: { color: "#eaecec" },
    function: { color: "#FFFFFF" },
    number: { color: "#e7f0f0" },
    pre: {
      whiteSpace: "pre-wrap",
      wordBreak: "break-word",
    },
  };
  return (
    <div style={{ position: "relative", margin: ".5rem 0" }}>
      <SyntaxHighlighter
        language="jsx"
        style={customStyle}
        showLineNumbers={true}
        wrapLongLines={true}
        customStyle={{
          padding: ".8rem",
          background: "#18181B",
          border: "1px solid #27272A",
          borderRadius: ".3rem",
          color: "white",
          fontSize: "14px",
          overflowX: "auto",
        }}
      >
        {code.trim()}
      </SyntaxHighlighter>
      {isCopied ? (
        <FaCheck
          style={{
            position: "absolute",
            top: "20px",
            fontSize: ".7rem",
            right: "20px",
            color: "white",
          }}
        />
      ) : (
        <IoCopyOutline
          style={{
            position: "absolute",
            top: "20px",
            fontSize: ".8rem",
            right: "20px",
            color: "white",
            cursor: "pointer",
          }}
          onClick={handleCopy}
        />
      )}
    </div>
  );
};

export default CodePreview;
