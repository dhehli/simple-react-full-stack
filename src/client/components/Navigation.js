import i18n from 'i18next';

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
								<NavLink href="/">Home</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href="/about/123">About</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href="/contact">Contact</NavLink>
							</NavItem>
							<UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Language
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem onClick={() => { console.log("en")}}>
                    English
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem onClick={() => { console.log("en")}}>
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
