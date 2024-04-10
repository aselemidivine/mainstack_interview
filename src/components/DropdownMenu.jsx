import React from "react";
import "../assets/css/dropdownMenu.css";
import User from "../assets/images/user.svg";
import Widgets from "../assets/images/widgets.svg";
import { MdOutlineHistoryEdu } from "react-icons/md";
import { IoBugOutline } from "react-icons/io5";
import { MdOutlineCardGiftcard } from "react-icons/md";
import { MdOutlineSwitchAccount } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineLogout } from "react-icons/md";

function DropdownMenu({user}) {
    console.log(user)
  return (
    <div className="dropdown-menu">
      <div className="menu__details">
        <img src={User} alt="" />
        <div className="username">
          <h2 className="">{user.first_name} {user.last_name}</h2>
          <span className="email">{user.email}</span>
        </div>
      </div>
      <div className="dropdown__list">
        <div className="list__main">
          <IoSettingsOutline />
          <span className="list__span">Settings</span>
        </div>
        <div className="list__main">
          <MdOutlineHistoryEdu />
          <span className="list__span">Purchase History</span>
        </div>
        <div className="list__main">
          <MdOutlineCardGiftcard />
          <span className="list__span">Refer and Earn</span>
        </div>
        <div className="list__main">
          <img src={Widgets} alt="" />
          <span className="list__span">Integrations</span>
        </div>
        <div className="list__main">
          <IoBugOutline />
          <span className="list__span">Report Bug</span>
        </div>
        <div className="list__main">
          <MdOutlineSwitchAccount />
          <span className="list__span">Switch Account</span>
        </div>
        <div className="list__main">
          <MdOutlineLogout />
          <span className="list__span">Signout</span>
        </div>
      </div>
    </div>
  );
}

export default DropdownMenu;
