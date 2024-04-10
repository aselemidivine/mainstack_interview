import React, { useState, useEffect } from "react";
import Marketing from "../assets/images/widgets.svg";
import Analytics from "../assets/images/analytics.png";
import Home from "../assets/images/home.svg";
import Crm from "../assets/images/crm.svg";
import Revenue from "../assets/images/payments.png";
import Notification from "../assets/images/notifications.svg";
import Menu from "../assets/images/menu.svg";
import Message from "../assets/images/icon.svg";
import User from "../assets/images/user.svg";
import "../assets/css/navbar.css";
import { HOST_URL } from "../assets/js/help_func";
import axios from "axios";

function Navbar() {
  const [user, setUser] = useState();

  const GET_USER_DETAILS = `${HOST_URL()}/user`; // Updated API URL

   // FETCH ALL wallet
   useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(GET_USER_DETAILS);
        setUser(response.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);

  console.log(user)

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
            <div className="menu__items--right">
              <div>
                <img
                  className="menu__items--img--main"
                  src={Notification}
                  alt=""
                />
              </div>
              <div>
                <img className="menu__items--img" src={Message} alt="" />
              </div>
              <div>
                <div></div>
                <div className="user__icon">
                  <img className="menu__items--img--user" src={User} alt="" />
                  <img className="menu__items--img--user" src={Menu} alt="" />
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Navbar;
