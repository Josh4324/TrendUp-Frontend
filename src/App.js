import React from 'react';
import { Route, Switch, HashRouter, Router, Redirect } from 'react-router-dom';
import {LoginPage, Dashboard,Landing,SignUp, Onboard1, Onboard2, Onboard3,
   PrivateRoute, NotFound, WalletPage,OnboardComplete, SettingPage, FanDashboard, PostPage, CreatorPage, SupporterPage} from './pages/index';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import {connect} from 'react-redux';
import 'react-notifications/lib/notifications.css';
import "./custom.css";
import jwt_decode from "jwt-decode";


function App(props) {
  const user = props.user.user
  return (
    <div className="App color-theme-blue">
      <HashRouter basename="/">
        <Switch>
          <Route exact path="/">
              { user ? <Dashboard/> : <Landing/>}
          </Route>
          <Route exact path="/login">
              { user ? <Dashboard/> : <LoginPage/>}
          </Route>
          <Route exact path="/signup">
              { user ? <Dashboard/> : <SignUp/>}
          </Route>
          <PrivateRoute exact path="/step1" component={Onboard1} />
          <PrivateRoute exact path="/step2" component={Onboard2} />
          <PrivateRoute exact path="/step3" component={Onboard3} />
          <PrivateRoute exact path="/step4" component={OnboardComplete} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <PrivateRoute exact path="/post" component={PostPage} />
          <PrivateRoute exact path="/supporters" component={SupporterPage} />
          <PrivateRoute exact path="/wallet" component={WalletPage} />
          <PrivateRoute exact path="/settings" component={SettingPage} />
          <PrivateRoute exact path="/fan-dashboard" component={FanDashboard} />
          <Route   path="/:username" component={CreatorPage} />
          <Route  component={NotFound} />

        </Switch>
        <NotificationContainer />
      </HashRouter>
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log("state", state)
  return {
      user: state.auth,
  }
}

export default connect(mapStateToProps)(App);

