import React from "react";
import { Switch, Route } from "react-router-dom";
import ProductsForm from "./Form/";

export default () => {
  return (
    <Switch>
      <Route exact path="/produtos/add" component={ProductsForm} />
    </Switch>
  );
};
