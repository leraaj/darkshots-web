import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";

const InternalLayout = ({ children }) => {
  const layoutStyle = { height: "100dvh", display: "flex" };
  const sidebarStyle = {
    height: "100%",
    width: "256px",
    border: "1px solid blue",
  };
  const contentLayoutStyle = {
    width: "100%",
    height: "100%",
    display: "flex",
    flexFlow: "column nowrap",
  };
  const contentStyle = { overflow: "auto", padding: "1.5rem" };
  return (
    <>
      <div style={layoutStyle}>
        <Sidebar />
        <div style={contentLayoutStyle}>
          <Navbar />
          <div style={contentStyle}>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default InternalLayout;
