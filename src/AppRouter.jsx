import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import INavbar from "./components/INavbar";
import Home from "./pages/Home";
import Docs from "./pages/Docs";
import Examples from "./pages/Examples";
import Introduction from "./doc-components/Introduction";
import Installation from "./doc-components/Installation";
import Footer from "./components/Footer";
import "./App.css";

const AppRouter = () => {
  return (
    <div className="app-container">
      <BrowserRouter>
        <INavbar />
        <div className="content-wrap">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/docs" element={<Docs />}>
              <Route path="introduction" element={<Introduction />} />
              <Route path="installation" element={<Installation />} />
            </Route>
            <Route path="/docs" element={<Docs />} />
            <Route path="/examples" element={<Examples />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
