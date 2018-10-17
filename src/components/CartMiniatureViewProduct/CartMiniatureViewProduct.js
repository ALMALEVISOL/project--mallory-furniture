import React, { Component } from "react";
import { AllProductsContext } from "../../context/AllProducts";

export default class MiniatureViewProduct extends Component {
  render() {
    const { product } = this.props;
    return (
      <AllProductsContext.Consumer>
        {context => (
          <div style={{ border: "1px solid black", marginBottom: "5px" }}>
            <div>
              <img
                alt="Delete item"
                src={"https://image.flaticon.com/icons/svg/70/70460.svg"}
                style={{
                  width: "15px",
                  height: "15px",
                  cursor: "pointer",
                  float: "right"
                }}
                onClick={() => context.deleteItemInCart(product._id)}
              />
            </div>
            <div key={product._id} style={{ width: "18rem" }}>
              <img
                src={product.imageLink}
                alt="Card image cap"
                style={{ width: "50px", height: "50px" }}
              />
              <label>{product.item}</label>
              <label>$ {product.price}</label>
            </div>
          </div>
        )}
      </AllProductsContext.Consumer>
    );
  }
}
