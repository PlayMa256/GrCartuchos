import React from "react";
import {
  Badge,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Table,
  Pagination,
  PaginationItem,
  PaginationLink
} from "reactstrap";

import { graphql, QueryRenderer } from "react-relay";

import { Environment, Network, RecordSource, Store } from "relay-runtime";

function fetchQuery(operation, variables) {
  return fetch("http://localhost:3000/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      query: operation.text,
      variables
    })
  }).then(response => {
    return response.json();
  });
}

const modernEnvironment = new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource())
});

class ClientList extends React.PureComponent {
  render() {
    return (
      <QueryRenderer
        envieronment={modernEnvironment}
        query={graphql`
          query ClientListQuery {
            clients {
              name
              cnpj
              ie
            }
          }
        `}
        variables={{}}
        render={({ error, props }) => {
          console.log("props", props);
          return <h1>hi</h1>;
        }}
      />
    );
  }
}

export default ClientList;
