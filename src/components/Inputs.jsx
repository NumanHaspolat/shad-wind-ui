import React from "react";

const Inputs = () => {
  return (
    <div className="flex jus-center items-center h-100 gap-4">
      <input
        type="text"
        className="input-filled p-input b-radius-3 fw-500"
        placeholder="Email"
      />
      <input
        type="text"
        className="input-outlined p-input b-radius-3 italic transition-1"
        placeholder="Email"
      />
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
    </div>
  );
};

export default Inputs;
