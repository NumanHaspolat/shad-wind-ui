import React from "react";
import PreCode from "./PreCode";
import Download from "../components/Download";

const Register = () => {
  return (
    <div>
      <span className="par-2">
        Docs {">"} <span className="bold color-light capital">Register</span>
      </span>
      <h2 className="head">Register</h2>
      <p className="par-3">
        Register page that is used for authentication purposes.
      </p>{" "}
      <h5 className="head-3 pt-5">Register Form</h5>
      <PreCode
        code={`
        <div class="auth-cnt register">
        <h3>Create an account</h3>
        <p class="par-2">Enter your details below to create your account</p>
        <input
          type="text"
          class="input-outlined p-input b-radius-3 italic transition-1"
          placeholder="Username"
        />
        <input
          type="text"
          class="input-outlined p-input b-radius-3 italic transition-1"
          placeholder="Email"
        />
        <input
          type="text"
          class="input-outlined p-input b-radius-3 italic transition-1"
          placeholder="Password"
        />
        <button class="button-filled transition-2 fs-1 ">
          Sign In with Email
        </button>
        <span class="or-with">OR CONTINUE WITH</span>
        <button class="button-outlined transition-2 fs-1 ">
          <a
            class="flex gap-2 items-center jus-center color-light"
            target="_blank"
            href="https://github.com/NumanHaspolat"
          >

 <FaGithub fontSize={17} />
            GitHub
          </a>
        </button>
      </div>
      `}
      />
      <div className="flex gap-5 jus-center items-center p-5">
        <p className="par-3">
          Copy and paste to your project, that easy as pie...
        </p>
        <Download />
      </div>
      <p className="par-4">
        As you can see there is one of option but dont forgot to use tailwind
        classes and your creativity.
      </p>
    </div>
  );
};

export default Register;
