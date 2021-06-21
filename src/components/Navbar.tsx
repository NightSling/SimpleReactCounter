import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
class NavbarMain extends React.Component {
  render() {
    return (
    <div className="Navbar">
        <nav className="navbar navbar-dark bg-ldark">
                <a className="navbar-brand" href="#">
                        <img src="../../public/logo512.png" width="30" height="30" className="d-inline-block align-top" alt=""/>                 DayWeb
                </a>
        </nav>
    </div>
    )
  }
}

export default NavbarMain;
