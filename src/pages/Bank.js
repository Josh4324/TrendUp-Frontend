import React, {useState, useEffect, useRef} from 'react';
import { Link } from 'react-router-dom';
import {editCall,getCallModal} from '../utils/apiCalls';
import NotificationManager from 'react-notifications/lib/NotificationManager';
import {connect} from 'react-redux';
import banks from "../utils/bank";
import {Sidebar} from "./index";
import { useHistory } from "react-router-dom";
import {front} from "../utils/constants";
import jwt_decode from "jwt-decode";
import "../themify-icons.css";
import "../feather.css";
import "../style1.css";
import "../custom1.css";

function Bank(props) {
    const token1 = "sk_test_fe5d07ae5f83bbc809ec64ada3efb3e9caa1338c";
    const JWT = "Bearer " + token1;
    const [modal, setModal]  = useState(false);
    const [view, setView] = useState("dashboard");
    const [public1, setPublic1] = useState(true);
    const [support, setSupport] = useState(false);
    const [onboard, setOnboard] = useState(null);
    const [error, setError] = useState("");
    const [derror, setDerror] = useState("");
    const [loader, setLoader] = useState(false);
    const [loader1, setLoader1] = useState(false);
    const [button, setButton] = useState(false);
    const [log, setLog] = useState(false);
    const navRef = useRef("");
    const butRef = useRef("");
    let history = useHistory();
    const token = props.user.user.token
    const onboard1 = props.user.user.onboardingStep
    let {firstName, picture, userName, bankName, accName, accNumber, onboardingStep} = props.data.user || "";
    const [name, setName] = useState(accName);
    const [number, setNumber] = useState(accNumber);
    const bankList = Object.entries(banks);

    useEffect( async() => {
        let user = JSON.parse(localStorage.getItem("trend-user"));
        if (user !== null){
            const decoded = jwt_decode(user.token);
            const expirationTime = new Date()/1000;

            if (expirationTime >= decoded.exp){
                user = null;
                props.dispatch({ type: "LOGIN_SUCCESS", payload: null });
                localStorage.removeItem('trend-user');
                NotificationManager.error("Session has expired, please log in again", "Error", 10000);
                history.push("/login")
            }
        }
        const res = await getCallModal(setModal, props.dispatch,token);
        if (res){
            setNumber(res.accNumber);
            setBankCode(res.bankName);
        }
        return () => {
           
        }
    }, [])


    let bank,bankcode
    if (bankList){
        bankList.map((item) => {
            if (item[1] === bankName){
                bank = item[0];
            }
        })
    }
    
    let [bankCode, setBankCode] = useState(bankName);
    let img1 = picture || "images/profile-image.jpg" ;
    const link = `/${userName}`
    const newlink = "trendupp.com" + link


    const setPage = (page) => {
        setView(page);
    }

    const setPostType = (value, bool) => {
        if (value === "public"){
            console.log(value);
            console.log(bool)
            setPublic1(bool)
            setSupport(false)
        }else{
            setSupport(bool)
            setPublic1(false);
        }
    }

    const logout = () => {
        localStorage.removeItem('trend-user');
        props.dispatch({  type: "LOGIN_FAILURE" })
        history.push("/login");
        setLog(true);
    }

    const navChange = () => {
       butRef.current.classList.toggle("active");
       navRef.current.classList.toggle("nav-active");
    }

  
    const verify = async(evt) => {
        evt.preventDefault();

        if (number === ""){
            return NotificationManager.error("Account number cannot be empty", "Error")
        }
       
        const Code = bankCode;
        const accountCode = number;
        setLoader(true);
        setError("");
        fetch(`https://api.paystack.co/bank/resolve?account_number=${accountCode}&bank_code=${Code}`, {
            method: 'GET', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
                authorization: JWT
            },
        }).then(response => response.json())
        .then(data => {
            setLoader(false);
          if (data.status === false){
            setError("Could not resolve account name, check your account number or bank")
        }
         setButton(true);
          setName(data.data.account_name);
        })
        .catch((error) => {
            setLoader(false);
          console.error('Error:', error);
        });
        
        //const link = `https://api.paystack.co/bank/resolve?account_number=${accountCode}&bank_code=${bankCode}`;
        //const res = await axios.get(link);
        //console.log(res);

       
    }

    const submit = async(evt) => {
        evt.preventDefault()
        let cred = {
            accNumber: number,
            accName: name,
            bankName: bankCode,
        }
        const result = await editCall(cred, setLoader, setError, props.dispatch, token);
    }



   
    return (
        <div className="dashboard-page" style={{background: "#f9f9f9"}}>
            <div className="main-wrapper">


        <div className="nav-header border-0" style={{background: "#f9f9f9"}}>
            <div className="nav-top">
                <Link to="/dashboard" className="logo"> <img src="images/trenupp-logo.png" alt="Trendupp Logo"/> </Link>

                <button ref={butRef} onClick={navChange} className="nav-menu me-0 ms-2"></button>
            </div>

        </div>

        <nav ref={navRef} className="navigation scroll-bar">
    <div className="container ps-0 pe-0">
        <div className="nav-content">
            <div className="nav-wrap">
                <div className="top-content">
                    <Link to={link} className="nav-content-profile">
                    <figure class="nav-content-image" 
                     style={{
                        backgroundImage: 'url('+img1+')'
                      }}
                   >
                    <img src="images/profile-image.jpg" class="d-none" alt=""/>
                    </figure>
                   
                        <span>{firstName}</span>
                    </Link>
                    <div class="nav-content-button">
                                <a class="nav-content-button-item" id="dropdownMenu4" data-bs-toggle="dropdown"
                                    aria-expanded="false" href="#"> <i class="feather-plus-circle"></i> Post</a>
                                <div class="dropdown-menu dropdown-menu-start" aria-labelledby="dropdownMenu4">
                                    <div class="card-body p-0 ">
                                        <a class="d-flex" onClick={ (evt) => {
                                                evt.preventDefault()
                                                setPostType("public", true);
                                                 setView("post");
                                        }
                                           
                                        } href="#">
                                            <i class="feather-users"></i>
                                            <h4>Public <span>Post to general viewers of your page</span></h4>
                                        </a>

                                    </div>
                                    <div class="card-body p-0">
                                        <a class="d-flex"  onClick={ (evt) => {
                                                evt.preventDefault();
                                                setPostType("support", true);
                                                setView("post");
                                        }
                                           
                                        } href="#">
                                            <i class="feather-heart"></i>
                                            <h4>Your Supporters <span>Post to only your supporters</span></h4>
                                        </a>

                                    </div>
                                </div>
                            </div>
                </div>
            </div>
           <Sidebar setView={setPage} logout={logout} link={link} />
        </div>
    </div>
</nav>

        <div className="main-content right-chat-active" style={{backgroundColor:"unset"}}>


        <div class="middle-sidebar-bottom" style={{paddingLeft: "20px"}}>
                <div class="middle-sidebar-left">
                    
                    <div class="row">
                        <div class="col-12">
                            
                            <div class="card dash-card dash-card__records dash-card__posts p-5">
                                <Link to="/settings" class="back-btn">
                                <h3 class="card-title mb-3">settings</h3>
                                </Link>
                                
                                
                    <div class="settings-userdetails-section">
                        <h2 class="useronboard-title mt-4 mb-4">Update Bank Account Details</h2>
                        
                        <form class="verifybank-onboard-form mw-400 mx-auto" action="dashboard.html" method="GET">

                        

                        <div className="row">
                                    <div className="col-12 mb-2">
                                        <div className="form-group">
                                            
                                            <select name="" id=""  className="form-control form-select style2-input">
                                            <option value={bankName}>{bank}</option>
                                                {
                                                    Object.entries(banks).map((item) => {
                                                        return <option onChange={() => setBankCode(item[1])}  value={item[1]}>{item[0]}</option>
                                                    })
                                                }
                                               
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-12 mb-2">
                                        <div className="form-group">
                                            <input type="text" value={number} onChange={(evt) => setNumber(evt.target.value)}  className="form-control style2-input" placeholder="Account Number"/>
                                        </div>
                                    </div>
                                </div>
                                <div className={ error.length > 0 ? "alert alert-danger" : "none" }>
                                <div >{error}</div>
                                </div>
                                <div className={ loader === true ? "loader" : "none"}>
                                    <div >Loading...</div>
                                </div>
                                {
                                    button === false ? ( <div class="row">
    
                                    <div class="col-lg-12">
        
                                        <button type="submit" onClick={verify}
                                            class="form-control style2-input style2-main-button">Verify Account</button>
                                    </div>
                                </div>) : null
                                }
                           
    
                            {
                                button ? (<div class="row">
    
                                <div class="col-lg-12">
                                    <label class="mb-2">Account Name</label>
                                    <h2 class="mb-4">{name}</h2>
                                    <button type="submit" onClick={submit}
                                        class="form-control style2-input style2-main-button">Confirm Account Details</button>
                                </div>
                            </div>) : null
                            }
                            


                        </form>
                    </div>
                            

                                


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
  
  export default connect(mapStateToProps)(Bank);