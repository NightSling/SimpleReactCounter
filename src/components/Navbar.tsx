import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import '../css/Navbar';
class NavbarMain extends React.Component {
  render() {
    return (
    <div className="navbar">
			<Navbar bg="dark" variant="dark">
				<Navbar.Brand href="#">DayWeb</Navbar.Brand>
				<Nav className="mr-auto">
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
