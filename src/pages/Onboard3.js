import React from 'react';
import { Link } from 'react-router-dom';
import "../themify-icons.css";
import "../feather.css";
import "../style1.css";
import "../custom1.css";

export default function Onboard3() {
    return (
        <div>
                <div className="main main-wrap">

                <header className="landing-header">
                    <div>
                        <Link to="/">
                            <img src="./logo.svg" />
                        </Link>
                    </div>
                    
                </header>
                
                <div className="row">

                    <div className="col-lg-6 col-md-8 mx-auto">
                        <div className="user-onboard verifybank-onboard">
                            <div className="step-header">
                                <div className="step-header-item step-header-complete step-header-1">
                                    <div className="step-header-circle"></div>
                                    <div className="step-header-text">Are you a creator?</div>
                                </div>
                                <div className="step-header-item step-header-complete step-header-2">
                                    <div className="step-header-circle"></div>
                                    <div className="step-header-text">User details</div>
                                </div>
                                <div className="step-header-item step-header-current step-header-3">
                                    <div className="step-header-circle"></div>
                                    <div className="step-header-text">Bank Account details</div>
                                </div>
                            </div>

                            <h2 className="useronboard-title">Verify your Bank Account</h2>
                            <h4 className="useronboard-subtitle mb-5">All funds paid to you by your supporters will be sent to this account at your request</h4>
                            <form className="verifybank-onboard-form" action="dashboard.html" method="GET">

                                

                                <div className="row">
                                    <div className="col-12 mb-2">
                                        <div className="form-group">
                                            
                                            <select name="" id="" className="form-control form-select style2-input">
                                                <option value="Access Bank">Access Bank</option>
                                                <option value="First Bank">First Bank</option>
                                                <option value="GT Bank">GT Bank</option>
                                                <option value="Sterling Bank">Sterling Bank</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-12 mb-2">
                                        <div className="form-group">
                                            <input type="text" className="form-control style2-input" placeholder="Account Number"/>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">

                                    <div className="col-lg-12">

                                        <button type="submit"
                                            className="form-control style2-input style2-main-button">Verify Account</button>
                                    </div>
                                </div>


                                <div className="row">

                                    <div className="col-lg-12">
                                        <label className="mb-2">Account Name</label>
                                        <h2 className="mb-4">Chiamaka Olubankole</h2>
                                        <button type="submit"
                                            className="form-control style2-input style2-main-button">Confirm Account Details</button>
                                    </div>
                                </div>
                            </form>


                        </div>
                    </div>
                </div>
                </div>
        </div>
    )
}
