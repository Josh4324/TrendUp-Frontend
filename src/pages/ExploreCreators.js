import React from 'react';
import { Link } from 'react-router-dom';
import FanSidebar from "./FanSideBar";

export default function ExploreCreators() {
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
            
            <div class="row mb-3">
                <div class="col-md-4">
                    <h3 class="card-title mt-3 mb-3">Explore Creators</h3>
                </div>
                <div class="col-md-4 offset-md-4">
                <form action="" class="search-form-2 ms-auto">
                    <button type="submit"><i class="ti-search font-xss"></i></button>
                    
                    <input type="text" class="form-control text-grey-500 mb-0 border-0" placeholder="Search here."/>
                </form>

                </div>
                
            </div>
            
            <div class="row creator-row">
                <div class="col-md-3">
                    <div class="item">
                        <div class="card dash-card creator-small-card p-0 mb-3">
                            <div class="card-body d-block w-100 ps-3 pe-3 pb-4 text-center">
                                <figure class="avatar"  style={{
                            backgroundImage: 'url('+img2+')'
                          }}>
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
                                <figure class="avatar" style={{
                            backgroundImage: 'url('+img2+')'
                          }}>
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
                                <figure class="avatar" style={{
                            backgroundImage: 'url('+img2+')'
                          }}>
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
                                <figure class="avatar" style={{
                            backgroundImage: 'url('+img2+')'
                          }}>
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

            </div>
            <div class="row creator-row">
                <div class="col-md-3">
                    <div class="item">
                        <div class="card dash-card creator-small-card p-0 mb-3">
                            <div class="card-body d-block w-100 ps-3 pe-3 pb-4 text-center">
                                <figure class="avatar" style={{
                            backgroundImage: 'url('+img2+')'
                          }}>
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
                                <figure class="avatar" style={{
                            backgroundImage: 'url('+img2+')'
                          }}>
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
                                <figure class="avatar" style={{
                            backgroundImage: 'url('+img2+')'
                          }}>
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
                                <figure class="avatar" style={{
                            backgroundImage: 'url('+img2+')'
                          }}>
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

            </div>
            <div class="row creator-row">
                <div class="col-md-3">
                    <div class="item">
                        <div class="card dash-card creator-small-card p-0 mb-3">
                            <div class="card-body d-block w-100 ps-3 pe-3 pb-4 text-center">
                                <figure class="avatar" style={{
                            backgroundImage: 'url('+img2+')'
                          }}>
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
                                <figure class="avatar" style={{
                            backgroundImage: 'url('+img2+')'
                          }}>
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
                                <figure class="avatar" style={{
                            backgroundImage: 'url('+img2+')'
                          }}>
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
                                <figure class="avatar" style={{
                            backgroundImage: 'url('+img2+')'
                          }}>
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

            </div>

        </div>

    </div>
</div>


</div>
        </div>
    )
}
