import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FanSidebar from "./FanSideBar";
import { connect } from "react-redux";
import { getCreators } from "../utils/apiCalls";
import { front } from "../utils/constants";

function ExploreCreators(props) {
  let img2 = "images/user-9.png";
  const navRef = useRef("");
  const butRef = useRef("");
  const searchRef = useRef("");
  const [creators, setCreators] = useState([]);
  const [constantCreator, setConstantCreators] = useState([]);
  const [loading, setLoading] = useState(true);
  const token = props.user.user.token;
  const { firstName, lastName, picture, userName, onboardingStep } =
    props.data.user || "";
  let img1 = picture || "images/profile-image.jpg";
  const navChange = () => {
    butRef.current.classList.toggle("active");
    navRef.current.classList.toggle("nav-active");
  };

  const search = () => {
    let constantList = constantCreator;
    let filtered = constantList.filter((item) => {
      return item.brandName.includes(searchRef.current.value);
    });

    setCreators(filtered);
  };

  useEffect(async () => {
    let creators = await getCreators(token);
    if (creators) {
      setLoading(false);
      setCreators(creators);
      setConstantCreators(creators);
    }

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
              <div class="row mb-3">
                <div class="col-md-4">
                  <h3 class="card-title mt-3 mb-3">Explore Creators</h3>
                </div>
                <div class="col-md-4 offset-md-4">
                  <form action="" class="search-form-2 ms-auto">
                    <button type="submit">
                      <i class="ti-search font-xss"></i>
                    </button>

                    <input
                      type="text"
                      ref={searchRef}
                      onChange={search}
                      class="form-control text-grey-500 mb-0 border-0"
                      placeholder="Search here."
                    />
                  </form>
                </div>
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
              <div class="row creator-row d-flex">
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
                              {item.brandName}
                            </h4>
                            <p class="creator-small-card--text mt-0 mb-3">
                              {item?.about?.split("").slice(0, 27).join("")}...
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

export default connect(mapStateToProps)(ExploreCreators);
