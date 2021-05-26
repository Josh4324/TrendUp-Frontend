import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Login from '../components/Login';

export default function SignUp() {
    const [loginToggle, setLoginToggle] = useState(false);

    const onClickLogin = () => {
        const Toggle = !loginToggle;
        setLoginToggle(Toggle); 
    }

    return (
        <>
            {
                loginToggle === true ? <Login toggle={onClickLogin} /> : null
            }
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

                <section className="signup-section1">
                    <h3 className="signup-h3">Create an account</h3>

                    <div className="signup-social"> 
                        <img className="signup-img" src="./facebook.svg" alt="facebook"/>
                        <img className="signup-img" src="./google.svg" alt="google"/>
                        <img className="signup-img" src="./twitter.svg" alt="titter"/>
                    </div>
                    
                    <div>
                        <hr className="signup-hr"/>

                        <div className="signup-back">Or sign up with email</div>
                    </div>
                   

                    <input placeholder="Email Address" className="signup-input"/>

                    <input placeholder="Password" type="password" className="signup-input"/>

                    <button className="signup-submit-button">Continue with email</button>

                    <div className="signup-terms">
                    By signing up, you agree to our terms and privacy policy. We do not allow inappropriate content. You must be 18 years old to have an account
                    </div>
                </section>

                
            </main>   

            



        </>
    )
}
