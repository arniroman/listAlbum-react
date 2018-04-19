
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import App from '../components/Home/app'
import CurrentAlbum from '../components/Albums/currentAlbums'


export default () => (
    <BrowserRouter>
        <div>
            <Switch>
                <Route path="/" exact component={App} />
                <Route path="/currentAlbum" exact component={CurrentAlbum} />
            </Switch>
        </div>
    </BrowserRouter>
)