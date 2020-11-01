import React, { Component } from "react";
import "../../styles/profileCard.css";
import atish from "../../img/atish.png";

class ProfileCard extends Component {
  state = {};
  render() {
    return (
      <div className="card">
        <div className="image">
          <img src={atish} alt="" />
        </div>
        <div className="contentCard">
          <div className="info">
            <h2>Atish Kavde</h2>
            <span>Founder</span>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileCard;
