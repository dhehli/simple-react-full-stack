import React, { Fragment, Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Navigation from './Navigation';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import User from './User/Main';
import NotFound from './NotFound';
import { withNamespaces } from 'react-i18next';

class App extends Component {
	render() {
		return (
			<Fragment>
				<Navigation {...this.props}/>
				<main role="main" className="container">
					<div>
						<Switch>
							<Route exact path="/" component={Home} />
							<Route exact path="/about" component={About} />
							<Route path="/contact" component={Contact} />
							<Route path="/user/:action?/:id?" component={User} />
							<Route component={NotFound} />
						</Switch>
					</div>
				</main>
			</Fragment>
		);
	}
}

export default withNamespaces('translation')(App);