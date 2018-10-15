import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./CategoriesButtons.css";
import { AllProductsContext } from "../../context/AllProducts";

export default class CategoriesButtons extends Component {
  render() {
    return (
      <AllProductsContext.Consumer>
        {context => (
          <>
            <h1>Browse by Categories</h1>
            <h4>Explore by furniture type.</h4>
            <div className={"container"} id="divCategories">
              {context.categories.map(category => (
                <Link to={`/category/${category.toLowerCase()}`}>
                  <button
                    onClick={() =>
                      context.setCurrentSelectedCategory(category.toLowerCase())
                    }
                    type="button"
                    className={"btn btn-outline-primary home-category-button"}
                  >
                    {category}
                  </button>
                </Link>
              ))}
            </div>
          </>
        )}
      </AllProductsContext.Consumer>
    );
  }
}
