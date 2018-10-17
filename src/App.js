import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Loader from "react-loader-spinner";

import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import AllProducts from "./pages/AllProducts";
import ProductDetail from "./pages/ProductDetail";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import ShoppingCart from "./components/ShoppingCart";
import Terms from "./pages/Terms";

import * as MFApi from "./lib/API";

import "./App.css";
import { AllProductsContext } from "./context/AllProducts";

import SweetAlert from "react-bootstrap-sweetalert";

class App extends Component {
  //ADM Bueno, con base a mis pruebas tengo que declarar las funciones primero antes de declarar mi state
  setCurrentSelectedCategory = category => {
    this.setState({
      currentSelectedCategory: category
    });
  };

  toggleShoppingCart = () => {
    this.setState({
      isCartDrawerOpen: !this.state.isCartDrawerOpen
    });
  };

  deleteItemInCart = itemId => {
    let newCartItems = this.state.cartProducts.filter(
      product => product._id !== itemId
    );
    this.setState({
      cartProducts: newCartItems,
      isSweetAlertOpenCart: true
    });
  };

  addItemToCart = item => {
    let newCartItems = [...this.state.cartProducts, item];
    this.setState({
      cartProducts: newCartItems,
      isSweetAlertOpen: true
    });
  };

  hideAlert = () => {
    this.setState({
      isSweetAlertOpen: false
    });
  };

  hideAlertCart = () => {
    this.setState({
      isSweetAlertOpenCart: false
    });
  };

  state = {
    isLoading: false,
    error: null,
    isCartDrawerOpen: false,
    currentSelectedCategory: "",
    categories: [
      "Seating",
      "Tables",
      "Desks",
      "Bedroom",
      "Storage",
      "Miscellaneous"
    ],
    products: [],
    cartProducts: [],
    setCurrentSelectedCategory: this.setCurrentSelectedCategory,
    toggleShoppingCart: this.toggleShoppingCart,
    deleteItemInCart: this.deleteItemInCart,
    addItemToCart: this.addItemToCart,
    isSweetAlertOpen: false,
    isSweetAlertOpenCart: false
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
              products: data,
              isLoading: false,
              error: null
            });
          } else {
            this.setState({
              products: [],
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
      <AllProductsContext.Provider value={this.state}>
        <React.Fragment>
          <ShoppingCart />
          {this.state.error != null && (
            <div class="alert alert-danger" role="alert">
              {this.state.error}
            </div>
          )}
          <main id="page-wrap">
            <NavBar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/all" component={AllProducts} />
              <Route
                exact
                path="/products/:productId"
                component={ProductDetail}
              />
              <Route exact path="/category/:category" component={Products} />
              <Route exact path="/terms" component={Terms} />
            </Switch>
            {this.state.isLoading && (
              <Loader type="Triangle" color="red" height={100} width={100} />
            )}
            <Footer />
          </main>
          {this.state.isSweetAlertOpen && (
            <SweetAlert success title="Good!" onConfirm={this.hideAlert}>
              Item added succesfully
            </SweetAlert>
          )}
          {this.state.isSweetAlertOpenCart && (
            <SweetAlert success title="Good!" onConfirm={this.hideAlertCart}>
              Item removed succesfully
            </SweetAlert>
          )}
        </React.Fragment>
      </AllProductsContext.Provider>
    );
  }
}

export default App;
