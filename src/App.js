import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Loader from "react-loader-spinner";

import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import AllProducts from "./pages/AllProducts";
import ProductDetail from "./pages/ProductDetail";
/* import Terms from "./pages/Terms"; */
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import * as MFApi from "./lib/API";

import "./App.css";
import { AllProductsContext } from "./context/AllProducts";

class App extends Component {
  //ADM Bueno, con base a mis pruebas tengo que declarar las funciones primero antes de declarar mi state
  setCurrentSelectedCategory = category => {
    this.setState({
      currentSelectedCategory: category
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
    setCurrentSelectedCategory: this.setCurrentSelectedCategory
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
          {this.state.error != null && (
            <div class="alert alert-danger" role="alert">
              {this.state.error}
            </div>
          )}
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
            {/* <Route exact path="/terms" component={Terms} /> */}
            {/* <Route component={NotFound} /> */}
            {/* <PrivateRoute exact path="/logout" component={LogOut} /> */}
          </Switch>
          {this.state.isLoading && (
            <Loader type="Triangle" color="red" height={100} width={100} />
          )}
          <Footer />
        </React.Fragment>
      </AllProductsContext.Provider>
    );
  }
}

export default App;
