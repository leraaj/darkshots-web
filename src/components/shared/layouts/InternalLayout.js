import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./style.css";
import SimpleButton from "../../buttons/SimpleButton";
import { useInternalContext } from "../../../hooks/useInternalContext";

import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../../assets/images/brand/darkshot-logo.png";
import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";

const InternalLayout = () => {
  const { isToggled, sidebarToggler } = useInternalContext();
  const isLoggedin = true;

  return (
    <>
      <div className="internal-layout-container">
        <Sidebar />
        <div className="content-container">
          <Navbar />
          <div className="content">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default InternalLayout;
