/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import {
  loginCall,
  socialCheck,
  resendCall,
  socialLogin,
  verificationCall,
  socialSignUp,
} from "../utils/apiCalls";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";

import { front } from "../../src/utils/constants";

function LoginPage(props) {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loader, setLoader] = useState(false);
  const [verify, setVerify] = useState(false);
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const codeRef = useRef("");

  const resend = async (evt) => {
    evt.preventDefault();

    const cred = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    const result = await resendCall(cred);
  };

  const verify1 = async (evt) => {
    evt.preventDefault();

    const cred = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
      code: codeRef.current.value,
    };

    const result = await verificationCall(
      cred,
      setLoader,
      setError,
      history,
      props.dispatch
    );
  };

  let history = useHistory();

  const responseGoogle = async (response) => {
    if (response.error) {
      return "";
    }
    const cred = {
      firstName: response?.profileObj?.givenName,
      lastName: response?.profileObj?.familyName,
      email: response?.profileObj?.email,
      picture: response?.profileObj?.imageUrl,
      onboardingStep: 1,
    };
    const result = await socialCheck(cred);

    if (result?.data?.email) {
      const result = await socialSignUp(cred);
      console.log(result);
      props.dispatch({ type: "LOGIN_SUCCESS", payload: result.data });
      localStorage.setItem("trend-user", JSON.stringify(result.data));
      window.location.href = `${front}/step1`;
    } else {
      const result = await socialLogin(cred);
      props.dispatch({ type: "LOGIN_SUCCESS", payload: result.data });
      localStorage.setItem("trend-user", JSON.stringify(result.data));
      const { onboardingStep } = result.data;
      let onboard = Number(onboardingStep);
      if (Number(onboard) === 4) {
        window.location.href = `${front}/dashboard`;
      } else {
        window.location.href = `${front}/step${Number(onboard)}`;
      }
    }
  };

  const responseFacebook = async (response) => {
    if (response.error) {
      return "";
    }
    const names = response.name.split(" ");
    const cred = {
      firstName: names[0],
      lastName: names[1],
      email: response?.email,
      picture: response?.picture?.data.url,
      onboardingStep: 1,
    };
    const result = await socialCheck(cred);

    if (result?.data?.email) {
      const result = await socialSignUp(cred);
      console.log(result);
      props.dispatch({ type: "LOGIN_SUCCESS", payload: result.data });
      localStorage.setItem("trend-user", JSON.stringify(result.data));
      window.location.href = `${front}/step1`;
    } else {
      const result = await socialLogin(cred);
      props.dispatch({ type: "LOGIN_SUCCESS", payload: result.data });
      localStorage.setItem("trend-user", JSON.stringify(result.data));
      const { onboardingStep } = result.data;
      let onboard = Number(onboardingStep);
      if (Number(onboard) === 4) {
        window.location.href = `${front}/dashboard`;
      } else {
        window.location.href = `${front}/step${Number(onboard)}`;
      }
    }
  };

  const login = async (evt) => {
    evt.preventDefault();

    const cred = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    const result = await loginCall(
      cred,
      props.dispatch,
      setLoader,
      setError,
      history
    );

    if (result === true) {
      setVerify(true);
    }
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
              clientId="361359368630-tv5jev84vb1h7ehgaa2mgupvj8dlccs9.apps.googleusercontent.com"
              render={(renderProps) => (
                <a
                  href="#"
                  className="social-login-icon"
                  onClick={renderProps.onClick}
                >
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
              cookiePolicy={"single_host_origin"}
            />

            <FacebookLogin
              appId="803651167213839"
              callback={responseFacebook}
              fields="name,email,picture"
              render={(renderProps) => (
                <a
                  onClick={renderProps.onClick}
                  href="#"
                  className="social-login-icon"
                >
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
            {verify === true ? (
              <div className="form-group icon-input">
                <input
                  type="text"
                  className="form-control style2-input ps-3 mb-2 bg-white"
                  ref={codeRef}
                  placeholder="Paste verification code"
                />
                <span className="form-input-btn resend" onClick={resend}>
                  Resend
                </span>
                <div id="emailHelp" className="form-text">
                  Please check your inbox for a verification code.
                </div>

                <div className="invalid-feedback">
                  Your verification code is incorrect
                </div>
              </div>
            ) : null}
            {verify === true ? (
              <button
                type="submit"
                onClick={verify1}
                className="form-control style2-input style2-main-button"
              >
                Continue with email
              </button>
            ) : (
              <button
                type="submit"
                className="form-control style2-input style2-main-button"
              >
                Continue with email
              </button>
            )}

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
