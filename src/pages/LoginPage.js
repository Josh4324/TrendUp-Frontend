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

                <section className="login-section1">
                    <h3 className="login-h3">Welcome Back</h3>

                    <div className="signup-social"> 
                        <img className="signup-img" src="./facebook.svg" alt="facebook"/>
                        <img className="signup-img" src="./google.svg" alt="google"/>
                        <img className="signup-img" src="./twitter.svg" alt="titter"/>
                    </div>
                    
                    <div>
                        <hr className="signup-hr"/>

                        <div className="login-back">Or login with email</div>
                    </div>
                    <form onSubmit={login}>
                        <input placeholder="Email Address" ref={emailRef} className="login-input"/>

                        <input placeholder="Password" type="password" ref={passwordRef} className="login-input"/>

                        <div className={ error.length > 0 ? "alert alert-danger" : "none" }>
                            <div >{error}</div>
                        </div>
                        <div className={ loader === true ? "loader" : "none"}>
                            <div >Loading...</div>
                        </div>

                        <button className="signup-submit-button">Continue with email</button>

                    </form>
                    
                </section>

            </main>   
        </>
    )
}

export default connect()(LoginPage);