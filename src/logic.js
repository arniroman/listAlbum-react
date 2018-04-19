import axios from 'axios'
import { loadProgressBar } from 'axios-progress-bar'
import * as loadAction from './actions/loadAlbums'
import * as currentAlbum from './actions/currentAlbum'

loadProgressBar()

export const loadSometh = () => dispatch => {
    axios.get('https://jsonplaceholder.typicode.com/albums')
         .then((respons) => {
          return dispatch(loadAction.loadSometh(respons))   
         })
}

export const getCurrentAlbumId = item => dispatch => {
    axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${item}`)
         .then((respons) => {
           return dispatch(currentAlbum.getCurrentAlbum(respons))  
         })
    
}