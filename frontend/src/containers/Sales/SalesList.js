import React from "react";
import { Card, CardHeader, CardBody, Table } from "reactstrap";
import { graphql, QueryRenderer } from "react-relay";
import modernEnvironment from "../../createRelayEnvieronment";

class SalesList extends React.PureComponent {
  renderRows = sales => {
    return sales.map(sale => {
      const tds = sale.items.map(items => {
        return (
          <React.Fragment key={`${items.product.id}${sale.client.id}`}>
            <td>{items.product.name}</td>
            <td>{items.quantity}</td>
            <td>{items.price}</td>
            <td>{parseInt(items.quantity, 10) * parseFloat(items.price)}</td>
          </React.Fragment>
        );
      });
      return (
        <tr key={sale.id}>
          <td>{sale.client.name}</td>
          {tds}
        </tr>
      );
    });
  };

  render() {
    return (
      <QueryRenderer
        environment={modernEnvironment}
        query={graphql`
          query SalesListQuery {
            sales {
              id
              client {
                id
                name
              }
              items {
                quantity
                price
                product {
                  id
                  name
                }
              }
              createdAt
            }
          }
        `}
        variables={{}}
        render={({ props }) => {
          const sales = props ? props.sales : [];
          const rows = this.renderRows(sales);
          return (
            <Card>
              <CardHeader>Lista de Vendas</CardHeader>
              <CardBody>
                <Table responsive bordered>
                  <thead>
                    <tr>
                      <th>Cliente</th>
                      <th>Produto</th>
                      <th>Quantidade</th>
                      <th>Valor</th>
                      <th>Total</th>
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

export default SalesList;
