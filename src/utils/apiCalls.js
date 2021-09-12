import axios from "axios";
import { NotificationManager } from "react-notifications";
import { front, http } from "./constants";

export const loginCall = async (
  userCredential,
  dispatch,
  setLoader,
  setError,
  history
) => {
  dispatch({ type: "LOGIN_START" });
  try {
    setLoader(true);
    setError(false);
    const res = await axios.post(`${http}/api/v1/user/login`, userCredential);
    if (res.data.code === 200) {
      setLoader(false);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.data });
      localStorage.setItem("trend-user", JSON.stringify(res.data.data));
      let onboard = Number(res.data.data.onboardingStep);
      if (res.data.data.userType === "fan") {
        return (window.location.href = `${front}/fan-dashboard`);
      }
      if (Number(onboard) === 4) {
        window.location.href = `${front}/dashboard`;
      } else {
        window.location.href = `${front}/step${onboard}`;
      }
    }
  } catch (err) {
    dispatch({ type: "LOGIN_FAILURE", payload: err });
    setLoader(false);
    setError(err.response.data.message);
  }
};

export const anonSignupCall = async (userCredential) => {
  try {
    const res = await axios.post(
      `${http}/api/v1/user/anon-signup`,
      userCredential
    );
    return res;
  } catch (err) {
    return err;
  }
};

export const signupCall = async (
  userCredential,
  setLoader,
  setError,
  setSuccess,
  setSignUp
) => {
  try {
    setLoader(true);
    setError(false);
    const res = await axios.post(`${http}/api/v1/user/signup`, userCredential);
    if (res) {
      setLoader(false);
      setSuccess(true);
      setSignUp(true);
    }
  } catch (err) {
    setLoader(false);
    let errorMessage = "";
    if (err.response.data.message === "Validation Error") {
      if (err.response.data.data.length === 2) {
        errorMessage =
          err.response.data.data[0].email +
          " | " +
          err.response.data.data[1].password;
      } else if (err.response.data.data[0].password) {
        errorMessage = err.response.data.data[0].password;
      } else {
        errorMessage = err.response.data.data[0].email;
      }

      return setError(errorMessage);
    }

    setError(err.response.data.message);
  }
};

export const verificationCall = async (
  userCredential,
  setLoader,
  setError,
  history,
  dispatch
) => {
  try {
    setLoader(true);
    const res = await axios.post(`${http}/api/v1/user/verify`, userCredential);
    if (res) {
      setLoader(false);
      NotificationManager.success("User verified successfully", "Success");
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.data });
      localStorage.setItem("trend-user", JSON.stringify(res.data.data));
      return history.push("/step1");
    }
  } catch (err) {
    setLoader(false);
    setError(err.response.data.message);
  }
};

export const resendCall = async (userCredential) => {
  try {
    const res = await axios.post(
      `${http}/api/v1/user/resend-code`,
      userCredential
    );
    if (res) {
      NotificationManager.success("Code Resent", "Success");
    }
  } catch (err) {}
};

export const onboard1Call = async (
  userCredential,
  setLoader,
  setError,
  history,
  token,
  userType
) => {
  try {
    setLoader(true);
    axios.defaults.headers.common["Authorization"] = "JWT " + token;
    const res = await axios.patch(`${http}/api/v1/user`, userCredential);
    console.log(res);
    console.log(userType);
    if (res) {
      setLoader(false);
      if (userType === "fan") {
        return history.push("/fan-dashboard");
      }
      history.push("/step2");
    }
  } catch (err) {
    console.log(err);
    setLoader(false);
    setError(err.response.data.message);
  }
};

export const userVerify = async (
  userCredential,
  setLoader,
  setError,
  setFound,
  token
) => {
  try {
    setLoader(true);
    axios.defaults.headers.common["Authorization"] = "JWT " + token;
    const res = await axios.post(
      `${http}/api/v1/user/checkUser`,
      userCredential
    );
    if (res) {
      setLoader(false);
      if (res.data.data === true) {
        setError("Username already exists");
      } else {
        setError("");
      }
      setFound(res.data.data);
      console.log(res.data);
    }
  } catch (err) {
    console.log(err.response);
    setLoader(false);
    setError(err.response.data.message);
  }
};

