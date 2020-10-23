import React, {useEffect, useContext} from 'react';
import {Route, Switch} from 'react-router-dom';
import homePage from '../pages/homePage/homePage';
import firebase from '../firebase'
import {GlobalContext} from '../context/GlobalState'
export default(props: any) => {
    let {history} = props;
    const {state}: any = useContext(GlobalContext);
    useEffect(() => {
        firebase.auth().onAuthStateChanged((user: any) => {
            if (user && user.uid !== null) {
                history.push("/")
            }
            else {
                state.loader = false;
                history.push('/login')
            }

        })
    }, [firebase]);
    return (
        <div>
            {!state.loader ?
                <Switch>
                    <Route path="/" exact component={ homePage }/>
                </Switch> :
                <div>
                    loader...
                </div>}
        </div>

    )
};

