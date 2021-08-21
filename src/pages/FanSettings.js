import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FanSidebar from "./FanSideBar";
import { useHistory } from "react-router-dom";
import { getCallModal, getCreators, getFanPost } from "../utils/apiCalls";
import jwt_decode from "jwt-decode";
import { NotificationManager } from "react-notifications";
import { connect } from "react-redux";
import { front } from "../utils/constants";

function FanSettings(props) {
  const navRef = useRef("");
  const butRef = useRef("");
  let history = useHistory();
   const token = props.user.user.token;
  const [modal, setModal] = useState(false);
  const { firstName, lastName, picture, email, userName, onboardingStep } =
    props.data.user || "";
  let img1 = picture || "images/profile-image.jpg";

  const navChange = () => {
    butRef.current.classList.toggle("active");
    navRef.current.classList.toggle("nav-active");
  };

  useEffect(async () => {
    let user = JSON.parse(localStorage.getItem("trend-user"));
    if (user !== null) {
      const decoded = jwt_decode(user.token);
      const expirationTime = new Date() / 1000;

      if (expirationTime >= decoded.exp) {
        user = null;
        props.dispatch({ type: "LOGIN_SUCCESS", payload: null });
        localStorage.removeItem("trend-user");
        NotificationManager.error(
          "Session has expired, please log in again",
          "Error",
          10000
        );
        history.push("/login");
      }
    }
    getCallModal(setModal, props.dispatch, token);
  
    return () => {};
  }, []);
  
  return (
    <div className="dashboard-page" style={{ background: "#f9f9f9" }}>
      <div class="main-wrapper">
        <div className="nav-header border-0" style={{ background: "#f9f9f9" }}>
          <div className="nav-top">
            <Link to="/fan-dashboard" className="logo">
              {" "}
              <img src="images/trenupp-logo.png" alt="Trendupp Logo" />{" "}
            </Link>

            <button
              ref={butRef}
              onClick={navChange}
              className="nav-menu me-0 ms-2"
            ></button>
          </div>
        </div>

        <nav ref={navRef} class="navigation scroll-bar">
          <div class="container ps-0 pe-0">
            <div class="nav-content">
              <div class="nav-wrap">
                <div class="top-content">
                  <Link to="/fan-dashboard" class="nav-content-profile">
                    <figure
                      class="nav-content-image"
                      style={{
                        backgroundImage: "url(" + img1 + ")",
                      }}
                    >
                      <img
                        src="images/profile-image.jpg"
                        class="d-none"
                        alt=""
                      />
                    </figure>
                    <span>
                      {firstName} {lastName}
                    </span>
                  </Link>
                </div>
              </div>

              <FanSidebar />
            </div>
          </div>
        </nav>

        <div class="main-content">
          <div class="middle-sidebar-bottom">
            <div class="middle-sidebar-left">
              <div class="row">
                <div class="col-md-9">
                  <div class="card dash-card dash-card__records dash-card__posts p-5">
                    <h3 class="card-title mb-3">SETTINGS</h3>

                    <ul class="list-inline">
                      <li class="list-inline-item d-block border-bottom me-0">
                        <Link
                          to="/fan-settings/user"
                          class="pt-3 pb-3 d-flex align-items-center"
                        >
                          <i class="btn-round-md bg-gold-gradiant text-white feather-info font-md me-3"></i>{" "}
                          <h4 class="fw-600 font-xsss mb-0 mt-0">
                            User Details
                          </h4>
                          <i class="ti-angle-right font-xsss text-grey-500 ms-auto mt-3"></i>
                        </Link>
                      </li>
                      <li class="list-inline-item d-block border-bottom me-0">
                        <Link
                          to="/fan-settings/reset"
                          class="pt-3 pb-3 d-flex align-items-center"
                        >
                          <i class="btn-round-md bg-red-gradiant text-white feather-lock font-md me-3"></i>{" "}
                          <h4 class="fw-600 font-xsss mb-0 mt-0">
                            Change Password
                          </h4>
                          <i class="ti-angle-right font-xsss text-grey-500 ms-auto mt-3"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.auth,
    data: state.user,
  };
};

export default connect(mapStateToProps)(FanSettings);
