import React,{useEffect,useContext} from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import LogInPage from '../pages/logInPage/logInPage'
import SignUpPage from '../pages/signUpPage/signUppage'
 import {GlobalContext} from '../context/GlobalState'
import homePage from '../pages/homePage/homePage';
const Routes = (props:any) => {
    let {history, location} = props;

    const {state}:any = useContext(GlobalContext);
    console.log("state",state)
    let loggedIn=localStorage.getItem('logged')
    useEffect(() => {
        console.log("",location.pathname )
        if (loggedIn) {
           if (location.pathname === "/signup") {
                history.push("/");
            } else if (location.pathname === "/login") {
                history.push("/");
            }
            
        } else {
          
        }
    
    }, [location.pathname, loggedIn]);
return (
        <Switch>
             <Route path="/" component={ homePage }/>
            <Route path="/login" component={LogInPage} />
            <Route path="/signup" component={SignUpPage} />
        </Switch>
    )
};

export default withRouter(Routes);
