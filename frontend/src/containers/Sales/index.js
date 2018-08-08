import React from "react";
import { Switch, Route } from "react-router-dom";
import SalesForm from "./SalesForm/SalesForm";

export default () => {
  return (
    <Switch>
      <Route exact path="/vendas/add" component={SalesForm} />
    </Switch>
  );
};
