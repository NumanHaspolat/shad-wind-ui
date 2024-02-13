import React from "react";
import { FaArrowDownShortWide } from "react-icons/fa6";

const ShareDoc = () => {
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
          <div className="combobox-container">
            <FaArrowDownShortWide color="white" className="arrowIcon" />
            <select id="framework-select" className="combobox">
              <option value="edit">Can edit</option>
              <option value="view">Can view</option>
            </select>
          </div>
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
          <div className="combobox-container">
            <FaArrowDownShortWide color="white" className="arrowIcon" />
            <select id="framework-select" className="combobox">
              <option value="edit">Can edit</option>
              <option value="view">Can view</option>
            </select>
          </div>
        </div>
        <div className="user flex space-between items-center">
          <div className="left-user flex gap-5">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtdRE0i2XbC4agjg7e7RY6PECIramxIa1OlF9rBv-I4tRNeNt4q9speAFNcNBCAbTvMfM&usqp=CAU"
              alt=""
              className="avatar"
            />
            <div className="user-info">
              <p>Simeon Mckinney</p>
              <p className="par-2">mc@example.com</p>
            </div>
          </div>
          <div className="combobox-container">
            <FaArrowDownShortWide color="white" className="arrowIcon" />
            <select id="framework-select" className="combobox">
              <option value="edit">
                Can edit
              </option>
              <option value="view">Can view</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShareDoc;
