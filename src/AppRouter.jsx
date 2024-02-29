import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import INavbar from "./components/INavbar";
import Home from "./pages/Home";
import Docs from "./pages/Docs";
import Examples from "./pages/Examples";
import Footer from "./components/Footer";
import "./App.css";

const AppRouter = () => {
  const componentsLinks = [
    { name: "Accordion", path: "accordion" },
    { name: "Avatar", path: "avatar" },
    { name: "Button", path: "button" },
    { name: "Checkbox", path: "checkbox" },
    { name: "Combobox", path: "combobox" },
    { name: "Date Picker", path: "date" },
    { name: "Horizontal", path: "horizontal" },
    { name: "Input", path: "input" },
    { name: "Login Page", path: "login" },
    { name: "Register Page", path: "register" },
    { name: "Menubar", path: "menubar" },
  ];
  return (
    <div className="app-container">
      <BrowserRouter>
        <INavbar componentsLinks={componentsLinks} />
        <div className="content-wrap">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/docs/*"
              element={<Docs componentsLinks={componentsLinks} />}
            />
            <Route path="/examples" element={<Examples />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
