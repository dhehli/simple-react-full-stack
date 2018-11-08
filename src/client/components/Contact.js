import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

export default class Contact extends Component {
	render() {
	  return (
			<div>
				<h1>
					<FormattedMessage id="contact.title" defaultMessage="Contact" />
   			</h1>
				 <p>
				 	<FormattedMessage id="contact.text" defaultMessage="This is some text" />
				 </p>
			</div>
		);
	}
}
