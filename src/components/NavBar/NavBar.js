import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import { AllProductsContext } from "../../context/AllProducts";

export default class NavBar extends Component {
  render() {
    return (
      <AllProductsContext.Consumer>
        {context => (
          <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-dark bg-dark">
            <NavLink to="/">
              <a className="navbar-brand" href="#">
                Mallory Forniture
              </a>
            </NavLink>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item">
                  <NavLink to="/about">
                    <a
                      onClick={() =>
                        context.setCurrentSelectedCategory("about")
                      }
                      className="nav-link "
                    >
                      About <span className="sr-only">(current)</span>
                    </a>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <a className="nav-link">Terms+Conditions</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link">|</a>
                </li>
                <li className="nav-item">
                  <NavLink to="/all" activeClassName={"active"}>
                    <a className="nav-link">
                      All <span className="sr-only">(current)</span>
                    </a>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/category/seating" activeClassName={"active"}>
                    <a
                      className="nav-link"
                      onClick={() =>
                        context.setCurrentSelectedCategory("seating")
                      }
                    >
                      Seating
                    </a>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/category/tables" activeClassName={"active"}>
                    <a
                      className="nav-link"
                      onClick={() =>
                        context.setCurrentSelectedCategory("tables")
                      }
                    >
                      Tables <span className="sr-only">(current)</span>
                    </a>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/category/desks" activeClassName={"active"}>
                    <a
                      className="nav-link"
                      onClick={() =>
                        context.setCurrentSelectedCategory("desks")
                      }
                    >
                      Desks <span className="sr-only">(current)</span>
                    </a>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/category/storage" activeClassName={"active"}>
                    <a
                      className="nav-link"
                      onClick={() =>
                        context.setCurrentSelectedCategory("storage")
                      }
                    >
                      Storage <span className="sr-only">(current)</span>
                    </a>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/category/bedroom" activeClassName={"active"}>
                    <a
                      className="nav-link"
                      onClick={() =>
                        context.setCurrentSelectedCategory("bedroom")
                      }
                    >
                      Bedroom <span className="sr-only">(current)</span>
                    </a>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/category/miscellaneous"
                    activeClassName={"active"}
                  >
                    <a
                      className="nav-link"
                      onClick={() =>
                        context.setCurrentSelectedCategory("miscellaneous")
                      }
                    >
                      Misc <span className="sr-only">(current)</span>
                    </a>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/cart" activeClassName={"active"}>
                    <a className="nav-link">
                      CARRITO <span className="sr-only">(current)</span>
                    </a>
                  </NavLink>
                </li>
              </ul>
            </div>
          </nav>
        )}
      </AllProductsContext.Consumer>
    );
  }
}
