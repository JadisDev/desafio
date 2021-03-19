import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import AuthOrApp from './components/AuthOrApp'
import Home from './pages/Home'

const Routes = (props) => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={AuthOrApp} />
                <Route path="/home" component={Home} />
            </Switch>
        </ BrowserRouter>
    )
}

export default Routes