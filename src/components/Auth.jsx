import React from "react";
import { FaGithub } from "react-icons/fa";
import Register from "./Register";
import Login from "./Login";

const Auth = () => {
  return (
    <div className="auth">
      <Register />
      {/*  */}
      <div className="hr"></div>
      <Login />
    </div>
  );
};

export default Auth;
