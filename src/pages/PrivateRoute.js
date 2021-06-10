import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import jwt_decode from "jwt-decode";

function PrivateRoute({ component: Component, props, ...rest }) {
    const token = rest.user.token;
    const decoded = jwt_decode(token);
    const expirationTime = (decoded.exp * 1000) - 60000;
    if (Date.now() >= expirationTime) {
        localStorage.removeItem('trend-user');
        return <Redirect to="/login" />
    }
    
    return(
      <Route 
          {...rest} 
          render={(props) => (
              token ? <Component {...props} /> : <Redirect to="/login" />
          )}
      />
    );
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        user: state.auth.user,
    }
  }
  
  export default connect(mapStateToProps)(PrivateRoute);
  
