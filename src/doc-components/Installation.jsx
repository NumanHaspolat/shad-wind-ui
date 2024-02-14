import React from "react";
import Download from "../components/Download";
import CodePreview from "./CodePreview";

const Installation = ({ selectedDoc }) => {
  return (
    <div className="color-light">
      <span className="par-2">
        Docs {">"}{" "}
        <span className="bold color-light capital">{selectedDoc}</span>
      </span>
      <h2 className="head">Installation</h2>
      <p className="par-3">How to install classes and structure your app.</p>
      <h4 className="head-2">Welcome to shadwind/ui!</h4>
      <p
        className="par-1"
        style={{
          margin: "1rem 0",
        }}
      >
        Thank you for choosing shadwind/ui for your web development needs.
      </p>
      <p className="par-3">
        This guide will walk you through the installation process and show you
        how to start using our styles in your projects.
      </p>
      <p className="par-4">
        First of all, you do not need to use any commands to install shadwind
        ui, just download the shadwind-ui.css file below and integrate it into
        your project.
      </p>
      <div
        className="flex items-center gap-4 jus-center"
        style={{
          margin: "2rem",
        }}
      >
        <Download />
        <p> and let me show you how to use it in our project.</p>
      </div>
      <h2 className="head">Lets Get Started</h2>
      <p className="par-3">How to use classes.</p>
      <CodePreview
        code={`      import React from "react";
        import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
        import {
          materialDark,
        } from "react-syntax-highlighter/dist/esm/styles/prism";
        
        const CodePreview = ({ code }) => {
          return (
            <SyntaxHighlighter language="jsx" style={materialDark}>
              {code.trim()}
            </SyntaxHighlighter>
          );
        };
        
        export default CodePreview;
        `}
      />
    </div>
  );
};

export default Installation;
