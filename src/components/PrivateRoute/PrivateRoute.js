import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import FirebaseService from '../../services/FirebaseService';


const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} render={props => (
            new FirebaseService().isSignedIn() ?
                <Component {...props} /> :
                <Redirect to="/signin" />
        )} />
    );
};
export default PrivateRoute;