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

class ProductList extends React.PureComponent {
  renderRows = products => {
    return (products || []).map(product => {
      return (
        <tr key={product.name}>
          <td>{product.name}</td>
        </tr>
      );
    });
  };

  render() {
    return (
      <QueryRenderer
        environment={modernEnvironment}
        query={graphql`
          query ProductListQuery {
            products {
              name
            }
          }
        `}
        variables={{}}
        render={({ error, props }) => {
          const products = props ? props.products : [];
          const rows = this.renderRows(products);
          return (
            <Card>
              <CardHeader>Lista de Produtos</CardHeader>
              <CardBody>
                <Table responsive bordered>
                  <thead>
                    <tr>
                      <th>Nome</th>
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

export default ProductList;
