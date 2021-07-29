import React, {useRef} from 'react';
import { Link } from 'react-router-dom';
import FanSidebar from "./FanSideBar";

export default function FanResetPassword() {
    let img1 = "images/profile-image.jpg";
    let img2 = "images/user-9.png";
    const navRef = useRef("");
    const butRef = useRef("");

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
                    
                    <div class="card dash-card dash-card__records dash-card__posts p-5">
                        <Link to="/fan-settings" class="">
                        <h3 class="card-title mb-3"><i class="feather-arrow-left"></i> settings</h3>
                        </Link>
                        
                        
            <div class="settings-userdetails-section">
                <h2 class="useronboard-title mt-4 mb-4">Change Password</h2>
                
                <form class="mw-400 mx-auto" action="user_onboard3.html" method="GET">


                    <div class="row">
                        <div class="col-lg-6 mb-2">
                            <label class="">Current Password</label>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-lg-12 mb-2">
                            <div class="form-group">
                                <input type="text" class="form-control style2-input" placeholder=""/>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-lg-6 mb-2">
                            <label class="">New Password</label>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-lg-12 mb-2">
                            <div class="form-group">
                                <input type="text" class="form-control style2-input" placeholder=""/>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-lg-6 mb-2">
                            <label class="">Confirm Password</label>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-lg-12 mb-2">
                            <div class="form-group">
                                <input type="text" class="form-control style2-input" placeholder=""/>
                            </div>
                        </div>
                    </div>

                    <div class="row">

                        <div class="col-lg-12">

                            <button type="submit"
                                class="form-control style2-input style2-main-button">Update Password</button>
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
