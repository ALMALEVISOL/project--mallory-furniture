import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import * as productsActions from "../../redux/reducers/products";
import MiniatureViewProduct from "../../components/MiniatureViewProduct/MiniatureViewProduct";

class Products extends Component {
  state = {
    products: []
  };

  componentDidMount() {
    this.setState({
      products: this.props.products
    });
  }

  render() {
    return (
      <div>
        <h1>All products</h1>
        {this.props.products.map(product => (
          <MiniatureViewProduct product={product} />
        ))}
      </div>
    );
  }
}

const mapPropsToState = state => {
  return {
    products: state.products
  };
};

export default connect(mapPropsToState)(Products);
