import React, {useState, useRef} from 'react';
import {postCall, editPostCall} from '../utils/apiCalls';
import {connect} from 'react-redux';
import { useHistory } from "react-router-dom";

function EditPost(props) {
    const titleRef = useRef("");
    const messageRef = useRef("");
    const imageRef = useRef("");
    const [loader, setLoader] = useState(false);
    const [name, setName] = useState("");
    let {title, message, image, id} = props.postData || '';
    const [title1, setTitle1] = useState(title)
    const [message1, setMessage1] = useState(message);
    const token = props.user.user.token
    
    let history = useHistory();
    const setImage = () => {

        setName(imageRef.current.files[0].name)
    }

    const editPost = async(evt) => {
        evt.preventDefault();

        const cred = {
            title: title1,
            message: message1
        }
       
        
        const result = await editPostCall(cred, id, token, history);
        
    }
    return (
        <div>
                 <div class="middle-sidebar-bottom" style={{paddingLeft: "20px"}}>
                <div class="middle-sidebar-left">
                    
                    <div class="row">
                        <div class="col-12">
                            <div class="card dash-card">
                                <h3 class="card-title mb-3">ADD POST</h3>
                                <form class="dashboard-postadd-form">
                                    <div class="row">
                                        <div class="col-6 mb-3 pe-1">
                                            <div class="post-type-wrapper radio-circle-wrapper">
                                            <input type="radio" name="post-type" value="public" class="post-type-radio radio-circle-input" checked={props.public1} id="post-type_onetime"/>
                                            <label for="post-type_onetime" class="post-type radio-circle-label"> Public <span>Visible to all your followers and the public</span></label>
                                            </div>
                                            
                                        </div>
                                        <div class="col-6 mb-3 ps-1">
                                            
                                            <div class="post-type-wrapper radio-circle-wrapper">
                                            <input type="radio" name="post-type" value="supporter" class="post-type-radio radio-circle-input" checked={props.support} id="post-type_monthly"/>
                                            <label for="post-type_monthly" class="post-type radio-circle-label"> Your Supporters <span>Visible to only your supporters</span></label>
                                            </div>
                                            
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-6 mb-2">
                                            <label class="">Title</label>
                                        </div>
                                    </div>
            
                                    <div class="row">
                                        <div class="col-lg-12 mb-2">
                                            <div class="form-group">
                                                <input type="text" value={title1} onChange={(evt) => setTitle1(evt.target.value)} ref={titleRef} class="form-control style2-input" placeholder=""/>
                                            </div>
                                        </div>
                                    </div>
                                    
            
            
                                    <div class="row">
            
                                        <div class="col-lg-12 mb-3">
                                            <label class="mb-2">Message</label>
                                            <textarea value={message1}  onChange={(evt) => setMessage1(evt.target.value)} ref={messageRef} class="form-control mb-0 h-400"></textarea>
                                        </div>
            
                                    </div>
                                    
                                    
                                   
                                    <div className={ loader === true ? "loader" : "none"}>
                                        <div >Loading...</div>
                                    </div>
                                    
                                    <div class="row">
            
                                        <div class="col-lg-12">
            
                                            <button type="submit" onClick={editPost}
                                                class="form-control style2-input style2-main-button">Edit Post</button>
                                        </div>
                                    </div>
                                </form>


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
    }
  }
  
  export default connect(mapStateToProps)(EditPost);
