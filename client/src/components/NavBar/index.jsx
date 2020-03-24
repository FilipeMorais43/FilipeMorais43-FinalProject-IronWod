import React, { Fragment } from 'react';

import './style.scss';
import { Navbar, Nav } from 'react-bootstrap';
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
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="nav-bar" sticky="top">
      <div className="profile__picture">
        <img src="/logo.png" alt="logo" />
      </div>
      <Navbar.Brand href="/"> IronWod</Navbar.Brand>
      {(props.user && (
        <Fragment>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto"></Nav>
            <Nav.Link href="/profile">
              <div className="profile__picture">
                <img src={props.user.picture} alt={props.user.name} />
              </div>
              {props.user.name}'s Profile
            </Nav.Link>
            <Nav.Link href="mywods"> My Wods</Nav.Link>
            <Nav.Link href="/herowod">HeroWod</Nav.Link>
            <Nav.Link href="/movement">Movements</Nav.Link>
            <Nav.Link onClick={handleSignOut}>Sign Out</Nav.Link>
          </Navbar.Collapse>
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
