import React, {useState, useRef, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { NotificationManager} from 'react-notifications';
import {onboard1Call, getCall, userVerify} from '../utils/apiCalls';
import { useHistory } from "react-router-dom";
import {connect} from 'react-redux';
import "../themify-icons.css";
import "../feather.css";
//import "../style.css";
import "../style5.css";
import "../style1.css";
import "../lightbox.css";
import "../custom1.css";


function Onboard1(props) {
    
    const [creator, setCreator] = useState(false);
    const [onboard, setOnboard] = useState(null);
    const [fan, setFan] = useState(false);
    const [found, setFound] = useState(null);
    const [error, setError] = useState("");
    const [loader, setLoader] = useState(false);
    const [select, setSelect] = useState(false);
    let history = useHistory();
    const userRef = useRef("");
    const token = props.user.user.token;
    const firstNameRef = useRef(null);
    const lastNameRef = useRef(null);

    useEffect(() => {
        getCall(setOnboard, token)
        return () => {
           
        }
    }, [])

    if (Number(onboard) > 1){
        if (Number(onboard) === 4){
           history.push("/dashboard")
        }else{
            history.push(`step${onboard}`);
        }   
    }
    
    const selectCreator = () => {
        setCreator(true);
        setFan(false);
        setSelect(true)
    }

    const selectFan = () => {
        setFan(true);
        setCreator(false);
        setSelect(true)
        setError("");
    }

    const submit = async(evt) => {
        evt.preventDefault();
        let userType;
        if (creator === true){
            userType = "creator"
        }else if(fan === true){
            userType = "fan"
        }else{
            userType = "";
        }

        if (userType === ""){
            return NotificationManager.error("You must select a user type", "Error");
        }

        if (creator){
            if (userRef.current.value === ""){
                return NotificationManager.error("You must enter a username", "Error");
            }
        }

        let cred;

        if (creator){
            cred = {
                onboardingStep: 2,
                userType,
                userName: userRef.current.value
            }
        }else {
            cred = {
                onboardingStep: 4,
                userType,
                firstName: firstNameRef.current.value,
                lastName: lastNameRef.current.value
            } 
        }
        

        const result = await onboard1Call(cred, setLoader, setError, history, token);

    }

    const usernameCheck = async() => {
        setFound(null);
        let cred2 = {
            username: userRef.current.value
        }
        
        if (userRef.current.value.length < 4){
            setError("Your username should be more than 3 characters")
         }


        if (userRef.current.value.length > 3){
            const result1 = await userVerify(cred2, setLoader, setError, setFound, token);
        }

       
    }
    return (
        <div>

            <div className="main-wrap main">

                <header className="landing-header">
                    <Link to="/">
                            <img src="./logo.svg" />
                     </Link>
                </header>

                <div className="row">

                <div className="col-md-6 mx-auto">
                <div className="user-onboard creator-onboard">
                    <div className="step-header">
                        <div className="step-header-item step-header-current step-header-1">
                            <div className="step-header-circle"></div>
                            <div className="step-header-text">Are you a creator?</div>
                        </div>
                        <div className="step-header-item step-header-2">
                            <div className="step-header-circle"></div>
                            <div className="step-header-text">User Details</div>
                        </div>
                        <div className="step-header-item step-header-3">
                            <div className="step-header-circle"></div>
                            <div className="step-header-text">Bank Account Details</div>
                        </div>
                    </div>
                    {
                        select === false ? ( <div className="creator-onboard-option-sec">
                        <h2 className="useronboard-title">Are you a creator?</h2>
                        <div className="creator-onboard-options">
                            <span onClick={selectCreator}  className={ !creator ? "creator-onboard-option" : "creator-onboard-option creator-hover" } >
                                <img src="./images/creator-opt-1.png" alt="I'm a creator" />
                                <span>Yes, I'm a creator</span>
                            </span>
                            <span onClick={selectFan} className={ !fan ? "creator-onboard-option" : "creator-onboard-option creator-hover" }>
                                <img src="./images/creator-opt-2.png" alt="I'm a fan" />
                                <span>I'm a fan</span>
                            </span>
                        </div>
                    </div>
                    ) : null
                    }
                   
                    <div className="choose-link-onboard-section">
                        {
                            creator ? (
                                <div>
                                <h2 className="useronboard-title">Choose your link</h2>
                                <h4 className="useronboard-subtitle">Pick a simple shareable link for your page.<br/>You can always
                            change this later </h4>
                            </div>
                            ) : null
                        }

                        {
                            fan ? (
                                <div class="fan-profile-onboard-section">
                                <h2 class="useronboard-title">Complete your profile</h2>
                                
                                <form class="choose-link-onboard-form" action="user_onboard2.html" method="GET">
        
                                    
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <input type="text" class="form-control style2-input" ref={firstNameRef} required placeholder="First Name" />
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <input type="text" class="form-control style2-input" ref={lastNameRef} required placeholder="Last Name"/>
                                        </div>
                                    </div>
                                </div>
                                </form>
                            </div>
                            ) : null
                        }
                        
                        <form className="choose-link-onboard-form" action="user_onboard2.html" method="GET">

                            {
                                creator ? (
                                    <div className="form-group form-group-icon choose-link-input">
                                    <span className="choose-link-input-icon input-icon"><img src="images/trendupp-icon.png"
                                            alt=""/></span>
                                    <span className="choose-link-input-text">trendupp.com/</span>
                                    <input type="text" onChange={usernameCheck} className="form-control style2-input" style={{paddingLeft: "140px"}} ref={userRef} placeholder="yournamehere" />

                                    <i className="choose-link-input-check input-icon-e ti-check" style={{ backgroundColor: found === false ? "green" : null}}></i>
                                 
                                </div>
                                ) : null
                            }

                           

                            <div className={ error.length > 0 ? "alert alert-danger" : "none" }>
                                <div >{error}</div>
                            </div>
                            <div className={ loader === true ? "loader" : "none"}>
                                <div >Loading...</div>
                            </div>

                            {
                                creator || fan ? (<div class="col-sm-12 p-0">
                                <div class="form-group mb-1">

                                    <button type="submit" onClick={submit} class="form-control style2-input style2-main-button">Continue
                                        <i class="ti-arrow-right" style={{paddingLeft:"5px"}}></i></button>
                                </div>
                            </div>) : null
                            }
                            


                        </form>
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
    }
  }
  
  export default connect(mapStateToProps)(Onboard1);