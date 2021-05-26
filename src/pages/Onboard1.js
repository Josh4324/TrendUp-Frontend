import React from 'react';
import { Link } from 'react-router-dom';
import "../custom1.css";
import "../feather.css";
import "../style1.css";
import "../themify-icons.css";

export default function Onboard1() {
    return (
        <div>

            <div className="main-wrap main">

                <header className="landing-header">
                    <Link to="/">
                            <img src="./logo.svg" />
                     </Link>
                </header>

                <div className="row">

                <div className="col-md-6 mx-auto">
                <div className="user-onboard creator-onboard">
                    <div className="step-header">
                        <div className="step-header-item step-header-current step-header-1">
                            <div className="step-header-circle"></div>
                            <div className="step-header-text">Are you a creator?</div>
                        </div>
                        <div className="step-header-item step-header-2">
                            <div className="step-header-circle"></div>
                            <div className="step-header-text">User Details</div>
                        </div>
                        <div className="step-header-item step-header-3">
                            <div className="step-header-circle"></div>
                            <div className="step-header-text">Bank Account Details</div>
                        </div>
                    </div>
                    <div className="creator-onboard-option-sec">
                        <h2 className="useronboard-title">Are you a creator?</h2>
                        <div className="creator-onboard-options">
                            <a href="user_onboard2.html" className="creator-onboard-option">
                                <img src="./images/creator-opt-1.png" alt="I'm a creator" />
                                <span>Yes, I'm a creator</span>
                            </a>
                            <a href="user_onboard2.html" className="creator-onboard-option">
                                <img src="./images/creator-opt-2.png" alt="I'm a fan" />
                                <span>I'm a fan</span>
                            </a>
                        </div>
                    </div>
                    <div className="choose-link-onboard-section">
                        <h2 className="useronboard-title">Choose your link</h2>
                        <h4 className="useronboard-subtitle">Pick a simple shareable link for your page.<br/>You can always
                            change this later </h4>
                        <form className="choose-link-onboard-form" action="user_onboard2.html" method="GET">

                            <div className="form-group form-group-icon choose-link-input">
                                <span className="choose-link-input-icon input-icon"><img src="images/trendupp-icon.png"
                                        alt=""/></span>
                                <span className="choose-link-input-text">trendupp.com/</span>
                                <input type="text" className="form-control style2-input" placeholder="yournamehere" />
                                <i className="choose-link-input-check input-icon-e ti-check"></i>
                            </div>

                            <div className="col-sm-12 p-0">
                                <div className="form-group mb-1">

                                    <button type="submit" className="form-control style2-input style2-main-button arrow-display">
                                        <span>Continue</span>
                                        <i className="ti-arrow-right arrow"></i></button>
                                </div>
                            </div>
                        </form>
                    </div>

                </div>
            </div>

                </div>

            </div>

              
        </div>
    )
}
