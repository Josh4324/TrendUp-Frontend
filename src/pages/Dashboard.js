import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import {onDash,getCallModal, getStat, getCall} from '../utils/apiCalls';
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
import jwt_decode from "jwt-decode";
import "../themify-icons.css";
import "../feather.css";
import "../style1.css";
import "../custom1.css";

function Dashboard(props) {
    const [modal, setModal]  = useState(false);
    const [view, setView] = useState("dashboard");
    const [public1, setPublic1] = useState(true);
    const [support, setSupport] = useState(false);
    const [post, setPost] = useState(0);
    const [amount, setAmount] = useState(0);
    const [supporters, setSupporters] = useState([]);
    const [supportersNum, setSupportersNum] = useState(0)
    let history = useHistory();
    const token = props.user.user.token;
    const {firstName, picture, userName, onboardingStep} = props.data.user || ""
    let img1 = picture || "images/profile-image.jpg" ;
    const link = `/${userName}`
    const newlink = "trendupp.com" + link

    const setPage = (page) => {
        setView(page);
    }

    const setPostType = (value, bool) => {
        if (value === "public"){
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
    }
    const submit = async(evt) => {
        evt.preventDefault();
        const cred = {
            showComplete: false
        }

        const result = await onDash(cred,token);
        setModal(false);
    }

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
        const stat = await getStat(token);
        setPost(stat.posts);
        setAmount(stat.amount);
        setSupportersNum(stat.supporters_number);
        setSupporters(stat.supporters.slice(0,5));
        
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

        {
            view === "dashboard" ? <DashComponent post={post} supportersNum={supportersNum} supporters={supporters} amount={amount} /> : 
            view === "post" ?  <Post public1={public1} support={support} /> : 
            view === "supporter" ? <Supporter supportersNum={supportersNum} /> : 
            view === "postview" ? <PostView /> :
            view === "wallet" ? <Wallet /> : 
            view === "settings" ? <Settings /> : null
        }

   
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
                    <span className="input-icon-e copy-button" > Tap to Copy</span>
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

            <div class="form-group text-center mt-4 pt-2">

            <Link to={link}  target="_blank"
                class="text-center bg-primary-light p-1 ps-4 pe-4 text-primary font-xsss fw-600 d-inline-block rounded-xxl">View
                your page <i class="feather-corner-up-right fw-700"></i> </Link>
            </div>
        </div>

    </div>
</div>
) 
: null
}

        </div>
                
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.auth,
        data: state.user
    }
  }
  
  export default connect(mapStateToProps)(Dashboard);