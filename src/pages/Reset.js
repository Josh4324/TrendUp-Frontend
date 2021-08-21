import React, {useState, useRef} from 'react';
import { Link } from 'react-router-dom';
import {loginCall,resetPasswordCall2 } from '../utils/apiCalls';
import { NotificationManager } from "react-notifications";
import { useHistory } from "react-router-dom";
import {connect} from 'react-redux';

function Reset(props) {
    const token = props.location.search.slice(6,)
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);
    const [loader, setLoader] = useState(false);
    const emailRef = useRef("");
    const passwordRef = useRef("");
    const passwordRef2 = useRef("");
   
    let history = useHistory();

    const resetpassword = async(evt) => {
        evt.preventDefault();
        setLoader(true);

        if (passwordRef.current.value !== passwordRef2.current.value){
            return NotificationManager.error("Passwords do not match", "Error")
        }
    
        const cred = {
            newPassword: passwordRef.current.value,
            token
        }

        const result = await resetPasswordCall2(cred);
        if (result.code === 200){
            setLoader(false);
            NotificationManager.success("Password Reset Successful", "Success");
            history.push("./login")
        }else{
            setLoader(false);
            NotificationManager.error("An error occurred", "Error");
        }
        
        
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

                   

                   
                    <form onSubmit={resetpassword}>
                        
                            <div className="form-group icon-input">
                                <input type="Password" className="form-control style2-input ps-5" ref={passwordRef} placeholder="Enter new Password"/>
                                <i className="font-sm ti-lock text-grey-500 pe-0"></i>
                                <div className="invalid-feedback">
                                    Please fill in your new password
                                  </div>  
                            </div>
                             <div className="form-group icon-input">
                                <input type="Password" className="form-control style2-input ps-5" ref={passwordRef2} placeholder="Confirm Password"/>
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