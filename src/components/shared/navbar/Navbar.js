import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import MenuIcon from "@mui/icons-material/Menu";
import { useInternalContext } from "../../../hooks/useInternalContext";
const Navbar = () => {
  const navigate = useNavigate();
  const role = 1;
  const { isToggled, sidebarToggler } = useInternalContext();
  return (
    <div className={`navbar-container shadow ${role && "navbar-active  "}`}>
      <div className="bg-transparent col">
        {role ? (
          <button className="btn btn-sm btn-dark" onClick={sidebarToggler}>
            {isToggled ? <MenuIcon /> : <MenuOpenIcon />}
          </button>
        ) : (
          <Link className="nav-link" to={"/"}>
            Darkshot Productions
          </Link>
        )}
      </div>
      <div className="bg-transparent col d-flex justify-content-end gap-2 text-capitalize">
        {role ? (
          <button className="btn btn-sm btn-danger">logout</button>
        ) : (
          <>
            <Link className="nav-link" to={"/login"}>
              Login
            </Link>
            <Link className="nav-link" to={"/register"}>
              Register
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
// Finish the Navbar
