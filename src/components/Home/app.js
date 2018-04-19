import React ,{ Component } from 'react'
import { connect } from 'react-redux'
import ListAlbum from './listAlbum'


class App extends Component {
  
    render(){
        return(
            <div>
               <ListAlbum />
            </div>
        )
    }
}

export default App







