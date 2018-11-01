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

import { commitMutation } from "react-relay";
import env from "../../createRelayEnvieronment";

export default class ClienteForm extends React.PureComponent {
  state = {
    name: "",
    cpnj: "",
    ie: "",
    isAlertOpen: false
  };

  toggleAlert = () => {
    this.setState({
      isAlertOpen: false
    });
  };

  createClient = evt => {
    evt.preventDefault();
    const { name, cnpj, ie } = this.state;
    const mutation = graphql`
      mutation ClientFormMutation($name: String!, $cnpj: String, $ie: String) {
        createClient(name: $name, cnpj: $cnpj, ie: $ie) {
          id
        }
      }
    `;

    const variables = {
      name,
      cnpj,
      ie
    };

    commitMutation(env, {
      mutation,
      variables,
      onCompleted: (response, errors) => {
        this.setState({
          success: true,
          isAlertOpen: true,
          name: "",
          cnpj: "",
          ie: ""
        });
      },
      onError: err => {
        this.setState({
          errors: err,
          isAlertOpen: true,
          name: "",
          cnpj: "",
          ie: ""
        });
      }
    });
  };

  handleChangeField = key => {
    return evt => {
      this.setState({
        [key]: evt.target.value
      });
    };
  };

  renderAlertForSubmission = () => {
    const { errors, success, isAlertOpen } = this.state;
    let alertType = "success";
    let alertContent = "";
    if (success) {
      alertContent = "Cliente cadastrado com sucesso";
    }
    if (errors) {
      alertType = "danger";
      alertContent = `Erro ao cadastrar Cliente, ${errors}`;
    }

    return (
      <Alert color={alertType} isOpen={isAlertOpen} toggle={this.toggleAlert}>
        {alertContent}
      </Alert>
    );
  };

  render() {
    return (
      <div className="clients-form">
        {this.renderAlertForSubmission()}
        <Row>
          <Col md="12">
            <Form
              action=""
              method="post"
              encType="multipart/form-data"
              className="form-horizontal"
              onSubmit={this.createClient}
            >
              <Card>
                <CardHeader>Cadastrar Clientes</CardHeader>
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
                        placeholder="Nome do cliente"
                        value={this.state.name}
                        onChange={this.handleChangeField("name")}
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">CNPJ</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input
                        type="text"
                        id="text-input"
                        name="text-input"
                        placeholder="CNPJ"
                        value={this.state.cnpj}
                        onChange={this.handleChangeField("cnpj")}
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">IE</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input
                        type="text"
                        id="text-input"
                        name="text-input"
                        placeholder="Inscriçao estadual"
                        value={this.state.ie}
                        onChange={this.handleChangeField("ie")}
                      />
                    </Col>
                  </FormGroup>
                </CardBody>
                <CardFooter>
                  <Button type="submit" size="sm" color="primary">
                    <i className="fa fa-dot-circle-o" /> &nbsp; Cadastrar
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
