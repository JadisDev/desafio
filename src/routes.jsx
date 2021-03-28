import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import AuthOrApp from './components/AuthOrApp'
import SignUp from './pages/SignUp'
import Admin from './pages/Admin'

const Routes = (props) => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={AuthOrApp} />
                <Route path="/SignUp" component={SignUp} />
                <Route path="/admin" component={Admin} />
            </Switch>
        </ BrowserRouter>
    )
}

export default Routes