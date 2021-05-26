import React from 'react';
import { Link } from 'react-router-dom';
import "../custom1.css";
import "../feather.css";
import "../style1.css";
import "../themify-icons.css";


export default function Onboard2() {
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
        <form class="userdetails-onboard-form" action="user_onboard3.html" method="GET">

            <div class="form-group upload-input mb-4">
                <input type="file" name="file" id="file" class="input-file" />
                <label for="file"
                    class="rounded-3 text-center bg-white btn-tertiary js-labelFile p-4 w-100 border-dashed">
                    <i class="ti-camera large-icon me-3 d-block"></i>
                    <span class="js-fileName">Upload profile picture</span>
                </label>
            </div>

            <div class="row">
                <div class="col-lg-6 mb-2">
                    <label class="">Basic Information</label>
                </div>
            </div>

            <div class="row">
                <div class="col-lg-12 mb-2">
                    <div class="form-group">
                        <input type="text" class="form-control style2-input" placeholder="Brand Name" />
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6 mb-2">
                    <div class="form-group">
                        <input type="text" class="form-control style2-input" placeholder="First Name" />
                    </div>
                </div>

                <div class="col-md-6 mb-2">
                    <div class="form-group">
                        <input type="text" class="form-control style2-input" placeholder="Last Name"/>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-lg-12 mb-2">
                    <div class="form-group">
                        <input type="text" class="form-control style2-input" placeholder="Website URL"/>
                    </div>
                </div>
            </div>


            <div class="row">
                <div class="col-lg-12 mb-2">
                    <div class="form-group">
                        <label class="mb-2">What are you creating?</label>
                        <input type="text" class="form-control style2-input" placeholder="creating piano music, building Coronarelief.org, posting a new art everyday"/>
                    </div>
                </div>
            </div>

            <div class="row">

                <div class="col-lg-12 mb-3">
                    <label class="mb-2">About me</label>
                    <textarea class="form-control mb-0 p-3 h100 bg-greylight lh-16" rows="5"
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
                        <input type="text" class="form-control style2-input" placeholder="username"/>
                        <span class="social-platform-input-text pt-1">@</span>
                    </div>
                </div>
                <div class="col-12 mb-2">
                    <div class="form-group form-group-icon social-platform-input">
                        <span class="input-icon"><img src="images/Instagram_AppIcon_Aug2017.png" alt=""/></span>
                        <input type="text" class="form-control style2-input" placeholder="username"/>
                        <span class="social-platform-input-text pt-1">@</span>
                    </div>
                </div>
                <div class="col-12 mb-2">
                    <div class="form-group form-group-icon social-platform-input">
                        <span class="input-icon"><img src="images/icon-youtube.svg" alt=""/></span>
                        <input type="text" class="form-control style2-input" placeholder="username"/>
                        <span class="social-platform-input-text pt-1">@</span>
                    </div>
                </div>
                <div class="col-12 mb-2">
                    <div class="form-group form-group-icon social-platform-input">
                        <span class="input-icon"><img src="images/icon-facebook.svg" alt=""/></span>
                        <input type="text" class="form-control style2-input" placeholder="username"/>
                        <span class="social-platform-input-text pt-1">@</span>
                    </div>
                </div>
            </div>

            <div class="row">

                <div class="col-lg-12">

                    <button type="submit"
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
