import { combineReducers } from 'redux'
import createSometh from './createsomething'
import currentAlbum from './getCurrentAlbum'


export const reducers = combineReducers({
    data         : createSometh,
    currentAlbum : currentAlbum,
})