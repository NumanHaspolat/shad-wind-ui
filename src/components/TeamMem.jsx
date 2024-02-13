import { IoIosArrowDown } from "react-icons/io";
import React, { useState } from "react";
import Combobox from "./Combobox";

const TeamMem = () => {
  const [roles, setRoles] = useState([
    "Owner",
    "Developer",
    "Designer",
    "Billing",
  ]);
  return (
    <div className="team">
      <h4>Team Members</h4>
      <p className="par-2">Invite your team members to collaborate.</p>
      <div className="hori"></div>
      <div className="team-mems">
        <div className="user flex space-between items-center">
          <div className="left-user flex gap-5">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn5ySlny8A7liGYf6-okGa1YtuQZCVMF8DGi4_1M3C5aLUW_SOV0-aK5k959L-NsIkOXg&usqp=CAU"
              alt=""
              className="avatar"
            />
            <div className="user-info">
              <p>Kiara Rich</p>
              <p className="par-2">k@example.com</p>
            </div>
          </div>
          <Combobox roles={roles} defaultValue={"Owner"} />
          {/* <div className="combobox-container">
            <IoIosArrowDown color="white" className="arrowIcon" />
            <select id="framework-select" className="combobox">
              <option value="edit">Owner</option>
              <option value="dev">Developer</option>
              <option value="view">Designer</option>
              <option value="bill">Billing</option>
            </select>
          </div> */}
        </div>
        <div className="user flex space-between items-center">
          <div className="left-user flex gap-5">
            <img
              src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"
              alt=""
              className="avatar"
            />
            <div className="user-info">
              <p>Fabio Pugh</p>
              <p className="par-2">f@example.com</p>
            </div>
          </div>
          <Combobox roles={roles} defaultValue={"Developer"} />
        </div>
        <div className="user flex space-between items-center">
          <div className="left-user flex gap-5">
            <img
              src="https://lh3.googleusercontent.com/ogw/ANLem4YiHWmAg9T4nJd-ElBIEanXpM-yC29DxFUf6aFmaw=s32-c-mo"
              alt=""
              className="avatar"
            />
            <div className="user-info">
              <p>Numan Dev</p>
              <p className="par-2">n@example.com</p>
            </div>
          </div>
          <Combobox roles={roles} />
        </div>
        <div className="user flex space-between items-center">
          <div className="left-user flex gap-5">
            <img
              src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt=""
              className="avatar"
            />
            <div className="user-info">
              <p>Leonie Cox</p>
              <p className="par-2">l@example.com</p>
            </div>
          </div>
          <Combobox roles={roles} />
        </div>
        <div className="user flex space-between items-center">
          <div className="left-user flex gap-5">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcP-8QzSRw3LqErsv2ftQn6ZtBduQBTM8aKA&usqp=CAU"
              alt=""
              className="avatar"
            />
            <div className="user-info">
              <p>Zac Hale</p>
              <p className="par-2">z@example.com</p>
            </div>
          </div>
          <Combobox roles={roles} />
        </div>
      </div>
    </div>
  );
};

export default TeamMem;
