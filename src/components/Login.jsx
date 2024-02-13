import { FaGithub } from "react-icons/fa";
import React from "react";

const Login = () => {
  return (
    <div className="auth-cnt login">
      {/* <button className="button-outlined transition-2 fs-1  right-top">
      Login
    </button> */}
      <h3>Log in to your account</h3>
      <p className="par-2">Welcome back! Enter your details to login</p>
      {/* <input
      type="text"
      className="input-outlined p-input b-radius-3 italic transition-1"
      placeholder="Username"
    /> */}
      <input
        type="text"
        className="input-outlined p-input b-radius-3 italic transition-1"
        placeholder="Email"
      />
      <input
        type="text"
        className="input-outlined p-input b-radius-3 italic transition-1"
        placeholder="Password"
      />
      <button className="button-filled transition-2 fs-1 ">Login</button>
      <span className="or-with">OR CONTINUE WITH</span>
      <button className="button-outlined transition-2 fs-1 ">
        <a
          className="flex gap-2 items-center jus-center"
          style={{
            color: "white",
            textDecoration: "none",
          }}
          target="_blank"
          href="https://github.com/NumanHaspolat"
        >
          <FaGithub fontSize={17} />
          GitHub
        </a>
      </button>
    </div>
  );
};

export default Login;
