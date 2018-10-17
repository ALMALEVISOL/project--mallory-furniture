import React, { Component } from "react";
import { AllProductsContext } from "../../context/AllProducts";
import { Link } from "react-router-dom";
import mf_logo_black from "../../resources/mf-logo-black.svg";
import "./Footer.css";

export default class Footer extends Component {
  render() {
    return (
      <AllProductsContext.Consumer>
        {context => (
          <>
            <footer class="page-footer font-small blue pt-4">
              <div class="container-fluid text-center text-md-left">
                <div class="row footer-company-logo">
                  <img
                    className="footer_company_logo"
                    src={mf_logo_black}
                    alt="Card image cap"
                  />
                </div>
                <div class="row">
                  <div class="col-md-3 mb-md-0 mb-3">
                    <h5 class="text-uppercase">Company</h5>
                    <ul class="list-unstyled">
                      <li>
                        <a href="#!">About</a>
                      </li>
                      <li>
                        <a href="#!">Press</a>
                      </li>
                      <li>
                        <a href="#!">Terms+Conditions</a>
                      </li>
                    </ul>
                  </div>
                  <div class="col-md-3 mb-md-0 mb-3">
                    <h5 class="text-uppercase">Categories</h5>
                    <ul class="list-unstyled">
                      {context.categories.map(category => (
                        <Link to={`/category/${category.toLowerCase()}`}>
                          <li
                            onClick={() =>
                              context.setCurrentSelectedCategory(
                                category.toLowerCase()
                              )
                            }
                          >
                            {category}
                          </li>
                        </Link>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div class="footer-copyright text-center py-3">
                © 2018 Copyright:
                <a href="https://mdbootstrap.com/bootstrap-tutorial/">
                  {" "}
                  ALMALEVISOL
                </a>
              </div>
            </footer>
          </>
        )}
      </AllProductsContext.Consumer>
    );
  }
}
