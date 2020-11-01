import React, { Component } from "react";
import "../../styles/footer.css";
import logo from "../../img/logo.png";

class Footer extends Component {
  state = {};

   

  render() {
    return (
      <div className="footer">
        <div className="crossfit">
          <a href="https://semicolon-inc.herokuapp.com">
            <h2>© H2M {new Date().getFullYear()} All rights reserved</h2>
          </a>
        </div>
      
        <div className="semicolon">
          <a href="https://semicolon-inc.herokuapp.com">
            <h2>Designed & Developed By H2M INC</h2>
          </a>
          <a href="https://semicolon-inc.herokuapp.com">
            <img
              className="footerSemicolon"
              src={logo}
              alt="semicolon footer logo"
            />
          </a>
        </div>
      </div>
    );
  }
}

export default Footer;
