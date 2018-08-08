import React from "react";
import { Switch, Route } from "react-router-dom";
import ClienteForm from "./ClientForm";
import ClientList from "./ClientList";

export default () => {
  return (
    <Switch>
      <Route exact path="/clientes/add" component={ClienteForm} />
      <Route exact path="/clientes/list" component={ClientList} />
    </Switch>
  );
};
