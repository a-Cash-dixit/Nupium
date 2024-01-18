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