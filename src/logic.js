import axios from 'axios'
import { loadProgressBar } from 'axios-progress-bar'
import * as loadAction from './actions/loadAlbums'

loadProgressBar()

export const loadSometh = () => dispatch => {
    axios.get('https://jsonplaceholder.typicode.com/albums')
         .then((respons) => {
          return dispatch(loadAction.loadSometh(respons))   
         })
} 