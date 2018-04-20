import React,{ Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getCurrentPhotoData } from '../../logic'
import {getCurrentAlbumId} from '../../logic'
import { clearDataWithAlbum } from '../../logic'
import RaisedButton from 'material-ui/RaisedButton'
import '../../css/currentAlbums.css'


class CurrentAlbum extends Component {
  
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
        this.props.getCurrentPhotoData(item.id)
    }

render(){
        return(
            <div>
                <p className='photosTitle'>Photos</p>
                <div className='backBtn'>
                    <Link to='/'>
                        <RaisedButton label="Back to homepage" secondary={true}/>
                    </Link>
                </div>
                <div className='currentAlbum-box'>
                    {this.props.currentAlbum.data && this.props.currentAlbum.data.map((item,key) => 
                    <ul key={key}>
                        <li className='imageBox' > 
                            <img className='imageAlbum' src={item.url} />
                        </li>
                        <div className='choosePhoto' >
                            <Link to={`/currentPhoto/${item.id}`}>
                                <RaisedButton label="Choose Photo" primary={true} onClick={(e)=> {this.getCurrentPhoto(item,e)}}/>
                            </Link>
                        </div>
                    </ul>
                    )}
                </div>
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







