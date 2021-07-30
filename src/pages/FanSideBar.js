import React from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import { connect } from "react-redux";

function FanSidebar(props) {
  let history = useHistory();
  const logout = () => {
    localStorage.removeItem("trend-user");
    localStorage.removeItem("trend-fan-email");
    localStorage.removeItem("trend-fan-firstname");
    localStorage.removeItem("trend-fan-lastname");
    props.dispatch({ type: "LOGIN_FAILURE" });
    history.push("/login");
  };
  return (
    <div>
      <div className="nav-wrap">
        <ul className="mb-1">
          <li>
            <NavLink
              to="/fan-dashboard"
              activeClassName="nav-content-bttn-current"
              className="nav-content-bttn h-auto pt-2 pb-2"
            >
              <i className="feather-home"></i>
              <span>Home</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/explore"
              activeClassName="nav-content-bttn-current"
              className="nav-content-bttn h-auto pt-2 pb-2"
            >
              <i className="feather-image"></i>
              <span>Explore Creators</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/supporter-creators"
              activeClassName="nav-content-bttn-current"
              className="nav-content-bttn h-auto pt-2 pb-2"
            >
              <i className="feather-award"></i>
              <span>Supported Creators</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/fan-support-history"
              activeClassName="nav-content-bttn-current"
              className="nav-content-bttn h-auto pt-2 pb-2"
            >
              <i className="feather-heart"></i>
              <span>Support History</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/fan-settings"
              activeClassName="nav-content-bttn-current"
              className="nav-content-bttn h-auto pt-2 pb-2"
            >
              <i className="feather-settings"></i>
              <span>Settings</span>
            </NavLink>
          </li>
          <li onClick={logout}>
            <Link className="nav-content-bttn h-auto pt-2 pb-2">
              <i className="feather-power"></i>
              <span>Logout</span>
            </Link>
          </li>
        </ul>
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

export default connect(mapStateToProps)(FanSidebar);
