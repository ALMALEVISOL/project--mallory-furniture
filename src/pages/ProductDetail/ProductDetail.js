import React, { Component } from "react";
import Product from "../../components/Product";

export default class ProductDetail extends Component {
  render() {
    return (
      <>
        <Product {...this.props} />
      </>
    );
  }
}
