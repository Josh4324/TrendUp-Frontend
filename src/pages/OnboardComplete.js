import React from 'react';
import { Link } from 'react-router-dom';

export default function OnboardComplete() {
    return (
        <div>
                 <div class="main-wrap main">

                 <header className="landing-header">
                    <Link to="/">
                            <img src="./logo.svg" />
                     </Link>
                </header>

<div class="row">

    <div class="col-lg-6 col-md-8 mx-auto">
        <div class="user-onboard onboard-complete">
            
            
            <h2 class="useronboard-title"><i class="ti-check complete-check"></i>Congratulations</h2>
            <h4 class="useronboard-subtitle mb-4">You’ve completed your profile but you cannot collect payments on your trendupp page yet. To activate your page for payment, you need to get <strong>100</strong> followers.</h4>

            <label class="mb-2">Get your fans to follow your page by sharing your link</label>
            <div class="form-group form-group-icon choose-link-input">
                <span class="choose-link-input-icon input-icon"><img src="images/trendupp-icon.png"
                        alt=""/></span>
                <span class="choose-link-input-text">trendupp.com/</span>
                <input type="text" class="form-control style2-input" style={{ paddingLeft: "135px"}} placeholder="yournamehere"/>
                <span class="input-icon-e copy-button" style={{paddingTop:"0px"}}> Tap to Copy</span>
            </div>
            
            <div class="onboard-complete-share-section mt-5">

            <h4 class="form-header mb-3">Share on</h4>
            <a class="share-button" href="#">
                <img src="images/icon-twitter.svg" alt="" />
            </a>

            <a class="share-button" href="#">
                <img src="images/icon-facebook.svg" alt="" />
            </a>

            <a class="share-button" href="#">
                <img src="images/icon-whatsapp.svg" alt="" />
            </a>
            </div>

            <div class="form-group text-center mt-5">

            <Link to="/dashboard" class="bg-current text-center text-white font-xsss fw-600 p-3 w175 rounded-3 d-inline-block">View your page</Link>
            </div>

        </div>
    </div>
</div>
</div>
        </div>
    )
}
