import React, {useState, useRef} from 'react';
import { Link } from 'react-router-dom';
import {loginCall} from '../utils/apiCalls';
import { useHistory } from "react-router-dom";
import {connect} from 'react-redux';

function LoginPage(props) {
    console.log(props);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);
    const [loader, setLoader] = useState(false);
    const emailRef = useRef("");
    const passwordRef = useRef("");
   
    let history = useHistory();

    const login = async(evt) => {
        evt.preventDefault();
    
        const cred = {
            email: emailRef.current.value,
            password: passwordRef.current.value
        }

        const result = await loginCall(cred, props.dispatch, setLoader, setError, history);
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
                            <div className="signup-acc">No account?</div>
                                <Link to="/signup">
                                    <div className="landing-login" >Signup</div>
                                </Link>
                                
                        </div>
                </header>

                <section className="login-card mx-auto">
                <h2 className="login-card-title">Welcome Back</h2>

                    <div className="col-sm-12 social-login">
                        
                        <a href="#" className="social-login-icon">
                            <img src="images/icon-google.svg" alt="google icon" className="" />
                        
                        </a>
                        <a href="#" className="social-login-icon">
                            <img src="images/icon-facebook.svg" alt="google icon" className=""/>
                            
                        </a>
                        <a href="#" className="social-login-icon">
                            <img src="images/icon-twitter.svg" alt="google icon" className=""/>
                            
                        </a>
                    </div>

                    <h6 className="social-login-divider">
                                <span>Or, login with email</span> </h6>
                    <form onSubmit={login}>
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

                        <button type="submit" className="form-control style2-input style2-main-button">Continue with email</button>

                    </form>
                    
                </section>

            </main>   
        </>
    )
}

export default connect()(LoginPage);