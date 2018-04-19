import { combineReducers } from 'redux'
import createSometh from './createsomething'


export const reducers = combineReducers({
    data : createSometh,
})