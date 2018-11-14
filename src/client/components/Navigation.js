import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
	Nav,
	NavItem,
	NavLink
} from 'reactstrap';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';

export default class Navigation extends Component {
	constructor(props) {
		super(props);
		this.toggle = this.toggle.bind(this);
		this.state = {
			isOpen: false
		};
	}

	toggle() {
		const { isOpen } = this.state;
		this.setState({
			isOpen: !isOpen
		});
	}

	changeLanguage = (lng) => {
		this.props.i18n.changeLanguage(lng);
	}

	render() {
		const { isOpen } = this.state;

		return (
			<div>
				<Navbar color="dark" dark expand="md">
					<NavbarBrand href="/">reactstrap</NavbarBrand>
					<NavbarToggler onClick={this.toggle} />
					<Collapse isOpen={isOpen} navbar>
						<Nav className="ml-auto" navbar>
							<NavItem>
								<NavLink tag={Link} to="/">Home</NavLink>
							</NavItem>
							<NavItem>
								<NavLink tag={Link} to="/about">About</NavLink>
							</NavItem>
							<NavItem>
								<NavLink tag={Link} to="/contact">Contact</NavLink>
							</NavItem>
							<NavItem>
								<NavLink tag={Link} to="/user">User</NavLink>
							</NavItem>
							<UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Language
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem onClick={() => this.changeLanguage('en')}>
                    English
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem onClick={() => this.changeLanguage('de')}>
                    German
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
						</Nav>
					</Collapse>
				</Navbar>
			</div>
		);
	}
}
