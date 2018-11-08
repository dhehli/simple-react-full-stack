import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import App from './components/App';
import i18n from './translations/i18n';

import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render((
	<I18nextProvider i18n={i18n}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</I18nextProvider>
), document.getElementById('root'));
