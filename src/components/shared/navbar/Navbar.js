import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";
import SimpleButton from "../../buttons/SimpleButton";
import logo from "../../../assets/images/brand/darkshot-logo.png";
import { useInternalContext } from "../../../hooks/useInternalContext";
const Navbar = () => {
  const navigate = useNavigate();
  const isLoggedin = true;
  const { isToggled, sidebarToggler } = useInternalContext();
  return (
    <div className={`navbar ${isLoggedin && "internal-navbar-active "}`}>
      <div className="col d-flex justify-content-end gap-2 container-fluid ">
        <div className="col d-flex align-items-center">
          {!isLoggedin && <img src={logo} className="logo" />}
        </div>
        {!isLoggedin ? (
          <>
            <SimpleButton
              className={"rounded-0"}
              color={"dark"}
              size={""}
              label={"Register"}
            />
            <SimpleButton
              className={"rounded-0"}
              color={"outline-dark"}
              size={""}
              label={"Login"}
            />
          </>
        ) : (
          <SimpleButton
            className={"rounded-0"}
            color={"danger"}
            size={""}
            label={"Logout"}
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
// Finish the Navbar
