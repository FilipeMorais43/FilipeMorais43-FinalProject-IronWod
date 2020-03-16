import React, { Fragment, Component } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { signOut } from '../../services/dataAuthentication';

const NavBar = props => {
  const handleSignOut = () => {
    signOut()
      .then(() => {
        props.updateUserInformation(null);
      })
      .catch(error => {
        console.log(error);
      });
  };
  console.log(props, 'Hello men');
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/">IronWod</Navbar.Brand>
      {(props.user && (
        <Fragment>
          <Nav.Link to="/private">
            <div className="profile__picture">
              <img src={props.user.picture} alt={props.user.name} />
            </div>
            {props.user.name}'s Profile
          </Nav.Link>
          <Nav.Link to="mywods/:id"> My Wods</Nav.Link>
          <button onClick={handleSignOut}>Sign Out</button>
        </Fragment>
      )) || (
        <Fragment>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto"></Nav>
            <Nav>
              <Nav.Link href="/herowod">HeroWod</Nav.Link>
              <Nav.Link href="/movement">Movements</Nav.Link>
              <Nav.Link href="/sign-in">Log In</Nav.Link>
              <Nav.Link eventKey={2} href="/sign-up">
                Sign Up
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Fragment>
      )}
    </Navbar>
  );
};

export default NavBar;
