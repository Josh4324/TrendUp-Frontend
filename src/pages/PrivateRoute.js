import React, {useEffect} from 'react';
import { Route, Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import jwt_decode from "jwt-decode";
import { useHistory } from "react-router-dom";
import { NotificationManager} from 'react-notifications';

function PrivateRoute({ component: Component, props, ...rest }) {
    const user = rest.user
    let history = useHistory();

    const userToken = JSON.parse(localStorage.getItem("trend-user"));

        if (userToken !== null){
            const decoded = jwt_decode(userToken.token);
      
            const expirationTime = new Date()/1000;

            if (expirationTime >= decoded.exp){
                localStorage.removeItem('trend-user');
                NotificationManager.error("Session has expired, please log in again", "Error", 10000);
                history.push("/login")
            }
        }
   

    return(
      <Route 
          {...rest} 
          render={(props) => (
              user ? <Component {...props} /> : <Redirect to="/login" />
          )}
      />
    );
}

const mapStateToProps = (state) => {
    return {
        user: state.auth.user,
    }
  }
  
  export default connect(mapStateToProps)(PrivateRoute);
  
