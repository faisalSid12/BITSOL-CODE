import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthenticationService } from '../jwt/_services';


export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => {
        const currentUser = localStorage.getItem('nkenne_user');

        // if (!currentUser) {
        //     return <Redirect to={{ pathname: '/authentication/Login', state: { from: props.location } }} />
        // }
        return <Component {...props} />
    }} />
)

export default PrivateRoute;