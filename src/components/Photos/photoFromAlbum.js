import React ,{ Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getCurrentPhotoData } from '../../logic'


class CurrentPhotoFromAlbums extends Component {
   constructor(props){
       super(props)
       this.state = {
          
       }
   }
   
componentDidMount(){
    let id = this.props.location.pathname.split('/')[2]
     this.props.getCurrentPhotoData(id)  
}

renderListPhoto = () => {
    let photoData = this.props.photoData.data
    console.log(photoData)
    return (
        <div>
            {photoData && Object.keys(photoData).map((item,key) =>
            <ul key={key}>
                <li>{item}: <span>{photoData[item]}</span></li>
            </ul>
            )}
        </div>
    )
}

render(){
        return(
            <div>
               {this.renderListPhoto()}
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        photoData: state.currentPhoto
    }
} 

export default connect(mapStateToProps,{getCurrentPhotoData})(CurrentPhotoFromAlbums)







