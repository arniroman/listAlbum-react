import axios from 'axios'
import { loadProgressBar } from 'axios-progress-bar'
import * as loadAction from './actions/loadAlbums'
import * as currentAlbum from './actions/currentAlbum'
import * as currentPhoto from './actions/currentPhoto'

loadProgressBar()

export const loadSometh = () => dispatch => {
    axios.get('https://jsonplaceholder.typicode.com/albums')
         .then((respons) => {
            dispatch(loadAction.loadAllAlbums(respons))   
         })
}

export const getCurrentAlbumId = item => dispatch => {
    axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${item}`)
         .then((respons) => {
            dispatch(currentAlbum.getCurrentAlbum(respons))  
         })
    
}

export const getCurrentPhotoData = item => dispatch => {
    axios.get(`https://jsonplaceholder.typicode.com/photos/${item}`)
         .then((response) => {
            dispatch(currentPhoto.loadCurrentPhotoById(response))
         })
}

export const clearDataWithAlbum = item => dispatch => {
    dispatch(currentAlbum.clearDataAlbum(item))   
}

export const clearDataWithPhoto = item => dispatch => {
    dispatch(currentPhoto.clearPhotoData(item))   
}