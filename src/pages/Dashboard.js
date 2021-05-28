import React from 'react';
import "../themify-icons.css";
import "../feather.css";
import "../style1.css";
import "../custom1.css";

export default function Dashboard() {
    return (
        <div>
            <div class="main-wrapper">


        <div class="nav-header border-0">
            <div class="nav-top">
                <a href="dashboard.html" class="logo"> <img src="images/trenupp-logo.png" alt="Trendupp Logo"/> </a>

                <button class="nav-menu me-0 ms-2"></button>
            </div>


            <a href="#" class="p-0 ms-auto menu-icon round-icon-link"><i class="feather-user round-icon"></i></a>

        </div>

        <nav class="navigation scroll-bar">
    <div class="container ps-0 pe-0">
        <div class="nav-content">
            <div class="nav-wrap">
                <div class="top-content">
                    <a href="user-page.html" class="nav-content-profile">
                        <i class="feather-user"></i>
                        <span>Twyse Ereme</span>
                    </a>
                    <div class="nav-content-button">
                        <a class="nav-content-button-item" id="dropdownMenu4" data-bs-toggle="dropdown"
                            aria-expanded="false" href="#"> <i class="feather-plus-circle"></i> Post</a>
                        <div class="dropdown-menu dropdown-menu-start" aria-labelledby="dropdownMenu4">
                            <div class="card-body p-0 ">
                                <a class="d-flex" href="#">
                                    <i class="feather-users"></i>
                                    <h4>Public <span>Post to general viewers of your page</span></h4>
                                </a>

                            </div>
                            <div class="card-body p-0">
                                <a class="d-flex" href="#">
                                    <i class="feather-heart"></i>
                                    <h4>Your Supporters <span>Post to only your supporters</span></h4>
                                </a>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="nav-wrap">
                <ul class="mb-1">
                    <li><a href="dashboard.html"
                            class="nav-content-bttn nav-content-bttn-current h-auto pt-2 pb-2"><i
                                class="feather-home"></i><span>Dashboard</span></a></li>
                    <li><a href="#" class="nav-content-bttn h-auto pt-2 pb-2"><i
                                class="feather-image"></i><span>My page</span></a></li>
                    <li><a href="#" class="nav-content-bttn h-auto pt-2 pb-2"><i
                                class="feather-file"></i><span>My Posts</span></a></li>
                    <li><a href="#" class="nav-content-bttn h-auto pt-2 pb-2"><i
                                class="feather-heart"></i><span>Supporters</span></a></li>
                    <li><a href="share-page.html" class="nav-content-bttn h-auto pt-2 pb-2"><i
                                class="feather-share-2"></i><span>Share your page</span></a></li>
                    <li><a href="#" class="nav-content-bttn h-auto pt-2 pb-2"><i
                                class="feather-message-square"></i><span>Settings</span></a></li>
                </ul>
            </div>
        </div>
    </div>
</nav>

        <div class="main-content right-chat-active">

    <div class="middle-sidebar-bottom">
        <div class="middle-sidebar-left">
            <div class="row">
                <div class="col-md-4 pe-md-2">
                    <div class="card w-100 border-0 shadow-none p-4 rounded-xxl mb-3"
                        style={{backgroundColor:"#fde9f1"}}>
                        <div class="card-body d-flex p-0">
                            <i
                                class="btn-round-lg d-inline-block me-3 bg-primary feather-shopping-bag font-md text-white"></i>
                            <h4 class="text-primary font-xl fw-700">₦0 <span
                                    class="fw-500 mt-0 d-block text-grey-500 font-xssss">Current Earning</span>
                            </h4>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 pe-md-2 ps-md-2">
                    <div class="card w-100 border-0 shadow-none p-4 rounded-xxl mb-3"
                        style={{backgroundColor: "#ffeee6"}}>
                        <div class="card-body d-flex p-0">
                            <i
                                class="btn-round-lg d-inline-block me-3 bg-secondary feather-heart font-md text-white"></i>
                            <h4 class="text-secondary font-xl fw-700">0 <span
                                    class="fw-500 mt-0 d-block text-grey-500 font-xssss">Supported</span></h4>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 ps-md-2">
                    <div class="card w-100 bg-grey border-0 shadow-none p-4 rounded-xxl mb-3">
                        <div class="card-body d-flex p-0">
                            <i
                                class="btn-round-lg d-inline-block me-3 bg-greydark feather-zap font-md text-white"></i>
                            <h4 class="text-grey-600 font-xl fw-700">0 <span
                                    class="fw-500 mt-0 d-block text-grey-500 font-xssss">Page Views</span></h4>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="card w-100 border-0 shadow-1 p-4_5 rounded-xxl mb-3">
                        <h4 class="fw-700 mb-3 font-xsss text-grey-600">RECENT SUPPORTERS</h4>
                        <i
                            class="feather-heart btn-round-lg bg-grey font-md fw-700 text-grey-500 d-inline-block mx-auto mb-3"></i>
                        <h2 class="fw-700 font-xs text-center mb-3">You don't have any supporters yet
                        </h2>
                        <p class="text-grey-600 text-center mw-600 mx-auto">Share your page with your audience
                            to get started.</p>

                        <div class="form-group form-group-icon choose-link-input mw-400 mx-auto">
                            <span class="choose-link-input-icon input-icon"><img src="images/trendupp-icon.png"
                                    alt=""/></span>
                            <span class="choose-link-input-text">trendupp.com/</span>
                            <input type="text" class="form-control style2-input mb-0" placeholder="yournamehere"
                                disabled/>
                            <span class="input-icon-e copy-button"> Tap to Copy</span>
                        </div>

                        <div class="onboard-complete-share-section mt-4 mb-2">

                            <h4 class="font-xxs fw-600 mb-3">Share on</h4>
                            <a class="share-button" href="#">
                                <img src="images/icon-twitter.svg" alt=""/>
                            </a>

                            <a class="share-button" href="#">
                                <img src="images/icon-facebook.svg" alt=""/>
                            </a>

                            <a class="share-button" href="#">
                                <img src="images/icon-whatsapp.svg" alt=""/>
                            </a>
                        </div>


                    </div>
                </div>
            </div>
        </div>

    </div>
</div>




</div>               
        </div>
                
    )
}
