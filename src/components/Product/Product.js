import React, { Component } from "react";

export default class Product extends Component {
  render() {
    return (
      <div>
        <img src={this.props.location.state.product.imageLink} />
      </div>
    );
  }
}
