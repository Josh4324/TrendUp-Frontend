import React from 'react';
import { Link } from 'react-router-dom';
import FanSidebar from "./FanSideBar";
import { useHistory } from "react-router-dom";

export default function FanDashboard(props) {
    let img1 = "images/profile-image.jpg";
    let img2 = "images/user-9.png";
    let history = useHistory();


    const logout = () => {
        localStorage.removeItem('trend-user');
        props.dispatch({  type: "LOGIN_FAILURE" })
        history.push("/login");
    }
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
                          }}
                            >
                            <img src="images/profile-image.jpg" class="d-none" alt=""/>
                        </figure>
                        <span>Twyse Ereme</span>
                    </a>

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
                <div class="col-12">
                    <div class="card dash-card">
                       
                        <i
                            class="feather-heart btn-round-lg bg-grey font-md fw-700 text-grey-500 d-inline-block mx-auto mb-3"></i>
                        <h2 class="fw-700 font-xs text-center mb-3">No Posts Available</h2>
                        <p class="text-grey-600 text-center mw-600 mx-auto">Support a creator to see posts from
                            the creator</p>
                        <p class="text-grey-600 text-center mw-600 mx-auto">There are no posts from the creators
                            you support. </p>

                    </div>
                </div>
            </div>

            <div class="row creator-row">
                <div class="col-12">
                    <h3 class="card-title mt-3 mb-3">Explore Creators</h3>
                </div>
                <div class="col-md-3">
                    <div class="item">
                        <div class="card dash-card creator-small-card p-0 mb-3">
                            <div class="card-body d-block w-100 ps-3 pe-3 pb-4 text-center">
                                <figure class="avatar" 
                                style={{
                                    backgroundImage: 'url('+img2+')'
                                  }}
                                >
                                    <img src="images/user-11.png" alt="creator"/>
                                </figure>
                                <div class="clearfix"></div>
                                <h4 class="creator-small-card--title mt-3 mb-2">Richard Bowers </h4>
                                <p class="creator-small-card--text mt-0 mb-3">Travel & Lifestyle YouTuber living in Lagos, Nigeria. I create content...</p>
                                <a href="creator-page.html" target="_blank"
                                    class="btn btn-light bt-sm">VIEW CREATOR</a>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="col-md-3">
                    <div class="item">
                        <div class="card dash-card creator-small-card p-0 mb-3">
                            <div class="card-body d-block w-100 ps-3 pe-3 pb-4 text-center">
                                <figure class="avatar" 
                               // style="background-image: url(images/user-9.png);"
                               style={{
                                backgroundImage: 'url('+img2+')'
                              }}
                               
                                >
                                    <img src="images/user-9.png" alt="creator"/>
                                </figure>
                                <div class="clearfix"></div>
                                <h4 class="creator-small-card--title mt-3 mb-2">David Goria </h4>
                                <p class="creator-small-card--text mt-0 mb-3">Travel & Lifestyle YouTuber living in Lagos, Nigeria. I create content...</p>
                                <a href="creator-page.html" target="_blank"
                                    class="btn btn-light bt-sm">VIEW CREATOR</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">

                    <div class="item">
                        <div class="card dash-card creator-small-card p-0 mb-3">
                            <div class="card-body d-block w-100 ps-3 pe-3 pb-4 text-center">
                                <figure class="avatar" 
                                style={{
                                    backgroundImage: 'url('+img2+')'
                                  }}
                                >
                                    <img src="images/user-12.png" alt="creator"/>
                                </figure>
                                <div class="clearfix"></div>
                                <h4 class="fcreator-small-card--title mt-3 mb-2">Vincent Parks </h4>
                                <p class="creator-small-card--text mt-0 mb-3">Travel & Lifestyle YouTuber living in Lagos, Nigeria. I create content...</p>
                                <a href="creator-page.html" target="_blank"
                                    class="btn btn-light bt-sm">VIEW CREATOR</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">

                    <div class="item">
                        <div class="card dash-card creator-small-card p-0 mb-3">
                            <div class="card-body d-block w-100 ps-3 pe-3 pb-4 text-center">
                                <figure class="avatar" 
                                style={{
                                    backgroundImage: 'url('+img2+')'
                                  }}
                                >
                                    <img src="images/user-8.png" alt="creator"/>
                                </figure>
                                <div class="clearfix"></div>
                                <h4 class="creator-small-card--title mt-3 mb-2">Studio Express </h4>
                                <p class="creator-small-card--text mt-0 mb-3">Travel & Lifestyle YouTuber living in Lagos, Nigeria. I create content...</p>
                                <a href="creator-page.html" target="_blank"
                                    class="btn btn-light bt-sm">VIEW CREATOR</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-12 text-center mb-3">
                    <a href="#" class="btn-text"><i class="feather-plus-circle"></i> View all Creators</a>
                </div>



            </div>

        </div>

    </div>
</div>

</div>
        </div>
    )
}
