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

export default function ProductsForm() {
	return (
		<div className="form">
			<Row>
				<Col md="12">
					<Card>
						<CardHeader>
							Cadastrar Produto
						</CardHeader>
						<CardBody>
							<Form
								action=""
								method="post"
								encType="multipart/form-data"
								className="form-horizontal"
							>
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
										/>
									</Col>
								</FormGroup>
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
