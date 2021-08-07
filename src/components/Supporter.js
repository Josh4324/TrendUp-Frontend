import React, { useEffect, useState } from "react";
import { onDash, getCallModal, getStat, getCall } from "../utils/apiCalls";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";

function Supporter(props) {
  const [supporters, setSupporters] = useState([]);
  const [supportersNum, setSupportersNum] = useState("");
  let history = useHistory();
  const generateLink = (email) => {
    props.dispatch({ type: "SEND_EMAIL", payload: email });
    history.push("/support-history");
  };
  useEffect(async () => {
    const stat = await getStat(props.token);
    setSupportersNum(stat.supporters_number);
    setSupporters(stat.supporters);
    return () => {};
  }, []);
  return (
    <div>
      <div class="">
        <div class="middle-sidebar-bottom" style={{ paddingLeft: "20px" }}>
          <div class="middle-sidebar-left">
            <div class="row">
              <div class="col-md-4">
                <div
                  class="card dash-card p-4 mb-3"
                  style={{ backgroundColor: "#ffeee6" }}
                >
                  <div class="card-body d-flex p-0">
                    <i class="icon-round-lg me-3 bg-secondary feather-heart"></i>
                    <h4 class="text-secondary font-xl fw-700">
                      {supportersNum === "" ? (
                        <div className="loader" style={{ marginLeft: "40px" }}>
                          <div>Loading...</div>
                        </div>
                      ) : (
                        supportersNum
                      )}{" "}
                      <span class="fw-500 mt-0 d-block text-grey-500 font-xssss">
                        Supporters
                      </span>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <div class="card dash-card dash-card__records dash-card__supporters">
                  <h3 class="card-title mb-3">SUPPORTERS</h3>

                  {supporters.map((item) => {
                    return (
                      <div class="single-record-row d-flex">
                        <a href="support_history.html" class="link-cover"></a>
                        <div class="row supporters-row">
                          <div class="col-sm-5">
                            <h4 class="post-single_title">
                              {item.firstName} {item.lastName}{" "}
                              <span class="post-single_date">
                                {new Date(item.createdAt).toDateString()} at{" "}
                                {new Date(item.createdAt).toLocaleTimeString()}
                              </span>
                            </h4>
                          </div>
                          <div class="col-sm-5">
                            <p>{item.email}</p>
                          </div>
                          <div class="col-sm-2"> ₦{item.amount}</div>
                        </div>
                        <a
                          href="#"
                          class="dropdown-menu-link ms-auto"
                          id="dropdownMenu2"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i class="ti-more-alt text-grey-900 btn-round-md bg-greylight font-xss"></i>
                        </a>
                        <div
                          class="dropdown-menu dropdown-menu-end p-4 rounded-xxl border-0 shadow-md"
                          aria-labelledby="dropdownMenu2"
                        >
                          <div class="card-body p-0">
                            <Link
                              onClick={(evt) => {
                                evt.preventDefault();
                                generateLink(item.email);
                              }}
                              class="d-block font-xsss text-grey-600 mt-0"
                            >
                              View Support History
                            </Link>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                  {supportersNum === "" ? (
                    <div className="loader">
                      <div>Loading...</div>
                    </div>
                  ) : null}
                  {supportersNum === 0 ? (
                    <div style={{ marginTop: "30px" }}>
                      <p>You do not have any supporters.</p>
                    </div>
                  ) : null}
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

export default connect(mapStateToProps)(Supporter);
