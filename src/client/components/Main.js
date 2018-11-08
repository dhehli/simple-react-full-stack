import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';

export default class Main extends Component {
	render() {
	  return (
		  <Switch>
			  <Route path="/" component={Home} />
			  <Route path="/about" component={About} />
			  <Route path="/contact" component={Contact} />
			</Switch>
		);
	}
}
