import React, {useState} from 'react';
import { Link } from 'react-router-dom';

export default function Landing(props) {

    return (
        <>
            <main className="main">
                <header className="landing-header">
                    <div>
                        <Link to="/">
                            <img src="./logo.svg" />
                        </Link>
                    </div>
                    <div className="landing-button">
                            <Link to="/login">
                                <div className="landing-login">Login</div>
                            </Link>
                           
                        <span>
                        <Link to="/signup">
                            <button className="landing-signup">
                                <span className="landing-button-signup"> 
                                    SignUp
                                </span>
                            </button>
                        </Link>
                        </span>
                    </div>
                </header>

                <section className="landing-section1">
                    <p className="landing-section1-p1">
                    Easiest way for your audience to say thanks.
                    </p>
                    <p className="landing-section1-p2">
                    It’s absolutely free, and takes less than a minute
                    </p>
                </section>

                <section className="landing-section2">
                    <div className="landing-input">
                        <h4 className="landing-input-h4">trendupp.com/</h4>
                        <div contentEditable className="landing-input-h4" placeholder="myusername"></div>
                    </div>

                    <button className="landing-section2-button">
                        Create my account
                    </button>
                </section>
            </main> 
        </>
    )
}
