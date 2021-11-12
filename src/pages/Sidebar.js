import React from "react";
import { Link, NavLink,} from "react-router-dom";
import { connect } from "react-redux";
import { front} from "../utils/constants";

function Sidebar(props) {
  const logout = () => {
    localStorage.removeItem("trend-user");
    localStorage.removeItem("trend-fan-email");
    localStorage.removeItem("trend-fan-firstname");
    localStorage.removeItem("trend-fan-lastname");
    props.dispatch({ type: "LOGIN_FAILURE" });
    window.location.href = `${front}/login`;
  };
  return (
    <div>
      <div className="nav-wrap">
        <ul className="mb-1">
          <li>
            <NavLink
              to="/dashboard"
              activeClassName="nav-content-bttn-current"
              onClick={() => props.setView("dashboard")}
              className="nav-content-bttn h-auto pt-2 pb-2"
            >
              <i className="feather-bar-chart-2"></i>
              <span>Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to={props.link}
              activeClassName="nav-content-bttn-current"
              target="_blank"
              className="nav-content-bttn h-auto pt-2 pb-2"
            >
              <i className="feather-image"></i>
              <span>My page</span>
            </NavLink>
          </li>
          <li onClick={() => props.setView("posts")}>
            <NavLink
              to="/post"
              activeClassName="nav-content-bttn-current"
              className="nav-content-bttn h-auto pt-2 pb-2"
            >
              <i className="feather-file"></i>
              <span>My Posts</span>
            </NavLink>
          </li>
          <li onClick={() => props.setView("support")}>
            <NavLink
              to="/supporters"
              activeClassName="nav-content-bttn-current"
              className="nav-content-bttn h-auto pt-2 pb-2"
            >
              <i className="feather-heart"></i>
              <span>Supporters</span>
            </NavLink>
          </li>
          <li onClick={() => props.setView("wallet")}>
            <NavLink
              to="/wallet"
              activeClassName="nav-content-bttn-current"
              className="nav-content-bttn h-auto pt-2 pb-2"
            >
              <i class="feather-shopping-bag"></i>
              <span>Wallet</span>
            </NavLink>
          </li>
          <li onClick={() => props.setView("setting")}>
            <NavLink
              to="/settings"
              activeClassName="nav-content-bttn-current"
              className="nav-content-bttn h-auto pt-2 pb-2"
            >
              <i class="feather-settings"></i>
              <span>Settings</span>
            </NavLink>
          </li>
          <li onClick={logout}>
            <Link href="#" class="nav-content-bttn h-auto pt-2 pb-2">
              <i class="feather-power"></i>
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

export default connect(mapStateToProps)(Sidebar);
