// import React from "react";
// import "./Navbar.css";
// var logo = require("../../images/logo.jpeg");
// const Navbar = () => {
//   return (
//     <div className="navbar">
//       <div className="navbarcontainer">
//         <img className="logo" src={logo} alt="logo" />
//         <a href="https://nupium.com/" target="__blank" className="button-48">Active Programmes</a>
//         <a  href="https://nupium.com/" target="__blank" className="button-48">Registration Form</a>
//         <a  href="https://nupium.com/" target="__blank" className="button-48">Candidate Login</a>
//         <a  href="https://nupium.com/" target="__blank" className="button-48">Pricing Of Programmes</a>
//       </div>
//     </div>
//   );
// };
// export default Navbar;
import React, { Component } from "react";
import "./Navbar.css";
var logo = require("../../images/logo.jpeg");
class Navbar extends Component{
  state={clicked:false};
  handleClick=()=>{
    this.setState({clicked:!this.state.clicked})
  }
  render(){
  return (
    <>
    <nav>
      <a href="index.html">
        <img style={{width:"122px",height:"120px"}} src={logo} alt="logo"/>
      </a>
      <div>
        <ul id="navbar" className={this.state.clicked?"#navbar active":"#navbar"}>
          <li>
            <a href="index.html">Programmes</a>
          </li>
          <li>
            <a href="index.html">Registration</a>
          </li>
          <li>
            <a href="index.html">Login</a>
          </li>
          <li>
            <a href="index.html">Pricing</a>
          </li>
        </ul>
      </div>
      <div id="mobile" onClick={this.handleClick}>
        <i id="bar" className={this.state.clicked?"fas fa-times":"fas fa-bars"}></i>
      </div>
    </nav>
    </>
  );}
  }
export default Navbar;