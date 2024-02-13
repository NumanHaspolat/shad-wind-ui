import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

const Register2 = () => {
  return (
    <div className="auth-cnt register-2" id="Card">
      <h3>Create an account</h3>
      <p className="par-2">Enter your details below to create your account</p>

      <div className="flex gap-5 jus-center items-center">
        <button className="button-outlined transition-2 fs-1 ">
          <a
            className="flex gap-2 items-center jus-center"
            style={{
              color: "white",
              textDecoration: "none",
            }}
            target="_blank"
            href=""
          >
            <FaGithub fontSize={17} />
            GitHub
          </a>
        </button>
        <button className="button-outlined transition-2 fs-1 ">
          <a
            className="flex gap-2 items-center jus-center"
            style={{
              color: "white",
              textDecoration: "none",
            }}
            target="_blank"
            href=""
          >
            <FaGoogle fontSize={17} />
            Google
          </a>
        </button>
      </div>
      <span className="or-with">OR CONTINUE WITH</span>
      <div class="form-group">
        <input
          type="text"
          id="email"
          className="form-control input-label-animation p-input b-radius-3 fs-1"
          placeholder=" "
        />
        <label htmlFor="email" className="form-label fs-1">
          Username
        </label>
      </div>
      <div class="form-group">
        <input
          type="text"
          id="email"
          className="form-control input-label-animation p-input b-radius-3 fs-1"
          placeholder=" "
        />
        <label htmlFor="email" className="form-label fs-1">
          Email
        </label>
      </div>
      <div class="form-group">
        <input
          type="text"
          id="email"
          className="form-control input-label-animation p-input b-radius-3 fs-1"
          placeholder=" "
        />
        <label htmlFor="email" className="form-label fs-1">
          Password
        </label>
      </div>
      <button className="button-filled transition-2 fs-1 ">
        Sign In with Email
      </button>
    </div>
  );
};

export default Register2;
