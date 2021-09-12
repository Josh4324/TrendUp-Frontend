import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { getCallModal, onboard2ImageCall, editCall } from "../utils/apiCalls";
import { connect } from "react-redux";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { NotificationManager } from "react-notifications";
import { Sidebar } from "./index";
import { useHistory } from "react-router-dom";
import Post from "../components/Post";
import { front } from "../utils/constants";
import jwt_decode from "jwt-decode";
import "../themify-icons.css";
import "../feather.css";
import "../style1.css";
import "../custom1.css";

function Details(props) {
  const {
    firstName,
    lastName,
    websiteUrl,
    facebookLink,
    phoneNumber,
    twitterLink,
    instagramLink,
    youtubeLink,
    brandName,
    picture,
    creating,
    about,
    userName,
    onboardingStep
  } = props.data.user || "";
  const [modal, setModal] = useState(false);
  const [loader, setLoader] = useState(false);
  const [view, setView] = useState("dashboard");
  const [public1, setPublic1] = useState(true);
  const [support, setSupport] = useState(false);
  const [onboard, setOnboard] = useState(null);
  const [loader1, setLoader1] = useState(false);
  const [error, setError] = useState("");
  const [log, setLog] = useState(false);
  const [brand, setBrand] = useState(brandName);
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
  const navRef = useRef("");
  const butRef = useRef("");

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

  let history = useHistory();
  const token = props.user.user.token;
  const onboard1 = props.user.user.onboardingStep;

  let img1 = picture || "images/profile-image.jpg";
  const link = `/${userName}`;
  const newlink = "trendupp.com" + link;
  let imageRef = useRef("");

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

  const setPage = (page) => {
    setView(page);
  };

  const setPostType = (value, bool) => {
    if (value === "public") {
      console.log(value);
      console.log(bool);
      setPublic1(bool);
      setSupport(false);
    } else {
      setSupport(bool);
      setPublic1(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("trend-user");
    props.dispatch({ type: "LOGIN_FAILURE" });
    history.push("/login");
    setLog(true);
  };

  const navChange = () => {
    butRef.current.classList.toggle("active");
    navRef.current.classList.toggle("nav-active");
  };

  const submit = async (evt) => {
    evt.preventDefault();

    let cred = {
      brandName: brand,
      firstName: firstname,
      lastName: lastname,
      websiteUrl: website,
      phoneNumber: number,
      about: About,
      facebookLink: facebook,
      twitterLink: twitter,
      instagramLink: instagram,
      youtubeLink: youtube,
      creating: created
    };

    if (!brand || !firstname || !lastname || !number || !About) {
      let fields = "";
      if (!brand) {
        fields = fields + " " + "brand";
      }
      if (!firstname) {
        fields = fields + " " + "firstname";
      }
      if (!lastname) {
        fields = fields + " " + "lastname";
      }
      if (!number) {
        fields = fields + " " + "number";
      }
      if (!About) {
        fields = fields + " " + "about";
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

  return (
    <div className="dashboard-page" style={{ background: "#f9f9f9" }}>
      <div className="main-wrapper">
        <div className="nav-header border-0" style={{ background: "#f9f9f9" }}>
          <div className="nav-top">
            <Link to="/dashboard" className="logo">
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

        <nav ref={navRef} className="navigation scroll-bar">
          <div className="container ps-0 pe-0">
            <div className="nav-content">
              <div className="nav-wrap">
                <div className="top-content">
                  <Link to={link} className="nav-content-profile">
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

                    <span>{brandName}</span>
                  </Link>
                  <div class="nav-content-button">
                    <a
                      class="nav-content-button-item"
                      id="dropdownMenu4"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      href="#"
                    >
                      {" "}
                      <i class="feather-plus-circle"></i> Post
                    </a>
                    <div
                      class="dropdown-menu dropdown-menu-start"
                      aria-labelledby="dropdownMenu4"
                    >
                      <div class="card-body p-0 ">
                        <a
                          class="d-flex"
                          onClick={(evt) => {
                            evt.preventDefault();
                            setPostType("public", true);
                            setView("post");
                          }}
                          href="#"
                        >
                          <i class="feather-users"></i>
                          <h4>
                            Public{" "}
                            <span>Post to general viewers of your page</span>
                          </h4>
                        </a>
                      </div>
                      <div class="card-body p-0">
                        <a
                          class="d-flex"
                          onClick={(evt) => {
                            evt.preventDefault();
                            setPostType("support", true);
                            setView("post");
                          }}
                          href="#"
                        >
                          <i class="feather-heart"></i>
                          <h4>
                            Your Supporters{" "}
                            <span>Post to only your supporters</span>
                          </h4>
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

        <div
          className="main-content right-chat-active"
          style={{ backgroundColor: "unset" }}
        >
          {view === "post" ? (
            <Post
              public1={public1}
              support={support}
              setPostType={setPostType}
            />
          ) : (
            <div class="middle-sidebar-bottom" style={{ paddingLeft: "20px" }}>
              <div class="middle-sidebar-left">
                <div class="row">
                  <div class="col-12">
                    <div class="card dash-card dash-card__records dash-card__posts p-5">
                      <Link to="/settings" class="back-btn">
                        <h3 class="card-title mb-3">settings</h3>
                      </Link>

                      <div class="settings-userdetails-section">
                        <h2 class="useronboard-title mt-4 mb-4">
                          Update User Details
                        </h2>

                        <form class="userdetails-onboard-form">
                          <div class="form-group upload-input mb-4">
                            <input
                              type="file"
                              ref={imageRef}
                              onChange={imageSubmit}
                              name="file"
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
                            <div class="col-lg-12 mb-2">
                              <div class="form-group">
                                <input
                                  type="text"
                                  onChange={(evt) => setBrand(evt.target.value)}
                                  value={brand}
                                  class="form-control style2-input"
                                  placeholder="Brand Name"
                                />
                              </div>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-md-6 mb-2">
                              <div class="form-group">
                                <input
                                  type="text"
                                  required
                                  onChange={(evt) =>
                                    setFirstname(evt.target.value)
                                  }
                                  value={firstname}
                                  class="form-control style2-input"
                                  placeholder="First Name"
                                />
                              </div>
                            </div>

                            <div class="col-md-6 mb-2">
                              <div class="form-group">
                                <input
                                  type="text"
                                  required
                                  onChange={(evt) =>
                                    setLastname(evt.target.value)
                                  }
                                  value={lastname}
                                  class="form-control style2-input"
                                  placeholder="Last Name"
                                />
                              </div>
                            </div>
                          </div>

                          <div class="row">
                            <div class="col-lg-12 mb-2">
                              <div class="form-group">
                                <input
                                  type="text"
                                  required
                                  value={number}
                                  onChange={(evt) =>
                                    setNumber(evt.target.value)
                                  }
                                  class="form-control style2-input"
                                  pattern="[0-9]+"
                                  title="Only numbers are allowed"
                                  placeholder="Phone Number"
                                />
                              </div>
                            </div>
                          </div>

                          <div class="row">
                            <div class="col-lg-12 mb-2">
                              <div class="form-group">
                                <label class="mb-2">
                                  What are you creating?
                                </label>
                                <input
                                  type="text"
                                  required
                                  onChange={(evt) =>
                                    setCreated(evt.target.value)
                                  }
                                  value={created}
                                  class="form-control style2-input"
                                  placeholder="creating piano music, building Coronarelief.org, posting a new art everyday"
                                />
                              </div>
                            </div>
                          </div>

                          <div class="row">
                            <div class="col-lg-12 mb-3">
                              <label class="mb-2">About me</label>
                              <textarea
                                class="form-control mb-0 p-3 h100 bg-greylight lh-16"
                                rows="5"
                                required
                                value={About}
                                onChange={(evt) => setAbout(evt.target.value)}
                                placeholder="Hey 👋 I just created a page here. You can now buy me a coffee!"
                                spellcheck="false"
                              ></textarea>
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
                                  onChange={(evt) =>
                                    setTwitter(evt.target.value)
                                  }
                                  value={twitter}
                                  placeholder="username"
                                />
                                <span class="social-platform-input-text">
                                  @
                                </span>
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
                                  onChange={(evt) =>
                                    setInstagram(evt.target.value)
                                  }
                                  value={instagram}
                                  placeholder="username"
                                />
                                <span class="social-platform-input-text">
                                  @
                                </span>
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
                                  onChange={(evt) =>
                                    setYoutube(evt.target.value)
                                  }
                                  value={youtube}
                                  placeholder="username"
                                />
                                <span class="social-platform-input-text">
                                  @
                                </span>
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
                                  onChange={(evt) =>
                                    setFacebook(evt.target.value)
                                  }
                                  value={facebook}
                                  placeholder="username"
                                />
                                <span class="social-platform-input-text">
                                  @
                                </span>
                              </div>
                            </div>
                            <div class="col-12 mb-2">
                              <div class="form-group form-group-icon social-platform-input">
                                <span class="input-icon">
                                  <img
                                    src={`${front}/images/globe.svg`}
                                    alt=""
                                  />
                                </span>
                                <input
                                  type="text"
                                  class="form-control style2-input"
                                  onChange={(evt) =>
                                    setWebsite(evt.target.value)
                                  }
                                  value={website}
                                  placeholder="website url"
                                />
                              </div>
                            </div>
                          </div>

                          <div
                            className={
                              error.length > 0 ? "alert alert-danger" : "none"
                            }
                          >
                            <div>{error}</div>
                          </div>
                          <div className={loader === true ? "loader" : "none"}>
                            <div>Loading...</div>
                          </div>

                          <div class="row">
                            <div class="col-lg-12">
                              <button
                                type="submit"
                                onClick={submit}
                                class="form-control style2-input style2-main-button"
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
          )}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    user: state.auth,
    data: state.user
  };
};

export default connect(mapStateToProps)(Details);
