import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import FanSidebar from "./FanSideBar";
import { getCallModal, onboard2ImageCall, editCall } from "../utils/apiCalls";
import jwt_decode from "jwt-decode";
import { NotificationManager } from "react-notifications";
import { connect } from "react-redux";
import { front } from "../utils/constants";
import { useHistory } from "react-router-dom";

function FanDetail(props) {
  const {
    firstName,
    lastName,
    picture,
    email,
    userName,
    onboardingStep,
    websiteUrl,
    facebookLink,
    phoneNumber,
    twitterLink,
    instagramLink,
    youtubeLink,
    brandName,
    creating,
    about
  } = props.data.user || "";
  let img1 = picture || "images/profile-image.jpg";
  let history = useHistory();
  const token = props.user.user.token;
  const navRef = useRef("");
  const butRef = useRef("");
  const [brand, setBrand] = useState(brandName);
  const [error, setError] = useState("");
  const [loader1, setLoader1] = useState(false);
  const [loader, setLoader] = useState(false);
  const [firstname, setFirstname] = useState(firstName);
  const [lastname, setLastname] = useState(lastName);
  const [website, setWebsite] = useState(websiteUrl);
  const [created, setCreated] = useState(creating);
  const [About, setAbout] = useState(about);
  const [facebook, setFacebook] = useState(facebookLink);
  const [twitter, setTwitter] = useState(twitterLink);
  const [instagram, setInstagram] = useState(instagramLink);
  const [youtube, setYoutube] = useState(youtubeLink);
  const [number, setNumber] = useState(phoneNumber);
  const [image, setImage] = useState(picture);
  const [modal, setModal] = useState(false);
  const imageRef = useRef("");

  const navChange = () => {
    butRef.current.classList.toggle("active");
    navRef.current.classList.toggle("nav-active");
  };

  const imageSubmit = async (evt) => {
    evt.preventDefault();

    const file = imageRef.current.files[0];

    let formData = new FormData();
    formData.append("picture", file);

    const result = await onboard2ImageCall(
      formData,
      setLoader1,
      token,
      setImage
    );
  };

  const submit = async (evt) => {
    evt.preventDefault();

    let cred = {
      firstName: firstname,
      lastName: lastname,
      about: About,
      facebookLink: facebook,
      twitterLink: twitter,
      instagramLink: instagram,
      youtubeLink: youtube,
      creating: created
    };

    if (!firstname || !lastname) {
      let fields = "";
      if (!firstname) {
        fields = fields + " " + "firstname";
      }
      if (!lastname) {
        fields = fields + " " + "lastname";
      }

      fields = "Please fill the following fields" + fields;

      return NotificationManager.error(fields, "Error");
    }
    const result = await editCall(
      cred,
      setLoader,
      setError,
      props.dispatch,
      token
    );
  };

  useEffect(async () => {
    let user = JSON.parse(localStorage.getItem("trend-user"));
    if (user !== null) {
      const decoded = jwt_decode(user.token);
      const expirationTime = new Date() / 1000;

      if (expirationTime >= decoded.exp) {
        user = null;
        props.dispatch({ type: "LOGIN_SUCCESS", payload: null });
        localStorage.removeItem("trend-user");
        NotificationManager.error(
          "Session has expired, please log in again",
          "Error",
          10000
        );
        history.push("/login");
      }
    }
    const res = await getCallModal(setModal, props.dispatch, token);
    if (res) {
      setFirstname(res.firstName);
      setLastname(res.lastName);
      setWebsite(res.websiteUrl);
      setBrand(res.brandName);
      setCreated(res.creating);
      setAbout(res.about);
      setImage(res.picture);
      setFacebook(res.facebookLink);
      setInstagram(res.instagramLink);
      setTwitter(res.twitterLink);
      setYoutube(res.youtubeLink);
      setNumber(res.phoneNumber);
    }
    return () => {};
  }, []);

  return (
    <div className="dashboard-page" style={{ background: "#f9f9f9" }}>
      <div class="main-wrapper">
        <div className="nav-header border-0" style={{ background: "#f9f9f9" }}>
          <div className="nav-top">
            <Link to="/fan-dashboard" className="logo">
              {" "}
              <img
                src={`${front}/images/trenupp-logo.png`}
                alt="Trendupp Logo"
              />{" "}
            </Link>

            <button
              ref={butRef}
              onClick={navChange}
              className="nav-menu me-0 ms-2"
            ></button>
          </div>
        </div>

        <nav ref={navRef} class="navigation scroll-bar">
          <div class="container ps-0 pe-0">
            <div class="nav-content">
              <div class="nav-wrap">
                <div class="top-content">
                  <Link to="/fan-dashboard" class="nav-content-profile">
                    <figure
                      class="nav-content-image"
                      style={{
                        backgroundImage: "url(" + img1 + ")"
                      }}
                    >
                      <img
                        src="images/profile-image.jpg"
                        class="d-none"
                        alt=""
                      />
                    </figure>
                    <span>
                      {firstName} {lastName}
                    </span>
                  </Link>
                </div>
              </div>

              <FanSidebar />
            </div>
          </div>
        </nav>

        <div class="main-content">
          <div class="middle-sidebar-bottom">
            <div class="middle-sidebar-left">
              <div class="row">
                <div class="col-md-9">
                  <div class="card dash-card dash-card__records dash-card__posts p-5">
                    <Link to="/fan-settings" class="">
                      <h3 class="card-title mb-3">
                        <i class="feather-arrow-left"></i> settings
                      </h3>
                    </Link>

                    <div class="settings-userdetails-section">
                      <h2 class="useronboard-title mt-4 mb-4">
                        Update User Details
                      </h2>

                      <form
                        class="userdetails-onboard-form"
                        action="user_onboard3.html"
                        method="GET"
                      >
                        <div class="form-group upload-input mb-4">
                          <input
                            type="file"
                            name="file"
                            ref={imageRef}
                            onChange={imageSubmit}
                            id="file"
                            class="input-file"
                          />
                          <label
                            for="file"
                            class="rounded-3 text-center bg-white btn-tertiary js-labelFile p-4 w-100 border-dashed"
                          >
                            {image ? (
                              <figure
                                class="nav-content-image pic"
                                style={{
                                  backgroundImage: "url(" + image + ")",
                                  marginLeft: "auto",
                                  marginRight: "auto",
                                  width: "100px",
                                  height: "100px"
                                }}
                              ></figure>
                            ) : (
                              <div>
                                <i class="ti-camera large-icon me-3 d-block"></i>
                                <span class="js-fileName">
                                  Upload profile picture
                                </span>
                              </div>
                            )}
                          </label>
                        </div>

                        <div className={loader1 === true ? "loader" : "none"}>
                          <div>Loading...</div>
                        </div>

                        <div class="row">
                          <div class="col-lg-6 mb-2">
                            <label class="">Basic Information</label>
                          </div>
                        </div>

                        <div class="row">
                          <div class="col-md-6 mb-2">
                            <div class="form-group">
                              <input
                                type="text"
                                value={firstname}
                                onChange={(evt) =>
                                  setFirstname(evt.target.value)
                                }
                                class="form-control style2-input"
                                placeholder="First Name"
                              />
                            </div>
                          </div>

                          <div class="col-md-6 mb-2">
                            <div class="form-group">
                              <input
                                type="text"
                                class="form-control style2-input"
                                placeholder="Last Name"
                                onChange={(evt) =>
                                  setLastname(evt.target.value)
                                }
                                value={lastname}
                              />
                            </div>
                          </div>
                        </div>

                        <div class="row">
                          <div class="col-12">
                            <label class="mb-">Social Platforms</label>
                            <p class="text-grey-600 font-xssss mb-2">
                              Enter the username of the social media platforms
                              you are on
                            </p>
                          </div>
                          <div class="col-12 mb-2">
                            <div class="form-group form-group-icon social-platform-input">
                              <span class="input-icon">
                                <img
                                  src={`${front}/images/icon-twitter.svg`}
                                  alt=""
                                />
                              </span>
                              <input
                                type="text"
                                class="form-control style2-input"
                                placeholder="username"
                                value={twitter}
                                onChange={(evt) => setTwitter(evt.target.value)}
                              />
                              <span class="social-platform-input-text">@</span>
                            </div>
                          </div>
                          <div class="col-12 mb-2">
                            <div class="form-group form-group-icon social-platform-input">
                              <span class="input-icon">
                                <img
                                  src={`${front}/images/Instagram_AppIcon_Aug2017.png`}
                                  alt=""
                                />
                              </span>
                              <input
                                type="text"
                                class="form-control style2-input"
                                placeholder="username"
                                value={instagram}
                                onChange={(evt) =>
                                  setInstagram(evt.target.value)
                                }
                              />
                              <span class="social-platform-input-text">@</span>
                            </div>
                          </div>
                          <div class="col-12 mb-2">
                            <div class="form-group form-group-icon social-platform-input">
                              <span class="input-icon">
                                <img
                                  src={`${front}/images/icon-youtube.svg`}
                                  alt=""
                                />
                              </span>
                              <input
                                type="text"
                                class="form-control style2-input"
                                placeholder="username"
                                value={youtube}
                                onChange={(evt) => setYoutube(evt.target.value)}
                              />
                              <span class="social-platform-input-text">@</span>
                            </div>
                          </div>
                          <div class="col-12 mb-2">
                            <div class="form-group form-group-icon social-platform-input">
                              <span class="input-icon">
                                <img
                                  src={`${front}/images/icon-facebook.svg`}
                                  alt=""
                                />
                              </span>
                              <input
                                type="text"
                                class="form-control style2-input"
                                placeholder="username"
                                value={facebook}
                                onChange={(evt) =>
                                  setFacebook(evt.target.value)
                                }
                              />
                              <span class="social-platform-input-text">@</span>
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
                              class="form-control style2-input style2-main-button"
                              onClick={submit}
                            >
                              Update User Details
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
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.auth,
    data: state.user
  };
};

export default connect(mapStateToProps)(FanDetail);
