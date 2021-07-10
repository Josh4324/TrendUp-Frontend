import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import {editCall,userVerify} from '../utils/apiCalls';
import {connect} from 'react-redux';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { NotificationManager} from 'react-notifications';
import {Sidebar} from "./index";
import { useHistory } from "react-router-dom";
import {front} from "../utils/constants";
import "../themify-icons.css";
import "../feather.css";
import "../style1.css";
import "../custom1.css";

function SettingsLink(props) {
    const [modal, setModal]  = useState(false);
    const [view, setView] = useState("dashboard");
    const [public1, setPublic1] = useState(true);
    const [support, setSupport] = useState(false);
    const [onboard, setOnboard] = useState(null);
    const [error, setError] = useState("");
    const [found, setFound] = useState(null);
    const [loader, setLoader] = useState(false);
    const name = props.data?.user?.userName || ""
    const [username, setUsername] = useState(name);
    const [log, setLog] = useState(false);
    let history = useHistory();
    const token = props.user.user.token
    const onboard1 = props.user.user.onboardingStep
    const {firstName, picture, userName, onboardingStep} = props.data.user || ""
    let img1 = picture || "images/profile-image.jpg" ;
    const link = `/${userName}`
    const newlink = "trendupp.com" + link
    const changeUsername = (evt) => {
        setUsername(evt.target.value);
        usernameCheck(evt.target.value);
    }

    const usernameCheck = async(value) => {
        setFound(null);
        let cred2 = {
            username: value
        }
        let regex = /^[a-zA-Z0-9]*$/

        
        if (value.length < 4){
            if (regex.test(value) === false){
                setError("Your username character can only be alphanumeric");
            }else{
                setError("Your username should be more than 3 characters")
            }
         }else if (regex.test(value) === false){
            setError("Your username character can only be alphanumeric")
         }else if (value.length > 3){
            
            const result1 = await userVerify(cred2, setLoader, setError, setFound, token);
         }

       
    }

    


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
        evt.preventDefault()
        console.log(username)
        let cred = {
            userName: username
        }
        const result = await editCall(cred, setLoader, setError, props.dispatch, token);
    }

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
                                <Link to="/settings" class="back-btn">
                                <h3 class="card-title mb-3">settings</h3>
                                </Link>
                                
                                
                    <div class="settings-link-section">
                        <h2 class="useronboard-title mt-4">Change your link</h2>
                        <h4 class="useronboard-subtitle">Pick a simple shareable link for your page.</h4>
                        <form class="mw-400 mx-auto mt-4">

                            <div class="form-group form-group-icon choose-link-input">
                                <span class="choose-link-input-icon input-icon"><img src="images/trendupp-icon.png"
                                        alt=""/></span>
                                <span class="choose-link-input-text">trendupp.com/</span>
                                <input type="text" onChange={changeUsername} value={username} class="form-control style2-input" placeholder="yournamehere"/>
                                <i class="choose-link-input-check input-icon-e ti-check" style={{ backgroundColor: found === false ? "green" : null}}></i>
                            </div>

                            <div className={ error.length > 0 ? "alert alert-danger" : "none" }>
                                <div >{error}</div>
                            </div>
                            <div className={ loader === true ? "loader" : "none"}>
                                <div >Loading...</div>
                            </div>

                            <div class="col-sm-12 p-0">
                                <div class="form-group mb-1">

                                    <button type="submit" onClick={submit}  class="form-control style2-input style2-main-button">Update Link</button>
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
  
  export default connect(mapStateToProps)(SettingsLink);