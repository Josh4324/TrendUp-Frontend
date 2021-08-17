import React from "react";
import { Route, Switch, HashRouter, Router, Redirect } from "react-router-dom";
import {
  LoginPage,
  Dashboard,
  Landing,
  SignUp,
  Onboard1,
  Onboard2,
  Onboard3,
  PrivateRoute,
  NotFound,
  Bank,
  WalletPage,
  OnboardComplete,
  SettingsLink,
  FanPrivateRoute,
  ExploreCreators,
  ResetPassword,
  SupportHistoryPage,
  SettingPage,
  FanDashboard,
  PostPage,
  CreatorPage,
  SupporterPage,
  Success,
  Details,
  SupportedCreators,
  FanSupportHistory,
  FanSettings,
  FanDetail,
  Reset,
  FanResetPassword,
  CreatorPostPage,
  ForgotPassword
} from "./pages/index";
import { NotificationContainer } from "react-notifications";
import { connect } from "react-redux";
import "react-notifications/lib/notifications.css";
import "./custom.css";

function App(props) {
  const user = props.user.user;
  let onboarding;
  if (user !== null) {
    onboarding = Number(user.onboardingStep);
  }
  return (
    <div className="App color-theme-blue">
      <HashRouter basename="/">
        <Switch>
          <Route exact path="/">
            {onboarding === 1 ? (
              <Onboard1 />
            ) : onboarding === 2 ? (
              <Onboard2 />
            ) : onboarding === 3 ? (
              <Onboard3 />
            ) : user === null ? (
              <Landing />
            ) : user.userType === "fan" ? (
              <FanDashboard />
            ) : (
              <Dashboard />
            )}
          </Route>
          <Route exact path="/login">
            {onboarding === 1 ? (
              <Onboard1 />
            ) : onboarding === 2 ? (
              <Onboard2 />
            ) : onboarding === 3 ? (
              <Onboard3 />
            ) : user === null ? (
              <LoginPage />
            ) : user.userType === "fan" ? (
              <FanDashboard />
            ) : (
              <Dashboard />
            )}
          </Route>
          <Route exact path="/signup">
            {onboarding === 1 ? (
              <Onboard1 />
            ) : onboarding === 2 ? (
              <Onboard2 />
            ) : onboarding === 3 ? (
              <Onboard3 />
            ) : user === null ? (
              <SignUp />
            ) : user.userType === "fan" ? (
              <FanDashboard />
            ) : (
              <Dashboard />
            )}
          </Route>
          <Route path="/forgot-password" component={ForgotPassword} />
           <Route path="/reset" component={Reset} />
          <PrivateRoute exact path="/step1" component={Onboard1} />
          <PrivateRoute exact path="/step2" component={Onboard2} />
          <PrivateRoute exact path="/step3" component={Onboard3} />
          <PrivateRoute exact path="/step4" component={OnboardComplete} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <PrivateRoute exact path="/post" component={PostPage} />
          <PrivateRoute exact path="/supporters" component={SupporterPage} />
          <PrivateRoute exact path="/wallet" component={WalletPage} />
          <PrivateRoute exact path="/settings" component={SettingPage} />
          <PrivateRoute exact path="/settings/link" component={SettingsLink} />
          <PrivateRoute
            exact
            path="/settings/password"
            component={ResetPassword}
          />
          <PrivateRoute exact path="/settings/user" component={Details} />
          <PrivateRoute exact path="/settings/account" component={Bank} />
          <PrivateRoute
            path="/support-history"
            component={SupportHistoryPage}
          />
          <FanPrivateRoute
            exact
            path="/fan-dashboard"
            component={FanDashboard}
          />
          <FanPrivateRoute exact path="/explore" component={ExploreCreators} />
          <FanPrivateRoute
            exact
            path="/supporter-creators"
            component={SupportedCreators}
          />
          <FanPrivateRoute
            exact
            path="/fan-support-history"
            component={FanSupportHistory}
          />
          <FanPrivateRoute exact path="/fan-settings" component={FanSettings} />
          <FanPrivateRoute
            exact
            path="/fan-settings/user"
            component={FanDetail}
          />
          <FanPrivateRoute
            exact
            path="/fan-settings/reset"
            component={FanResetPassword}
          />
          <Route exact path="/success" component={Success} />
          <Route path="/404" component={NotFound} />
          <Route path="/post/:id" component={CreatorPostPage} />
          <Route path="/:username" component={CreatorPage} />

          <Route component={NotFound} />
        </Switch>
        <NotificationContainer />
      </HashRouter>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.auth,
  };
};

export default connect(mapStateToProps)(App);
