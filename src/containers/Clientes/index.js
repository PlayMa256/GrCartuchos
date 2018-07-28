import React from "react";
import { Switch, Route } from "react-router-dom";
import ClienteForm from "./Form/";

export default () => {
  return (
    <Switch>
      <Route exact path="/clientes/add" component={ClienteForm} />
    </Switch>
  );
};
