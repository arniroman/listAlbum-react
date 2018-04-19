import React from 'react'
import { createStore} from 'redux'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import {reducers} from './reducers/index'
import Routes from './routes/routes';
import store from './store'


render(
    <Provider store = {store}>
        <Routes />
   </Provider>,
   document.getElementById('root')
)
