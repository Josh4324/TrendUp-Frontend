import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import {front} from "../utils/constants";


export default function Landing(props) {
    let img3 = "images/01.png";
    let img4 = "images/01.png";
    let img5 = "images/header-graphic.png";
    let img6 = "images/how-graphic.png";
    let login = `${front}/#/login`;
    let signup = `${front}/#/signup`;

    return (
        <>
            <main className="">
            <div class="header-style-01">
        
        <nav class="navbar navbar-area navbar-expand-lg nav-style-02">
            <div class="container nav-container social-nav">
                <div class="responsive-mobile-menu">
                    <div class="logo-wrapper float-left">
                        <a className="a" href="/" class="logo">
                            <img src="assets/img/trenupp-logo-2.png" alt=""/>
                        </a>
                    </div>

                    <a className="a" class="d-block float-right d-md-none mt-1 nav-right-link" href="#">Login</a>
                </div>
                
                <div class="nav-right-content">
                    <ul>
                        <li>
                            <a className="a" class="nav-right-link" href={login}>Login</a>
                        </li>
                    </ul>
                    
                    <div class="btn-wrapper">
                        <a className="a" href={signup} class="boxed-btn btn-brand">Sign up</a>
                    </div>
                </div>
            </div>
        </nav>
       
    </div>
    <div class="header-area header-social header-bg">

        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-7">
                    <div class="header-inner desktop-center">
                       
                        <h1 className="h1" class="title1" style={{color:"#1E266D"}}>Easiest way for your audience to say thanks.</h1>
                        <p className="p"> It’s absolutely free, and takes less than a minute</p>
                        <div class="btn-wrapper  desktop-center padding-top-20 padding-bottom-10">
                            <a className="a" href={signup} class="boxed-btn btn-brand ">Create my account</a>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
    </div>
    <div class="header-bottom-img m-top wow animate__animated animate__fadeInUp" data-parallax='{"x": 20, "y": 50}' 
     style={{
        backgroundImage: 'url('+img5+')'
      }}
   ></div>
    

    
    <div id="overview" class="create-content-area padding-bottom-120 padding-top-120">
        <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-8">
                <div class="section-title desktop-center padding-bottom-40 mx-auto">
                    <h3 className="h3" className="h3" class="title social-title">Here’s how trendupp works for creators</h3>
                </div>
            </div>
        </div>
            <div class="row align-items-center">
                <div class="col-lg-5">
                    <div class="trip-img wow animate__animated animate__backInUp bg-image" data-parallax='{"x": 100, "y": 0}'
                     style={{
                        backgroundImage: 'url('+img6+')'
                      }}
                   ></div>
                </div>
                <div class="col-lg-6 offset-lg-1">
                    <ul class="content">
                        <li><h4 classname="h4">Create an account</h4> Choose a unique username, setup payment and start receiving payments from your supporters </li>
                        <li><h4 classname="h4">Invite supporters to your page</h4> After creating your account, a unique invite link is created for you. Copy and paste to invite your supporters</li>
                        <li><h4 classname="h4">Start receiving payments</h4> Get payments from your supporters into your account</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    
    <div id="pricing" class="price-plan-area padding-top-70 padding-bottom-90">
        <div class="bg-img"  style={{
                            backgroundImage: 'url('+img3+')'
                          }}></div>
        <div class="bg-img-02"
         style={{
            backgroundImage: 'url('+img4+')'
          }}
         ></div>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-5">
                    <div class="section-title desktop-center margin-bottom-55">
                        <h3 className="h3" className="h3" class="title1 social-title" style={{color:"#1E266D"}}>Creators are excited about trendupp </h3>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4 col-md-6">
                    <div class="single-price-plan-01">
                        <div class="price-header">
                            <p className="p" class="mb-4">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                            <div class="img-icon text-center mb-2"><img src="assets/img/testim-1.png" alt=""/></div>
                            <h4 classname="h4" class="text-center">Happy User</h4>
                            <p className="p" class="text-center">@happyuser</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="single-price-plan-01">
                        <div class="price-header">
                            <p className="p" class="mb-4">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                            <div class="img-icon text-center mb-2"><img src="assets/img/testim-2.png" alt=""/></div>
                            <h4 classname="h4" class="text-center">Happy User</h4>
                            <p className="p" class="text-center">@happyuser</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="single-price-plan-01">
                        <div class="price-header">
                            <p className="p" class="mb-4">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                            <div class="img-icon text-center mb-2"><img src="assets/img/testim-3.png" alt=""/></div>
                            <h4 classname="h4" class="text-center">Happy User</h4>
                            <p className="p" class="text-center">@happyuser</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

   
    <div class="cta-section section-bg" style={{backgroundColor: "#C4336E", padding: "50px 0"}}>
        <div class="container">
            <div class="row align-items-center">
                <div class="col-md-5 offset-md-1">
                    <h2 className="h2">Ready to take creative
                        work to the next level?</h2>
                </div>
                <div class="col-md-3 offset-md-3">
                    <div class="btn-wrapper">
                    <a className="a" href={signup} class="boxed-btn btn-brand white"> Create an account</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <footer class="footer-area">
        
        <div class="copyright-area">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="copyright-item">
                            <div class="copyright-area-inner text-left">
                                    <a className="a" href="/" class="logo d-block mb-2">
                                        <img src="assets/img/trenupp-logo-2.png" alt="" style={{height: "25px"}}/>
                                    </a>
                                © Copyrights 2021 Trendupp All rights reserved.
                            </div>
                            <div class="widget widget_nav_menu">
                                <ul class="social_share style-01">
                                    <li><a className="a" href="#"><i class="fab fa-facebook-f"></i></a></li>
                                    <li><a className="a" href="#"><i class="fab fa-instagram"></i></a></li>
                                    <li><a className="a" href="#"><i class="fab fa-twitter"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
   
    <div class="back-to-top">
        <span class="back-top"><i class="fa fa-angle-up"></i></span>
    </div>
                   
            </main> 
        </>
    )
}
