import React from 'react';
import logo from '../others/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
class NavbarMain extends React.Component {
  render() {
    return (
    <div className="Navbar">
        <nav className="navbar navbar-dark bg-dark">
                <a className="navbar-brand" href="#"><img src={logo} width="30" height="30" className="d-inline-block align-top" alt=""/>DayWeb</a>
                             <a className="nav-link" href="https://github.com/NightSling">GitHub</a>
                             <a className="nav-link" href="https://twitter.com/dayslingthedev">Twitter</a>

        </nav>
    </div>
    )
  }
}

export default NavbarMain;
