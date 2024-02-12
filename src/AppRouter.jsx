import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import INavbar from "./components/INavbar";
import Home from "./pages/Home";
import Docs from "./pages/Docs";
import Examples from "./pages/Examples";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <INavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="/examples" element={<Examples />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
