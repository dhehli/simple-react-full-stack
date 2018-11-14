import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link } from 'react-router-dom';

export default class FormComponent extends Component {
	constructor(props) {
		super(props);

		this.state = {
			user: {
				firstname: '',
				lastname: ''
			},
			errors: ''
		};

		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(event) {
		event.preventDefault();
		const { user } = this.state;
		const { onSubmit } = this.props;
		onSubmit(event, user);
	}

	handleInputChange(event) {
		const { target: { name, value } } = event;

		this.setState(prevState => ({
			user: {
				...prevState.user,
				[name]: value
			}
		}));
	}

	render() {
		return (
			<div>
				<p><Button color="primary" tag={Link} to="/user">back</Button></p>
				<Form onSubmit={this.handleSubmit}>
					<FormGroup>
						<Label for="exampleEmail">FirstName</Label>
						<Input type="text" name="firstname" id="firstname" placeholder="Your Firstname" onChange={this.handleInputChange} />
					</FormGroup>
					<FormGroup>
						<Label for="examplePassword">LastName</Label>
						<Input type="text" name="lastname" id="lastname" placeholder="Your Lastname" onChange={this.handleInputChange}/>
					</FormGroup>
					<Button>Submit</Button>
				</Form>
			</div>
		);
	}
}
