import React from 'react';
import { Route, Switch, HashRouter, Router } from 'react-router-dom';
import {LoginPage, Dashboard,Landing,SignUp, Onboard1, Onboard2} from './pages/index';
import "./custom.css";


function App() {
  return (
    <div className="App">
      <HashRouter basename="/">
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/step1" component={Onboard1} />
          <Route exact path="/step2" component={Onboard2} />
          <Route exact path="/dashboard" component={Dashboard} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
