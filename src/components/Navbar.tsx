import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import '../css/Navbar.css';
class NavbarMain extends React.Component {
  render() {
    return (
    <div className="navbar">
			<Navbar bg="dark" variant="dark" expand="lg">
				<Navbar.Brand href="#">DayWeb</Navbar.Brand>
                                <Navbar.Toggle aria-controls="navbarScroll" />
                                <Navbar.Collapse id="navbarScroll" />
                                <Nav className="mr-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
					<Nav.Link href="#">Home</Nav.Link>
					<Nav.Link href="https://github.com/NightSling">GitHub</Nav.Link>
					<Nav.Link href="https://twitter.com/dayslingthedev">Twitter</Nav.Link>
				</Nav>
			</Navbar>
    </div>
    )
  }
}

export default NavbarMain;
