import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as bootstrap from 'react-bootstrap';
import NavbarMain from './components/Navbar';
import CounterClass from './components/Counter';

class App extends React.Component {
  render() {
    return (
    <div className="Main">
        <NavbarMain/>
        <CounterClass/>
    </div>
    )
  }
}

export default App;
