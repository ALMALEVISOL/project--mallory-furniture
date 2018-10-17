import React, { Component } from "react";
import MiniatureViewProduct from "../../components/MiniatureViewProduct/MiniatureViewProduct";
import "./FeaturedProducts.css";
import { AllProductsContext } from "../../context/AllProducts";

export default class FeaturedProducts extends Component {
  render() {
    return (
      <AllProductsContext.Consumer>
        {context => (
          <>
            <h2 className={"featured_products_title"}>Featured products</h2>
            <h4>Check out some of our favorite listings</h4>
            <div className="container">
              <div className="row">
                <div className="col-12" />

                <div className="row">
                  {context.products
                    .filter(product => product.featured)
                    .map(product => (
                      <div className="col-3">
                        <MiniatureViewProduct
                          key={product.id}
                          product={product}
                        />
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </>
        )}
      </AllProductsContext.Consumer>
    );
  }
}
