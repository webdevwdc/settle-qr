import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import GuestPayComponent from './Pages-Component/GuestPayComponent';
import HomeComponent from './Pages-Component/HomeComponent';

import QRComponent from './Pages-Component/Qr-Component';
import ThankuPage from './Pages-Component/ThankuPage';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact><QRComponent /></Route>
          <Route path="/home" exact><HomeComponent /></Route>
          <Route path="/guest-pay" exact><GuestPayComponent /></Route>
          <Route path="/thanks" exact><ThankuPage /></Route>
        </Switch>

      </Router>
    </>
  );
}

export default App;
