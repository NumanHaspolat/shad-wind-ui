import React, { useState } from "react";
import Auth from "./Auth";
import Cards from "./Cards";
import Forms from "./Forms";

const Main = () => {
  const [selectedContent, setSelectedContent] = useState("Cards");

  const renderContent = () => {
    switch (selectedContent) {
      case "Auth":
        return <Auth />;
      case "Cards":
        return <Cards />;
      case "Forms":
        return <Forms />;
      default:
        return <Auth />;
    }
  };

  // Inline style ile butonun rengini kontrol etmek için fonksiyon
  const getButtonStyle = (buttonName) => {
    return {
      color: selectedContent === buttonName ? "white" : "",
    };
  };

  return (
    <main id="main">
      <div className="main-cnt">
        <ul className="main-ul">
          <button
            className="button-borderless transition-2 fs-1 p-button main-ul-items"
            style={getButtonStyle("Cards")}
            onClick={() => setSelectedContent("Cards")}
          >
            Cards
          </button>
          <button
            className="button-borderless transition-2 fs-1 p-button main-ul-items"
            style={getButtonStyle("Auth")}
            onClick={() => setSelectedContent("Auth")}
          >
            Auth
          </button>
          <button
            className="button-borderless transition-2 fs-1 p-button main-ul-items"
            style={getButtonStyle("Forms")}
            onClick={() => setSelectedContent("Forms")}
          >
            Forms
          </button>
        </ul>
        <div className="content">{renderContent()}</div>
      </div>
    </main>
  );
};

export default Main;
