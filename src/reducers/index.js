import { combineReducers } from 'redux'
import createSometh from './getAllAlbums'
import currentAlbum from './getCurrentAlbum'
import currentPhoto from './getCurrentPhoto'



export const reducers = combineReducers({
    data         : createSometh,
    currentAlbum : currentAlbum,
    currentPhoto : currentPhoto,
})