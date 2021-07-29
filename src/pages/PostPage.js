import React, {useState, useEffect, useRef} from 'react';
import { Link } from 'react-router-dom';
import {onDash,getCallModal, getCall,deletePostCall} from '../utils/apiCalls';
import {connect} from 'react-redux';
import PostView from "../components/PostView";
import Post from "../components/Post";
import EditPost from "../components/EditPost";
import Wallet from "../components/Wallet";
import Settings from "../components/Settings";
import {Sidebar} from "./index";
import { useHistory } from "react-router-dom";
import {front} from "../utils/constants";
import "../themify-icons.css";
import "../feather.css";
import "../style1.css";
import "../custom1.css";

function PostPage(props) {
    const [modal, setModal]  = useState(false);
    const [view, setView] = useState("dashboard");
    const [postData, setPostData] = useState({});
    const [postId, setPostId] = useState(null);
    const [public1, setPublic1] = useState(true);
    const [support, setSupport] = useState(false);
    const [onboard, setOnboard] = useState(null);
    const [log, setLog] = useState(false);
    let history = useHistory();
     const navRef = useRef("");
     const butRef = useRef("");
    
    const token = props.user.user.token
    const {firstName, picture, userName} = props.data.user || "";
    let img1 = picture || "images/profile-image.jpg" ;
    const link = `/${userName}`
    const newlink = "trendupp.com" + link

    const deletePost = (postId) => {
        deletePostCall(postId, token )
    }

    const setPage = (page) => {
        setView(page);
    }

    const navChange = () => {
      butRef.current.classList.toggle("active");
       navRef.current.classList.toggle("nav-active")
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
        <div className="dashboard-page">
            <div className="main-wrapper">


        <div className="nav-header border-0">
            <div className="nav-top">
                <Link to="/dashboard" className="logo"> <img src="images/trenupp-logo.png" alt="Trendupp Logo"/> </Link>

                <button ref={butRef} onClick={navChange} className="nav-menu me-0 ms-2"></button>
            </div>

        </div>

        <nav ref={navRef} className="navigation scroll-bar">
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
             view === "post" ?  <Post public1={public1} support={support} postData={postData} /> : 
             view === "edit" ?  <EditPost public1={public1} support={support} postData={postData} /> : 
            <PostView setModal={setModal} setView={setView} setPostData={setPostData} setPostId={setPostId}/>
            
        }

   
</div>


 
</div>   
{
                    modal ? ( <div class="popup-wrapper pt-0" id="popupWrapper">
                    <div class="popup-blocker" id="popupBlocker"></div>
                    <div class="popup-body card mw-400 mx-auto bg-white p-5 rounded-xxl">
            
                        <span class="popup-del" onClick={() => setModal(false)} id="popupDel"><i class="feather-x"></i></span>
                        <div class="card-body">
                            
                            <h2 class="mb-4 text-center">Are you sure you want to delete this post?</h2>
                            
                            <div class="row">
                                <div class="col-12 mb-3" onClick={() => deletePost(postId)}><span  class="btn d-block w-100">Confirm</span></div>
                                <div class="col-12"><span onClick={() => setModal(false)}  class="btn btn-grey d-block w-100">Cancel</span></div>
                            </div>
                                
                        </div>
            
            
            
                    </div>
                </div>
            ) : null
                }            
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
  
  export default connect(mapStateToProps)(PostPage);