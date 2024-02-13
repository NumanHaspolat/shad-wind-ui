import React, { useState } from "react";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FiUser } from "react-icons/fi";
import { FaRegEyeSlash } from "react-icons/fa";

const Notif = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="notif">
      <h4>Notifications</h4>
      <p className="par-2">Choose what you want to be notified about.</p>
      <div className="notifs">
        <div className="form-group-2 flex items-center">
          <input
            type="checkbox"
            id="everything"
            name="notifications"
            value="everything"
            checked={selectedOption === "everything"}
            onChange={handleChange}
          />
          <label
            htmlFor="everything"
            className="flex gap-2 items-center cursor-pointer"
          ></label>
          <div>
            <span className="flex items-center gap-3">
              Everything <IoIosNotificationsOutline fontSize={23} />
            </span>
            <span className="par-2">
              Email digest, mentions & all activity.
            </span>
          </div>
        </div>
        <div className="form-group-2 flex items-center">
          <input
            type="checkbox"
            id="available"
            name="notifications"
            value="available"
            checked={selectedOption === "available"}
            onChange={handleChange}
          />
          <label
            htmlFor="available"
            className="flex gap-2 items-center cursor-pointer"
          ></label>
          <div>
            <span className="flex items-center gap-3">
              Available <FiUser fontSize={23} />
            </span>
            <span className="par-2">Only mentions and comments.</span>
          </div>
        </div>
        <div className="form-group-2">
          <input
            type="checkbox"
            id="ignoring"
            name="notifications"
            value="ignoring"
            checked={selectedOption === "ignoring"}
            onChange={handleChange}
          />
          <label
            htmlFor="ignoring"
            className="flex gap-2 items-center cursor-pointer"
          ></label>
          <div>
            <span className="flex items-center gap-3">
              Ignoring <FaRegEyeSlash fontSize={23} />
            </span>
            <span className="par-2">Turn off all notifications.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notif;
