import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Alert } from 'reactstrap';

import List from './List';
import Form from './Form';

export default class Main extends Component {
	constructor(props) {
		super(props);

		this.state = {
			users: [],
			user: {},
			errors: ''
		};

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidMount() {
		this.getEntries();
		console.log("mount")
	}

	getEntries() {
		axios.get('/api/user').then((res) => {
			this.setState({ users: res.data });
		}).catch((err) => {
			this.setState({ errors: err.response.statusText });
		});
	}

	getEntryById(id) {
		axios.get(`/api/user/${id}`).then((res) => {
			this.setState({ user: res.data[0] });
		}).catch((err) => {
			this.setState({ errors: err.response.statusText });
		});
	}

	handleSubmit(event, { firstname, lastname }) {
		event.preventDefault();

		axios.post('/api/user', { firstname, lastname }).then(() => {
			this.getEntries();
		}).catch((err) => {
			this.setState({ errors: err.response.statusText });
		});
	}

	render() {
		const { users, user, errors } = this.state;
		const { match: { params: { action, id } } } = this.props;
		let content = '';

		if (errors) {
			content = <Alert color="danger">{ errors }</Alert>;
		} else if (action && action === 'add') {
			content = <Form onSubmit={this.handleSubmit} />;
		} else if (action && action === 'edit') {
			//this.getEntryById(id);
			content = <Form onSubmit={this.handleSubmit} />;
		} else {
			content = <List data={users} />;
		}

		return (
			<div>
				<h1>User</h1>
				{content}
			</div>
		);
	}
}
