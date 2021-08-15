import React, { useState, useRef, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import {
  getPostAndUser,
  getCall2,
  getPost2,
  Pay2,
  anonSignupCall,
  initializePaymentCall,
  verifyPaymentCall,
} from "../utils/apiCalls";
import { useHistory } from "react-router-dom";
import { front } from "../utils/constants";
import NotificationManager from "react-notifications/lib/NotificationManager";

function CreatorPostPage(props) {
  let history = useHistory();
  let userEmail = localStorage.getItem("trend-fan-email") || "";
  let first = localStorage.getItem("trend-fan-firstname") || "";
  let last = localStorage.getItem("trend-fan-lastname") || "";
  const [post, setPost] = useState({});
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [modal, setmodal] = useState(false);
  const [payment, setPayment] = useState(false);
  const [amount, setAmount] = useState(0);
  const [option, setOption] = useState("One-Time");
  const [firstname, setFirstName] = useState(first);
  const [lastname, setLastName] = useState(last);
  const [email, setEmail] = useState(userEmail);
  const [reference, setReference] = useState("");
  const [payment_plan, setPaymentPlan] = useState("");
  const [userData, setUserData] = useState({});
  const [userPost, setUserPost] = useState([]);
  const [message, setMessage] = useState("");
  const [button, setButton] = useState(false);
  const messageRef = useRef("");
  const emailRef = useRef("");
  const firstNameRef = useRef("");
  const lastNameRef = useRef("");
  const radioRef1 = useRef("");
  const radioRef2 = useRef("");
  const radioRef3 = useRef("");
  const radioRef4 = useRef("");
  const InputRef5 = useRef("");
  const AmountRadio1 = useRef("");
  const AmountRadio2 = useRef("");
  const {
    firstName,
    id,
    lastName,
    picture,
    creating,
    about,
    userName,
    brandName,
    facebookLink,
    twitterLink,
    instagramLink,
    youtubeLink,
    websiteUrl,
  } = user || "";

  const creatorEmail = user.email;

  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  const onModal = () => {
    setmodal(!modal);
    if (payment === true) {
      setPayment(false);
    }
  };

  const onOption = (value) => {
    setOption(value);
  };

  const onAmount = (value) => {
    setAmount(value);
  };

  const onPayStep = (evt) => {
    if (amount === 0) {
      return NotificationManager.error("Amount cannot be empty", "Error");
    }

    evt.preventDefault();
    setPayment(true);
  };

  const onPay = async (evt) => {
    localStorage.removeItem("new_trend_user");
    localStorage.removeItem("trend-creator");
    if (email === "" || firstname === "" || lastname === "") {
      return NotificationManager.error(
        "Email or FirstName or LastName cannot be empty",
        "Error"
      );
    }
    evt.preventDefault();
    setButton(true);
    let cred = {
      amount,
      payment_plan: option,
      creatorId: id,
      email,
      firstName: firstname,
      lastName: lastname,
      message,
    };

    let payment = await initializePaymentCall(cred);
    if (payment) {
      window.FlutterwaveCheckout({
        public_key: "FLWPUBK_TEST-d0b3befc83b20f52316dc9176b5f412a-X",
        tx_ref: payment.data.data.reference,
        amount,
        redirect_url: `${front}/#/success`,
        currency: "NGN",
        payment_options: "card",
        // specified redirect URL
        redirect_url: "",
        customer: {
          email: email,
          phonenumber: "",
          name: firstname + " " + lastname,
        },
        callback: async function (data) {
          let cred = {
            txref: data.tx_ref,
            SECKEY: "FLWSECK_TEST-ff7d39867a3cc21da33e8dfcb7bf94c6-X",
          };
          let result = await Pay2(cred);

          if (result.data.status === "success") {
            let cred = {
              status: "approved",
              reference: data.tx_ref,
              creatorEmail
            };
            let userCred = {
              email,
              firstName: firstname,
              lastName: lastname,
              onboardingStep: 1,
            };
            let createdUser = await anonSignupCall(userCred);
            if (createdUser?.data?.data) {
              localStorage.setItem("new_trend_user", "new");
            }
            let payment = await verifyPaymentCall(cred);
            if (payment) {
              localStorage.setItem("trend-creator", userName);
              history.push("/success");
              window.location.reload(true);
            }
          }
        },
        onclose: function () {
          // close modal
          history.push(`/${userName}`);
          window.location.reload(true);
        },
        customizations: {
          title: "TrendUpp",
          description: "Connecting Creators to Fans",
          logo: "https://res.cloudinary.com/josh4324/image/upload/v1625061582/trendupp-logo-icon_wzh6da.png",
        },
      });
    }
  };

  useEffect(async () => {
    let postId = props.match.params.id;
    let data = await getPostAndUser(postId);
    if (data.post) {
      setLoading(false);
      setPost(data.post);
      setUser(data.user);
    }
    return () => {};
  }, []);
  return (
    <div className="creator-page">
      <div class="main-wrapper">
        <div class="main-content pt-0">
          <div class="nav-header border-0">
            <div class="nav-top">
              <Link to="/" class="logo">
                {" "}
                <img src="images/trendupp-logo-icon.png" alt="Trendupp Logo" />
              </Link>
            </div>
          </div>
          {loading ? (
            <div className="loader">
              <div>Loading...</div>
            </div>
          ) : null}

          {loading === false ? (
            <div class="middle-sidebar-bottom">
              <div class="middle-sidebar-left">
                <div class="row">
                  <div class="col-md-9 mx-auto">
                    <a href={`#/${userName}`} class="">
                      <h3 class="card-title mb-3">
                        <i class="feather-arrow-left"></i> {brandName}'s Page
                      </h3>
                    </a>
                    <div class="card card-creator mb-3">
                      <div class="card-body card-creator-meta">
                        <figure
                          class="avatar me-3"
                          style={{
                            backgroundImage: "url(" + picture + ")",
                          }}
                        >
                          <img src="images/profile.jpg" alt="" />
                        </figure>
                        <h4 class="card-creator-meta--author">
                          {brandName}
                          <span class="card-creator-meta--date">
                            {new Date(post.createdAt).toDateString()}
                          </span>
                        </h4>
                      </div>
                      <div class="card-body card-creator-image">
                        <img src={post.image} class="" alt="image" />
                      </div>
                      <div class="card-body p-0 me-lg-5">
                        <h3 class="card-creator-title">{post.title}</h3>
                        <p class="card-creator-text">{post.message}</p>
                        <p class="text-center">
                          <span
                            class="btn btn-md mt-3 supportBtn"
                            onClick={() => {
                              topFunction();
                              onModal();
                            }}
                          >
                            <svg
                              enable-background="new 0 0 512 512"
                              height="512"
                              viewBox="0 0 512 512"
                              width="512"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g>
                                <g>
                                  <path d="m246.122 477.289c-144.417-126.367-246.122-193.304-246.122-299.774 0-80.513 57.4-146.515 136-146.515 54.544 0 95.017 33.497 120 81.015 24.981-47.515 65.454-81.015 120-81.015 78.609 0 136 66.015 136 146.515 0 106.457-101.572 173.291-246.122 299.773-5.657 4.949-14.1 4.949-19.756.001z" />
                                </g>
                              </g>
                            </svg>{" "}
                            Support {brandName}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>

        <div class="app-footer border-0 shadow-lg bg-primary-gradiant">
          <span
            href="#"
            onClick={() => {
              onModal();
            }}
            class="btn supportBtn"
          >
            <svg
              enable-background="new 0 0 512 512"
              height="512"
              viewBox="0 0 512 512"
              width="512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <g>
                  <path d="m246.122 477.289c-144.417-126.367-246.122-193.304-246.122-299.774 0-80.513 57.4-146.515 136-146.515 54.544 0 95.017 33.497 120 81.015 24.981-47.515 65.454-81.015 120-81.015 78.609 0 136 66.015 136 146.515 0 106.457-101.572 173.291-246.122 299.773-5.657 4.949-14.1 4.949-19.756.001z" />
                </g>
              </g>
            </svg>{" "}
            Support {brandName}
          </span>
        </div>
      </div>
      {modal ? (
        <div class="popup-wrapper pt-0" id="popupWrapper">
          <div class="popup-blocker" id="popupBlocker"></div>
          <div class="popup-body card card-creator card-creator-support  mw-600 mx-auto bg-white p-5 rounded-xxl">
            <span class="popup-del" id="popupDel" onClick={onModal}>
              <i class="feather-x"></i>
            </span>
            <div class="card-body">
              <h3 class="card-creator-bio--title mb-4 text-center">
                Support {brandName}
              </h3>
              {payment === false ? (
                <form action="">
                  <div class="row">
                    <div class="col-12 mb-3 text-center">
                      <div class="radio-circle-wrapper">
                        <input
                          type="radio"
                          ref={AmountRadio1}
                          name="support-type"
                          onChange={(evt) => {
                            onOption("One-TIme");
                            setPaymentPlan("");
                            AmountRadio1.current.checked = true;
                          }}
                          class="support-type-radio radio-circle-input"
                          value="One-Time"
                          id="support-type_onetime"
                        />
                        <label
                          for="support-type_onetime"
                          class="support-type radio-circle-label"
                        >
                          {" "}
                          One-time
                        </label>
                      </div>

                      <div class="radio-circle-wrapper">
                        <input
                          type="radio"
                          ref={AmountRadio2}
                          name="support-type"
                          onChange={(evt) => {
                            onOption("Monthly");
                            setPaymentPlan(12340);
                            AmountRadio2.current.checked = true;
                          }}
                          class="support-type-radio radio-circle-input"
                          value="Monthly"
                          id="support-type_monthly"
                        />
                        <label
                          for="support-type_monthly"
                          class="support-type radio-circle-label"
                        >
                          {" "}
                          Monthly
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="row radio-row mb-2">
                    <div class="col-6">
                      <input
                        type="radio"
                        ref={radioRef1}
                        name="support-amount"
                        class="radio-option"
                        id="supportAmount1"
                        value="1000"
                        onChange={() => {
                          onAmount(1000);
                          InputRef5.current.value = "";
                        }}
                      />
                      <label for="supportAmount1" class="radio-option-label">
                        ₦1,000
                      </label>
                    </div>
                    <div class="col-6">
                      <input
                        type="radio"
                        ref={radioRef2}
                        onChange={() => {
                          onAmount(3000);
                          InputRef5.current.value = "";
                        }}
                        name="support-amount"
                        class="radio-option"
                        id="supportAmount2"
                        value="1000"
                      />
                      <label for="supportAmount2" class="radio-option-label">
                        ₦3,000
                      </label>
                    </div>
                  </div>
                  <div class="row radio-row mb-2">
                    <div class="col-6">
                      <input
                        type="radio"
                        ref={radioRef3}
                        onChange={() => {
                          onAmount(5000);
                          InputRef5.current.value = "";
                        }}
                        name="support-amount"
                        class="radio-option"
                        id="supportAmount3"
                        value="1000"
                      />
                      <label for="supportAmount3" class="radio-option-label">
                        ₦5,000
                      </label>
                    </div>
                    <div class="col-6">
                      <input
                        type="radio"
                        ref={radioRef4}
                        onChange={() => {
                          onAmount(10000);
                          InputRef5.current.value = "";
                        }}
                        name="support-amount"
                        class="radio-option"
                        id="supportAmount4"
                        value="1000"
                      />
                      <label for="supportAmount4" class="radio-option-label">
                        ₦10,000
                      </label>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-12 mb-2">
                      <div class="form-group form-group-icon form-group-primary-light">
                        <input
                          type="radio"
                          name="support-amount"
                          class="d-none"
                          id="supportAmountC"
                        />
                        <span class="input-icon">₦</span>
                        <input
                          type="text"
                          ref={InputRef5}
                          onChange={(evt) => {
                            onAmount(evt.target.value);
                            radioRef3.current.checked = false;
                            radioRef1.current.checked = false;
                            radioRef2.current.checked = false;
                          }}
                          class="form-control mb-0"
                          placeholder="other amount"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="row mt-3">
                    <div class="col-lg-12 mb-3">
                      <label for=""> Send {brandName} a message</label>
                      <textarea
                        ref={messageRef}
                        onChange={(evt) => setMessage(evt.target.value)}
                        class="form-control mb-0 p-3 h100 bg-greylight lh-16"
                        rows="5"
                        placeholder="Say something nice... (optional)"
                        spellcheck="false"
                      ></textarea>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-12">
                      <button
                        onClick={onPayStep}
                        class="btn d-block w-100 mb-3"
                      >
                        <svg
                          enable-background="new 0 0 512 512"
                          height="512"
                          viewBox="0 0 512 512"
                          width="512"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g>
                            <g>
                              <path d="m246.122 477.289c-144.417-126.367-246.122-193.304-246.122-299.774 0-80.513 57.4-146.515 136-146.515 54.544 0 95.017 33.497 120 81.015 24.981-47.515 65.454-81.015 120-81.015 78.609 0 136 66.015 136 146.515 0 106.457-101.572 173.291-246.122 299.773-5.657 4.949-14.1 4.949-19.756.001z" />
                            </g>
                          </g>
                        </svg>{" "}
                        Support {brandName}
                      </button>
                    </div>
                  </div>
                </form>
              ) : null}
              {payment === true ? (
                <form action="">
                  <div class="row">
                    <div class="col-12">
                      <div class="form-group">
                        <input
                          type="email"
                          required
                          readOnly={userEmail.length > 0}
                          ref={emailRef}
                          value={email}
                          onChange={(evt) => setEmail(evt.target.value)}
                          class="form-control style2-input mb-3"
                          placeholder="Email"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-12">
                      <div class="form-group">
                        <input
                          type="text"
                          required
                          ref={firstNameRef}
                          value={firstname}
                          readOnly={first.length > 0}
                          onChange={(evt) => setFirstName(evt.target.value)}
                          class="form-control style2-input mb-3"
                          placeholder="First Name"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-12">
                      <div class="form-group">
                        <input
                          type="text"
                          required
                          ref={lastNameRef}
                          value={lastname}
                          readOnly={last.length > 0}
                          onChange={(evt) => setLastName(evt.target.value)}
                          class="form-control style2-input mb-3"
                          placeholder="Last Name"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-12 mb-2">
                      <p class="mb-2">Amount</p>
                      <h4 class="form-header">
                        ₦{amount}{" "}
                        <span class="text-grey-500 font-xsss">{option}</span>
                      </h4>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-12">
                      <button
                        type="submit"
                        disabled={button}
                        onClick={onPay}
                        class="btn d-block w-100"
                      >
                        Pay with Flutterwave
                      </button>

                      <img
                        src="images/cff1437-Badge_1_1.png"
                        class=" d-inline-block mt-4 w-100"
                        alt=""
                      />
                    </div>
                  </div>
                </form>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.auth,
    data: state.user,
  };
};

export default connect(mapStateToProps)(CreatorPostPage);
