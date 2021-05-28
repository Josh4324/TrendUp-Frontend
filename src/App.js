import React from 'react';
import { Route, Switch, HashRouter, Router } from 'react-router-dom';
import {LoginPage, Dashboard,Landing,SignUp, Onboard1, Onboard2, Onboard3, PrivateRoute, OnboardComplete} from './pages/index';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import {connect} from 'react-redux';
import 'react-notifications/lib/notifications.css';
import "./custom.css";


function App(props) {
  const user = props.user.user;
  return (
    <div className="App color-theme-blue">
      <HashRouter basename="/">
        <Switch>
          <Route exact path="/">
              { user ? <Onboard1/> : <Landing/>}
          </Route>
          <Route exact path="/login">
              { user ? <Onboard1/> : <LoginPage/>}
          </Route>
          <Route exact path="/signup">
              { user ? <Onboard1/> : <SignUp/>}
          </Route>
          <PrivateRoute path="/step1" component={Onboard1} />
          <PrivateRoute path="/step2" component={Onboard2} />
          <PrivateRoute path="/step3" component={Onboard3} />
          <PrivateRoute path="/step4" component={OnboardComplete} />
          <PrivateRoute path="/dashboard" component={Dashboard} />

        </Switch>
        <NotificationContainer/>
      </HashRouter>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
      user: state.auth,
  }
}

export default connect(mapStateToProps)(App);

