import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import '../css/Navbar.css';
class NavbarMain extends React.Component {
  render() {
    return (
    <div className="Navbar">
        <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                            <Navbar.Brand href="#">DayWeb</Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Nav className="mr-auto">
                                    <Nav.Link href="https://github.com/NightSling">GitHub</Nav.Link>
                                    <Nav.Link href="https://twitter.com/dayslingthedev">Twitter</Nav.Link>
                                    <Nav.Link href="/contact-us">About Us</Nav.Link>
                            </Nav>
        </Navbar>
    </div>
    )
  }
}

export default NavbarMain;
