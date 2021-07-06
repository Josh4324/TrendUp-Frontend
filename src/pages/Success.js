import React from 'react';
import { Link } from 'react-router-dom';

export default function Success() {
    let username = localStorage.getItem('trend-creator');
    let user = localStorage.getItem('trend-user');
    let newUser = localStorage.getItem("new_trend_user");
    let userCheck = user === null ? true : false;
    let checkNewUser = newUser === null ? false : true;
    let link = `/${username}`;
    return (
        <div className="creator-page">
                 <div className="main-wrapper">


<div className="main-content pt-0">

    <div className="nav-header border-0">
        <div className="nav-top">
            <Link to="/dashboard" className="logo"> <img src="images/trendupp-logo-icon.png"
                    alt="Trendupp Logo"/>
            </Link>
        </div>
    </div>
    
    <div className="middle-sidebar-bottom">
        <div className="middle-sidebar-left">
            <div className="row">
                <div className="col-md-9 mx-auto">

                    <div className="card card-creator card-creator-bio">
                        <div className="card-body"> 
                                <i className="ti-check btn-round-lg bg-success mx-auto d-block text-white font-md fw-600 mx-auto"></i>
                                <h2 className="font-lg fw-700 text-center mt-4">Thank you for supporting {username}</h2>
                                {
                                    checkNewUser ? (<h4 className="useronboard-subtitle mb-4">An account has been created for you to track your support to creators. <br/>The log in details has been sent to your email</h4>) : null
                                }
                                
                                {
                                    userCheck ? (<h4 className="useronboard-subtitle mb-4">You can <Link to="/login">log in</Link> to track your support to creators</h4>) : null
                                }
                                
                            
                                <p className="card-creator-bio--body">
                                    

                                    <Link to={link} className="btn btn-md mt-3 supportBtn">Go back to {username} page</Link>
                                </p>
                        </div>
                    </div>


                </div>
            </div>
        </div>

    </div>
</div>



<div className="app-footer border-0 shadow-lg bg-primary-gradiant">
    <a href="#" className="btn supportBtn"><svg enable-background="new 0 0 512 512" height="512"
            viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg">
            <g>
                <g>
                    <path
                        d="m246.122 477.289c-144.417-126.367-246.122-193.304-246.122-299.774 0-80.513 57.4-146.515 136-146.515 54.544 0 95.017 33.497 120 81.015 24.981-47.515 65.454-81.015 120-81.015 78.609 0 136 66.015 136 146.515 0 106.457-101.572 173.291-246.122 299.773-5.657 4.949-14.1 4.949-19.756.001z" />
                </g>
            </g>
        </svg> Support Twyse</a>
</div>

</div>
        </div>
    )
}
