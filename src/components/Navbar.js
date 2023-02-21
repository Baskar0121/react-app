import React from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

import { Menubar } from "primereact/menubar";

const Navbar = () => {
  const items = [
    {
      label: "Profile",
      icon: "pi pi-fw pi-file",
    },
    {
      label: "Create Employee",
      icon: "pi pi-fw pi-pencil",
    },
  ];


  return (
    <div className="card">
    <nav class="navbar">
      <div style={{margin:"20px",fontSize:"30px",fontWeight:"600",letterSpacing:"3px"}} class="logo" >STL - EmpMang</div>
      <div style={{margin:"20px"}} class="menu">
        <a href="/profile">Profile</a>
        <a href="/applyLeave">Apply Leave</a>
        <a href="#">Tickets</a>
      </div>
    </nav>

    </div>
  );
};

export default Navbar;
