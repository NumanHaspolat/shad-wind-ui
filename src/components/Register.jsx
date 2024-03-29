import React from "react";
import "../App.css";
import { FaGithub } from "react-icons/fa";

const Register = () => {
  return (
    <div className="auth-cnt register">
      {/* <button className="button-outlined transition-2 fs-1  right-top">
      Login
    </button> */}
      <h3>Create an account</h3>
      <p className="par-2">Enter your details below to create your account</p>
      <input
        type="text"
        className="input-outlined p-input b-radius-3 italic transition-1"
        placeholder="Username"
      />
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
      <button className="button-filled transition-2 fs-1 ">
        Sign In with Email
      </button>
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

export default Register;
