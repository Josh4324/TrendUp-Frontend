import React from 'react'

export default function Post(props) {
    return (
        <div>
                 <div class="middle-sidebar-bottom">
                <div class="middle-sidebar-left">
                    
                    <div class="row">
                        <div class="col-12">
                            <div class="card dash-card">
                                <h3 class="card-title mb-3">ADD POST</h3>
                                <form class="dashboard-postadd-form">
                                    <div class="row">
                                        <div class="col-6 mb-3 pe-1">
                                            <div class="post-type-wrapper radio-circle-wrapper">
                                            <input type="radio" name="post-type" value="one-time" class="post-type-radio radio-circle-input" checked={props.public1} id="post-type_onetime"/>
                                            <label for="post-type_onetime" class="post-type radio-circle-label"> Public <span>Visible to all your followers and the public</span></label>
                                            </div>
                                            
                                        </div>
                                        <div class="col-6 mb-3 ps-1">
                                            
                                            <div class="post-type-wrapper radio-circle-wrapper">
                                            <input type="radio" name="post-type" value="monthly" class="post-type-radio radio-circle-input" checked={props.support} id="post-type_monthly"/>
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
                                                <input type="text" class="form-control style2-input" placeholder=""/>
                                            </div>
                                        </div>
                                    </div>
                                    
            
            
                                    <div class="row">
            
                                        <div class="col-lg-12 mb-3">
                                            <label class="mb-2">Message</label>
                                            <textarea class="form-control mb-0 h-400"></textarea>
                                        </div>
            
                                    </div>

                                    <div class="row">
                                        <div class="col-12 col-md-4">
                                            
                                    <div class="form-group upload-input mb-4">
                                        <input type="file" name="file" id="file" class="input-file"/>
                                        <label for="file"
                                            class="rounded-3 text-center bg-white btn-tertiary js-labelFile p-4 w-100 border-dashed">
                                            <i class="ti-camera large-icon me-3 d-block"></i>
                                            <span class="js-fileName">Upload featured Image</span>
                                        </label>
                                    </div>
                                        </div>
                                    </div>
                                    
            
            
                                    <div class="row">
            
                                        <div class="col-lg-12">
            
                                            <button type="submit"
                                                class="form-control style2-input style2-main-button">Publish</button>
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
