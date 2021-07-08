import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import {onDash,getCallModal, getCall} from '../utils/apiCalls';
import {connect} from 'react-redux';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { NotificationManager} from 'react-notifications';
import DashComponent from "../components/DashComponent";
import Post from "../components/Post";
import Supporter from "../components/Supporter";
import PostView from "../components/PostView";
import Wallet from "../components/Wallet";
import Settings from "../components/Settings";
import {Sidebar} from "./index";
import { useHistory } from "react-router-dom";
import {front} from "../utils/constants";
import "../themify-icons.css";
import "../feather.css";
import "../style1.css";
import "../custom1.css";

function Bank(props) {
    const [modal, setModal]  = useState(false);
    const [view, setView] = useState("dashboard");
    const [public1, setPublic1] = useState(true);
    const [support, setSupport] = useState(false);
    const [onboard, setOnboard] = useState(null);
    const [log, setLog] = useState(false);
    let history = useHistory();
    const token = props.user.user.token
    const onboard1 = props.user.user.onboardingStep
    const {firstName, picture, userName, onboardingStep} = props.data.user || ""
    let img1 = picture || "images/profile-image.jpg" ;
    const link = `/${userName}`
    const newlink = "trendupp.com" + link
    console.log(onboard1, "on")


    const setPage = (page) => {
        setView(page);
    }

    const setPostType = (value, bool) => {
        if (value === "public"){
            console.log(value);
            console.log(bool)
            setPublic1(bool)
            setSupport(false)
        }else{
            setSupport(bool)
            setPublic1(false);
        }
    }

    const logout = () => {
        localStorage.removeItem('trend-user');
        props.dispatch({  type: "LOGIN_FAILURE" })
        history.push("/login");
        setLog(true);
    }

  
    

    const submit = async(evt) => {
        evt.preventDefault();
        const cred = {
            showComplete: false
        }

        const result = await onDash(cred,token);
        setModal(false);
    }

    useEffect(() => {
        getCallModal(setModal, props.dispatch,token);
        
        return () => {
           
        }
    }, [])
    return (
        <div className="dashboard-page" style={{background: "#f9f9f9"}}>
            <div className="main-wrapper">


        <div className="nav-header border-0" style={{background: "#f9f9f9"}}>
            <div className="nav-top">
                <Link to="/dashboard" className="logo"> <img src="images/trenupp-logo.png" alt="Trendupp Logo"/> </Link>

                <button className="nav-menu me-0 ms-2"></button>
            </div>

        </div>

        <nav className="navigation scroll-bar">
    <div className="container ps-0 pe-0">
        <div className="nav-content">
            <div className="nav-wrap">
                <div className="top-content">
                    <Link to={link} className="nav-content-profile">
                    <figure class="nav-content-image" 
                     style={{
                        backgroundImage: 'url('+img1+')'
                      }}
                   >
                    <img src="images/profile-image.jpg" class="d-none" alt=""/>
                    </figure>
                   
                        <span>{firstName}</span>
                    </Link>
                    <div class="nav-content-button">
                                <a class="nav-content-button-item" id="dropdownMenu4" data-bs-toggle="dropdown"
                                    aria-expanded="false" href="#"> <i class="feather-plus-circle"></i> Post</a>
                                <div class="dropdown-menu dropdown-menu-start" aria-labelledby="dropdownMenu4">
                                    <div class="card-body p-0 ">
                                        <a class="d-flex" onClick={ (evt) => {
                                                evt.preventDefault()
                                                setPostType("public", true);
                                                 setView("post");
                                        }
                                           
                                        } href="#">
                                            <i class="feather-users"></i>
                                            <h4>Public <span>Post to general viewers of your page</span></h4>
                                        </a>

                                    </div>
                                    <div class="card-body p-0">
                                        <a class="d-flex"  onClick={ (evt) => {
                                                evt.preventDefault();
                                                setPostType("support", true);
                                                setView("post");
                                        }
                                           
                                        } href="#">
                                            <i class="feather-heart"></i>
                                            <h4>Your Supporters <span>Post to only your supporters</span></h4>
                                        </a>

                                    </div>
                                </div>
                            </div>
                </div>
            </div>
           <Sidebar setView={setPage} logout={logout} link={link} />
        </div>
    </div>
</nav>

        <div className="main-content right-chat-active" style={{backgroundColor:"unset"}}>


        <div class="middle-sidebar-bottom" style={{paddingLeft: "20px"}}>
                <div class="middle-sidebar-left">
                    
                    <div class="row">
                        <div class="col-12">
                            
                            <div class="card dash-card dash-card__records dash-card__posts p-5">
                                <a href="settings.html" class="back-btn">
                                <h3 class="card-title mb-3">settings</h3>
                                </a>
                                
                                
                    <div class="settings-userdetails-section">
                        <h2 class="useronboard-title mt-4 mb-4">Update Bank Account Details</h2>
                        
                        <form class="verifybank-onboard-form mw-400 mx-auto" action="dashboard.html" method="GET">

                        

                            <div class="row">
                                <div class="col-12 mb-2">
                                    <div class="form-group">
                                        
                                        <select name="" id="" class="form-control form-select style2-input">
                                            <option value="Access Bank">Access Bank</option>
                                            <option value="First Bank">First Bank</option>
                                            <option value="GT Bank">GT Bank</option>
                                            <option value="Sterling Bank">Sterling Bank</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-12 mb-2">
                                    <div class="form-group">
                                        <input type="text" class="form-control style2-input" placeholder="Account Number"/>
                                    </div>
                                </div>
                            </div>
    
                            <div class="row">
    
                                <div class="col-lg-12">
    
                                    <button type="submit"
                                        class="form-control style2-input style2-main-button">Verify Account</button>
                                </div>
                            </div>
    
    
                            <div class="row">
    
                                <div class="col-lg-12">
                                    <label class="mb-2">Account Name</label>
                                    <h2 class="mb-4">Chiamaka Olubankole</h2>
                                    <button type="submit"
                                        class="form-control style2-input style2-main-button">Confirm Account Details</button>
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

const mapStateToProps = (state) => {
    console.log(state)
    return {
        user: state.auth,
        data: state.user
    }
  }
  
  export default connect(mapStateToProps)(Bank);