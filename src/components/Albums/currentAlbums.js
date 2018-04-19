import React ,{ Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


class CurrentAlbum extends Component {
   constructor(props){
       super(props)
       this.state = {
          
       }
   }



render(){
    if(this.props.currentAlbum.data){
        console.log(this.props.currentAlbum.data)
    }
        
        return(
            <div>
                {this.props.currentAlbum.data && this.props.currentAlbum.data.map((item,key) => 
                <ul key={key}>
                    <li>{item.id}</li>
                </ul>
                )}
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        currentAlbum: state.currentAlbum,
    }
} 

export default connect(mapStateToProps)(CurrentAlbum)







