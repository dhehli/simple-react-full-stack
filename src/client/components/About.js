import React, { Component } from 'react';

export default class AboutUs extends Component {
	render() {
		const { match } = this.props; // coming from React Router.

		console.log(match.path); // /topics/:topicId/:subId

		console.log(match.params); // /topics/react-router/url-parameters

	  return <h1>Aboutus</h1>;
	}
}
