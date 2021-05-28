import axios from "axios";
import { NotificationManager} from 'react-notifications';
//const http = "http://localhost:8080";
const http = "http://159.65.48.80";


export const loginCall = async (userCredential, dispatch, setLoader, setError, history) => {
  dispatch({ type: "LOGIN_START" });
  try {
    setLoader(true);
    setError(false);
    const res = await axios.post(`${http}/api/v1/user/login`, userCredential);
    console.log(res)
    if (res.data.code === 200){
        setLoader(false);
        localStorage.setItem('trend-user', JSON.stringify(res.data.data))
        let onboard = Number(res.data.data.onboardingStep);
        history.push("/step1")
    }
    dispatch({ type: "LOGIN_SUCCESS", payload: res.data.data });
  } catch (err) {
    dispatch({ type: "LOGIN_FAILURE", payload: err });
        console.log(err.response.data);
        setLoader(false);
        setError(err.response.data.message);
  }
};

export const signupCall = async (userCredential, setLoader, setError, setSuccess, setSignUp) => {
    try {
        setLoader(true)
        setError(false);
        const res = await axios.post(`${http}/api/v1/user/signup`, userCredential);
        if (res){
            setLoader(false);
            setSuccess(true);
            setSignUp(true);
        }
        console.log(res)
    }catch(err){
        console.log(err.response.data);
        setLoader(false);
        setError(err.response.data.message);
    }
};

export const verificationCall = async (userCredential, setLoader, setError, history) => {
    try {
       setLoader(true)
        const res = await axios.post(`${http}/api/v1/user/verify`, userCredential);
        if (res){
           setLoader(false);
           NotificationManager.success('User verified successfully', 'Success');
           history.push("/login")
        }
    }catch(err){
        setLoader(false)
        console.log(err.response.data);
        setError(err.response.data.message);
        
    }
};

export const onboard1Call = async (userCredential, setLoader, setError, history, token) => {
    try {
       setLoader(true)
        axios.defaults.headers.common['Authorization'] = "JWT " + token;
        const res = await axios.patch(`${http}/api/v1/user`, userCredential);
        if (res){
           setLoader(false);
           history.push("/step2")
        }
    }catch(err){
        console.log(err.response)
        setLoader(false)
        setError(err.response.data.message);
    }
};

export const onboard2Call = async (userCredential, setLoader, setError, history, token) => {
    try {
       setLoader(true)
        axios.defaults.headers.common['Authorization'] = "JWT " + token;
        const res = await axios.patch(`${http}/api/v1/user`, userCredential);
        if (res){
           setLoader(false);
           history.push("/step3")
        }
    }catch(err){
        console.log(err.response)
        setLoader(false)
        setError(err.response.data.message);
    }
};

export const onboard2ImageCall = async (userCredential, setLoader, token) => {
    try {
       setLoader(true)
        axios.defaults.headers.common['Authorization'] = "JWT " + token;
        const res = await axios.patch(`${http}/api/v1/user/image`, userCredential);
        console.log(res)
        if (res){
           setLoader(false);
           NotificationManager.success("image uploaded successfully", "Success")
        }
    }catch(err){
        console.log(err.response)
        setLoader(false)
    }
};


export const onboard3Call = async (userCredential, setLoader, history, token) => {
    try {
       setLoader(true)
        axios.defaults.headers.common['Authorization'] = "JWT " + token;
        const res = await axios.patch(`${http}/api/v1/user`, userCredential);
        if (res){
           setLoader(false);
           history.push("/step4")
        }
    }catch(err){
        console.log(err.response)
        setLoader(false)
    }
};

