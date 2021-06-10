import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import {onDash,getCallModal, getCall} from '../utils/apiCalls';
import {connect} from 'react-redux';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { NotificationManager} from 'react-notifications';
import "../themify-icons.css";
import "../feather.css";
import "../style1.css";
import "../custom1.css";

function Dashboard(props) {
    const [modal, setModal]  = useState(false);
    const [onboard, setOnboard] = useState(null);
    const token = props.user.user.token
    console.log(props.data.user);
    const {firstName, picture, userName} = props.data.user || ""
    const link = `/${userName}`
    const newlink = "trendupp.com" + link

  
    

    const submit = async(evt) => {
        evt.preventDefault();
        const cred = {
            showComplete: false
        }

        const result = await onDash(cred,token);
        setModal(false);
    }

    useEffect(() => {
        console.log("effect")
        getCallModal(setModal, props.dispatch,token);
        
        return () => {
           
        }
    }, [])
    return (
        <div className="dashboard-page">
            <div className="main-wrapper">


        <div className="nav-header border-0">
            <div className="nav-top">
                <Link to="/dashboard" className="logo"> <img src="images/trenupp-logo.png" alt="Trendupp Logo"/> </Link>

                <button className="nav-menu me-0 ms-2"></button>
            </div>


            <Link to="#" className="p-0 ms-auto menu-icon round-icon-link"><i className="feather-user round-icon"></i></Link>

        </div>

        <nav className="navigation scroll-bar">
    <div className="container ps-0 pe-0">
        <div className="nav-content">
            <div className="nav-wrap">
                <div className="top-content">
                    <Link to="user-page.html" className="nav-content-profile">
                    { !picture === true ? ( <i className="feather-user"></i>) : (<img src={picture} className="pics" alt="Trendupp Logo"/>)}
                        <span>{firstName}</span>
                    </Link>
                    <div className="nav-content-button">
                        <Link className="nav-content-button-item" id="dropdownMenu4" data-bs-toggle="dropdown"
                            aria-expanded="false" to="#"> <i className="feather-plus-circle"></i> Post</Link>
                        <div className="dropdown-menu dropdown-menu-start" aria-labelledby="dropdownMenu4">
                            <div className="card-body p-0 ">
                                <Link className="d-flex" to="#">
                                    <i className="feather-users"></i>
                                    <h4>Public <span>Post to general viewers of your page</span></h4>
                                </Link>

                            </div>
                            <div className="card-body p-0">
                                <Link className="d-flex" to="#">
                                    <i className="feather-heart"></i>
                                    <h4>Your Supporters <span>Post to only your supporters</span></h4>
                                </Link>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="nav-wrap">
                <ul className="mb-1">
                    <li><Link to="/dashboard"
                            className="nav-content-bttn nav-content-bttn-current h-auto pt-2 pb-2"><i
                                className="feather-home"></i><span>Dashboard</span></Link></li>
                    <li><Link to={link} className="nav-content-bttn h-auto pt-2 pb-2"><i
                                className="feather-image"></i><span>My page</span></Link></li>
                    <li><Link to="#" className="nav-content-bttn h-auto pt-2 pb-2"><i
                                className="feather-file"></i><span>My Posts</span></Link></li>
                    <li><Link to="#" className="nav-content-bttn h-auto pt-2 pb-2"><i
                                className="feather-heart"></i><span>Supporters</span></Link></li>
                    <li><Link to="share-page.html" className="nav-content-bttn h-auto pt-2 pb-2"><i
                                className="feather-share-2"></i><span>Share your page</span></Link></li>
                    <li><Link to="#" className="nav-content-bttn h-auto pt-2 pb-2"><i
                                className="feather-message-square"></i><span>Settings</span></Link></li>
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
                            <input type="text" className="form-control style2-input mb-0" style={{paddingLeft:"140px"}} placeholder={userName}
                                disabled/>
                            
                            <CopyToClipboard text={newlink}
                            onCopy={() => NotificationManager.success('Copied to clipboard', 'Success')}
                            >
                                    <span className="input-icon-e copy-button" style={{paddingTop: "0px"}}> Tap to Copy</span>
                            </CopyToClipboard>
                           
                            </div>

                        <div className="onboard-complete-share-section mt-4 mb-2">

                            <h4 className="font-xxs fw-600 mb-3">Share on</h4>
                            <Link className="share-button" to="#">
                                <img src="images/icon-twitter.svg" alt=""/>
                            </Link>

                            <Link className="share-button" to="#">
                                <img src="images/icon-facebook.svg" alt=""/>
                            </Link>

                            <Link className="share-button" to="#">
                                <img src="images/icon-whatsapp.svg" alt=""/>
                            </Link>
                        </div>


                    </div>
                </div>
            </div>
        </div>

    </div>
</div>

{
    modal === true ? ( 
    <div className="popup-wrapper" id="popupWrapper">
    <div className="popup-blocker" id="popupBlocker"></div>
    <div className="popup-body mw-600 mx-auto bg-white p-5 rounded-xxl">
        <span className="popup-del" id="popupDel"><i className="feather-x" onClick={submit}></i></span>
        <i className="ti-check btn-round-lg bg-success mx-auto d-block text-white font-md fw-600 mx-auto"></i>
        <h2 className="font-lg fw-700 text-center mt-4">Congratulations</h2>
        <h4 className="useronboard-subtitle mb-4">You’ve successfully created a profile. <br/>Share your page with your
            audience to get supporters</h4>

        <div className="form-group form-group-icon choose-link-input mw-400 mx-auto">
            <span className="choose-link-input-icon input-icon"><img src="images/trendupp-icon.png" alt=""/></span>
            <span className="choose-link-input-text">trendupp.com/</span>
            <input type="text" className="form-control style2-input" style={{paddingLeft:"140px"}} placeholder={userName} disabled />
            <CopyToClipboard text={newlink}
            onCopy={() => NotificationManager.success('Copied to clipboard', 'Success')}
            >
                    <span className="input-icon-e copy-button" style={{paddingTop: "0px"}}> Tap to Copy</span>
            </CopyToClipboard>
        </div>

        <div className="onboard-complete-share-section mt-4 pt-2">

            <h4 className="fw-600 mb-3">Share on</h4>
            <Link className="share-button" to="#">
                <img src="images/icon-twitter.svg" alt="" />
            </Link>

            <Link className="share-button" to="#">
                <img src="images/icon-facebook.svg" alt="" />
            </Link>

            <Link className="share-button" to="#">
                <img src="images/icon-whatsapp.svg" alt="" />
            </Link>
        </div>

    </div>
</div>
) 
: null
}

 
</div>               
        </div>
                
    )
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        user: state.auth,
        data: state.user
    }
  }
  
  export default connect(mapStateToProps)(Dashboard);