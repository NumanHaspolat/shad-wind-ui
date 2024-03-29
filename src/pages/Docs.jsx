import React, { useState } from "react";
import Catalogs from "../doc-components/Catalogs";
import Introduction from "../doc-components/Introduction";
import Installation from "../doc-components/Installation";
import Button from "../doc-components/Button";
import Avatar from "../doc-components/Avatar";
import Input from "../doc-components/Input";
import Combobox from "../doc-components/Combobox";
import Checkbox from "../doc-components/Checkbox";
import Login from "../doc-components/Login";
import Register from "../doc-components/Register";
import Horizontal from "../doc-components/Horizontal";
import Menubar from "../doc-components/Menubar";
import Date from "../doc-components/Date";
import { Route, Routes } from "react-router-dom";
import Accordion from "../doc-components/Accordion";

const Docs = ({ componentsLinks }) => {
  const [selectedDoc, setSelectedDoc] = useState("introduction");

  return (
    <div id="docs" style={{ display: "flex" }}>
      <div style={{ flex: 1 }}>
        <Catalogs
          componentsLinks={componentsLinks}
          setSelectedDoc={setSelectedDoc}
          selectedDoc={selectedDoc}
        />
      </div>
      <div style={{ flex: 4 }}>
        <Routes>
          <Route
            path="introduction"
            element={<Introduction selectedDoc={selectedDoc} />}
          />
          <Route
            path="installation"
            element={<Installation selectedDoc={selectedDoc} />}
          />
          <Route path="button" element={<Button selectedDoc={selectedDoc} />} />
          <Route path="avatar" element={<Avatar selectedDoc={selectedDoc} />} />
          <Route path="input" element={<Input selectedDoc={selectedDoc} />} />
          <Route
            path="checkbox"
            element={<Checkbox selectedDoc={selectedDoc} />}
          />
          <Route
            path="combobox"
            element={<Combobox selectedDoc={selectedDoc} />}
          />
          <Route path="login" element={<Login selectedDoc={selectedDoc} />} />
          <Route
            path="register"
            element={<Register selectedDoc={selectedDoc} />}
          />
          <Route
            path="horizontal"
            element={<Horizontal selectedDoc={selectedDoc} />}
          />
          <Route path="date" element={<Date selectedDoc={selectedDoc} />} />
          <Route
            path="accordion"
            element={<Accordion selectedDoc={selectedDoc} />}
          />
          <Route
            path="menubar"
            element={<Menubar selectedDoc={selectedDoc} />}
          />
        </Routes>
      </div>
    </div>
  );
};

export default Docs;
