import React, { useState } from "react";
import { lists } from "./links";
import { Link, useLocation } from "react-router-dom";
import "./style.css";
import logo from "../../../assets/images/brand/darkshot-logo.png";
import logoCollapsed from "../../../assets/images/brand/collapseLogo.ico";
import { useInternalContext } from "../../../hooks/useInternalContext";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
const Sidebar = () => {
  const { isToggled } = useInternalContext();
  const position = 1;
  const location = useLocation();
  const pathname = location.pathname.replace(/^\/|\/$/g, "");

  return (
    <div className={`sidebar-layout ${isToggled && "sidebar-toggled"} shadow`}>
      <div className="sidebar-header ">
        <img src={isToggled ? logoCollapsed : logo} className="sidebar-logo" />
      </div>
      <div className="sidebar-body">
        <ul>
          {lists.map((nav, index) => {
            if (nav.role === position) {
              return isToggled ? (
                <>
                  <OverlayTrigger
                    key={"right"}
                    placement={"right"}
                    overlay={
                      <Tooltip id="tooltip-disabled">
                        <span className="text-capitalize">{nav.name}</span>
                      </Tooltip>
                    }>
                    <Link
                      className="link-list d-flex justify-content-center"
                      to={nav.link}
                      key={index}>
                      <li
                        className={`${
                          pathname === nav.link.replace(/^\/|\/$/g, "")
                            ? "li-active"
                            : null
                        }`}>
                        {nav.icon}
                      </li>
                    </Link>
                  </OverlayTrigger>
                </>
              ) : (
                <Link
                  className="link-list d-flex justify-content-center"
                  to={nav.link}
                  key={index}>
                  <li
                    className={`${
                      pathname === nav.link.replace(/^\/|\/$/g, "")
                        ? "li-active"
                        : null
                    }`}>
                    {nav.icon}
                    {!isToggled && (
                      <div className="col text-start ">{nav.name}</div>
                    )}
                  </li>
                </Link>
              );
            }
          })}
        </ul>
      </div>
      <div className="sidebar-footer"></div>
    </div>
  );
};

export default Sidebar;
