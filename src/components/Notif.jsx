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
        <div className="form-group-2">
          <div className="check-div">
            <input
              type="checkbox"
              id="everything"
              name="notifications"
              value="everything"
              checked={selectedOption === "everything"}
              onChange={handleChange}
            />
            <label htmlFor="everything" className="par-2">
              <h4 className="flex gap-2 items-center">
                Everything <IoIosNotificationsOutline fontSize={23} />
              </h4>
              Email digest, mentions & all activity.
            </label>
          </div>
        </div>
        <div className="form-group-2">
          <input
            type="checkbox"
            id="available"
            name="notifications"
            value="available"
            checked={selectedOption === "available"}
            onChange={handleChange}
          />
          <label htmlFor="available" className="par-2">
            <h4 className="flex gap-2 items-center">
              Available <FiUser fontSize={23} />
            </h4>
            Only mentions and comments.
          </label>
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
          <label htmlFor="ignoring" className="par-2">
            <h4 className="flex gap-2 items-center">
              Ignoring <FaRegEyeSlash fontSize={23} />
            </h4>
            Turn off all notifications.
          </label>
        </div>
      </div>
    </div>
  );
};

export default Notif;
