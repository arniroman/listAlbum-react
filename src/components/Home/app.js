import React ,{ Component } from 'react'
import { connect } from 'react-redux'
import ListAlbum from '../Albums/listAlbum'


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







