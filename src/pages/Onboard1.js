import React, {useState, useRef} from 'react';
import { Link } from 'react-router-dom';
import { NotificationManager} from 'react-notifications';
import {onboard1Call} from '../utils/apiCalls';
import { useHistory } from "react-router-dom";
import {connect} from 'react-redux';
import "../themify-icons.css";
import "../feather.css";
import "../style1.css";
import "../custom1.css";

function Onboard1(props) {
    
    const [creator, setCreator] = useState(false);
    const [fan, setFan] = useState(false);
    const [error, setError] = useState("");
    const [loader, setLoader] = useState(false);
    let history = useHistory();
    const userRef = useRef("");
    console.log(props);
    const token = props.user.user.token;
    const onboard = Number(props.user.user.onboardingStep)
    if (onboard > 1){
        history.push(`step${onboard}`);
    }
    
    const selectCreator = () => {
        setCreator(true);
        setFan(false);
    }

    const selectFan = () => {
        setFan(true);
        setCreator(false);
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
            return NotificationManager.error("You must select a user type", "Error")
        }

        if (userRef.current.value.length === 0){
            return NotificationManager.error("You must enter your username", "Error")
        }
        
        
        const cred = {
            onboardingStep: 2,
            userType,
            userName: userRef.current.value
        }

        const result = await onboard1Call(cred, setLoader, setError, history, token);

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
                    <div className="creator-onboard-option-sec">
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
                    <div className="choose-link-onboard-section">
                        <h2 className="useronboard-title">Choose your link</h2>
                        <h4 className="useronboard-subtitle">Pick a simple shareable link for your page.<br/>You can always
                            change this later </h4>
                        <form className="choose-link-onboard-form" action="user_onboard2.html" method="GET">

                            <div className="form-group form-group-icon choose-link-input">
                                <span className="choose-link-input-icon input-icon"><img src="images/trendupp-icon.png"
                                        alt=""/></span>
                                <span className="choose-link-input-text">trendupp.com/</span>
                                <input type="text" className="form-control style2-input" ref={userRef} placeholder="yournamehere" />
                                <i className="choose-link-input-check input-icon-e ti-check"></i>
                            </div>

                            <div className={ error.length > 0 ? "alert alert-danger" : "none" }>
                                <div >{error}</div>
                            </div>
                            <div className={ loader === true ? "loader" : "none"}>
                                <div >Loading...</div>
                            </div>

                            <div class="col-sm-12 p-0">
                                <div class="form-group mb-1">

                                    <button type="submit" onClick={submit} class="form-control style2-input style2-main-button">Continue
                                        <i class="ti-arrow-right" style={{paddingLeft:"5px"}}></i></button>
                                </div>
                            </div>
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