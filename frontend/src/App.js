import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

import Full from "./containers/Full/Full";
import Page404 from "./views/Pages/Page404/";
import Page500 from "./views/Pages/Page500/";

const App = () => (
  <HashRouter>
    <Switch>
      <Route path="/" name="Home" component={Full} />
      <Route exact path="/404" name="Page 404" component={Page404} />
      <Route exact path="/500" name="Page 500" component={Page500} />
      <Route exact path="*" component={Page404} />
    </Switch>
  </HashRouter>
);

export default App;
