import React, { useState, useRef, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import {
  getCall2,
  getPost2,
  Pay2,
  anonSignupCall,
  initializePaymentCall,
  verifyPaymentCall,
} from "../utils/apiCalls";
import { useHistory } from "react-router-dom";
import { front } from "../utils/constants";
import NotificationManager from "react-notifications/lib/NotificationManager";

function CreatorPostPage(props) {
  return (
    <div className="creator-page">
      <div class="main-wrapper">
        <div class="main-content pt-0">
          <div class="nav-header border-0">
            <div class="nav-top">
              <Link to="/" class="logo">
                {" "}
                <img src="images/trendupp-logo-icon.png" alt="Trendupp Logo" />
              </Link>
            </div>
          </div>

          <div class="middle-sidebar-bottom">
            <div class="middle-sidebar-left">
              <div class="row">
                <div class="col-md-9 mx-auto">
                  <a href="creator-page.html" class="">
                    <h3 class="card-title mb-3">
                      <i class="feather-arrow-left"></i> Tywyse's Page
                    </h3>
                  </a>
                  <div class="card card-creator mb-3">
                    <div class="card-body card-creator-meta">
                      <figure
                        class="avatar me-3"
                        //style="background-image: url(images/profile.jpg);"
                      >
                        <img src="images/profile.jpg" alt="" />
                      </figure>
                      <h4 class="card-creator-meta--author">
                        {" "}
                        <a href="#">Twyse Ereme </a>{" "}
                        <span class="card-creator-meta--date">
                          March 2, 2022
                        </span>
                      </h4>
                    </div>
                    <div class="card-body card-creator-image">
                      <img src="images/egypt-lg.jpg" class="" alt="image" />
                    </div>
                    <div class="card-body p-0 me-lg-5">
                      <h3 class="card-creator-title">
                        We went on tour in Cairo, Egypt
                      </h3>
                      <p class="card-creator-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Morbi nulla dolor, ornare at commodo non, feugiat non
                        nisi. Phasellus faucibus mollis pharetra. Proin blandit
                        ac massa sed rhoncus.
                      </p>
                      <p class="card-creator-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Morbi nulla dolor, ornare at commodo non, feugiat non
                        nisi. Phasellus faucibus mollis pharetra. Proin blandit
                        ac massa sed rhoncus.
                      </p>
                      <p class="text-center">
                        <a href="#" class="btn btn-md mt-3 supportBtn">
                          <svg
                            enable-background="new 0 0 512 512"
                            height="512"
                            viewBox="0 0 512 512"
                            width="512"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g>
                              <g>
                                <path d="m246.122 477.289c-144.417-126.367-246.122-193.304-246.122-299.774 0-80.513 57.4-146.515 136-146.515 54.544 0 95.017 33.497 120 81.015 24.981-47.515 65.454-81.015 120-81.015 78.609 0 136 66.015 136 146.515 0 106.457-101.572 173.291-246.122 299.773-5.657 4.949-14.1 4.949-19.756.001z" />
                              </g>
                            </g>
                          </svg>{" "}
                          Support Twyse
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="app-footer border-0 shadow-lg bg-primary-gradiant">
          <a href="#" class="btn supportBtn">
            <svg
              enable-background="new 0 0 512 512"
              height="512"
              viewBox="0 0 512 512"
              width="512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <g>
                  <path d="m246.122 477.289c-144.417-126.367-246.122-193.304-246.122-299.774 0-80.513 57.4-146.515 136-146.515 54.544 0 95.017 33.497 120 81.015 24.981-47.515 65.454-81.015 120-81.015 78.609 0 136 66.015 136 146.515 0 106.457-101.572 173.291-246.122 299.773-5.657 4.949-14.1 4.949-19.756.001z" />
                </g>
              </g>
            </svg>{" "}
            Support Josh
          </a>
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

export default connect(mapStateToProps)(CreatorPostPage);
