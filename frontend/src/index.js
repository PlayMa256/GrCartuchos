import React from "react";
import ReactDOM from "react-dom";
import moment from "moment";
import { HashRouter, Route, Switch } from "react-router-dom";

moment.locale("pt-BR");

// Import Font Awesome Icons Set
import "font-awesome/css/font-awesome.min.css";
import "../scss/style.scss";
// Temp fix for reactstrap
import "../scss/core/_dropdown-menu-right.scss";

// Containers
import Full from "./containers/Full/Full";

import AsyncRoute from "./components/AsyncRoute";

// Views
import Page404 from "./views/Pages/Page404/";
import Page500 from "./views/Pages/Page500/";

ReactDOM.render(
  <HashRouter>
    <Switch>
      <Route path="/" name="Home" component={Full} />
      <Route exact path="/404" name="Page 404" component={Page404} />
      <Route exact path="/500" name="Page 500" component={Page500} />
      <Route exact path="*" component={Page404} />
    </Switch>
  </HashRouter>,
  document.getElementById("root")
);
