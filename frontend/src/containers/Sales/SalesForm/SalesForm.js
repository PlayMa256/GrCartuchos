import React from "react";
import {
  Alert,
  Row,
  Col,
  Button,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Card,
  CardHeader,
  CardFooter,
  CardBody,
  Collapse,
  Form,
  FormGroup,
  FormText,
  Label,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText
} from "reactstrap";
import moment from "moment";
import { graphql, commitMutation, QueryRenderer } from "react-relay";
import modernEnvironment from "../../../createRelayEnvieronment";
import "./styles.scss";

class SalesForm extends React.PureComponent {
  state = {
    sales: [
      {
        product: "",
        qty: "",
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
    const { numFields } = this.state;
    this.setState(state => {
      const internalSales = [...state.sales].concat([
        {
          product: "",
          qty: "",
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
      console.log(evt);
      const value = evt.target.value;
      this.setState(state => {
        const sales = [...state.sales];
        const object = sales[index];
        object[key] = value;
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
                value={sales[i].qty}
                onChange={this.handleChangeSales(i, "qty")}
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
        items: sales,
        date: moment()
      }
    };

    commitMutation(modernEnvironment, {
      mutation,
      variables,
      onCompleted: (response, errors) => {
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
        render={({ error, props }) => {
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
                        <Button type="submit" size="sm" color="primary">
                          <i className="fa fa-dot-circle-o" /> Cadastrar
                        </Button>
                      </CardFooter>
                    </Card>
                  </Form>
                </Col>
              </Row>
            </div>
          );
        }}
      />
    );
  }
}
export default SalesForm;
