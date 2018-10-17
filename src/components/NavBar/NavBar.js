import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import { AllProductsContext } from "../../context/AllProducts";
import mf_logo_black from "../../resources/mf-logo-black.svg";
import "./NavBar.css";

export default class NavBar extends Component {
  render() {
    return (
      <AllProductsContext.Consumer>
        {context => (
          <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-dark bg-dark">
            <NavLink to="/">
              <img
                className="card-img-top"
                src={mf_logo_black}
                alt="Card image cap"
              />
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
                      About
                    </a>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/terms" activeClassName={"active"}>
                    <a className="nav-link">Terms+Conditions</a>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <a className="nav-link">|</a>
                </li>
                <li className="nav-item">
                  <NavLink to="/all" activeClassName={"active"}>
                    <a className="nav-link">All</a>
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
                      Tables
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
                      Desks
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
                      Storage
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
                      Bedroom
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
                      Misc
                    </a>
                  </NavLink>
                </li>
                <li className="nav-item nav-cart">
                  <img
                    className={"nav-cart-image"}
                    alt="cart"
                    src={"https://image.flaticon.com/icons/svg/626/626443.svg"}
                    onClick={() => context.toggleShoppingCart()}
                  />
                </li>
              </ul>
            </div>
          </nav>
        )}
      </AllProductsContext.Consumer>
    );
  }
}
