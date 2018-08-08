import React from "react";
import {
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
import { graphql, QueryRenderer } from "react-relay";
import modernEnvironment from "../../../createRelayEnvieronment";
import "./styles.scss";

class SalesForm extends React.PureComponent {
  state = {
    numFields: 1
  };

  addMoreFields = () => {
    const { numFields } = this.state;
    this.setState(state => {
      return { numFields: state.numFields + 1 };
    });
  };

  removeFields = () => {
    this.setState(state => {
      let newNumberFields = state.numFields - 1;
      if (newNumberFields === 0) {
        newNumberFields++;
      }
      return { numFields: newNumberFields };
    });
  };

  renderFormFields = ({ products }) => {
    const { numFields } = this.state;
    const fields = [];
    for (let i = 0; i < numFields; i++) {
      fields.push(
        <Row key={i}>
          <Col xs="4">
            <FormGroup>
              <Label>Produto</Label>
              <Input type="select" name="product">
                {this.generateOptionFromArray(products)}
              </Input>
            </FormGroup>
          </Col>
          <Col xs="4">
            <FormGroup>
              <Label>Quantidade</Label>
              <Input type="text" name="quantidade" placeholder="Quantidade" />
            </FormGroup>
          </Col>
          <Col xs="3">
            <FormGroup>
              <Label>Valor</Label>
              <Input type="text" name="valor" placeholder="Valor" />
            </FormGroup>
          </Col>
          <Col xs="1" className="vendas-form__close-button">
            {i > 0 && <i className="fa fa-times" onClick={this.removeFields} />}
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
              <Row>
                <Col md="12">
                  <Form
                    encType="multipart/form-data"
                    className="form-horizontal"
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
                              <Input type="select" name="clientName">
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
