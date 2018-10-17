import React, { Component } from "react";
import { Link } from "react-router-dom";
import { AllProductsContext } from "../../context/AllProducts";

export default class MiniatureViewProduct extends Component {
  render() {
    const { product } = this.props;
    return (
      <AllProductsContext.Consumer>
        {context => (
          <div key={product._id} className="card" style={{ width: "18rem" }}>
            <img
              className="card-img-top"
              src={product.imageLink}
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">{product.item}</h5>
            </div>
            <div className={"card-footer"}>
              <div
                className="btn btn-primary"
                onClick={() => context.addItemToCart(product)}
              >
                Add to cart
              </div>

              <Link
                className="btn btn-primary"
                to={{
                  pathname: `/products/${product._id}`,
                  state: {
                    product
                  }
                }}
              >
                View Detail
              </Link>
            </div>
          </div>
        )}
      </AllProductsContext.Consumer>
    );
  }
}
