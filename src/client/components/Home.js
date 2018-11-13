import React, { Component } from 'react';
import { withI18n } from 'react-i18next';

class Home extends Component {
	render() {
		const { t } = this.props;

		return (	
			<h1>{ t('home.title') }</h1>
		);
	}
}

export default withI18n()(Home);
