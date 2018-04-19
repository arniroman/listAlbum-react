import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import App from '../components/Home/app'
import CurrentAlbum from '../components/Albums/currentAlbums'
import CurrentPhotoFromAlbums from '../components/Photos/photoFromAlbum'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'


export default () => (
    <BrowserRouter>
        <div>
            <MuiThemeProvider>
                <Switch>
                    <Route path="/" exact component={App} />
                    <Route path="/currentAlbum/:id" exact component={CurrentAlbum} />
                    <Route path="/currentPhoto/:id" exact component={CurrentPhotoFromAlbums} />
                </Switch>
            </MuiThemeProvider>
        </div>
    </BrowserRouter>
)