import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { NotificationManager} from 'react-notifications';

function DashComponent(props) {
    const {firstName, picture, userName} = props.data.user || ""
    const link = `/${userName}`
    const newlink = "trendupp.com" + link
    return (
        <div>
             <div className="middle-sidebar-bottom">
        <div className="middle-sidebar-left">
            <div className="row">
                <div className="col-md-4 pe-md-2">
                    <div className="card w-100 border-0 shadow-none p-4 rounded-xxl mb-3"
                        style={{backgroundColor:"#fde9f1"}}>
                        <div className="card-body d-flex p-0">
                            <i
                                className="btn-round-lg d-inline-block me-3 bg-primary feather-shopping-bag font-md text-white"></i>
                            <h4 className="text-primary font-xl fw-700">₦0 <span
                                    className="fw-500 mt-0 d-block text-grey-500 font-xssss">Current Earning</span>
                            </h4>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 pe-md-2 ps-md-2">
                    <div className="card w-100 border-0 shadow-none p-4 rounded-xxl mb-3"
                        style={{backgroundColor: "#ffeee6"}}>
                        <div className="card-body d-flex p-0">
                            <i
                                className="btn-round-lg d-inline-block me-3 bg-secondary feather-heart font-md text-white"></i>
                            <h4 className="text-secondary font-xl fw-700">0 <span
                                    className="fw-500 mt-0 d-block text-grey-500 font-xssss">Supported</span></h4>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 ps-md-2">
                    <div className="card w-100 bg-grey border-0 shadow-none p-4 rounded-xxl mb-3">
                        <div className="card-body d-flex p-0">
                            <i
                                className="btn-round-lg d-inline-block me-3 bg-greydark feather-zap font-md text-white"></i>
                            <h4 className="text-grey-600 font-xl fw-700">0 <span
                                    className="fw-500 mt-0 d-block text-grey-500 font-xssss">Page Views</span></h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="card w-100 border-0 shadow-1 p-4_5 rounded-xxl mb-3">
                        <h4 className="fw-700 mb-3 font-xsss text-grey-600">RECENT SUPPORTERS</h4>
                        <i
                            className="feather-heart btn-round-lg bg-grey font-md fw-700 text-grey-500 d-inline-block mx-auto mb-3"></i>
                        <h2 className="fw-700 font-xs text-center mb-3">You don't have any supporters yet
                        </h2>
                        <p className="text-grey-600 text-center mw-600 mx-auto">Share your page with your audience
                            to get started.</p>

                            <div className="form-group form-group-icon choose-link-input mw-400 mx-auto">
                            <span className="choose-link-input-icon input-icon"><img src="images/trendupp-icon.png"
                                    alt=""/></span>
                            <span className="choose-link-input-text">trendupp.com/</span>
                            <input type="text" className="form-control style2-input mb-0" style={{paddingLeft:"140px"}} placeholder={userName}
                                disabled/>
                            
                            <CopyToClipboard text={newlink}
                            onCopy={() => NotificationManager.success('Copied to clipboard', 'Success')}
                            >
                                    <span className="input-icon-e copy-button" style={{paddingTop: "0px"}}> Tap to Copy</span>
                            </CopyToClipboard>
                           
                            </div>

                        <div className="onboard-complete-share-section mt-4 mb-2">

                            <h4 className="font-xxs fw-600 mb-3">Share on</h4>
                            <Link className="share-button" to="#">
                                <img src="images/icon-twitter.svg" alt=""/>
                            </Link>

                            <Link className="share-button" to="#">
                                <img src="images/icon-facebook.svg" alt=""/>
                            </Link>

                            <Link className="share-button" to="#">
                                <img src="images/icon-whatsapp.svg" alt=""/>
                            </Link>
                        </div>


                    </div>
                    
                </div>
                
            </div>
            <div class="row">
                        <div class="col-12">
                            <div class="card dash-card">
                                <h4 class="card-title mb-4_5">Quick Tips</h4>
                                <div class="tip-single">
                                    <div class="tip-icon">
                                        <i
                                        class="font-xxl text-grey-400 me-3 feather-heart"></i>
                                    </div>
                                    <div class="tip-details">
                                        <h5 class="font-xs fw-700">Tip 1</h5>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur autem eaque</p>
                                    </div>
                                </div>
                                <div class="tip-single border-0 pb-0 mb-0">
                                    <div class="tip-icon">
                                        <i
                                        class="font-xxl text-grey-400 me-3 feather-zap"></i>
                                    </div>
                                    <div class="tip-details">
                                        <h5 class="font-xs fw-700">Tip 2</h5>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur autem eaque</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            
        </div>
        

    </div>
    
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        user: state.auth,
        data: state.user
    }
  }
  
  export default connect(mapStateToProps)(DashComponent);