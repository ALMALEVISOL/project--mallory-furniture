import React, { Component } from "react";
import MiniatureViewProduct from "../../components/MiniatureViewProduct/MiniatureViewProduct";
import { AllProductsContext } from "../../context/AllProducts";

export default class FeaturedProducts extends Component {
  render() {
    return (
      <AllProductsContext.Consumer>
        {context => (
          <>
            <h1>Featured products</h1>
            <div className={"container"} id="divFeaturedProducts">
              <div class="row">
                {context.products
                  .filter(product => product.featured)
                  .map(product => (
                    <MiniatureViewProduct product={product} />
                  ))}
              </div>
            </div>
          </>
        )}
      </AllProductsContext.Consumer>
    );
  }
}
