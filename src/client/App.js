import React, { Component, Fragment } from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import Navigation from './Navigation';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import NotFound from './NotFound';

class App extends Component {
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

export default App;