export const onboard2Call = async (
  userCredential,
  setLoader,
  setError,
  history,
  token
) => {
  try {
    setLoader(true);
    axios.defaults.headers.common["Authorization"] = "JWT " + token;
    const res = await axios.patch(`${http}/api/v1/user`, userCredential);
    if (res) {
      setLoader(false);
      history.push("/step3");
    }
  } catch (err) {
    console.log(err.response);
    setLoader(false);
    setError(err.response.data.message);
  }
};

export const onboard2ImageCall = async (
  userCredential,
  setLoader,
  token,
  setImage
) => {
  try {
    setLoader(true);
    axios.defaults.headers.common["Authorization"] = "JWT " + token;
    const res = await axios.patch(`${http}/api/v1/user/image`, userCredential);
    if (res) {
      setLoader(false);
      NotificationManager.success("image uploaded successfully", "Success");
      setImage(res.data.data);
    } else {
      NotificationManager.error(
        "Error occured while trying to upload image",
        "Error"
      );
    }
  } catch (err) {
    NotificationManager.error(
      "Error occured while trying to upload image",
      "Error"
    );
    console.log(err.response);
    setLoader(false);
  }
};

export const getCall = async (setOnboard, token) => {
  try {
    console.log(token);
    //setLoader(true);
    //setError(false);
    const res = await axios.get(`${http}/api/v1/user`, {
      headers: {
        Authorization: `JWT ${token}`
      }
    });
    if (res.data.code === 200) {
      //setLoader(false);
      setOnboard(res.data.data.onboardingStep);
      //setImage(res.data.data.picture);
    }
  } catch (err) {
    console.log(err.response.data);
    //setLoader(false);
    //setError(err.response.data.message);
  }
};

export const onboard3Call = async (
  userCredential,
  setLoader,
  history,
  token
) => {
  try {
    setLoader(true);
    axios.defaults.headers.common["Authorization"] = "JWT " + token;
    const res = await axios.patch(`${http}/api/v1/user`, userCredential);
    if (res) {
      setLoader(false);
      history.push("/dashboard");
    }
  } catch (err) {
    console.log(err.response);
    setLoader(false);
  }
};

export const onDash = async (userCredential, token) => {
  try {
    axios.defaults.headers.common["Authorization"] = "JWT " + token;
    const res = await axios.patch(`${http}/api/v1/user`, userCredential);
  } catch (err) {
    console.log(err.response);
  }
};

export const getCallModal = async (setModal, dispatch, token) => {
  try {
    const res = await axios.get(`${http}/api/v1/user`, {
      headers: {
        Authorization: `JWT ${token}`
      }
    });
    if (res.data.code === 200) {
      //setLoader(false);
      setModal(res.data.data.showComplete);
      dispatch({ type: "GET_USER", payload: res.data.data });
      return res.data.data;
      //setImage(res.data.data.picture);
    }
  } catch (err) {
    console.log(err.response.data);
    //setLoader(false);
    //setError(err.response.data.message);
  }
};

export const postCall = async (userCredential, setLoader, token, history) => {
  try {
    setLoader(true);
    let res;
    axios.defaults.headers.common["Authorization"] = "JWT " + token;
    if (Object.values(userCredential).length) {
      res = await axios.post(`${http}/api/v1/post/noimage`, userCredential);
    } else {
      res = await axios.post(`${http}/api/v1/post`, userCredential);
    }

    if (res) {
      setLoader(false);
      NotificationManager.success("Post created successfully", "Success");
      window.location.href = `${front}/post`;
    }
  } catch (err) {
    NotificationManager.error("Error occured while creating post", "Error");
    setLoader(false);
  }
};

export const getPost = async (token) => {
  try {
    //setLoader(true);
    //setError(false);
    const res = await axios.get(`${http}/api/v1/post/all`, {
      headers: {
        Authorization: `JWT ${token}`
      }
    });

    if (res.data.code === 200) {
      //setLoader(false);
      console.log(res.data.data);
      return res.data.data;
    }
  } catch (err) {
    console.log(err.response.data);
    //setLoader(false);
    //setError(err.response.data.message);
  }
};

