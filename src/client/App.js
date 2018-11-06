import React, { Component, Fragment } from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import Navigation from './Navigation';
import Home from './Home';
import About from './About';
import Contact from './Contact';

class App extends Component {
	render() {
		return (
			<Fragment>
				<Navigation />
				<BrowserRouter>
					<Switch>
						<Route exact path='/' component={Home} />
						<Route exact path='/about' component={About} />
						<Route exact path='/contact' component={Contact} />
						<Route component={NotFound} />
					</Switch>
				</BrowserRouter>
			</Fragment>
		)
	}
}

const NotFound = () => (
  <h1>404.. This page is not found!</h1>);

export default App;