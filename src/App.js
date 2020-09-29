import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import '../src/assets/js/custom';
import GuestPayComponent from './Pages-Component/GuestPayComponent';
import HomeComponent from './Pages-Component/HomeComponent';

import QRComponent from './Pages-Component/Qr-Component';
import ThankuPage from './Pages-Component/ThankuPage';
import PaymentMethods from './Share-Component/PaymentMethods';

 
 

function App() {
  
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact><QRComponent /></Route>
          <Route path="/home" exact><HomeComponent /></Route>
          <Route path="/guest-pay" exact><GuestPayComponent /></Route>
          <Route path="/thanks" exact><ThankuPage /></Route>
          <Route path="/payment-methods" exact><PaymentMethods /></Route>
        </Switch>

      </Router>
    </>
  );
}

export default App;
