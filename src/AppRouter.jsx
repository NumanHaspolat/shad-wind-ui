import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import INavbar from "./components/INavbar";
import Home from "./pages/Home";
import Docs from "./pages/Docs";
import Examples from "./pages/Examples";
import GetStarted from "./pages/GetStarted";
import Introduction from "./doc-components/Introduction";
import Installation from "./doc-components/Installation";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <INavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/docs" element={<Docs />}>
          <Route path="introduction" element={<Introduction />} />
          <Route path="installation" element={<Installation />} />
        </Route>
        <Route path="/docs" element={<Docs />} />
        <Route path="/examples" element={<Examples />} />
        <Route path="/get-started" element={<GetStarted />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
