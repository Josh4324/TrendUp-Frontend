import React from 'react'

export default function Wallet(props) {
    return (
        <div>
             <div class="">

<div class="middle-sidebar-bottom" style={{paddingLeft: "20px"}}>
    <div class="middle-sidebar-left">
        <div class="row">

            <div class="col-md-4 ps-md-2">
            </div>
        </div>
        <div class="row">
            <div class="col-md-4">
                {
                    props.amount < 10000 ? (<div class="card dash-card p-4 mb-3 shadow-none" style={{backgroundColor: "#fde9f1"}}>
                    <div class="card-body d-flex p-0">
                        <i class="icon-round-lg me-3 bg-primary feather-shopping-bag"></i>
                        <h4 class="text-primary font-xl fw-700">₦{props.amount} <span
                                class="fw-500 mt-0 d-block text-grey-500 font-xssss">Current Earning</span>
                        </h4>
                    </div>
                    <div class="card-body p-0 pt-3 text-center">
                        <p class="text-grey-700 mb-2">Minimum Payout: <span class="fw-600">₦10,000</span> </p>
                        <span class="btn btn-disabled btn-block mb-2"> Request Pay Out</span>
                        <p class="mb-0">Your current earning must hit the minimum payout for you to activate payout.</p>
                    </div>

                </div>) : null
                }

                {
                    props.amount >= 10000 ? ( <div class="card dash-card p-4 mb-3 shadow-none" style={{backgroundColor: "#fde9f1"}}>
                    <div class="card-body d-flex p-0">
                        <i class="icon-round-lg me-3 bg-primary feather-shopping-bag"></i>
                        <h4 class="text-primary font-xl fw-700">₦{props.amount} <span
                                class="fw-500 mt-0 d-block text-grey-500 font-xssss">Current Earning</span>
                        </h4>
                    </div>
                    <div class="card-body p-0 pt-3 text-center">
                        <a href="#" class="btn btn-success btn-block mb-2"> Request Pay Out</a>
                        <p class="mb-0">Yay, you have hit the minimum payout. You are eligible to request pay out.</p>
                    </div>

                </div>) : null
                }

               

                <div class="card dash-card bg-grey p-4 mb-3 shadow-none">
                    <div class="card-body d-flex p-0">
                        <i class="icon-round-lg me-3 bg-greydark feather-dollar-sign"></i>
                        <h4 class="text-grey-600 font-xl fw-700">₦{props.amount} <span
                                class="fw-500 mt-0 d-block text-grey-500 font-xssss">Total Earning</span>
                        </h4>
                    </div>
                </div>
            </div>
            <div class="col-md-8">
                <div class="card dash-card dash-card__records dash-card__supporters">
                    <h3 class="card-title mb-3">PAYOUT HISTORY</h3>


                    <div class="single-record-row d-flex">

                        <a href="support_history.html" class="link-cover"></a>
                        <div class="row supporters-row">
                            <div class="col-sm-3">
                                <h4 class="post-single_title">₦5,000 <span class="post-single_date">
                                    </span></h4>
                            </div>
                            <div class="col-sm-5">
                                <p>Jun 10, 2021 at 02:12 PM</p>
                            </div>
                            <div class="col-sm-4"> <span class="badge bg-warning text-dark">Pending
                                    Payout</span></div>
                        </div>
                    </div>
                    <div class="single-record-row d-flex">

                        <a href="support_history.html" class="link-cover"></a>
                        <div class="row supporters-row">
                            <div class="col-sm-3">
                                <h4 class="post-single_title">₦35,000 <span class="post-single_date">
                                    </span></h4>
                            </div>
                            <div class="col-sm-5">
                                <p>Jun 10, 2021 at 02:12 PM</p>
                            </div>
                            <div class="col-sm-4"> <span class="badge bg-success">Payout Successful</span>
                            </div>
                        </div>
                    </div>
                    <div class="single-record-row d-flex">

                        <a href="support_history.html" class="link-cover"></a>
                        <div class="row supporters-row">
                            <div class="col-sm-3">
                                <h4 class="post-single_title">₦25,000 <span class="post-single_date">
                                    </span></h4>
                            </div>
                            <div class="col-sm-5">
                                <p>Jun 10, 2021 at 02:12 PM</p>
                            </div>
                            <div class="col-sm-4"> <span class="badge bg-success">Payout Successful</span>
                            </div>
                        </div>
                    </div>
                    <div class="single-record-row d-flex">

                        <a href="support_history.html" class="link-cover"></a>
                        <div class="row supporters-row">
                            <div class="col-sm-3">
                                <h4 class="post-single_title">₦20,000 <span class="post-single_date">
                                    </span></h4>
                            </div>
                            <div class="col-sm-5">
                                <p>Jun 10, 2021 at 02:12 PM</p>
                            </div>
                            <div class="col-sm-4"> <span class="badge bg-success">Payout Successful</span>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>


    </div>

</div>
</div>

<div class="popup-wrapper pt-0 d-none" id="popupWrapper">
        <div class="popup-blocker" id="popupBlocker"></div>
        <div class="popup-body card mw-400 mx-auto bg-white p-5 rounded-xxl">

            <span class="popup-del" id="popupDel"><i class="feather-x"></i></span>
            <div class="card-body">

                <h2 class="mb-4 text-center">Are you sure you want to delete this?</h2>

                <div class="row">
                    <div class="col-12 mb-3"><a href="#" class="btn d-block w-100">Confirm</a></div>
                    <div class="col-12"><a href="#" class="btn btn-grey d-block w-100">Cancel</a></div>
                </div>

            </div>



        </div>
    </div>

        </div>
    )
}
