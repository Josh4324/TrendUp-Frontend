import React, {useState, useRef, useEffect} from 'react';
import { Link } from 'react-router-dom';
import banks from "../utils/bank";
import { useHistory } from "react-router-dom";
import {onboard3Call, getCall} from '../utils/apiCalls';
import "../themify-icons.css";
import "../feather.css";
import "../style1.css";
import "../custom1.css";
import axios from "axios";
import {connect} from 'react-redux';
import NotificationManager from 'react-notifications/lib/NotificationManager';

function Onboard3(props) {
    const token = "sk_test_fe5d07ae5f83bbc809ec64ada3efb3e9caa1338c"
    const JWT = "Bearer " + token;
    let history = useHistory();
    const [error, setError] = useState("");
    const [loader, setLoader] = useState(false);
    const [loader1, setLoader1] = useState(false);
    const [accountName, setAccountName] = useState("");
    const [onboard, setOnboard] = useState(null);
    const token2 = props.user.user.token
    
    const bankRef = useRef("");
    const accountRef = useRef("");

    useEffect(() => {
        getCall(setOnboard, token2)
        return () => {
           
        }
    }, [])

    if (Number(onboard) > 3){
        if (Number(onboard) === 4){
           history.push("/dashboard")
        }else{
            history.push(`step${onboard}`);
        }   
    }


    const submit = async(evt) => {
        evt.preventDefault();

        if (accountRef.current.value === ""){
            return NotificationManager.error("Account number cannot be empty", "Error")
        }
       
        const bankCode = bankRef.current.value;
        const accountCode = accountRef.current.value;
        setLoader(true);
        fetch(`https://api.paystack.co/bank/resolve?account_number=${accountCode}&bank_code=${bankCode}`, {
            method: 'GET', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
                authorization: JWT
            },
        }).then(response => response.json())
        .then(data => {
            setLoader(false);
          console.log('Success:', data);
          setAccountName(data.data.account_name)
          //setData(data.data);
          //setLoading(false);
        })
        .catch((error) => {
            setLoader(false);
          console.error('Error:', error);
        });
        
        //const link = `https://api.paystack.co/bank/resolve?account_number=${accountCode}&bank_code=${bankCode}`;
        //const res = await axios.get(link);
        //console.log(res);

       
    }

    const confirm = async(evt) => {
        evt.preventDefault();
        const cred = {
            accNumber: accountRef.current.value,
            accName: accountName,
            bankName: bankRef.current.value,
            onboardingStep: 4,
            showComplete: true
        }

        console.log(cred)
        const result = await onboard3Call(cred, setLoader1, history, token2);
    }
    
    return (
        <div>
                <div className="main main-wrap">

                <header className="landing-header">
                    <div>
                        <Link to="/">
                            <img src="./logo.svg" />
                        </Link>
                    </div>
                    
                </header>
                
                <div className="row">

                    <div className="col-lg-6 col-md-8 mx-auto">
                        <div className="user-onboard verifybank-onboard">
                            <div className="step-header">
                                <div className="step-header-item step-header-complete step-header-1">
                                    <div className="step-header-circle"></div>
                                    <div className="step-header-text">Are you a creator?</div>
                                </div>
                                <div className="step-header-item step-header-complete step-header-2">
                                    <div className="step-header-circle"></div>
                                    <div className="step-header-text">User details</div>
                                </div>
                                <div className="step-header-item step-header-current step-header-3">
                                    <div className="step-header-circle"></div>
                                    <div className="step-header-text">Bank Account details</div>
                                </div>
                            </div>

                            <h2 className="useronboard-title">Verify your Bank Account</h2>
                            <h4 className="useronboard-subtitle mb-5">All funds paid to you by your supporters will be sent to this account at your request</h4>
                            <form className="verifybank-onboard-form" action="dashboard.html" method="GET">

                                

                                <div className="row">
                                    <div className="col-12 mb-2">
                                        <div className="form-group">
                                            
                                            <select name="" id="" ref={bankRef} className="form-control form-select style2-input">
                                                {
                                                    Object.entries(banks).map((item) => {
                                                        return <option value={item[1]}>{item[0]}</option>
                                                    })
                                                }
                                               
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-12 mb-2">
                                        <div className="form-group">
                                            <input type="text" ref={accountRef} className="form-control style2-input" placeholder="Account Number"/>
                                        </div>
                                    </div>
                                </div>

                                <div className={ error.length > 0 ? "alert alert-danger" : "none" }>
                                <div >{error}</div>
                                </div>
                                <div className={ loader === true ? "loader" : "none"}>
                                    <div >Loading...</div>
                                </div>

                                <div className="row">

                                    <div className="col-lg-12">

                                        <button type="submit" onClick={submit}
                                            className="form-control  style2-input style2-main-button">Verify Account</button>
                                    </div>
                                </div>
                                {
                                    accountName.length > 1 ? (
                                        <div className="row">

                                        <div className="col-lg-12">
                                            <label className="mb-2">Account Name</label>
                                            <h2 className="mb-4">{accountName}</h2>
                                            <div className={ loader1 === true ? "loader" : "none"}>
                                                <div >Loading...</div>
                                             </div>
                                            <button type="submit" onClick={confirm}
                                                className="form-control style2-input style2-main-button">Confirm Account Details</button>
                                        </div>
                                    </div>
                                    ) : null
                                }

                               
                            </form>


                        </div>
                    </div>
                </div>
                </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.auth,
    }
  }
  
  export default connect(mapStateToProps)(Onboard3);