/* eslint-disable no-undef */
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
        <div class="container-fluid bg-dark">
        <div class="row py-2 px-lg-5">
            <div class="col-lg-6 text-center text-lg-left mb-2 mb-lg-0">
                <div class="d-inline-flex align-items-center text-white">
                    <small><i class="fa fa-phone-alt mr-2"></i>+012 345 6789</small>
                    <small class="px-3">|</small>
                    <small><i class="fa fa-envelope mr-2"></i>info@example.com</small>
                </div>
            </div>
            <div class="col-lg-6 text-center text-lg-right">
                <div class="d-inline-flex align-items-center">
                    <a class="text-white px-2" href="">
                        <i class="fab fa-facebook-f"></i>
                    </a>
                    <a class="text-white px-2" href="">
                        <i class="fab fa-twitter"></i>
                    </a>
                    <a class="text-white px-2" href="">
                        <i class="fab fa-linkedin-in"></i>
                    </a>
                    <a class="text-white px-2" href="">
                        <i class="fab fa-instagram"></i>
                    </a>
                    <a class="text-white pl-2" href="">
                        <i class="fab fa-youtube"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
    <nav>
      <div className="nav">
      <a href="index.html">
        <img style={{width:"7rem",height:"7rem"}} src={logo} alt="logo"/>
      </a>
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
        <div id="mobile" onClick={this.handleClick}>
        <i id="bar" className={this.state.clicked?"fas fa-times":"fas fa-bars"}></i>
      </div>
      </div>
    </nav>
    </>
  );}
  }
export default Navbar;