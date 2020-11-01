import React, { Component } from "react";

import { Link, NavLink } from "react-router-dom";

//import logo from "../../img/logo.jpg";
import "../../styles/navbar.css";

import Sidebar from "../common/sidebar";

class Navbar extends Component {
  state = {
    toggle: false,
    nav: "nav-close"
  };

  navToggle = () => {
    if (this.state.toggle === false) {
      let open = "nav-open";
      this.setState({ toggle: true, nav: open });
    } else {
      let close = "nav-close";
      this.setState({ toggle: false, nav: close });
    }
    console.log("clicked");
  };

  linkClose = () => {
    let close = "nav-close";
    this.setState({ toggle: false, nav: close });
  };

  render() {
    return (
      <div>
        <nav>
          <div className="mainNav">
            <Sidebar/>
            <h3 className="menu" onClick={this.navToggle}>
              Menu
            </h3>
          </div>
        </nav>
        <div className={this.state.nav}>
          <div className="mainNav-shutter">
            <h3 className="logo-shutter">
              <Link to="/" onClick={this.linkClose}>
                <div></div>
              </Link>
            </h3>
            <h3 className="menu-shutter" onClick={this.linkClose}>
              Close
            </h3>
          </div>
          <ul className="nav-links">
            <li>
              <NavLink onClick={this.linkClose} className="link" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink onClick={this.linkClose} className="link" to="/about">
                About
              </NavLink>
            </li>
            {/*<li>
              <NavLink onClick={this.linkClose} className="link" to="/blogs">
                Blogs
              </NavLink>
            </li>*/}
            <li>
              <NavLink onClick={this.linkClose} className="link" to="/gallery">
                Gallery
              </NavLink>
            </li>
            {/* */}
            <li>
              <NavLink onClick={this.linkClose} className="link" to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Navbar;
