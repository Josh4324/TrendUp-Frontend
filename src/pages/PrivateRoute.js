import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {connect} from 'react-redux';

function PrivateRoute({ component: Component, props, ...rest }) {
    const user = rest.user.user
 
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
        user: state.auth,
    }
  }
  
  export default connect(mapStateToProps)(PrivateRoute);
  
