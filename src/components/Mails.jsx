import React from "react";
import { CiMail } from "react-icons/ci";

const Mails = () => {
  return (
    <div className="mail-div">
      <h4 className="flex items-center gap-4">
        Mail Inbox <CiMail fontSize={23} />
      </h4>
      <div className="hori"></div>
      <div className="flex gap-4 flex-col">
        <div className="mail">
          <h4 className="name">David Lee</h4>
          <p>New Project Idea</p>
          <p className="par-2">
            I have an exciting new project idea to discuss with you. It involves
            expanding our services to target...
          </p>
          <div className="flex gap-4 items-center p-5">
            <button className="button-filled transition-1">Work</button>
            <button className="button-outlined transition-1">Important</button>
          </div>
        </div>
        <div className="mail">
          <h4 className="name">Olivia Wilson</h4>
          <p>Vacation Plans</p>
          <p className="par-2">
            Let's plan our vacation for next month. What do you think? I've been
            thinking of visiting a tropical...
          </p>
          <div className="flex gap-4 items-center p-5">
            <button className="button-outlined transition-1">Personal</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mails;
