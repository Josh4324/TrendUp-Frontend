import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { getCallModal, resetPasswordCall } from "../utils/apiCalls";
import { connect } from "react-redux";
import { NotificationManager } from "react-notifications";
import Post from "../components/Post";
import { Sidebar } from "./index";
import { useHistory } from "react-router-dom";
import { front } from "../utils/constants";
import "../themify-icons.css";
import "../feather.css";
import "../style1.css";
import "../custom1.css";

function ResetPassword(props) {
  const [modal, setModal] = useState(false);
  const [view, setView] = useState("dashboard");
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const [public1, setPublic1] = useState(true);
  const [support, setSupport] = useState(false);
  const [onboard, setOnboard] = useState(null);
  const [log, setLog] = useState(false);
  const navRef = useRef("");
  const butRef = useRef("");
  let history = useHistory();
  const token = props.user.user.token;
  const onboard1 = props.user.user.onboardingStep;
  const { firstName, picture, brandName, userName, onboardingStep } =
    props.data.user || "";
  let img1 = picture || "images/profile-image.jpg";
  const link = `/${userName}`;
  let oldPasswordRef = useRef("");
  let newPasswordRef = useRef("");
  let confirmPasswordRef = useRef("");

  const setPage = (page) => {
    setView(page);
  };

  const setPostType = (value, bool) => {
    if (value === "public") {
      console.log(value);
      console.log(bool);
      setPublic1(bool);
      setSupport(false);
    } else {
      setSupport(bool);
      setPublic1(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("trend-user");
    props.dispatch({ type: "LOGIN_FAILURE" });
    history.push("/login");
    setLog(true);
  };

  const navChange = () => {
    butRef.current.classList.toggle("active");
    navRef.current.classList.toggle("nav-active");
  };

  const submit = async (evt) => {
    evt.preventDefault();
    if (
      !newPasswordRef.current.value ||
      !confirmPasswordRef.current.value ||
      !oldPasswordRef.current.value
    ) {
      return NotificationManager.error(
        "Please fill all required fields",
        "Error"
      );
    }
    if (newPasswordRef.current.value !== confirmPasswordRef.current.value) {
      NotificationManager.error("Password do not match", "Error");
    } else {
      let cred = {
        oldPassword: oldPasswordRef.current.value,
        newPassword: newPasswordRef.current.value
      };
      const result = await resetPasswordCall(cred, token);
    }
  };

  useEffect(() => {
    getCallModal(setModal, props.dispatch, token);

    return () => {};
  }, []);
  return (
    <div className="dashboard-page" style={{ background: "#f9f9f9" }}>
      <div className="main-wrapper">
        <div className="nav-header border-0" style={{ background: "#f9f9f9" }}>
          <div className="nav-top">
            <Link to="/dashboard" className="logo">
              {" "}
              <img
                src={`${front}/images/trenupp-logo.png`}
                alt="Trendupp Logo"
              />{" "}
            </Link>

            <button
              ref={butRef}
              onClick={navChange}
              className="nav-menu me-0 ms-2"
            ></button>
          </div>
        </div>

        <nav ref={navRef} className="navigation scroll-bar">
          <div className="container ps-0 pe-0">
            <div className="nav-content">
              <div className="nav-wrap">
                <div className="top-content">
                  <Link to={link} className="nav-content-profile">
                    <figure
                      class="nav-content-image"
                      style={{
                        backgroundImage: "url(" + img1 + ")"
                      }}
                    >
                      <img
                        src="images/profile-image.jpg"
                        class="d-none"
                        alt=""
                      />
                    </figure>

                    <span>{brandName}</span>
                  </Link>
                  <div class="nav-content-button">
                    <a
                      class="nav-content-button-item"
                      id="dropdownMenu4"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      href="#"
                    >
                      {" "}
                      <i class="feather-plus-circle"></i> Post
                    </a>
                    <div
                      class="dropdown-menu dropdown-menu-start"
                      aria-labelledby="dropdownMenu4"
                    >
                      <div class="card-body p-0 ">
                        <a
                          class="d-flex"
                          onClick={(evt) => {
                            evt.preventDefault();
                            setPostType("public", true);
                            setView("post");
                          }}
                          href="#"
                        >
                          <i class="feather-users"></i>
                          <h4>
                            Public{" "}
                            <span>Post to general viewers of your page</span>
                          </h4>
                        </a>
                      </div>
                      <div class="card-body p-0">
                        <a
                          class="d-flex"
                          onClick={(evt) => {
                            evt.preventDefault();
                            setPostType("support", true);
                            setView("post");
                          }}
                          href="#"
                        >
                          <i class="feather-heart"></i>
                          <h4>
                            Your Supporters{" "}
                            <span>Post to only your supporters</span>
                          </h4>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Sidebar setView={setPage} logout={logout} link={link} />
            </div>
          </div>
        </nav>

        <div
          className="main-content right-chat-active"
          style={{ backgroundColor: "unset" }}
        >
          {view === "post" ? (
            <Post
              public1={public1}
              support={support}
              setPostType={setPostType}
            />
          ) : (
            <div class="middle-sidebar-bottom" style={{ paddingLeft: "20px" }}>
              <div class="middle-sidebar-left">
                <div class="row">
                  <div class="col-12">
                    <div class="card dash-card dash-card__records dash-card__posts p-5">
                      <Link to="/settings" class="back-btn">
                        <h3 class="card-title mb-3">settings</h3>
                      </Link>

                      <div class="settings-userdetails-section">
                        <h2 class="useronboard-title mt-4 mb-4">
                          Change Password
                        </h2>

                        <form class="mw-400 mx-auto">
                          <div class="row">
                            <div class="col-lg-6 mb-2">
                              <label class="">Current Password</label>
                            </div>
                          </div>

                          <div class="row">
                            <div class="col-lg-12 mb-2">
                              <div class="form-group">
                                <input
                                  type="password"
                                  ref={oldPasswordRef}
                                  class="form-control style2-input"
                                  placeholder=""
                                />
                              </div>
                            </div>
                          </div>

                          <div class="row">
                            <div class="col-lg-6 mb-2">
                              <label class="">New Password</label>
                            </div>
                          </div>

                          <div class="row">
                            <div class="col-lg-12 mb-2">
                              <div class="form-group">
                                <input
                                  type="password"
                                  ref={newPasswordRef}
                                  class="form-control style2-input"
                                  placeholder=""
                                />
                              </div>
                            </div>
                          </div>

                          <div class="row">
                            <div class="col-lg-6 mb-2">
                              <label class="">Confirm Password</label>
                            </div>
                          </div>

                          <div class="row">
                            <div class="col-lg-12 mb-2">
                              <div class="form-group">
                                <input
                                  type="password"
                                  ref={confirmPasswordRef}
                                  class="form-control style2-input"
                                  placeholder=""
                                />
                              </div>
                            </div>
                          </div>

                          <div class="row">
                            <div class="col-lg-12">
                              <button
                                type="submit"
                                onClick={submit}
                                class="form-control style2-input style2-main-button"
                              >
                                Update Password
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    user: state.auth,
    data: state.user
  };
};

export default connect(mapStateToProps)(ResetPassword);
