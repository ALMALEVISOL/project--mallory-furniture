import React, { Component } from "react";
import "./Footer.css";

export default class Footer extends Component {
  render() {
    return (
      <footer class="page-footer font-small blue pt-4">
        <div class="container-fluid text-center text-md-left">
          <div class="row footer-company-logo">
            <h5 class="text-uppercase">LOGO DE LA EMPRESA</h5>
          </div>
          <div class="row">
            <div class="col-md-6 mt-md-0 mt-3">
              <h5 class="text-uppercase">Footer Content</h5>
            </div>

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
                <li>
                  <a href="#!">Link 1</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="footer-copyright text-center py-3">
          © 2018 Copyright:
          <a href="https://mdbootstrap.com/bootstrap-tutorial/"> ALMALEVISOL</a>
        </div>
      </footer>
    );
  }
}
