
import React from 'react'
import './styles.scss'
import { Navbar, Nav } from 'react-bootstrap';

export default function Footer() {
  return (
         <Navbar className="footer" bg="dark" expand="lg">
            <Nav className="m-auto">
              <small>2020© IronWod Develop by <a className="footer__link" href="https://github.com/JunkPixel" >Ricardo Tomaz</a> & <a className="footer__link" href="https://github.com/FilipeMorais43" > Filipe Morais</a></small>
            </Nav>
          </Navbar>
  )
}