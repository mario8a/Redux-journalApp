import React from 'react'
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

export const PrivateRoute = ({
   isLoggedIn,
   component: Component,
   ...rest 
}) => {
   
   //El component sera evaluado mediante una condicion
   return (
      <Route {...rest}
         component={ (props) =>(

            (isLoggedIn)
               ? (<Component {...props} />)
               : (<Redirect to="/auth/login" />)
         )}
      />
   )
}

PrivateRoute.propTypes = {
   isLoggedIn: PropTypes.bool.isRequired,
   component:PropTypes.func.isRequired,
}