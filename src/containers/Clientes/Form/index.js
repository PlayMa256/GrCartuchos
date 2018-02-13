import React from 'react';
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
} from 'reactstrap';

export default function ClienteForm() {
	return (
		<div className="form">
			<Row>
				<Col md="12">
					<Card>
						<CardHeader>
							<strong>Basic Form</strong> Elements
						</CardHeader>
						<CardBody>
							<Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
								<FormGroup row>
									<Col md="3">
										<Label htmlFor="text-input">Text Input</Label>
									</Col>
									<Col xs="12" md="9">
										<Input type="text" id="text-input" name="text-input" placeholder="Text" />
										<FormText color="muted">This is a help text</FormText>
									</Col>
								</FormGroup>
								<FormGroup row>
									<Col md="3">
										<Label htmlFor="select">Select</Label>
									</Col>
									<Col xs="12" md="9">
										<Input type="select" name="select" id="select">
											<option value="0">Please select</option>
											<option value="1">Option #1</option>
											<option value="2">Option #2</option>
											<option value="3">Option #3</option>
										</Input>
									</Col>
								</FormGroup>
							</Form>
						</CardBody>
					</Card>
				</Col>
			</Row>
		</div>
	);
}
