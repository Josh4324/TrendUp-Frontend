import React from 'react';
import "../themify-icons.css";
import "../feather.css";
import "../style1.css";
import "../custom1.css";

export default function Dashboard() {
    return (
        <div className="dashboard-page">
            <div className="main-wrapper">


        <div className="nav-header border-0">
            <div className="nav-top">
                <a href="dashboard.html" className="logo"> <img src="images/trenupp-logo.png" alt="Trendupp Logo"/> </a>

                <button className="nav-menu me-0 ms-2"></button>
            </div>


            <a href="#" className="p-0 ms-auto menu-icon round-icon-link"><i className="feather-user round-icon"></i></a>

        </div>

        <nav className="navigation scroll-bar">
    <div className="container ps-0 pe-0">
        <div className="nav-content">
            <div className="nav-wrap">
                <div className="top-content">
                    <a href="user-page.html" className="nav-content-profile">
                        <i className="feather-user"></i>
                        <span>Twyse Ereme</span>
                    </a>
                    <div className="nav-content-button">
                        <a className="nav-content-button-item" id="dropdownMenu4" data-bs-toggle="dropdown"
                            aria-expanded="false" href="#"> <i className="feather-plus-circle"></i> Post</a>
                        <div className="dropdown-menu dropdown-menu-start" aria-labelledby="dropdownMenu4">
                            <div className="card-body p-0 ">
                                <a className="d-flex" href="#">
                                    <i className="feather-users"></i>
                                    <h4>Public <span>Post to general viewers of your page</span></h4>
                                </a>

                            </div>
                            <div className="card-body p-0">
                                <a className="d-flex" href="#">
                                    <i className="feather-heart"></i>
                                    <h4>Your Supporters <span>Post to only your supporters</span></h4>
                                </a>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="nav-wrap">
                <ul className="mb-1">
                    <li><a href="dashboard.html"
                            className="nav-content-bttn nav-content-bttn-current h-auto pt-2 pb-2"><i
                                className="feather-home"></i><span>Dashboard</span></a></li>
                    <li><a href="#" className="nav-content-bttn h-auto pt-2 pb-2"><i
                                className="feather-image"></i><span>My page</span></a></li>
                    <li><a href="#" className="nav-content-bttn h-auto pt-2 pb-2"><i
                                className="feather-file"></i><span>My Posts</span></a></li>
                    <li><a href="#" className="nav-content-bttn h-auto pt-2 pb-2"><i
                                className="feather-heart"></i><span>Supporters</span></a></li>
                    <li><a href="share-page.html" className="nav-content-bttn h-auto pt-2 pb-2"><i
                                className="feather-share-2"></i><span>Share your page</span></a></li>
                    <li><a href="#" className="nav-content-bttn h-auto pt-2 pb-2"><i
                                className="feather-message-square"></i><span>Settings</span></a></li>
                </ul>
            </div>
        </div>
    </div>
</nav>

        <div className="main-content right-chat-active" style={{backgroundColor:"unset"}}>

    <div className="middle-sidebar-bottom">
        <div className="middle-sidebar-left">
            <div className="row">
                <div className="col-md-4 pe-md-2">
                    <div className="card w-100 border-0 shadow-none p-4 rounded-xxl mb-3"
                        style={{backgroundColor:"#fde9f1"}}>
                        <div className="card-body d-flex p-0">
                            <i
                                className="btn-round-lg d-inline-block me-3 bg-primary feather-shopping-bag font-md text-white"></i>
                            <h4 className="text-primary font-xl fw-700">₦0 <span
                                    className="fw-500 mt-0 d-block text-grey-500 font-xssss">Current Earning</span>
                            </h4>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 pe-md-2 ps-md-2">
                    <div className="card w-100 border-0 shadow-none p-4 rounded-xxl mb-3"
                        style={{backgroundColor: "#ffeee6"}}>
                        <div className="card-body d-flex p-0">
                            <i
                                className="btn-round-lg d-inline-block me-3 bg-secondary feather-heart font-md text-white"></i>
                            <h4 className="text-secondary font-xl fw-700">0 <span
                                    className="fw-500 mt-0 d-block text-grey-500 font-xssss">Supported</span></h4>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 ps-md-2">
                    <div className="card w-100 bg-grey border-0 shadow-none p-4 rounded-xxl mb-3">
                        <div className="card-body d-flex p-0">
                            <i
                                className="btn-round-lg d-inline-block me-3 bg-greydark feather-zap font-md text-white"></i>
                            <h4 className="text-grey-600 font-xl fw-700">0 <span
                                    className="fw-500 mt-0 d-block text-grey-500 font-xssss">Page Views</span></h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="card w-100 border-0 shadow-1 p-4_5 rounded-xxl mb-3">
                        <h4 className="fw-700 mb-3 font-xsss text-grey-600">RECENT SUPPORTERS</h4>
                        <i
                            className="feather-heart btn-round-lg bg-grey font-md fw-700 text-grey-500 d-inline-block mx-auto mb-3"></i>
                        <h2 className="fw-700 font-xs text-center mb-3">You don't have any supporters yet
                        </h2>
                        <p className="text-grey-600 text-center mw-600 mx-auto">Share your page with your audience
                            to get started.</p>

                        <div className="form-group form-group-icon choose-link-input mw-400 mx-auto">
                            <span className="choose-link-input-icon input-icon"><img src="images/trendupp-icon.png"
                                    alt=""/></span>
                            <span className="choose-link-input-text">trendupp.com/</span>
                            <input type="text" className="form-control style2-input mb-0" style={{paddingLeft:"140px"}} placeholder="yournamehere"
                                disabled/>
                            <span className="input-icon-e copy-button" style={{paddingTop: "0px"}}> Tap to Copy</span>
                        </div>

                        <div className="onboard-complete-share-section mt-4 mb-2">

                            <h4 className="font-xxs fw-600 mb-3">Share on</h4>
                            <a className="share-button" href="#">
                                <img src="images/icon-twitter.svg" alt=""/>
                            </a>

                            <a className="share-button" href="#">
                                <img src="images/icon-facebook.svg" alt=""/>
                            </a>

                            <a className="share-button" href="#">
                                <img src="images/icon-whatsapp.svg" alt=""/>
                            </a>
                        </div>


                    </div>
                </div>
            </div>
        </div>

    </div>
</div>


{/* <div className="popup-wrapper" id="popupWrapper">
        <div className="popup-blocker" id="popupBlocker"></div>
        <div className="popup-body mw-600 mx-auto bg-white p-5 rounded-xxl">
            <span className="popup-del" id="popupDel"><i className="feather-x"></i></span>
            <i className="ti-check btn-round-lg bg-success mx-auto d-block text-white font-md fw-600 mx-auto"></i>
            <h2 className="font-lg fw-700 text-center mt-4">Congratulations</h2>
            <h4 className="useronboard-subtitle mb-4">You’ve successfully created a profile. <br/>Share your page with your
                audience to get supporters</h4>

            <div className="form-group form-group-icon choose-link-input mw-400 mx-auto">
                <span className="choose-link-input-icon input-icon"><img src="images/trendupp-icon.png" alt=""/></span>
                <span className="choose-link-input-text">trendupp.com/</span>
                <input type="text" className="form-control style2-input" placeholder="yournamehere" disabled />
                <span href="#" className="input-icon-e copy-button" style={{paddingTop:"0px"}}> Tap to Copy</span>
            </div>

            <div className="onboard-complete-share-section mt-4 pt-2">

                <h4 className="fw-600 mb-3">Share on</h4>
                <a className="share-button" href="#">
                    <img src="images/icon-twitter.svg" alt="" />
                </a>

                <a className="share-button" href="#">
                    <img src="images/icon-facebook.svg" alt="" />
                </a>

                <a className="share-button" href="#">
                    <img src="images/icon-whatsapp.svg" alt="" />
                </a>
            </div>

        </div>
    </div>
 */}
</div>               
        </div>
                
    )
}
