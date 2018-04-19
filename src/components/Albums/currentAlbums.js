import React,{ Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getCurrentPhotoData } from '../../logic'
import {getCurrentAlbumId} from '../../logic'
import { clearDataWithAlbum } from '../../logic'
import RaisedButton from 'material-ui/RaisedButton';


class CurrentAlbum extends Component {
   constructor(props){
       super(props)
       this.state = {
         
       }
   }

componentWillUnmount(){
     console.log('leave')
     let clearComponent={}
     this.props.clearDataWithAlbum(clearComponent)
}

componentDidMount(){
    let id = this.props.location.pathname.split('/')[2]
     this.props.getCurrentAlbumId(id)  
}

getCurrentPhoto = (item) => {
    this.setState({
        id:item.id
    })
    this.props.getCurrentPhotoData(item.id)
}

render(){
    if(this.props.currentAlbum){
       console.log(this.props.currentAlbum,'album') 
    }
        return(
            <div>
                hi!
                {this.props.currentAlbum.data && this.props.currentAlbum.data.map((item,key) => 
                <ul key={key}>
                    <li> 
                        <img src={item.url} />
                    </li>
                    <Link to={`/currentPhoto/${item.id}`}>
                        <button onClick={(e)=> {this.getCurrentPhoto(item,e)}} >Choose</button>
                    </Link>
                    <RaisedButton label="Primary" primary={true} />
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

export default connect(mapStateToProps,{getCurrentPhotoData,getCurrentAlbumId,clearDataWithAlbum})(CurrentAlbum)







