import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {getHistory,} from '../utils/apiCalls';

function SupportHistory(props) {
    console.log(props)
    const [supporters, setSupporters] = useState([]);
    const [supportersNum, setSupportersNum] = useState(0);
    const [picture, setPicture] = useState("");
    const [history, setHistory] = useState([]);
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    let img1 = "" || "images/profile-image.jpg";

    useEffect(async() => {
        const result = await getHistory(props.token, props.email.email);
        console.log(result)
        setHistory(result?.history);
        setPicture(result?.user?.picture);
        setFirstName(result?.user?.firstName);
        setLastName(result?.user?.lastName);
        return () => {
           
        }
    }, [])
    
    return (
        <div>
              <div class="">

<div class="middle-sidebar-bottom" style={{paddingLeft: "20px"}}>
    <div class="middle-sidebar-left">
    <div class="row">
                        <div class="col-md-4">
                            <div class="card dash-card p-0 mb-3 border-0 bg-none shadow-none">
                                <div class="card-body d-flex align-items-center p-0">
                                   
                                    <figure class="nav-content-image me-3" 
                                        style={{
                                            backgroundImage: 'url('+img1+')'
                                        }}
                                        >
                                    <img src="images/profile-image.jpg" class="d-none" alt=""/>
                                 </figure>
                   
                                    
                                    <h4 class="font-xs fw-700">{firstname} {lastname}<span
                                            class="fw-500 mt-0 d-block text-grey-500 font-xsss">{props?.email?.email}</span></h4>
                                </div>
                            </div>
                        </div>
                    </div>
       
        <div class="row">
            <div class="col-12">
                <div class="card dash-card dash-card__records dash-card__supporters">
                    <h3 class="card-title mb-3">SUPPORTERS</h3>

                    {
                                    history.map((item) => {
                                        return (
                                            <div class="single-record-row d-flex">
                                        <div class="row supporters-row">
                                            <div class="col-sm-5">
                                                <h4 class="post-single_title">₦{item.amount}</h4>
                                            </div>
                                            
                                            <div class="col-sm-4"> <span
                                                class="post-single_date">
                                                Jun 10, 2021 at 02:12 PM</span></div>
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
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.auth,
        data: state.user,
        email: state.email
    }
  }
  
  export default connect(mapStateToProps)(SupportHistory);