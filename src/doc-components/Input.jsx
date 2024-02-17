import React from "react";
import PreCode from "./PreCode";
import Download from "../components/Download";

const Input = ({ selectedDoc }) => {
  return (
    <div>
      <span className="par-2">
        Docs {">"}{" "}
        <span className="bold color-light capital">{selectedDoc}</span>
      </span>
      <h2 className="head">Input</h2>
      <p className="par-3">
        Displays a form input field or a component that looks like an input
        field.
      </p>
      <PreCode
        code={`
        <input
        type="text"
        class="input-filled p-input b-radius-3 fw-500"
        placeholder="Email"
/>`}
      />
      <h2 className="head-2">Before We Start</h2>
      <div className="flex gap-5 jus-center items-center">
        <p className="par-3">If you haven't installed shadwind/ui yet</p>
        <Download />
      </div>

      <h4 className="head-2 border-bot">Examples</h4>
      <h5 className="head-3">Filled</h5>
      <PreCode
        code={`
        <input
        type="text"
        class="input-filled p-input b-radius-3 fw-500"
        placeholder="Email"
/>`}
      />
      <h5 className="head-3">Outlined</h5>
      <PreCode
        code={`
        <input
        type="text"
        class="input-outlined p-input b-radius-3 italic transition-1"
        placeholder="Email"
/>`}
      />
      <h5 className="head-3">Label Animation</h5>
      <PreCode
        code={`
        <div class="form-group">
        <input
          type="text"
          id="email"
          class="form-control input-label-animation p-input b-radius-3 fs-1"
          placeholder=" "
        />
        <label for="email" class="form-label fs-1">
          Email
        </label>
</div>`}
      />
      <h5 className="head-3">With Button</h5>

      <PreCode
        code={`      <div class="flex gap-5 jus-center items-center">
        <input
          type="text"
          class="input-outlined p-input b-radius-3 italic transition-1"
          placeholder="Email"
        />
        <button class="button-filled transition-1">Subscribe</button>
</div>
      `}
      />
      <h5 className="head-3">Login Form</h5>

      <PreCode
        code={`      <div class="flex flex-col gap-5 jus-center">
        <h3>Log in to your account</h3>
        <p class="par-2">Welcome back! Enter your details to login</p>
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
        <button class="button-filled transition-2 fs-1 ">Login</button>
        <span class="or-with">OR CONTINUE WITH</span>
        <button class="button-outlined transition-2 fs-1 ">
          <a
            class="flex gap-2 items-center jus-center color-light"
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
      `}
      />
      <p className="par-4">
        As you can see there is couple of options but dont forgot to use
        tailwind classes to more choices.
      </p>
    </div>
  );
};

export default Input;
