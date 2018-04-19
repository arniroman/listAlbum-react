import React ,{ Component } from 'react'
import { connect } from 'react-redux'
import ListAlbum from './listAlbum'
import { loadSometh } from '../../logic'

class App extends Component {
   constructor(props){
       super(props)
       this.state = {
           name:''
       }
   }
   
// componentDidMount(){
//     this.props.loadSometh()
// }

    render(){
    //    if(this.props.data){
    //        console.log(this.props.data)
    //    }
        return(
            <div>
               <ListAlbum/>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        data: state.data
    }
} 

export default connect(mapStateToProps,{loadSometh})(App)







