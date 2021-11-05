/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { loginCall, socialCheck, socialLogin, socialSignUp } from "../utils/apiCalls";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'

import { front } from "../../src/utils/constants";

function LoginPage(props) {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loader, setLoader] = useState(false);
  const emailRef = useRef("");
  const passwordRef = useRef("");

  let history = useHistory();

  const responseGoogle = async (response) => {
    const cred = {
      firstName: response?.profileObj?.givenName,
      lastName: response?.profileObj?.familyName,
      email: response?.profileObj?.email,
      picture: response?.profileObj?.imageUrl,
      onboardingStep: 1,
    }
    const result = await socialCheck(
      cred,
    );

    if (result?.data?.email){
      const result = await socialSignUp(cred);
      console.log(result);
      props.dispatch({ type: "LOGIN_SUCCESS", payload: result.data });
      localStorage.setItem("trend-user", JSON.stringify(result.data));
      window.location.href = `${front}/step1`;
    }else{
      const result = await socialLogin(cred);
      props.dispatch({ type: "LOGIN_SUCCESS", payload: result.data });
      localStorage.setItem("trend-user", JSON.stringify(result.data));
      const { onboardingStep } = result.data  
      let onboard = Number(onboardingStep);
       if (Number(onboard) === 4) {
        window.location.href = `${front}/dashboard`;
      } else {
        window.location.href = `${front}/step${Number(onboard)}`;
      }
    }
  }

  const responseFacebook = (response) => {
    console.log(response);
  }

  const login = async (evt) => {
    evt.preventDefault();

    const cred = {
      email: emailRef.current.value,
      password: passwordRef.current.value
    };

    const result = await loginCall(
      cred,
      props.dispatch,
      setLoader,
      setError,
      history
    );
  };

  return (
    <>
      <main className="main-signup">
        <header className="landing-header">
          <div>
            <Link to="/">
              <img src="./logo.svg" />
            </Link>
          </div>
          <div className="signup-button">
            <div className="signup-acc">No account?</div>
            <Link to="/signup">
              <div className="landing-login">Signup</div>
            </Link>
          </div>
        </header>

        <section className="login-card mx-auto">
          <h2 className="login-card-title">Welcome Back</h2>

          <div className="col-sm-12 social-login">
          <GoogleLogin
          clientId="247293153353-f740pqjuo3bmob4mjb8upd26auia6hlv.apps.googleusercontent.com"
          render={renderProps => (
      <a href="#" className="social-login-icon" onClick={renderProps.onClick}>
      <img
        src="images/icon-google.svg"
        alt="google icon"
        className=""
      />
    </a>
    )}
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />

<FacebookLogin
          appId="307338824547597"
        callback={responseFacebook}
    render={renderProps => (
    <a onClick={renderProps.onClick} href="#" className="social-login-icon">
    <img
      src="images/icon-facebook.svg"
      alt="google icon"
      className=""
    />
  </a>
    
  )}
/>
          
          
          </div>

          <h6 className="social-login-divider">
            <span>Or, login with email</span>{" "}
          </h6>
          <form onSubmit={login}>
            <div className="form-group icon-input">
              <i className="font-sm ti-email text-grey-500 pe-0"></i>
              <input
                type="text"
                className="form-control style2-input ps-5"
                ref={emailRef}
                placeholder="Your Email Address"
              />
              <div className="invalid-feedback">
                Please fill in your email address
              </div>
            </div>
            <div className="form-group icon-input">
              <input
                type="Password"
                className="form-control style2-input ps-5"
                ref={passwordRef}
                placeholder="Password"
              />
              <i className="font-sm ti-lock text-grey-500 pe-0"></i>
              <div className="invalid-feedback">
                Please fill in your password
              </div>
            </div>

            <div className={error.length > 0 ? "alert alert-danger" : "none"}>
              <div>{error}</div>
            </div>
            <div className={loader === true ? "loader" : "none"}>
              <div>Loading...</div>
            </div>

            <button
              type="submit"
              className="form-control style2-input style2-main-button"
            >
              Continue with email
            </button>

            <Link className="text-align-center" to="/forgot-password">
              Forgot Password?
            </Link>
          </form>
        </section>
      </main>
    </>
  );
}

export default connect()(LoginPage);
