import React, { Component } from "react";
import { AllProductsContext } from "../../context/AllProducts";
import "./CategoryHeader.css";
import * as MFApi from "../../lib/API";

export default class CategoryHeader extends Component {
  state = {
    isLoading: false,
    error: null,
    isCartDrawerOpen: false,
    allProducts: [],
    buttonActive: "allItems"
  };

  render() {
    let activeAllItemsClassName =
      this.state.buttonActive === "allItems" ? "btn-all-products-active" : "";
    let activeOnsaleClassName =
      this.state.buttonActive === "onSale" ? "btn-all-products-active" : "";
    const { product } = this.props;
    const category = this.props.category;
    let text = this.props.itemListsize === 1 ? "item" : "items";
    return (
      <AllProductsContext.Consumer>
        {context => (
          <>
            <div
              className={"categoryHeader"}
              style={{
                backgroundImage: `url(${this.props.imgSrc})`
              }}
            />
            <h3>{category.toUpperCase()}</h3>
            <h5>All {category} products</h5>
            <button
              type="button"
              className={`btn btn-outline-primary home-category-button ${activeAllItemsClassName}`}
              onClick={() => this.props.onHandleFilterButton("allItems")}
            >
              All items
            </button>
            <button
              type="button"
              className={`btn btn-outline-primary home-category-button ${activeOnsaleClassName}`}
              onClick={() => this.props.onHandleFilterButton("onSale")}
            >
              On sale
            </button>
            <h1>
              {this.props.itemListsize} {text} showing
            </h1>
          </>
        )}
      </AllProductsContext.Consumer>
    );
  }
}
