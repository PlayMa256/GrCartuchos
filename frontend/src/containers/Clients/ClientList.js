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
import modernEnvironment from "../../createRelayEnvieronment";
import { notAvailable } from "../../utils";

class ClientList extends React.PureComponent {
  renderRows = clients => {
    return (clients || []).map(client => {
      return (
        <tr key={client.id}>
          <td>{client.name}</td>
          <td>{notAvailable(client.cpnj)}</td>
          <td>{notAvailable(client.ie)}</td>
        </tr>
      );
    });
  };

  render() {
    return (
      <QueryRenderer
        environment={modernEnvironment}
        query={graphql`
          query ClientListQuery {
            clients {
              id
              name
              cnpj
              ie
            }
          }
        `}
        variables={{}}
        render={({ error, props }) => {
          const clients = props ? props.clients : [];
          const rows = this.renderRows(clients);
          return (
            <Card>
              <CardHeader>Lista de Clientes</CardHeader>
              <CardBody>
                <Table responsive bordered>
                  <thead>
                    <tr>
                      <th>Nome</th>
                      <th>CNPJ</th>
                      <th>IE</th>
                    </tr>
                  </thead>
                  <tbody>{rows}</tbody>
                </Table>
              </CardBody>
            </Card>
          );
        }}
      />
    );
  }
}

export default ClientList;
