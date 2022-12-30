import { Outlet } from "react-router-dom";
import React from "react";
import Title from "./components/Title";
import MySidebar from "./components/MySidebar";

function Layout() {
  return (
    <div>
      <Title />
      <MySidebar />
      <Outlet />
    </div>
  );
}

export default Layout;
