import React from "react";
import "@babel/polyfill";
import ReactDOM from "react-dom";
import moment from "moment";
import App from "./App";

moment.locale("pt-BR");

// Import Font Awesome Icons Set
import "font-awesome/css/font-awesome.min.css";
import "../scss/style.scss";
// Temp fix for reactstrap
import "../scss/core/_dropdown-menu-right.scss";

const render = () => ReactDOM.render(<App />, document.getElementById("root"));

render();

if (module.hot) {
  module.hot.accept("./App", () => {
    ReactDOM.unmountComponentAtNode(document.getElementById("root"));
    render();
  });
}
