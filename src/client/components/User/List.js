import React, { Component } from 'react';
import { Table, Alert, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

export default class List extends Component {
	render() {
		const { data } = this.props;
		let content = '';

		if (data.length === 0) {
			content = <Alert color="warning">No Entries</Alert>;
		} else {
			content = (
				<div>
					
					<Table striped>
						<thead>
							<tr>
								<th>#</th>
								<th>First Name</th>
								<th>Last Name</th>
								<th></th>
							</tr>
						</thead>
						<tbody>       
							{data.map(({ id, firstname, lastname }) => {
								return (
									<tr key={id}>
										<th scope="row">{id}</th>
										<td>{firstname}</td>
										<td>{lastname}</td>
										<td>
										<Button color="primary" tag={Link} to={`/user/edit/${id}`}>edit</Button>
										</td>
									</tr>
								);
							})}
						</tbody>
					</Table>
				</div>
			);
		}

		return <div>
			<p><Button color="primary" tag={Link} to="/user/add">create user</Button></p>
			{content}
		</div>
	}
}
