import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import jwt_decode from "jwt-decode";

function PrivateRoute({ component: Component, props, ...rest }) {
    const user = rest.user
    
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
    console.log(state)
    return {
        user: state.auth.user,
    }
  }
  
  export default connect(mapStateToProps)(PrivateRoute);
  
