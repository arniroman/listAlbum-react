
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import App from '../components/Home/app'


export default () => (
    <BrowserRouter>
        <div>
            <Switch>
                <Route path="/" exact component={App} />
            </Switch>
        </div>
    </BrowserRouter>
)