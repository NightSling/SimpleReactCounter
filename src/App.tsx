import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as bootstrap from 'react-bootstrap';
import NavbarMain from './components/Navbar';

class App extends React.Component {
  render() {
    return (
    <div className="Main">
      <NavbarMain/>
    </div>
    )
  }
}

export default App;
