import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import FanSidebar from "./FanSideBar";
import { useHistory } from "react-router-dom";
import { getPaymentHistory } from "../utils/apiCalls";
import jwt_decode from "jwt-decode";
import { NotificationManager } from "react-notifications";
import { connect } from "react-redux";
import { front } from "../utils/constants";

function FanSupportHistory(props) {
  let history = useHistory();
  const { firstName, lastName, picture, email, userName, onboardingStep } =
    props.data.user || "";
  let img1 = picture || "images/profile-image.jpg";
  const navRef = useRef("");
  const butRef = useRef("");
  const [his, setHis] = useState([]);
  const [loading, setLoading] = useState(true);
  const token = props.user.user.token;

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
    if (email) {
      let historyData = await getPaymentHistory(token, email);
      if (historyData) {
        setLoading(false);
        setHis(historyData);
      }
    }

    return () => {};
  }, [email]);

  const navChange = () => {
    butRef.current.classList.toggle("active");
    navRef.current.classList.toggle("nav-active");
  };
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
                  <div class="card dash-card dash-card__records dash-card__supporters">
                    <h3 class="card-title mb-3">SUPPORT HISTORY</h3>
                    {loading === true ? (
                      <div className="">
                        <div
                          className="loader"
                          style={{ marginTop: "20px", marginBottom: "40px" }}
                        >
                          <div>Loading...</div>
                        </div>
                      </div>
                    ) : null}
                    {his.length === 0 && loading === false ? (
                      <p style={{ marginTop: "30px" }}>
                        You have not supported any creator.
                        <Link to="/explore" style={{ paddingLeft: "5px" }}>
                          View list of creators you can support.
                        </Link>
                      </p>
                    ) : null}
                    {his.map((item) => {
                      return (
                        <div class="single-record-row d-flex">
                          <div class="row supporters-row">
                            <div class="col-sm-5">
                              <h4 class="post-single_title">
                                {item.firstName} {item.lastName}
                                <span class="post-single_date">
                                  {new Date(item.createdAt).toDateString()} at{" "}
                                  {new Date(
                                    item.createdAt
                                  ).toLocaleTimeString()}
                                </span>
                              </h4>
                            </div>
                            <div class="col-sm-3 offset-md-4">
                              {" "}
                              ₦{item.amount}
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

export default connect(mapStateToProps)(FanSupportHistory);
