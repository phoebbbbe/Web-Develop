import React from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";

function MySidebar() {
  return (
    <div id="header">
      <Sidebar>
        <Menu>
          <MenuItem routerLink={<Link to="/" />}> Home </MenuItem>
          <MenuItem routerLink={<Link to="/search" />}> Search </MenuItem>
          <MenuItem routerLink={<Link to="/post" />}> Post </MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
}

export default MySidebar;
