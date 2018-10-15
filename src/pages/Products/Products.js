import React, { Component } from "react";
import Loader from "react-loader-spinner";
import { AllProductsContext } from "../../context/AllProducts";
import MiniatureViewProduct from "../../components/MiniatureViewProduct/MiniatureViewProduct";
import * as MFApi from "../../lib/API";

class Products extends Component {
  state = {
    isLoading: false,
    error: null,
    isCartDrawerOpen: false,
    filteredProducts: []
  };

  componentDidMount() {
    let category;
    if (this.props.context.currentSelectedCategory === "") {
      category = this.props.match.params.category;
    } else {
      category = this.props.context.currentSelectedCategory;
    }
    MFApi.getProductsWithFilter(category)
      .then(function(res) {
        return res.json();
      })
      .then(
        function(data) {
          if (data) {
            this.setState({
              filteredProducts: data,
              isLoading: false,
              error: null
            });
          } else {
            this.setState({
              filteredProducts: [],
              isLoading: false,
              error: "Lo sentimos, ocurrió un error"
            });
          }
        }.bind(this)
      )
      .catch(error => {
        console.log(error);
      });
  }

  componentWillUnmount() {
    return true;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.context.currentSelectedCategory === "") return;
    MFApi.getProductsWithFilter(nextProps.context.currentSelectedCategory)
      .then(function(res) {
        return res.json();
      })
      .then(
        function(data) {
          if (data) {
            this.setState({
              filteredProducts: data,
              isLoading: false,
              error: null
            });
          } else {
            this.setState({
              filteredProducts: [],
              isLoading: false,
              error: "Lo sentimos, ocurrió un error"
            });
          }
        }.bind(this)
      )
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <AllProductsContext.Consumer>
        {context => (
          <>
            {this.state.error != null && (
              <div class="alert alert-danger" role="alert">
                {this.state.error}
              </div>
            )}
            {this.state.isLoading && (
              <Loader type="Triangle" color="red" height={100} width={100} />
            )}
            <h1>
              {this.props.context.currentSelectedCategory === ""
                ? this.props.match.params.category
                : this.props.context.currentSelectedCategory}
            </h1>
            {this.state.filteredProducts.map(product => (
              <MiniatureViewProduct product={product} />
            ))}
          </>
        )}
      </AllProductsContext.Consumer>
    );
  }
}

export default props => (
  <AllProductsContext.Consumer>
    {context => <Products {...props} context={context} />}
  </AllProductsContext.Consumer>
);
