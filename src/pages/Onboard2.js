import React, {useState, useRef, useEffect} from 'react';
import { Link } from 'react-router-dom';
import {onboard2Call, onboard2ImageCall, getCall} from '../utils/apiCalls';
import {connect} from 'react-redux';
import { useHistory } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { NotificationManager} from 'react-notifications';
import "../custom1.css";
import "../feather.css";
import "../style1.css";
import "../themify-icons.css";

function Onboard2(props) {
    const imageRef = useRef("");
    const brandRef = useRef("");
    const firstNameRef = useRef("");
    const lastNameRef = useRef("");
    const websiteUrlRef = useRef("");
    const numberRef = useRef("");
    const createRef = useRef("");
    const aboutRef = useRef("");
    const twitterRef = useRef("");
    const instagramRef = useRef("");
    const facebookRef = useRef("");
    const youtubeRef = useRef("");
    const token = props.user.user.token
    let history = useHistory();
    
    const [loader1, setLoader1] = useState(false);
    const [error, setError] = useState("");
    const [loader, setLoader] = useState(false);
    const [onboard, setOnboard] = useState(null);
    const [image, setImage] = useState(null);


    useEffect(() => {
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

        getCall(setOnboard, token)
        return () => {
           
        }
    }, [])

    if (Number(onboard) > 2){
        if (Number(onboard) === 4){
           history.push("/dashboard")
        }else{
            history.push(`step${onboard}`);
        }   
    }

    const imageSubmit = async(evt) => {
        evt.preventDefault();

        const file = imageRef.current.files[0];

        let formData = new FormData();
        formData.append("picture", file);


        const result = await onboard2ImageCall(formData, setLoader1, token,setImage);
    }

    const submit = async(evt) => {
        evt.preventDefault()

        const cred = {
            onboardingStep: 3,
            brandName: brandRef.current.value,
            firstName: firstNameRef.current.value,
            lastName: lastNameRef.current.value,
            websiteUrl: websiteUrlRef.current.value,
            phoneNumber: numberRef.current.value,
            about: aboutRef.current.value,
            facebookLink: facebookRef.current.value,
            twitterLink: twitterRef.current.value,
            instagramLink: instagramRef.current.value,
            youtubeLink: youtubeRef.current.value,
            creating: createRef.current.value
        }

        const result = await onboard2Call(cred, setLoader, setError, history, token);
    }
    


    return (
        <div className="main">
             <header className="landing-header">
                    <div>
                        <Link to="/">
                            <img src="./logo.svg" />
                        </Link>
                    </div>
                    
                </header>
                 <div class="row">

<div class="col-lg-6 col-md-8 mx-auto">
    <div class="user-onboard userdetails-onboard">
        <div class="step-header">
            <div class="step-header-item step-header-complete step-header-1">
                <div class="step-header-circle"></div>
                <div class="step-header-text">Are you a creator?</div>
            </div>
            <div class="step-header-item step-header-current step-header-2">
                <div class="step-header-circle"></div>
                <div class="step-header-text">User details</div>
            </div>
            <div class="step-header-item step-header-3">
                <div class="step-header-circle"></div>
                <div class="step-header-text">Bank Account details</div>
            </div>
        </div>

        <h2 class="useronboard-title">You're almost done!</h2>
        <h4 class="useronboard-subtitle mb-5">Please fill in basic information about yourself and the
            creative
            work</h4>
        <form onSubmit={submit} class="userdetails-onboard-form" action="user_onboard3.html" method="GET">

            <div class="form-group upload-input mb-4">
                <input type="file" name="file" onChange={imageSubmit} id="file" ref={imageRef} class="input-file" />
                <label for="file"
                    class="rounded-3 text-center bg-white btn-tertiary js-labelFile p-4 w-100 border-dashed">
                        {
                            image ?  
                           
                             <figure
                      class="pic"
                      style={{
                        backgroundImage: "url(" + image + ")",
                      }}
                    >
                      <img
                        src="images/profile-image.jpg"
                        class="d-none"
                        alt=""
                      />
                    </figure>
                            : <div>
                            <i class="ti-camera large-icon me-3 d-block"></i>
                            <span class="js-fileName">Upload profile picture</span>
                            </div>
                        }
                   
                </label>
            </div>
            <div className={ loader1 === true ? "loader" : "none"}>
                <div >Loading...</div>
            </div>

            <div class="row">
                <div class="col-lg-6 mb-2">
                    <label class="">Basic Information</label>
                </div>
            </div>

            <div class="row">
                <div class="col-lg-12 mb-2">
                    <div class="form-group">
                        <input type="text" required class="form-control style2-input" pattern="[A-Za-z0-9 ]+" title="Only Alphanumeric Characters and space are allowed" ref={brandRef} placeholder="Username" />
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6 mb-2">
                    <div class="form-group">
                        <input type="text" required class="form-control style2-input" pattern="[A-Za-z0-9 ]+" title="Only Alphanumeric Characters and space are allowed" ref={firstNameRef} placeholder="First Name" />
                    </div>
                </div>

                <div class="col-md-6 mb-2">
                    <div class="form-group">
                        <input type="text" required class="form-control style2-input" pattern="[A-Za-z0-9. ]+" title="Only Alphanumeric Characters and space are allowed" ref={lastNameRef} placeholder="Last Name"/>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-lg-12 mb-2">
                    <div class="form-group">
                        <input type="text" required  class="form-control style2-input" pattern="[0-9]+" title="Only numbers are allowed"  ref={numberRef} placeholder="Phone Number"/>
                    </div>
                </div>
            </div>


            <div class="row">
                <div class="col-lg-12 mb-2">
                    <div class="form-group">
                        <label class="mb-2">Niche</label>
                        <input type="text" required class="form-control style2-input" ref={createRef} placeholder="creating piano music, building Coronarelief.org, posting a new art everyday"/>
                    </div>
                </div>
            </div>

            <div class="row">

                <div class="col-lg-12 mb-3">
                    <label class="mb-2">About me</label>
                    <textarea  class="form-control mb-0 p-3 h100 bg-greylight lh-16" required rows="5" ref={aboutRef}
                        placeholder="Hey 👋 I just created a page here. You can now buy me a coffee!" spellcheck="false"></textarea>
                </div>

            </div>

            <div class="row">
                <div class="col-12">
                    <label class="mb-">Social Platforms</label>
                    <p class="text-grey-600 font-xssss mb-2">Enter the username of the social media platforms you are on</p>
                </div>
                <div class="col-12 mb-2">
                    <div class="form-group form-group-icon social-platform-input">
                        <span class="input-icon"><img src="images/icon-twitter.svg" alt=""/></span>
                        <input type="text" class="form-control style2-input"   ref={twitterRef} placeholder="username"/>
                        <span class="social-platform-input-text">@</span>
                    </div>
                </div>
                <div class="col-12 mb-2">
                    <div class="form-group form-group-icon social-platform-input">
                        <span class="input-icon"><img src="images/Instagram_AppIcon_Aug2017.png" alt=""/></span>
                        <input type="text" class="form-control style2-input"  ref={instagramRef} placeholder="username"/>
                        <span class="social-platform-input-text ">@</span>
                    </div>
                </div>
                <div class="col-12 mb-2">
                    <div class="form-group form-group-icon social-platform-input">
                        <span class="input-icon"><img src="images/icon-youtube.svg" alt=""/></span>
                        <input type="text" class="form-control style2-input"  ref={youtubeRef} placeholder="username"/>
                        <span class="social-platform-input-text ">@</span>
                    </div>
                </div>
                <div class="col-12 mb-2">
                    <div class="form-group form-group-icon social-platform-input">
                        <span class="input-icon"><img src="images/icon-facebook.svg" alt=""/></span>
                        <input type="text" class="form-control style2-input"  ref={facebookRef} placeholder="username"/>
                        <span class="social-platform-input-text ">@</span>
                    </div>
                </div>
                <div class="col-12 mb-2">
                    <div class="form-group form-group-icon social-platform-input">
                        <span class="input-icon"><img src="images/globe.svg" alt=""/></span>
                        <input type="text" ref={websiteUrlRef} class="form-control style2-input" placeholder="website url"/>
                                    
                    </div>
                </div>
            </div>
            <div className={ error.length > 0 ? "alert alert-danger" : "none" }>
                                <div >{error}</div>
            </div>
            <div className={ loader === true ? "loader" : "none"}>
                <div >Loading...</div>
            </div>

            <div class="row">

                <div class="col-lg-12">

                    <button type="submit" style={{marginBottom: "80px"}}
                        class="submit-but">Complete</button>
                </div>
            </div>
        </form>


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
  
  export default connect(mapStateToProps)(Onboard2);