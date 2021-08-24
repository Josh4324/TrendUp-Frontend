import React, {useState, useEffect} from 'react';
import { payoutCall, payoutHistoryCall } from "../utils/apiCalls";
import { NotificationManager } from "react-notifications";
import banks from "../utils/bank";

export default function Wallet(props) {  
    console.log(props)
    const [history, setHistory] = useState([]);
    const payout = async() => {
        NotificationManager.info("Your payout is processing", "Info")
    
        let cred = {
            amount: props.amount,
            account_bank: props.bank,
            account_number: props.account
        }

        const pay = await payoutCall(cred, props.token);
        console.log(pay);
        if(pay.code === 200){
            NotificationManager.success("Payout completed successfully", "Success");
            window.location.reload();
        }else{
            NotificationManager.error("An error occurred", "Error")
        }
    }

    useEffect(async () => {
        const history = await payoutHistoryCall(props.token);
        if (history){
            console.log(history.data);
            setHistory(history.data);
        }
        return () => {
        
        }
    }, [])
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
                        <span onClick={payout} class="btn btn-success btn-block mb-2"> Request Pay Out</span>
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

                    {
                        history.length === 0 ? <p> You have not made any payouts </p> : null
                    }

                    {
                        history.map((item) => {
                            return (
                                 <div class="single-record-row d-flex">

                        <span href="support_history.html" class="link-cover"></span>
                        <div class="row supporters-row">
                            <div class="col-sm-3">
                                <h4 class="post-single_title">₦{item.amount}<span class="post-single_date">
                                    </span></h4>
                            </div>
                            <div class="col-sm-5">
                                <p>{new Date(item.createdAt).toDateString()} at {""}
                                  {new Date(
                                    item.createdAt
                                  ).toLocaleTimeString()}</p>
                            </div>
                            <div class="col-sm-4"> <span class="badge badge bg-success">Successful
                                    Payout</span></div>
                        </div>
                    </div>
                            )
                        })
                    }
                   

                   


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
