import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          Mallory Forniture
        </a>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <NavLink to="/about">
                <a className="nav-link ">
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
              <NavLink to="/products" activeClassName={"active"}>
                <a className="nav-link">
                  All <span className="sr-only">(current)</span>
                </a>
              </NavLink>
            </li>
            <li className="nav-item">
              https://mallory-furniture-admin.now.sh/api/v1/products?category=storage
              <NavLink
                to="/products/category/seating"
                activeClassName={"active"}
              >
                <a className="nav-link">Seating</a>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/products" activeClassName={"active"}>
                <a className="nav-link">
                  Tables <span className="sr-only">(current)</span>
                </a>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/products" activeClassName={"active"}>
                <a className="nav-link">
                  Desks <span className="sr-only">(current)</span>
                </a>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/products" activeClassName={"active"}>
                <a className="nav-link">
                  Storage <span className="sr-only">(current)</span>
                </a>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/products" activeClassName={"active"}>
                <a className="nav-link">
                  bedroom <span className="sr-only">(current)</span>
                </a>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/products" activeClassName={"active"}>
                <a className="nav-link">
                  Misc <span className="sr-only">(current)</span>
                </a>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/products" activeClassName={"active"}>
                <a className="nav-link">
                  CARRITO <span className="sr-only">(current)</span>
                </a>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
