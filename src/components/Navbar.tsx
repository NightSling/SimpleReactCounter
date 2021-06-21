import React from 'react';
import logo from '../others/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
class NavbarMain extends React.Component {
  render() {
    return (
    <div className="Navbar">
        <nav className="navbar navbar-dark bg-dark">
                <a className="navbar-brand" href="#"><img src={logo} width="30" height="30" className="d-inline-block align-top" alt=""/></a>
                             <li className="nav-item active">
                                     <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item">
                                        <a className="nav-link" href="https://github.com/NightSling">GitHub</a>
                                </li>
                                <li className="nav-item">
                                        <a className="nav-link" href="https://twitter.com/dayslingthedev">Twitter</a>
                                </li>

        </nav>
    </div>
    )
  }
}

export default NavbarMain;
