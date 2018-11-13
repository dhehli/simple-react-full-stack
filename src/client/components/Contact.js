import React, { Component } from 'react';
import { withI18n } from 'react-i18next';

class Contact extends Component {
	render() {
		const { t } = this.props;
		
	  return (
			<div>
				<h1>{ t('contact.title') }</h1>
				<p>{ t('contact.intro') }</p>
			</div>
		);
	}
}

export default withI18n()(Contact);
