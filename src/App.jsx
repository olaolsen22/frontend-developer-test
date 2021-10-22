import React from 'react';
import './App.scss';
import { Route, Link } from 'react-router-dom'
// Components
import { LoginModal } from './compontents/login-modal/login-modal';
import { Devices } from './pages/devices/devices';

function App() {
    return (
      <div className="App">
        <Route exact path="/" component={LoginModal}/>
        <Route exact path="/devices" component={Devices}/>
      </div>
    );
}
export default App;
