import React, { Component } from "react";
import "../../styles/carousel.css";

class Carousel extends Component {
  state = {};
  render() {
    return (
      <div className="carouselCard">
        <div className="containerCard">
          <p>
            My daughter is 6years old have been taking training under crossfit
            juniorz since 5 months and she loves coming to the club
          </p>
          <h4>Chetna's Parent</h4>
        </div>
      </div>
    );
  }
}

export default Carousel;
