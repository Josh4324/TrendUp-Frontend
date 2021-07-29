import React from 'react';
import { Link } from 'react-router-dom';
import FanSidebar from "./FanSideBar";

export default function FanDetail() {
    let img1 = "images/profile-image.jpg";
    let img2 = "images/user-9.png";
    return (
        <div className="dashboard-page" style={{background: "#f9f9f9"}}>
            <div class="main-wrapper">

            <div className="nav-header border-0" style={{background: "#f9f9f9"}}>
            <div className="nav-top">
                <Link to="/fan-dashboard" className="logo"> <img src="images/trenupp-logo.png" alt="Trendupp Logo"/> </Link>

                <button className="nav-menu me-0 ms-2"></button>
            </div>

        </div>

<nav class="navigation scroll-bar">
    <div class="container ps-0 pe-0">
        <div class="nav-content">
            <div class="nav-wrap">
                <div class="top-content">
                    <a href="user-page.html" class="nav-content-profile">
                        <figure class="nav-content-image"
                             style={{
                                backgroundImage: 'url('+img1+')'
                              }}>
                            <img src="images/profile-image.jpg" class="d-none" alt=""/>
                        </figure>
                        <span>Twyse Ereme</span>
                    </a>

                </div>
            </div>

            <FanSidebar />
        </div>
    </div>
</nav>

<div class="main-content">

    <div class="middle-sidebar-bottom">
        <div class="middle-sidebar-left">

            
            <div class="row">
                <div class="col-md-9">
                    
                    <div class="card dash-card dash-card__records dash-card__posts p-5">
                        <Link to="/fan-settings" class="">
                        <h3 class="card-title mb-3"><i class="feather-arrow-left"></i> settings</h3>
                        </Link>
                        
                        
            <div class="settings-userdetails-section">
                <h2 class="useronboard-title mt-4 mb-4">Update User Details</h2>
                
                <form class="userdetails-onboard-form" action="user_onboard3.html" method="GET">

                    <div class="form-group upload-input mb-4">
                        <input type="file" name="file" id="file" class="input-file"/>
                        <label for="file"
                            class="rounded-3 text-center bg-white btn-tertiary js-labelFile p-4 w-100 border-dashed">
                            <i class="ti-camera large-icon me-3 d-block"></i>
                            <span class="js-fileName">Upload profile picture</span>
                        </label>
                    </div>

                    <div class="row">
                        <div class="col-lg-6 mb-2">
                            <label class="">Basic Information</label>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-6 mb-2">
                            <div class="form-group">
                                <input type="text" class="form-control style2-input" placeholder="First Name"/>
                            </div>
                        </div>

                        <div class="col-md-6 mb-2">
                            <div class="form-group">
                                <input type="text" class="form-control style2-input" placeholder="Last Name"/>
                            </div>
                        </div>
                    </div>


                    <div class="row">
                        <div class="col-12">
                            <label class="mb-">Social Platforms</label>
                            <p class="text-grey-600 font-xssss mb-2">Enter the username of the social media platforms you are on</p>
                        </div>
                        <div class="col-12 mb-2">
                            <div class="form-group form-group-icon social-platform-input">
                                <span class="input-icon"><img src="images/icon-twitter.svg" alt=""/></span>
                                <input type="text" class="form-control style2-input" placeholder="username"/>
                                <span class="social-platform-input-text">@</span>
                            </div>
                        </div>
                        <div class="col-12 mb-2">
                            <div class="form-group form-group-icon social-platform-input">
                                <span class="input-icon"><img src="images/Instagram_AppIcon_Aug2017.png" alt=""/></span>
                                <input type="text" class="form-control style2-input" placeholder="username"/>
                                <span class="social-platform-input-text">@</span>
                            </div>
                        </div>
                        <div class="col-12 mb-2">
                            <div class="form-group form-group-icon social-platform-input">
                                <span class="input-icon"><img src="images/icon-youtube.svg" alt=""/></span>
                                <input type="text" class="form-control style2-input" placeholder="username" />
                                <span class="social-platform-input-text">@</span>
                            </div>
                        </div>
                        <div class="col-12 mb-2">
                            <div class="form-group form-group-icon social-platform-input">
                                <span class="input-icon"><img src="images/icon-facebook.svg" alt=""/></span>
                                <input type="text" class="form-control style2-input" placeholder="username"/>
                                <span class="social-platform-input-text">@</span>
                            </div>
                        </div>
                    </div>

                    <div class="row">

                        <div class="col-lg-12">

                            <button type="submit"
                                class="form-control style2-input style2-main-button">Update User Details</button>
                        </div>
                    </div>
                </form>
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
