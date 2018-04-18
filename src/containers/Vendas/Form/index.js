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
		}
	}

	addMoreFields = () => {
		const { numFields } = this.state;
		this.setState((state) => {
			return { numFields: state.numFields + 1 }
		});
	}

	renderFormFields = () => {
		const { numFields } = this.state;
		const fields = [];
		for (let i = 0; i < numFields; i++){
			fields.push(
				<FormGroup
					key={`field_${i}`}	
					row>
					<Col md="3">
						<Label htmlFor="text-input">
							Produto
						</Label>
					</Col>
					<Col xs="12" md="9">
						<Input
							type="text"
							id="text-input"
							name="text-input"
							placeholder="Nome do produto"
						/>
					</Col>
				</FormGroup>
			);
		}
		return fields;
	}

	render() {
		return (
			<div className="form">
				<Row>
					<Col md="12">
						<Card>
							<CardHeader>
								Cadastrar Venda
						</CardHeader>
							<CardBody>
								<Form
									action=""
									method="post"
									encType="multipart/form-data"
									className="form-horizontal"
								>
									{this.renderFormFields()}
									<i className="fa fa-plus-square"  onClick={this.addMoreFields}/>
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
