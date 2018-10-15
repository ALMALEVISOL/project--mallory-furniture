import React, { Component } from "react";
import image_header from "../../resources/landing-splash-bg.png";
import "./Header.css";

export default class Header extends Component {
  render() {
    return (
      <div
        className="hero"
        style={{
          backgroundImage: `url(${image_header})`
        }}
      >
        <h1>Mallory Furniture </h1>
        <h6>Your furniture is old.</h6>
        <h6>Ours is older</h6>
      </div>
    );
  }
}
