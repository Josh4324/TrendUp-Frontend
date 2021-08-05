import React, { useRef, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import FanSidebar from "./FanSideBar";
import { getSupportCreators, getCallModal } from "../utils/apiCalls";
import { connect } from "react-redux";
import jwt_decode from "jwt-decode";
import { NotificationManager } from "react-notifications";
import { front } from "../utils/constants";

function SupportedCreators(props) {
  let img1 = "images/profile-image.jpg";
  let img2 = "images/user-9.png";
  const navRef = useRef("");
  const butRef = useRef("");
  const token = props.user.user.token;
  let history = useHistory();
  const { firstName, lastName, picture, email, userName, onboardingStep } =
    props.data.user || "";
  const [creator, setCreator] = useState([]);

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
    console.log(email);
    if (email) {
      let creators = await getSupportCreators(token, email);
      console.log(creators);
      setCreator(creators);
    }

    return () => {};
  }, [email]);
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
                        backgroundImage: "url(" + picture + ")",
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
              <div class="row mb-3">
                <div class="col-md-4">
                  <h3 class="card-title mt-3 mb-3">Supported Creators</h3>
                </div>
                <div class="col-md-4 offset-md-4">
                  <form action="" class="search-form-2 ms-auto">
                    <button type="submit">
                      <i class="ti-search font-xss"></i>
                    </button>

                    <input
                      type="text"
                      class="form-control text-grey-500 mb-0 border-0"
                      placeholder="Search here."
                    />
                  </form>
                </div>
              </div>

              <div class="row creator-row d-flex">
                {creator.map((item) => {
                  return (
                    <div class="col-md-3">
                      <div class="item">
                        <div class="card dash-card creator-small-card p-0 mb-3">
                          <div class="card-body d-block w-100 ps-3 pe-3 pb-4 text-center">
                            <figure
                              class="avatar"
                              style={{
                                backgroundImage: "url(" + item.picture + ")",
                              }}
                            >
                              <img src="images/user-11.png" alt="creator" />
                            </figure>
                            <div class="clearfix"></div>
                            <h4 class="creator-small-card--title mt-3 mb-2">
                              {item.firstName} {item.lastName}
                            </h4>
                            <p class="creator-small-card--text mt-0 mb-3">
                              {item.about.split("").slice(0, 27).join("")}...
                            </p>
                            <a
                              href={`/#/${item.userName}`}
                              target="_blank"
                              class="btn btn-light bt-sm"
                            >
                              VIEW CREATOR
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
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

export default connect(mapStateToProps)(SupportedCreators);
