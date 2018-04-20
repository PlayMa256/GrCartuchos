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

export default class ProductsForm extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      numFields: 1
    };
  }

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

  renderFormFields = () => {
    const { numFields } = this.state;
    const fields = [];
    for (let i = 0; i < numFields; i++) {
      fields.push(
        <Row key={i}>
          <Col xs="4">
            <FormGroup>
              <Label>Produto</Label>
              <Input type="select" name="name">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
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
          <Col xs="1">
            <FormGroup>
              <i className="fa fa-times" onClick={this.removeFields} />
            </FormGroup>
          </Col>
        </Row>
      );
    }
    return fields;
  };

  render() {
    return (
      <div className="form">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <span>Cadastrar Venda</span>
                &nbsp;
                <i className="fa fa-plus-square" onClick={this.addMoreFields} />
              </CardHeader>
              <CardBody>
                <Form
                  action=""
                  method="post"
                  encType="multipart/form-data"
                  className="form-horizontal"
                >
                  {this.renderFormFields()}
                </Form>
              </CardBody>
              <CardFooter>
                <Button type="submit" size="sm" color="primary">
                  <i className="fa fa-dot-circle-o" /> Cadastrar
                </Button>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
