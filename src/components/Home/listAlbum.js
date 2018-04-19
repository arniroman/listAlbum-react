import React ,{ Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { loadSometh } from '../../logic'
import { getCurrentAlbumId } from '../../logic'

class ListAlbum extends Component {
   constructor(props){
       super(props)
       this.state = {
          
       }
   }

componentDidMount(){
    this.props.loadSometh()
}

getCurrentAlbums = (item) => {
    console.log(item,'item')
    this.props.getCurrentAlbumId(item.id)
}

listAlbumsView = () => {
    let arrayList = this.props.albumData.data 

    return(
        <div>
            {arrayList && arrayList.map((item,key) =>
            <ul key={key}>
                <Link to ='/currentAlbum'>
                    <li onClick={(e) => {this.getCurrentAlbums(item,e)}}>
                        {item.title}
                    </li>
                </Link>
            </ul>
            )}
        </div>   
    )
}
   
render(){
        return(
            <div>
                {this.listAlbumsView()}
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        albumData: state.data,
    }
} 

export default connect(mapStateToProps,{loadSometh,getCurrentAlbumId})(ListAlbum)







