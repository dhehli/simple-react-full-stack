import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render((
	<IntlProvider>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</IntlProvider>
), document.getElementById('root'));
