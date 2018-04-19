import { combineReducers } from 'redux'
import createSometh from './createsomething'
import currentAlbum from './getCurrentAlbum'
import currentPhoto from './getCurrentPhoto'



export const reducers = combineReducers({
    data         : createSometh,
    currentAlbum : currentAlbum,
    currentPhoto : currentPhoto,
})