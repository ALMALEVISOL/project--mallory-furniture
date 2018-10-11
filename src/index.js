import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import pick from "lodash/pick";
import makeStore from "./redux/makeStore";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";

import App from "./App";
import * as MFApi from "./lib/API";

getAllProducts();

function renderApp(initialState) {
  const store = makeStore(initialState);

  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
    document.getElementById("root")
  );
}

function getAllProducts() {
  MFApi.getAllProducts()
    .then(function(res) {
      return res.json();
    })
    .then(
      function(data) {
        if (data) {
          let initialState = {
            products: data,
            selectedCategory: ""
          };
          renderApp(initialState);
        }
      }.bind(this)
    )
    .catch(function(error) {
      /* notification.error({
        //ADM Investigué un poco y YO entendí que el error "Failed to fetch" puede generalizarse con cualquier problema del lado del servidor, corregirme si estoy mal!
        message: "Error",
        description:
          "¡Ocurrió un error al intentar conectarse con el servidor!",
        duration: 10
      }); */
    });
}
