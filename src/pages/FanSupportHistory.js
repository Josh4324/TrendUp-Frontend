import React from 'react';
import { Link } from 'react-router-dom';
import FanSidebar from "./FanSideBar";

export default function FanSupportHistory() {
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
                     <Link to="/fan-dashboard" class="nav-content-profile">
                        <figure class="nav-content-image"
                         style={{
                            backgroundImage: 'url('+img1+')'
                          }}
                            >
                            <img src="images/profile-image.jpg" class="d-none" alt=""/>
                        </figure>
                        <span>Twyse Ereme</span>
                    </Link>

                </div>
            </div>

            <FanSidebar  />
        </div>
    </div>
</nav>

<div class="main-content">

    <div class="middle-sidebar-bottom">
        <div class="middle-sidebar-left">

            
            <div class="row">
                <div class="col-md-9">
                    <div class="card dash-card dash-card__records dash-card__supporters">
                        <h3 class="card-title mb-3">SUPPORT HISTORY</h3>


                        <div class="single-record-row d-flex">
                            
                                
                                <div class="row supporters-row">
                                    <div class="col-sm-5">
                                        <h4 class="post-single_title">Tomiwa odufuwa  <span
                                                class="post-single_date">
                                                Jun 10, 2021 at 02:12 PM</span></h4>
                                    </div>
                                    <div class="col-sm-3 offset-md-4"> ₦5,000</div>
                                </div>

                        </div>
                        <div class="single-record-row d-flex">
                            
                                
                                <div class="row supporters-row">
                                    <div class="col-sm-5">
                                        <h4 class="post-single_title">Adammi Bello  <span
                                                class="post-single_date">
                                                Jun 10, 2021 at 02:12 PM</span></h4>
                                    </div>
                                    <div class="col-sm-3 offset-md-4"> ₦2,000</div>
                                </div>
                        </div>
                        <div class="single-record-row d-flex">
                            
                                
                                <div class="row supporters-row">
                                    <div class="col-sm-5">
                                        <h4 class="post-single_title">Joshua Adebanjo  <span
                                                class="post-single_date">
                                                Jun 10, 2021 at 02:12 PM</span></h4>
                                    </div>
                                    <div class="col-sm-3 offset-md-4"> ₦2,000</div>
                                </div>
                                
                            
                        </div>
                        <div class="single-record-row d-flex">
                            
                                
                                <div class="row supporters-row">
                                    <div class="col-sm-5">
                                        <h4 class="post-single_title">Ifeanyi Okafor <span
                                                class="post-single_date">
                                                Jun 10, 2021 at 02:12 PM</span></h4>
                                    </div>
                                    <div class="col-sm-3 offset-md-4"> ₦3,000</div>
                                </div>
                        </div>
                        <div class="single-record-row d-flex">
                            
                                
                                <div class="row supporters-row">
                                    <div class="col-sm-5">
                                        <h4 class="post-single_title">John Falomo  <span
                                                class="post-single_date">
                                                Jun 10, 2021 at 02:12 PM</span></h4>
                                    </div>
                                    <div class="col-sm-3 offset-md-4"> ₦5,000</div>
                                </div>
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
