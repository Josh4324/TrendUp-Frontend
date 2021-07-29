import React, {useRef} from 'react';
import { Link } from 'react-router-dom';
import FanSidebar from "./FanSideBar";

export default function FanSettings() {
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
                        
                        <h3 class="card-title mb-3">SETTINGS</h3>
                        
                        <ul class="list-inline">
                            
                            <li class="list-inline-item d-block border-bottom me-0"><Link to="/fan-settings/user" class="pt-3 pb-3 d-flex align-items-center"><i class="btn-round-md bg-gold-gradiant text-white feather-info font-md me-3"></i> <h4 class="fw-600 font-xsss mb-0 mt-0">User Details</h4><i class="ti-angle-right font-xsss text-grey-500 ms-auto mt-3"></i></Link></li>
                            <li class="list-inline-item d-block border-bottom me-0"><Link to="/fan-settings/reset" class="pt-3 pb-3 d-flex align-items-center"><i class="btn-round-md bg-red-gradiant text-white feather-lock font-md me-3"></i> <h4 class="fw-600 font-xsss mb-0 mt-0">Change Password</h4><i class="ti-angle-right font-xsss text-grey-500 ms-auto mt-3"></i></Link></li>
                            
                        </ul>
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
