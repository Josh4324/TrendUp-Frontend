import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import FanSidebar from "./FanSideBar";
import { useHistory } from "react-router-dom";
import { getCallModal, getCreators, getFanPost } from "../utils/apiCalls";
import jwt_decode from "jwt-decode";
import { NotificationManager } from "react-notifications";
import { connect } from "react-redux";
import { front } from "../utils/constants";

function FanDashboard(props) {
  let img2 = "images/user-9.png";
  let history = useHistory();
  const { firstName, lastName, picture, email, userName, onboardingStep } =
    props.data.user || "";
  let img1 = picture || "images/profile-image.jpg";
  localStorage.setItem("trend-fan-email", email);
  localStorage.setItem("trend-fan-firstname", firstName);
  localStorage.setItem("trend-fan-lastname", lastName);
  const token = props.user.user.token;
  const [modal, setModal] = useState(false);
  const [creators, setCreators] = useState([]);
  const [fanpost, setFanPost] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fanloading, setFanLoading] = useState(true);
  const [viewPost, setViewPost] = useState(null);
  const navRef = useRef("");
  const butRef = useRef("");
  const link = `/${userName}`;

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
    let creators = await getCreators(token);
    if (email) {
      console.log(email);
      let fanpost = await getFanPost(token, email);
      if (fanpost) {
        console.log(fanpost);
        setFanLoading(false);
        setFanPost(fanpost);
      }
    }

    if (creators) {
      setLoading(false);
      setCreators(creators.slice(0, 4));
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
            {fanpost.length === 0 && fanloading === false ? (
              <div class="middle-sidebar-left">
                <div class="row">
                  <div class="col-12">
                    <div class="card dash-card">
                      <i class="feather-heart btn-round-lg bg-grey font-md fw-700 text-grey-500 d-inline-block mx-auto mb-3"></i>
                      <h2 class="fw-700 font-xs text-center mb-3">
                        No Posts Available
                      </h2>
                      <p class="text-grey-600 text-center mw-600 mx-auto">
                        Support a creator to see posts from the creator
                      </p>
                      <p class="text-grey-600 text-center mw-600 mx-auto">
                        There are no posts from the creators you support.{" "}
                      </p>
                    </div>
                  </div>
                </div>

                <div class="row creator-row">
                  <div class="col-12">
                    <h3 class="card-title mt-3 mb-3">Explore Creators</h3>
                  </div>
                  {loading === true ? (
                    <div className="card w-100 border-0 shadow-1 p-4_5 rounded-xxl mb-3">
                      <div
                        className="loader"
                        style={{ marginTop: "20px", marginBottom: "40px" }}
                      >
                        <div>Loading...</div>
                      </div>
                    </div>
                  ) : null}
                  {creators.map((item) => {
                    return (
                      <div class="col-md-3" key={item.id}>
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
                                href={`${front}/#/${item.userName}`}
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
                  <div class="col-12 text-center mb-3">
                    <Link to="/explore" class="btn-text">
                      <i class="feather-plus-circle"></i> View all Creators
                    </Link>
                  </div>
                </div>
              </div>
            ) : null}
            {fanloading === false && fanpost.length > 0 && viewPost === null ? (
              <div class="row">
                <div class="col-md-9">
                  <h3 class="card-title mt-3 mb-3">
                    Posts from Creators you support
                  </h3>
                  {fanpost.map((item) => {
                    let pic = item?.user?.picture || "images/profile-image.jpg";
                    return (
                      <div class="card card-creator mb-3">
                        <div class="card-body card-creator-meta">
                          <figure
                            class="avatar me-3"
                            style={{
                              backgroundImage: "url(" + pic + ")",
                            }}
                          ></figure>
                          <h4 class="card-creator-meta--author">
                            {" "}
                            <span
                              style={{ cursor: "pointer" }}
                              onClick={() => {
                                setViewPost(item);
                                console.log(item);
                              }}
                            >
                              {item.firstName} {item.lastName}
                            </span>{" "}
                            <span class="card-creator-meta--date">
                              {new Date(item.createdAt).toDateString()}
                            </span>
                          </h4>
                        </div>
                        <div class="card-body card-creator-image">
                          <span
                            style={{ cursor: "pointer" }}
                            onClick={() => {
                              setViewPost(item);
                            }}
                          >
                            <img src={item.image} class="" alt="image" />
                          </span>
                        </div>
                        <div class="card-body p-0 me-lg-5">
                          <span
                            style={{ cursor: "pointer" }}
                            onClick={() => {
                              setViewPost(item);
                            }}
                          >
                            <h3 class="card-creator-title">{item.title}</h3>
                            <p class="card-creator-text">
                              {item.message.split("").slice(0, 100).join("")}...
                            </p>
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div class="col-md-3">
                  <h3 class="card-title mt-3 mb-3">Explore Creators</h3>
                  {creators.map((item) => {
                    return (
                      <div class="item mb-3">
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
                              href={`${front}/#/${item.userName}`}
                              target="_blank"
                              class="btn btn-light bt-sm"
                            >
                              VIEW CREATOR
                            </a>
                          </div>
                        </div>
                      </div>
                    );
                  })}

                  <div></div>
                  <Link
                    to="/explore"
                    class="btn-text d-block text-center mb-3 "
                  >
                    <i class="feather-plus-circle"></i> View all Creators
                  </Link>
                </div>
              </div>
            ) : null}
            {fanloading === true ? (
              <div className="card w-100 border-0 shadow-1 p-4_5 rounded-xxl mb-3">
                <div
                  className="loader"
                  style={{ marginTop: "20px", marginBottom: "40px" }}
                >
                  <div>Loading...</div>
                </div>
              </div>
            ) : null}

            {viewPost !== null ? (
              <div>
                <span
                  onClick={() => setViewPost(null)}
                  style={{ cursor: "pointer" }}
                  class="back-btn"
                >
                  <span class="card-title mb-3">Dashboard</span>
                </span>
                <div class="card-creator mb-3">
                  <div class="card-body card-creator-meta d-flex">
                    <figure
                      class="avatar me-3"
                      style={{
                        backgroundImage: "url(" + viewPost?.user?.picture + ")",
                      }}
                    >
                      <img src={picture} alt="" />
                    </figure>
                    <h4 class="card-creator-meta--author">
                      {firstName} {lastName}{" "}
                      <span class="card-creator-meta--date">
                        {new Date(viewPost.createdAt).toDateString()}
                      </span>
                    </h4>
                  </div>
                  <div class="card-body card-creator-image">
                    <img src={viewPost.image} class="" alt="image" />
                  </div>
                  <div class="card-body p-0 me-lg-5">
                    <h3 class="card-creator-title">{viewPost.title}</h3>
                    <p class="card-creator-text">{viewPost.message}</p>
                  </div>
                </div>
              </div>
            ) : null}
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

export default connect(mapStateToProps)(FanDashboard);
