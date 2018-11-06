import React, { Component, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import { renderToStaticMarkup } from 'react-dom/server';
import { withLocalize } from 'react-localize-redux';
import globalTranslations from './translations/global.json';
import Navigation from './Navigation';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import NotFound from './NotFound';

class App extends Component {
	constructor(props) {
		super(props);

		this.props.initialize({
			languages: [
				{ name: 'English', code: 'en' },
				{ name: 'German', code: 'de' }
			],
			translation: globalTranslations,
			options: { renderToStaticMarkup }
		});
	}

	render() {
		return (
			<Fragment>
				<Navigation />
				<main role="main" className="container">
					<div>
						<Switch>
							<Route exact path="/" component={Home} />
							<Route exact path="/about/:id" component={About} />
							<Route path="/contact" component={Contact} />
							<Route component={NotFound} />
						</Switch>
					</div>
				</main>
			</Fragment>
		);
	}
}

export default withLocalize(App);
