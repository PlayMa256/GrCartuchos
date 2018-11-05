import React from "react";
import { Switch, Route } from "react-router-dom";
import ProductsForm from "./ProductsForm";
import ProductList from "./ProductList";

export default () => {
  return (
    <Switch>
      <Route exact path="/produtos/add" component={ProductsForm} />
      <Route exact path="/produtos/list" component={ProductList} />
    </Switch>
  );
};
