import React, { Component } from "react";
import Loader from "react-loader-spinner";
import { AllProductsContext } from "../../context/AllProducts";
import MiniatureViewProduct from "../../components/MiniatureViewProduct/MiniatureViewProduct";
import * as MFApi from "../../lib/API";
import "./AllProducts.css";

export default class AllProducts extends Component {
  state = {
    isLoading: false,
    error: null,
    isCartDrawerOpen: false,
    allProducts: [],
    buttonActive: "allItems"
  };

  componentDidMount() {
    this.setState({
      isLoading: true,
      error: null
    });
    MFApi.getAllProducts()
      .then(function(res) {
        return res.json();
      })
      .then(
        function(data) {
          if (data) {
            this.setState({
              allProducts: data,
              isLoading: false,
              error: null
            });
          } else {
            this.setState({
              allProducts: [],
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

  handleFilterButton = filter => {
    this.setState({
      isLoading: true,
      error: null
    });
    if (filter === this.state.buttonActive) return;
    if (filter === "onSale") {
      MFApi.getProductsWithFilter(null, "onSale")
        .then(function(res) {
          return res.json();
        })
        .then(
          function(data) {
            if (data) {
              this.setState({
                allProducts: data,
                isLoading: false,
                error: null,
                buttonActive: filter
              });
            } else {
              this.setState({
                allProducts: [],
                isLoading: false,
                error: "Lo sentimos, ocurrió un error"
              });
            }
          }.bind(this)
        )
        .catch(error => {
          console.log(error);
        });
    } else {
      MFApi.getAllProducts()
        .then(function(res) {
          return res.json();
        })
        .then(
          function(data) {
            if (data) {
              this.setState({
                allProducts: data,
                isLoading: false,
                error: null,
                buttonActive: filter
              });
            } else {
              this.setState({
                allProducts: [],
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
  };

  render() {
    let activeAllItemsClassName =
      this.state.buttonActive === "allItems" ? "btn-all-products-active" : "";
    let activeOnsaleClassName =
      this.state.buttonActive === "onSale" ? "btn-all-products-active" : "";
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
            <h1>All Products</h1>
            <h2>All available listings</h2>
            <button
              type="button"
              className={`btn btn-outline-primary home-category-button ${activeAllItemsClassName}`}
              onClick={() => this.handleFilterButton("allItems")}
            >
              All items
            </button>
            <button
              type="button"
              className={`btn btn-outline-primary home-category-button ${activeOnsaleClassName}`}
              onClick={() => this.handleFilterButton("onSale")}
            >
              On sale
            </button>
            <h1>{this.state.allProducts.length} items showing</h1>
            <div className="row">
              {this.state.allProducts.map(product => (
                <div className="col-3">
                  <MiniatureViewProduct key={product.id} product={product} />
                </div>
              ))}
            </div>
          </>
        )}
      </AllProductsContext.Consumer>
    );
  }
}
