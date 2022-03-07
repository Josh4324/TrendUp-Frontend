import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { postForgot } from "../utils/apiCalls";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { NotificationManager } from "react-notifications";

function ForgotPassword(props) {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loader, setLoader] = useState(false);
  const emailRef = useRef("");
  const passwordRef = useRef("");

  let history = useHistory();

  const forgot = async (evt) => {
    evt.preventDefault();
    setLoader(true);

    const cred = {
      email: emailRef.current.value,
    };

    if (emailRef.current.value === "") {
      setLoader(false);
      return NotificationManager.error("Please enter your email address");
    }

    const result = await postForgot(cred);
    if (result.code === 200) {
      setLoader(false);
      NotificationManager.success("Reset Email has been sent to your mail box");
    } else {
      setLoader(false);
      NotificationManager.error(
        "This email does not exist or an error occured"
      );
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
            <div className="signup-acc">Already have an account?</div>
            <Link to="/login">
              <div className="landing-login">Login</div>
            </Link>
          </div>
        </header>

        <section className="login-card mx-auto mt-5">
          <h2 className="login-card-title">Forgot Password</h2>

          <form onSubmit={forgot}>
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
              Submit
            </button>
          </form>
        </section>
      </main>
    </>
  );
}

export default connect()(ForgotPassword);
