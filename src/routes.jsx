import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import AuthOrApp from './components/AuthOrApp'
import SignUp from './pages/SignUp'

const Routes = (props) => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={AuthOrApp} />
                <Route path="/SignUp" component={SignUp} />
            </Switch>
        </ BrowserRouter>
    )
}

export default Routes