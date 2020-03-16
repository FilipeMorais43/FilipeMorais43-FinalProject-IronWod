import React, { Fragment, Component } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { signOut } from '../../services/dataAuthentication';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleSignOut = this.handleSignOut.bind(this);
  }

  handleSignOut(props) {
    signOut(props)
      .then(() => {
        props.updateUserInformation(null);
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">CrossFit</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav"></Navbar.Collapse>
        <Nav className="mr-auto">
          <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
            <NavDropdown.Item href="/timers">Timers</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/exercise/list">Exercises</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="profile" id="collasible-nav-dropdown">
            <NavDropdown.Item href="/sign-out">Sign-out</NavDropdown.Item>
            <NavDropdown.Divider />

            <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar>
    );
  }
}

export default NavBar;
