import React, { useState, useRef } from "react";
import { postCall } from "../utils/apiCalls";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

function Post(props) {
  const titleRef = useRef("");
  const messageRef = useRef("");
  const imageRef = useRef("");
  const [loader, setLoader] = useState(false);
  const [name, setName] = useState("");
  const token = props.user.user.token;
  let history = useHistory();
  const setImage = () => {
    setName(imageRef.current.files[0].name);
  };

  const onPost = async (evt) => {
    evt.preventDefault();
    let postType;
    if (props.public1 === true) {
      postType = "public";
    } else if (props.support === true) {
      postType = "supporter";
    }

    let formData;
    if (!imageRef.current.files[0]) {
      formData = {
        title: titleRef.current.value,
        message: messageRef.current.value,
        postType: postType,
      };
    } else {
      formData = new FormData();

      formData.append("title", titleRef.current.value);
      formData.append("message", messageRef.current.value);
      formData.append("postType", postType);
      formData.append("image", imageRef.current.files[0]);
    }

    const result = await postCall(formData, setLoader, token, history);
  };

  return (
    <div>
      <div class="middle-sidebar-bottom" style={{ paddingLeft: "20px" }}>
        <div class="middle-sidebar-left">
          <div class="row">
            <div class="col-12">
              <div class="card dash-card">
                <h3 class="card-title mb-3">ADD POST</h3>
                <form class="dashboard-postadd-form">
                  <div class="row">
                    <div class="col-6 mb-3 pe-1">
                      <div class="post-type-wrapper radio-circle-wrapper">
                        <input
                          type="radio"
                          name="post-type"
                          value="public"
                          class="post-type-radio radio-circle-input"
                          onClick={() => props.setPostType("public", true)}
                          checked={props.public1}
                          id="post-type_onetime"
                        />
                        <label
                          for="post-type_onetime"
                          class="post-type radio-circle-label"
                        >
                          {" "}
                          Public{" "}
                          <span>
                            Visible to all your followers and the public
                          </span>
                        </label>
                      </div>
                    </div>
                    <div class="col-6 mb-3 ps-1">
                      <div class="post-type-wrapper radio-circle-wrapper">
                        <input
                          type="radio"
                          name="post-type"
                          value="supporter"
                          class="post-type-radio radio-circle-input"
                          onClick={() => props.setPostType("support", true)}
                          checked={props.support}
                          id="post-type_monthly"
                        />
                        <label
                          for="post-type_monthly"
                          class="post-type radio-circle-label"
                        >
                          {" "}
                          Your Supporters{" "}
                          <span>Visible to only your supporters</span>
                        </label>
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
                        <input
                          type="text"
                          ref={titleRef}
                          class="form-control style2-input"
                          placeholder=""
                        />
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-lg-12 mb-3">
                      <label class="mb-2">Message</label>
                      <textarea
                        ref={messageRef}
                        class="form-control mb-0 h-400"
                      ></textarea>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-12 col-md-4">
                      <div class="form-group upload-input mb-4">
                        <input
                          type="file"
                          ref={imageRef}
                          onChange={setImage}
                          name="file"
                          id="file"
                          class="input-file"
                        />
                        <label
                          for="file"
                          class="rounded-3 text-center bg-white btn-tertiary js-labelFile p-4 w-100 border-dashed"
                        >
                          {name === "" ? (
                            <div>
                              <i class="ti-camera large-icon me-3 d-block"></i>
                              <span class="js-fileName">
                                Upload featured Image
                              </span>
                            </div>
                          ) : (
                            name
                          )}
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className={loader === true ? "loader" : "none"}>
                    <div>Loading...</div>
                  </div>

                  <div class="row">
                    <div class="col-lg-12">
                      <button
                        type="submit"
                        onClick={onPost}
                        class="form-control style2-input style2-main-button"
                      >
                        Publish
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.auth,
  };
};

export default connect(mapStateToProps)(Post);
