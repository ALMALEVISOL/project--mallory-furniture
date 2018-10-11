import React, { Component } from "react";
import CategoriesButtons from "../CategoriesButtons/CategoriesButtons";
import FeaturedProducts from "../FeaturedProducts/FeaturedProducts";

export default class Body extends Component {
  render() {
    return (
      <div className="" id="navbarTogglerDemo02">
        <FeaturedProducts />
        <CategoriesButtons />
      </div>
    );
  }
}
