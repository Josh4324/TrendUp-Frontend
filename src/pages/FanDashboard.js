import React, {useEffect, useState, useRef} from 'react';
import { Link } from 'react-router-dom';
import FanSidebar from "./FanSideBar";
import { useHistory } from "react-router-dom";
import {onDash,getCallModal, getStat, getCall} from '../utils/apiCalls';
import jwt_decode from "jwt-decode";
import { NotificationManager} from 'react-notifications';
import {connect} from 'react-redux';

function FanDashboard(props) {
    let img2 = "images/user-9.png";
    let history = useHistory();
   const {firstName, lastName, picture, userName, onboardingStep} = props.data.user || "";
   let img1 = picture || "images/profile-image.jpg" ;
    const token = props.user.user.token;
    const [modal, setModal]  = useState(false);
    const navRef = useRef("");
    const butRef = useRef("");

     useEffect( async() => {
        let user = JSON.parse(localStorage.getItem("trend-user"));
        if (user !== null){
            const decoded = jwt_decode(user.token);
            const expirationTime = new Date()/1000;

            if (expirationTime >= decoded.exp){
                user = null;
                props.dispatch({ type: "LOGIN_SUCCESS", payload: null });
                localStorage.removeItem('trend-user');
                NotificationManager.error("Session has expired, please log in again", "Error", 10000);
                history.push("/login")
            }
        }
        getCallModal(setModal, props.dispatch,token);
       
        return () => {
           
        }
    }, [])


    const logout = () => {
        localStorage.removeItem('trend-user');
        props.dispatch({  type: "LOGIN_FAILURE" })
        history.push("/login");
    }
    const navChange = () => {
       butRef.current.classList.toggle("active");
       navRef.current.classList.toggle("nav-active");
    }
    return (
        <div className="dashboard-page" style={{background: "#f9f9f9"}}>
           <div class="main-wrapper">


           <div className="nav-header border-0" style={{background: "#f9f9f9"}}>
            <div className="nav-top">
                <Link to="/fan-dashboard" className="logo"> <img src="images/trenupp-logo.png" alt="Trendupp Logo"/> </Link>

                <button ref={butRef} onClick={navChange} className="nav-menu me-0 ms-2"></button>
            </div>

        </div>

<nav ref={navRef} class="navigation scroll-bar">
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
                        <span>{firstName} {lastName}</span>
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
                    <Link to="/explore" class="btn-text"><i class="feather-plus-circle"></i> View all Creators</Link>
                </div>



            </div>

        </div>

    </div>
</div>

</div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.auth,
        data: state.user
    }
  }
  
  export default connect(mapStateToProps)(FanDashboard);