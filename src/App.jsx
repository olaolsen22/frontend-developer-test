import React from 'react';
import './App.scss';
import { Route } from 'react-router-dom'
import { getToken } from './utils/common';
import { useHistory } from 'react-router-dom';
// Components
import { LoginModal } from './components/login-modal/login-modal';
import Devices from './pages/devices/devices';

function App() {
  const history = useHistory()
  const requireAuth = () => {
    if (!getToken()) {
      history.replace('/')
    }
  }
  return (
    <div className="App">
      <Route exact path="/" component={LoginModal}/>
      <Route exact path="/devices" component={Devices} beforeEnter={requireAuth()} />
    </div>
  );
}
export default App;
