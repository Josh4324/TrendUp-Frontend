import React, {useState} from 'react';
import { Link } from 'react-router-dom';

export default function Login(props) {
    console.log(props)
    const ontoggle = (evt) => {
        if (evt.target.nodeName === "MAIN"){
            props.toggle();
        }
        
    }
    return (
        
        <>
             <main className="modal-login" >
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

                    <input placeholder="Password" type="password" className="none"/>

                    <button className="signup-submit-button">Continue with email</button>

                </section>

                
            </main>   
        </>
    )
}
