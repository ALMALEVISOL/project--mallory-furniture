import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import pick from "lodash/pick";
import makeStore from "./redux/makeStore";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App";
import "./index.css";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
