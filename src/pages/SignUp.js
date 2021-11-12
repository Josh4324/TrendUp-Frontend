/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState,useRef} from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import Login from '../components/Login';
import {signupCall, verificationCall, resendCall, socialCheck, socialLogin, socialSignUp } from '../utils/apiCalls';
import { useHistory } from "react-router-dom";
import {connect} from 'react-redux';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import GoogleLogin from 'react-google-login';
import { front } from "../../src/utils/constants";

function SignUp(props) {
    const [loginToggle, setLoginToggle] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);
    const [loader, setLoader] = useState(false);
    const [signUpState, setSignUp] = useState(false);
    let history = useHistory();

    const emailRef = useRef("");
    const passwordRef = useRef("");
    const codeRef = useRef("");

    const onClickLogin = () => {
        const Toggle = !loginToggle;
        setLoginToggle(Toggle); 
    }

    const signup = async(evt) => {
        evt.preventDefault();
    
        const cred = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
            onboardingStep: 1,
        }

        const result = await signupCall(cred, setLoader, setError, setSuccess, setSignUp);
    }

    const responseGoogle = async (response) => {
        const cred = {
          firstName: response?.profileObj?.givenName,
          lastName: response?.profileObj?.familyName,
          email: response?.profileObj?.email,
          picture: response?.profileObj?.imageUrl,
          onboardingStep: 1,
        }
        const result = await socialCheck(
          cred,
        );
    
        if (result?.data?.email){
          const result = await socialSignUp(cred);
          console.log(result);
          props.dispatch({ type: "LOGIN_SUCCESS", payload: result.data });
          localStorage.setItem("trend-user", JSON.stringify(result.data));
          window.location.href = `${front}/step1`;
        }else{
          const result = await socialLogin(cred);
          props.dispatch({ type: "LOGIN_SUCCESS", payload: result.data });
          localStorage.setItem("trend-user", JSON.stringify(result.data));
          const { onboardingStep } = result.data  
          let onboard = Number(onboardingStep);
           if (Number(onboard) === 4) {
            window.location.href = `${front}/dashboard`;
          } else {
            window.location.href = `${front}/step${Number(onboard)}`;
          }
        }
      }

      const responseFacebook = async (response) => {
        const names = response.name.split(" ");
        const cred = {
          firstName: names[0],
          lastName: names[1],
          email: response?.email,
          picture: response?.picture?.data.url,
          onboardingStep: 1,
        }
        const result = await socialCheck(
          cred,
        );
    
        if (result?.data?.email){
          const result = await socialSignUp(cred);
          console.log(result);
          props.dispatch({ type: "LOGIN_SUCCESS", payload: result.data });
          localStorage.setItem("trend-user", JSON.stringify(result.data));
          window.location.href = `${front}/step1`;
        }else{
          const result = await socialLogin(cred);
          props.dispatch({ type: "LOGIN_SUCCESS", payload: result.data });
          localStorage.setItem("trend-user", JSON.stringify(result.data));
          const { onboardingStep } = result.data  
          let onboard = Number(onboardingStep);
           if (Number(onboard) === 4) {
            window.location.href = `${front}/dashboard`;
          } else {
            window.location.href = `${front}/step${Number(onboard)}`;
          }
        }
      }
    
    

    const verify = async(evt) => {
        evt.preventDefault();

        const cred = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
            code: codeRef.current.value,
        }

        const result = await verificationCall(cred,setLoader,setError,history, props.dispatch);
    }

    const callback = async() => {
        try{
            const res = await axios.get(`http://localhost:8080/auth/google`);
            if (res){
               console.log(res)
            }
        }catch(err){

        }
    }

    const resend = async(evt) => {
        evt.preventDefault();

        const cred = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
        }

        const result = await resendCall(cred);
    }


    return (
        <>
            <main className="main-signup">
                <header className="landing-header">
                    <div>
                        <Link to="/">
                            <img src="./logo.svg" />
                        </Link>
                    </div>

                    <div className="signup-button">
                        <div className="signup-acc">Already have an account?</div>
                            <Link to="/login">
                                <div className="landing-login">Login</div>
                            </Link>
                            
                    </div>
                </header>

                <div className="row">
            
            <div className="col-xl-4 mx-auto">
                <div className="login-card mx-auto">
                    
                        <h2 className="login-card-title" style={{fontSize: "28px"}}>Create an account</h2>

                        <div className="col-sm-12 social-login">
                            
                            <a href="#" className="social-login-icon">
                            <GoogleLogin
          clientId="247293153353-f740pqjuo3bmob4mjb8upd26auia6hlv.apps.googleusercontent.com"
          render={renderProps => (
      <a href="#" className="social-login-icon" onClick={renderProps.onClick}>
      <img
        src="images/icon-google.svg"
        alt="google icon"
        className=""
      />
    </a>
    )}
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />
                               
                            </a>
                           
                            <a href="#" className="social-login-icon">
                            <FacebookLogin
          appId="803651167213839"
        callback={responseFacebook}
        cookie={true}
        fields="name,email,picture"
    render={renderProps => (
    <a onClick={renderProps.onClick} href="#" className="social-login-icon">
    <img
      src="images/icon-facebook.svg"
      alt="google icon"
      className=""
    />
  </a>
    
  )}
/>
                                
                            </a>
                           
                        </div>
                            <h6 className="social-login-divider">
                                <span>Or, sign up with email</span> </h6>
                        <form action="user_onboard1.html" method="GET">
                            
                            <div className="form-group icon-input">
                                <i className="font-sm ti-email text-grey-500 pe-0"></i>
                                <input type="text" className="form-control style2-input ps-5" ref={emailRef} placeholder="Your Email Address"/>
                                <div className="invalid-feedback">
                                    Please fill in your email address
                                  </div>                        
                            </div>
                            <div className="form-group icon-input">
                                <input type="Password" className="form-control style2-input ps-5" ref={passwordRef} placeholder="Password"/>
                                <i className="font-sm ti-lock text-grey-500 pe-0"></i>
                                <div className="invalid-feedback">
                                    Please fill in your password
                                  </div>  
                            </div>
                            <div className={ error.length > 0 ? "alert alert-danger" : "none" }>
                                <div >{error}</div>
                            </div>
                            <div className={ loader === true ? "loader" : "none"}>
                                <div >Loading...</div>
                            </div>
                            {
                                success === true ? (
                                    <div className="form-group icon-input">
                                
                                        <input type="text" className="form-control style2-input ps-3 mb-2 bg-white" ref={codeRef} placeholder="Paste verification code"/> 
                                        <span className="form-input-btn resend" onClick={resend}>Resend</span> 
                                        <div id="emailHelp" className="form-text">Please check your inbox for a verification code.</div>
                            
                                        <div className="invalid-feedback">
                                            Your verification code is incorrect
                                        </div>    

                                    </div>
                                ) : null
                            }
                            

                            <div className="col-sm-12 p-0">
                                <div className="form-group mb-1">
                                    {
                                        signUpState === true ? (
                                            <button type="submit" onClick={verify} className="form-control style2-input style2-main-button">Continue with email</button>
                                        ) : (
                                            <button type="submit" onClick={signup} className="form-control style2-input style2-main-button">Continue with email</button>
                                        )
                                    }
                                   
                                </div>
                                <p className="form-desc mt-3">By signing up, you agree to our terms and privacy policy. We do not allow inappropriate content. You must be 18 years old to have an account</p>
                            </div>
                        </form>
                    
                </div> 
            </div>
        </div>

                
            </main>   

            



        </>
    )
}

export default connect()(SignUp);