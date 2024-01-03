import React from "react";
import "./Navbar.css";
var logo = require("../../images/logo.jpeg");
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbarcontainer">
        <img className="logo" src={logo} alt="logo" />
        <a href="https://nupium.com/" target="__blank" className="button-48">Active Programmes</a>
        <a  href="https://nupium.com/" target="__blank" className="button-48">Registration Form</a>
        <a  href="https://nupium.com/" target="__blank" className="button-48">Candidate Login</a>
        <a  href="https://nupium.com/" target="__blank" className="button-48">Pricing Of Programmes</a>
      </div>
    </div>
  );
};
export default Navbar;