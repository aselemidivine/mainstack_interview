import React, { useState, useEffect, useRef } from "react";
import { TfiCrown } from "react-icons/tfi";
import Marketing from "../assets/images/widgets.svg";
import Analytics from "../assets/images/analytics.png";
import Home from "../assets/images/home.svg";
import Crm from "../assets/images/crm.svg";
import Revenue from "../assets/images/payments.png";
import "../assets/css/navbar.css";
// import { HOST_URL } from "../assets/js/help_func";

// const GET_USER_OBJ_URL = `${HOST_URL()}/users/getMyObj`;

function Navbar() {
  return (
    <>
      <header className="header">
        <div className="main-header main">
          <span className="logo__box">
            <img
              src="https://res.cloudinary.com/mainstack-co/image/upload/images/app/overhaul/mainstackLogo.svg"
              alt="logo"
            />
          </span>

          <nav className="main-navbar">
            <ul className="navbar__list">
              <li>
                <img src={Home} alt="" />
                Home
              </li>

              <li>
                <img src={Analytics} alt="" />
                Analytics
              </li>

              <li className="active">
                <img src={Revenue} alt="" />
                <p>Revenue</p>
              </li>
              <li>
                <img src={Crm} alt="" />
                <p>CRM</p>
              </li>

              <li className="menu__items">
                <img src={Marketing} alt="" />
                <p>Apps</p>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      {/* MOBILE HEADER */}
    </>
  );
}

export default Navbar;