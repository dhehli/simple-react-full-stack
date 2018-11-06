import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { LocalizeProvider } from 'react-localize-redux';

import App from './components/App';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render((
	<LocalizeProvider>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</LocalizeProvider>
), document.getElementById('root'));
