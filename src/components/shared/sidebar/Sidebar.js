import React, { useState } from "react";
import { lists } from "./links";
import { Link, useLocation } from "react-router-dom";
import "./style.css";
import SimpleButton from "../../buttons/SimpleButton";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../../assets/images/brand/darkshot-logo.png";
import logoToggled from "../../../assets/images/brand/darkshot-logo-collapsed.png";
import { useInternalContext } from "../../../hooks/useInternalContext";
const Sidebar = () => {
  const { isToggled, sidebarToggler } = useInternalContext();
  const location = useLocation();
  const isLoggedin = true;
  const position = 1;
  return (
    <div className={`sidebar-container ${isToggled && "is-close"}`}>
      <div className="logo-container position-relative  ">
        <img src={isToggled ? logoToggled : logo} className="logo" />
        {isLoggedin && (
          <SimpleButton
            className={`toggler-button text-light rounded-pill text-light top-50 start-100 translate-middle p-2 border border-2`}
            color={"dark"}
            label={
              isToggled ? (
                <MenuIcon fontSize="medium" />
              ) : (
                <MenuOpenIcon fontSize="medium" />
              )
            }
            onClick={sidebarToggler}
          />
        )}
      </div>
      <ul className="ul-list">
        {lists.map((nav, index) => {
          const path = location.pathname;
          const navpath = nav.link;
          if (nav.role === position) {
            return (
              <Link
                to={nav.link}
                className={`link-list ${
                  path === navpath && "link-list-active"
                }`}
                key={index}>
                <li
                  className={`li-list ${
                    path === navpath && "li-list-active"
                  } d-flex justify-content-start 
                  }`}>
                  <span className="sidebar-icon ">{nav.icon}</span>
                  {!isToggled && (
                    <span className="sidebar-text">{nav.name}</span>
                  )}
                </li>
              </Link>
            );
          }
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
