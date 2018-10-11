import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class MiniatureViewProduct extends Component {
  render() {
    const { product } = this.props;
    return (
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
          <a href="#" className="btn btn-primary">
            Add to cart
          </a>

          <Link
            to={{
              pathname: `/products/${product._id}`,
              state: {
                product
              }
            }}
          >
            <a className="btn btn-primary" href="#">
              View Detail
            </a>
          </Link>
        </div>
      </div>
    );
  }
}
