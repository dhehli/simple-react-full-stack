import React, { Component } from 'react';
import { withI18n } from 'react-i18next';

class AboutUs extends Component {
	render() {
		const { t } = this.props;
		const { match } = this.props; // coming from React Router.
		console.log(match.path); // /topics/:topicId/:subId
		console.log(match.params); // /topics/react-router/url-parameters

	  return (
			<div>
				<h1>{ t('about.title') }</h1>
			</div>
		);
	}
}

export default withI18n()(AboutUs);
