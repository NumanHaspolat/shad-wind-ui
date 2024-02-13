import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import Combobox from "./Combobox";

const ShareDoc = () => {
  const [roles, setRoles] = useState(["Can Edit", "Can View"]);
  const handleChange = () => {
  };
  return (
    <div className="share-doc">
      <h4>Share this document</h4>
      <p className="par-2">Anyone with the link can view this document.</p>
      <div className="flex border-bot jus-center items-center gap-3 p-button">
        <input
          type="text"
          className="input-outlined p-input b-radius-3 transition-1 color-light"
          placeholder=""
          value={"http://example.com/link/to/document"}
          onChange={handleChange}
        />
        <button className="button-filled transition-1">Copy Link</button>
      </div>
      <p
        className="p-5"
        style={{
          marginBottom: ".5rem",
        }}
      >
        People with access
      </p>
      <div className="users flex flex-col gap-4 p-1">
        <div className="user flex space-between items-center">
          <div className="left-user flex gap-5">
            <img
              src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg"
              alt=""
              className="avatar"
            />
            <div className="user-info">
              <p>Steve Bruce</p>
              <p className="par-2">s@example.com</p>
            </div>
          </div>
          <Combobox roles={roles} defaultValue={"Can Edit"} />
        </div>
        <div className="user flex space-between items-center">
          <div className="left-user flex gap-5">
            <img
              src="https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?90af0c8"
              alt=""
              className="avatar"
            />
            <div className="user-info">
              <p>Clara Smith</p>
              <p className="par-2">c@example.com</p>
            </div>
          </div>
          <Combobox roles={roles} defaultValue={"Can View"} />
        </div>
        <div className="user flex space-between items-center">
          <div className="left-user flex gap-5">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtdRE0i2XbC4agjg7e7RY6PECIramxIa1OlF9rBv-I4tRNeNt4q9speAFNcNBCAbTvMfM&usqp=CAU"
              alt=""
              className="avatar"
            />
            <div className="user-info">
              <p>Sam Mckinney</p>
              <p className="par-2">mc@example.com</p>
            </div>
          </div>
          <Combobox roles={roles} defaultValue={"Can View"} />
        </div>
        <div className="user flex space-between items-center">
          <div className="left-user flex gap-5">
            <img
              src="https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_0.jpg"
              alt=""
              className="avatar"
            />
            <div className="user-info">
              <p>Remi Weaver</p>
              <p className="par-2">r@example.com</p>
            </div>
          </div>
          <Combobox roles={roles} defaultValue={"Can Edit"} />
        </div>
      </div>
    </div>
  );
};

export default ShareDoc;
