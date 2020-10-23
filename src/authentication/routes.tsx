import React from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
import LogInPage from '../pages/logInPage/logInPage'
import SignUpPage from '../pages/signUpPage/signUppage'
import PrivateRoutes from './privateRoute';
const Routes = () => {

    return (
        <Switch>
            <Route path="/" exact component={ PrivateRoutes }/>
            <Route path="/login" component={LogInPage}/>
            <Route path="/sign-up" component={SignUpPage}/>
        </Switch>
    )
};

export default withRouter(Routes);
