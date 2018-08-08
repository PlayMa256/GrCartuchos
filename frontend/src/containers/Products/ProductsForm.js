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
import { graphql, commitMutation } from "react-relay";
import env from "../../createRelayEnvieronment";

export default class ProductsForm extends React.PureComponent {
  state = {
    name: "",
    isAlertOpen: false
  };

  toggleAlert = () => {
    this.setState({
      isAlertOpen: false
    });
  };

  createProduct = evt => {
    evt.preventDefault();
    const { name } = this.state;
    const mutation = graphql`
      mutation ProductsFormMutation($input: ProductInput!) {
        createProduct(input: $input) {
          id
          name
        }
      }
    `;

    const variables = {
      input: {
        name: name
      }
    };

    commitMutation(env, {
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

  onChangeInput = evt => {
    this.setState({
      name: evt.target.value
    });
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

  render() {
    return (
      <div className="products-form">
        {this.renderAlertForSubmission()}
        <Row>
          <Col md="12">
            <Form
              action=""
              method="post"
              encType="multipart/form-data"
              className="form-horizontal"
              onSubmit={this.createProduct}
            >
              <Card>
                <CardHeader>Cadastrar Produto</CardHeader>
                <CardBody>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Nome</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input
                        type="text"
                        id="text-input"
                        name="text-input"
                        placeholder="Nome do produto"
                        value={this.state.name}
                        onChange={this.onChangeInput}
                      />
                    </Col>
                  </FormGroup>
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
  }
}
