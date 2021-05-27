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
        history.push("/step1")
    }
    dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
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

