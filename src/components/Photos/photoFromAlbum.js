import React ,{ Component } from 'react'
import { connect } from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton'
import { Link } from 'react-router-dom'
import { getCurrentPhotoData,clearDataWithPhoto } from '../../logic'
import FlatButton from 'material-ui/FlatButton'
import '../../css/photoFromAlbum.css'


class CurrentPhotoFromAlbums extends Component {
  
    componentWillUnmount(){
        console.log('leave')
        let clearComponent={}
        this.props.clearDataWithPhoto(clearComponent)
    }

    componentDidMount(){
        let id = this.props.location.pathname.split('/')[2]
        this.props.getCurrentPhotoData(id)  
    }

    renderListPhoto = () => {
        let photoData = this.props.photoData.data

        return (
            <div className='photoAlbum-wrapp' >
                {photoData && 
                <div className='photoAlbum-box' >
                    <p className='photoDetails-title' >Photo details</p>
                    <div className='photoWrapp' >
                        <img className='photoFullWith' src={photoData.url}></img>
                    </div>
                    <div className='photoData-block' >
                        <span className='photoData-key'>albumId: </span>
                        <span className='photoData-value'>{photoData.albumId}</span>
                    </div>
                    <div className='photoData-block'>
                        <span className='photoData-key'>id: </span>
                        <span className='photoData-value'>{photoData.id}</span>
                    </div>
                    <div className='photoData-block'>
                        <span className='photoData-key'>title: </span>
                        <span className='photoData-value'>{photoData.title}</span>
                    </div>
                    <div className='photoData-block'>
                        <span className='photoData-key'>thumbnailUrl: </span>
                        <span className='photoData-value'>{photoData.thumbnailUrl}</span>
                    </div>
                    <div className='photoData-btn'>
                        <Link to ='/'>
                            <FlatButton label="Back to homepage" primary={true} />
                        </Link>
                        <Link to={`/currentAlbum/${photoData.albumId}`}>
                            <RaisedButton label="Back to album" secondary={true} />
                        </Link>
                    </div>
                    
                </div>
                }
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

export default connect(mapStateToProps,{getCurrentPhotoData,clearDataWithPhoto})(CurrentPhotoFromAlbums)







