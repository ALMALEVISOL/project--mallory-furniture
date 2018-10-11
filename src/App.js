import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
/* import Terms from "./pages/Terms"; */
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/products/:productId" component={ProductDetail} />
          <Route
            exact
            path="/products/category/:category"
            component={Products}
          />
          {/* <Route exact path="/terms" component={Terms} /> */}
          {/* <Route component={NotFound} /> */}
          {/* <PrivateRoute exact path="/logout" component={LogOut} /> */}
        </Switch>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
