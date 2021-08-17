import React, {useState, useRef} from 'react';
import { Link } from 'react-router-dom';
import {loginCall} from '../utils/apiCalls';
import { useHistory } from "react-router-dom";
import {connect} from 'react-redux';

function Reset(props) {
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
                       
                </header>

                <section className="login-card mx-auto">
                <h2 className="login-card-title">Reset Password</h2>

                   

                   
                    <form onSubmit={login}>
                        
                            <div className="form-group icon-input">
                                <input type="Password" className="form-control style2-input ps-5" ref={passwordRef} placeholder="Enter new Password"/>
                                <i className="font-sm ti-lock text-grey-500 pe-0"></i>
                                <div className="invalid-feedback">
                                    Please fill in your new password
                                  </div>  
                            </div>
                             <div className="form-group icon-input">
                                <input type="Password" className="form-control style2-input ps-5" ref={passwordRef} placeholder="Confirm Password"/>
                                <i className="font-sm ti-lock text-grey-500 pe-0"></i>
                                <div className="invalid-feedback">
                                    Please confirm your new password
                                  </div>  
                            </div>


                        <div className={ error.length > 0 ? "alert alert-danger" : "none" }>
                            <div >{error}</div>
                        </div>
                        <div className={ loader === true ? "loader" : "none"}>
                            <div >Loading...</div>
                        </div>

                        <button type="submit" className="form-control style2-input style2-main-button">Submit</button>


                    </form>
                    
                </section>

            </main>   
        </>
    )
}

export default connect()(Reset);