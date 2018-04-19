import React ,{ Component } from 'react'
import { connect } from 'react-redux'
import { loadSometh } from '../../logic'

class ListAlbum extends Component {
   constructor(props){
       super(props)
       this.state = {
           name:''
       }
   }

   componentDidMount(){
    this.props.loadSometh()
}
   
render(){
       if(this.props.data){
           console.log(this.props.data)
       }
        return(
            <div>
                <p>Hello</p>
                <input onChange={this.handelCangeName} />
                <button onClick={this.handelSome} >new</button>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        data: state.data,
    }
} 

export default connect(mapStateToProps,{loadSometh})(ListAlbum)