export const getCall2 = async (username) => {
  try {
    const res = await axios.get(
      `${http}/api/v1/user/userdata?username=${username}`
    );
    return res;
  } catch (err) {
    console.log(err.response.data);
    //setLoader(false);
    //setError(err.response.data.message);
  }
};

export const getPost2 = async (username) => {
  try {
    const res = await axios.get(`${http}/api/v1/post?username=${username}`);
    return res;
  } catch (err) {
    console.log(err.response.data);
    //setLoader(false);
    //setError(err.response.data.message);
  }
};

export const initializePaymentCall = async (userCredential) => {
  try {
    const res = await axios.post(`${http}/api/v1/payment`, userCredential);
    if (res) {
      NotificationManager.success("Payment initalized successfully", "Success");
    }
    return res;
  } catch (err) {
    NotificationManager.error("Error occured while intializing post", "Error");
    console.log(err);
    console.log(err.response);
  }
};

export const verifyPaymentCall = async (userCredential) => {
  try {
    const res = await axios.patch(`${http}/api/v1/payment`, userCredential);
    if (res) {
      NotificationManager.success("Payment verified successfully", "Success");
    }
    return res;
  } catch (err) {
    NotificationManager.error("Error occured while verifying payment", "Error");
    console.log(err);
    console.log(err.response);
  }
};

export const Pay = async (userCredential) => {
  try {
    const res = await axios.post(`${http}/api/v1/payment`, userCredential);

    if (res) {
      NotificationManager.success("Payment initalized successfully", "Success");
    }
    return res;
  } catch (err) {
    NotificationManager.error(
      "Error occured while initiating payment",
      "Error"
    );
    console.log(err);
    console.log(err.response);
  }
};

export const Pay2 = async (cred) => {
  try {
    axios.defaults.headers.common["Content-Type"] = "application/json";
    const res = await axios.post(
      `https://ravesandboxapi.flutterwave.com/flwv3-pug/getpaidx/api/v2/verify`,
      cred
    );

    if (res) {
      NotificationManager.success("Payment verified successfully", "Success");
    }
    return res;
  } catch (err) {
    NotificationManager.error("Error occured while verifying payment", "Error");
    console.log(err);
    console.log(err.response);
  }
};

export const getStat = async (token) => {
  try {
    //setLoader(true);
    //setError(false);
    const res = await axios.get(`${http}/api/v1/statistic`, {
      headers: {
        Authorization: `JWT ${token}`
      }
    });

    if (res.data.code === 200) {
      return res.data.data;
    }
  } catch (err) {
    console.log(err.response.data);
    //setLoader(false);
    //setError(err.response.data.message);
  }
};

export const getHistory = async (token, email) => {
  try {
    //setLoader(true);
    //setError(false);
    const res = await axios.get(
      `${http}/api/v1/statistic/history?email=${email}`,
      {
        headers: {
          Authorization: `JWT ${token}`
        }
      }
    );

    if (res.data.code === 200) {
      //setLoader(false);
      console.log(res.data.data);
      return res.data.data;
    }
  } catch (err) {
    console.log(err.response.data);
    //setLoader(false);
    //setError(err.response.data.message);
  }
};

export const editCall = async (
  userCredential,
  setLoader,
  setError,
  dispatch,
  token
) => {
  try {
    setLoader(true);
    axios.defaults.headers.common["Authorization"] = "JWT " + token;
    const res = await axios.patch(`${http}/api/v1/user`, userCredential);
    if (res) {
      setLoader(false);
      NotificationManager.success("Data updated successfully", "Success");
      window.location.reload();
    }
  } catch (err) {
    setLoader(false);
    setError(err.response.data.message);
  }
};

export const deletePostCall = async (postId, token) => {
  try {
    axios.defaults.headers.common["Authorization"] = "JWT " + token;
    const res = await axios.delete(`${http}/api/v1/post/${postId}`);
    if (res) {
      NotificationManager.success("Post deleted successfully", "Success");
      window.location.reload();
    }
  } catch (err) {
    NotificationManager.error("Unable to delete Post", "Error");
    window.location.reload();
  }
};

