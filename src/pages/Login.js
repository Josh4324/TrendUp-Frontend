import React from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
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
                   

                    <input placeholder="Email Address" className="login-input"/>

                    <input placeholder="Password" type="password" className="login-input"/>

                    <button className="signup-submit-button">Continue with email</button>

                </section>

                
            </main>   
        </>
    )
}
