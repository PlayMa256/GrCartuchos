import React from "react";
import {
  Alert,
  Row,
  Col,
  Card,
  Button,
  CardHeader,
  CardFooter,
  CardBody,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import NewWindow from "react-new-window";
import { graphql, commitMutation, QueryRenderer } from "react-relay";
import modernEnvironment from "../../../createRelayEnvieronment";
import "./styles.scss";
import SalePrint from "../SalePrint/SalePrint";

class SalesForm extends React.PureComponent {
  state = {
    showPrint: false,
    sales: [
      {
        product: "",
        quantity: "",
        price: ""
      }
    ],
    client: "",
    isAlertOpen: false
  };

  toggleAlert = () => {
    this.setState({
      isAlertOpen: false
    });
  };

  addMoreFields = () => {
    this.setState(state => {
      const internalSales = [...state.sales].concat([
        {
          product: "",
          quantity: "",
          price: ""
        }
      ]);
      return { sales: internalSales };
    });
  };

  removeFields = index => {
    return () => {
      this.setState(state => {
        const sales = [...state.sales];
        sales.splice(index, 1);
        return { sales };
      });
    };
  };

  handleChange = key => {
    return evt => {
      this.setState({
        [key]: evt.target.value
      });
    };
  };

  handleChangeSales = (index, key) => {
    return evt => {
      const value = evt.target.value;
      this.setState(state => {
        const sales = [...state.sales];
        const object = sales[index];
        if (key === "quantity") {
          object[key] = parseInt(value, 10);
        } else {
          object[key] = value;
        }
        sales[index] = object;
        return { sales };
      });
    };
  };

  renderAlertForSubmission = () => {
    const { errors, success, isAlertOpen } = this.state;
    let alertType = "success";
    let alertContent = "";
    if (success) {
      alertContent = "Produto cadastrado com sucesso";
    }
    if (errors) {
      alertType = "danger";
      alertContent = `Erro ao cadastrar produto, ${errors}`;
    }

    return (
      <Alert color={alertType} isOpen={isAlertOpen} toggle={this.toggleAlert}>
        {alertContent}
      </Alert>
    );
  };

  showPrint = () => {
    this.setState({
      showPrint: true
    });
  };

  renderFormFields = ({ products }) => {
    const { sales } = this.state;
    const fields = [];
    for (let i = 0; i < sales.length; i++) {
      fields.push(
        <Row key={i}>
          <Col xs="4">
            <FormGroup>
              <Label>Produto</Label>
              <Input
                type="select"
                value={sales[i].product}
                onChange={this.handleChangeSales(i, "product")}
              >
                <option value="">Selecione um produto </option>
                {this.generateOptionFromArray(products)}
              </Input>
            </FormGroup>
          </Col>
          <Col xs="4">
            <FormGroup>
              <Label>Quantidade</Label>
              <Input
                type="text"
                placeholder="Quantidade"
                value={sales[i].quantity}
                onChange={this.handleChangeSales(i, "quantity")}
              />
            </FormGroup>
          </Col>
          <Col xs="3">
            <FormGroup>
              <Label>Valor</Label>
              <Input
                type="text"
                placeholder="Valor"
                value={sales[i].price}
                onChange={this.handleChangeSales(i, "price")}
              />
            </FormGroup>
          </Col>
          <Col xs="1" className="vendas-form__close-button">
            {i > 0 && (
              <i className="fa fa-times" onClick={this.removeFields(i)} />
            )}
          </Col>
        </Row>
      );
    }
    return fields;
  };

  generateOptionFromArray = array => {
    return (array || []).map(item => {
      return (
        <option key={item.id} value={item.id}>
          {item.name}
        </option>
      );
    });
  };

  createSale = evt => {
    evt.preventDefault();
    const { sales, client } = this.state;
    const mutation = graphql`
      mutation SalesFormMutation($input: SaleInput!) {
        createSale(input: $input) {
          id
        }
      }
    `;

    const variables = {
      input: {
        client: client,
        items: sales
      }
    };

    commitMutation(modernEnvironment, {
      mutation,
      variables,
      onCompleted: () => {
        this.setState({
          success: true,
          isAlertOpen: true,
          name: ""
        });
      },
      onError: err => {
        this.setState({
          errors: err,
          isAlertOpen: true,
          name: ""
        });
      }
    });
  };

  render() {
    return (
      <QueryRenderer
        environment={modernEnvironment}
        query={graphql`
          query SalesFormQuery {
            clients {
              id
              name
              cnpj
              ie
            }
            products {
              id
              name
            }
          }
        `}
        variables={{}}
        render={({ props }) => {
          const { clients, products } = props || {};

          return (
            <div className="vendas-form">
              {this.renderAlertForSubmission()}
              <Row>
                <Col md="12">
                  <Form
                    encType="multipart/form-data"
                    className="form-horizontal"
                    onSubmit={this.createSale}
                  >
                    <Card>
                      <CardHeader>
                        <span>Cadastrar Vendas</span>
                        &nbsp;
                        <i
                          className="fa fa-plus-square addMore"
                          onClick={this.addMoreFields}
                        />
                      </CardHeader>
                      <CardBody>
                        <Row>
                          <Col md="4">
                            <FormGroup>
                              <Label>Cliente</Label>
                              <Input
                                type="select"
                                name="clientName"
                                value={this.state.client}
                                onChange={this.handleChange("client")}
                              >
                                <option value="">Selecione um cliente </option>
                                {this.generateOptionFromArray(clients)}
                              </Input>
                            </FormGroup>
                          </Col>
                          <Col md="6" />
                        </Row>
                        {this.renderFormFields({ products })}
                      </CardBody>
                      <CardFooter>
                        <Button
                          type="button"
                          size="sm"
                          color="primary"
                          onClick={this.showPrint}
                        >
                          <i className="fa fa-dot-circle-o" /> Cadastrar
                        </Button>
                      </CardFooter>
                    </Card>
                  </Form>
                </Col>
              </Row>
              {this.state.showPrint && (
                <NewWindow>
                  <SalePrint />
                </NewWindow>
              )}
            </div>
          );
        }}
      />
    );
  }
}
export default SalesForm;
