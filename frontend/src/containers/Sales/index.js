import React from "react";
import { Switch, Route } from "react-router-dom";
import SalesForm from "./SalesForm/SalesForm";
import SalesList from "./SalesList";

export default () => {
  return (
    <Switch>
      <Route exact path="/vendas/add" component={SalesForm} />
      <Route exact path="/vendas/list" component={SalesList} />
    </Switch>
  );
};