export const editPostCall = async (userCredential, postId, token) => {
  try {
    axios.defaults.headers.common["Authorization"] = "JWT " + token;
    const res = await axios.patch(
      `${http}/api/v1/post/${postId}`,
      userCredential
    );
    if (res) {
      NotificationManager.success("Post edited successfully", "Success");
      window.location.reload();
    }
  } catch (err) {
    NotificationManager.error("Unable to edit Post", "Error");
    window.location.reload();
  }
};

export const resetPasswordCall = async (userCredential, token) => {
  try {
    axios.defaults.headers.common["Authorization"] = "JWT " + token;
    const res = await axios.patch(`${http}/api/v1/user/reset`, userCredential);

    if (res) {
      NotificationManager.success("Password reset successfully", "Success");
      return res;
    }
  } catch (err) {
    NotificationManager.error(
      "Old password incorrect or an error occurred",
      "Error"
    );
    return err;
  }
};

export const getCreators = async (token) => {
  try {
    const res = await axios.get(`${http}/api/v1/user/creators`, {
      headers: {
        Authorization: `JWT ${token}`
      }
    });
    if (res.data.code === 200) {
      return res.data.data;
    }
  } catch (err) {
    console.log(err.response.data);
  }
};

export const getPostAndUser = async (postId) => {
  try {
    const res = await axios.get(`${http}/api/v1/post/${postId}`);
    if (res.data.code === 200) {
      return res.data.data;
    }
  } catch (err) {
    console.log(err.response.data);
  }
};

export const getFanPost = async (token, email) => {
  try {
    const res = await axios.get(`${http}/api/v1/post/fanpost?email=${email}`, {
      headers: {
        Authorization: `JWT ${token}`
      }
    });
    if (res.data.code === 200) {
      return res.data.data;
    }
  } catch (err) {
    console.log(err.response.data);
  }
};

export const getSupportCreators = async (token, email) => {
  try {
    const res = await axios.get(
      `${http}/api/v1/user/support-creators?email=${email}`,
      {
        headers: {
          Authorization: `JWT ${token}`
        }
      }
    );
    if (res.data.code === 200) {
      return res.data.data;
    }
  } catch (err) {
    console.log(err.response.data);
  }
};

export const getSupportCreators2 = async (email) => {
  try {
    const res = await axios.get(
      `${http}/api/v1/user/creators-support?email=${email}`
    );
    if (res.data.code === 200) {
      return res.data.data;
    }
  } catch (err) {
    console.log(err.response.data);
  }
};

export const getPaymentHistory = async (token, email) => {
  try {
    const res = await axios.get(
      `${http}/api/v1/statistic/payment-history?email=${email}`,
      {
        headers: {
          Authorization: `JWT ${token}`
        }
      }
    );
    if (res.data.code === 200) {
      return res.data.data;
    }
  } catch (err) {
    console.log(err.response.data);
  }
};

export const postForgot = async (userCredential) => {
  try {
    let res = await axios.post(
      `${http}/api/v1/user/forgot-password`,
      userCredential
    );
    return res.data;
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const resetPasswordCall2 = async (userCredential) => {
  try {
    const res = await axios.patch(
      `${http}/api/v1/user/reset-password`,
      userCredential
    );
    return res.data;
  } catch (err) {
    return err;
  }
};

export const payoutCall = async (userCredential, token) => {
  try {
    axios.defaults.headers.common["Authorization"] = "JWT " + token;
    const res = await axios.post(`${http}/api/v1/payout`, userCredential);
    console.log(res);
    return res.data;
  } catch (err) {
    return err;
  }
};

export const payoutHistoryCall = async (token) => {
  try {
    axios.defaults.headers.common["Authorization"] = "JWT " + token;
    const res = await axios.get(`${http}/api/v1/payout/history`);
    console.log(res);
    return res.data;
  } catch (err) {
    return err;
  }
};
